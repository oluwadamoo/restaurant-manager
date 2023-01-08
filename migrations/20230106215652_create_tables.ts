import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("users", function (table) {
        table.increments("id").primary()
        table.string("email").unique()
        table.string("password")
        table.string("username")
        table.integer("role_id")
        table.timestamps(true, true)

    })

    await knex.schema.createTable("roles", function (table) {
        table.increments("id").primary()
        table.string("role").unique()
        table.timestamps(true, true)
    })

    await knex.schema.createTable("meal_addons", function (table) {
        table.increments("id").primary()
        table.string("name")
        table.string("description")
        table.specificType("price", "money")
        table.integer("category_id")
    })

    await knex.schema.createTable("categories", function (table) {
        table.increments("id").primary()
        table.string("name").unique()
    })

    await knex.schema.table("users", function (table) {
        table.foreign("role_id").references("id").inTable("roles")
    })


}







export async function down(knex: Knex): Promise<void> {
}

