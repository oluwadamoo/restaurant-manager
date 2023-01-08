import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("brands", function (table) {
        table.increments("id").primary()
        table.string("brand_name")
        table.integer("user_id")
    })





    await knex.schema.table("brands", function (table) {
        table.foreign("user_id").references("id").inTable("users")

    })


}




export async function down(knex: Knex): Promise<void> {
}

