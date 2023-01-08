import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable("categories", function (table) {
        table.integer("brand_id")
    })

    await knex.schema.alterTable("meal_addons", function (table) {
        table.integer("brand_id")
    })


    await knex.schema.table("categories", function (table) {
        table.foreign("brand_id").references("id").inTable("brands")
    })
    await knex.schema.table("meal_addons", function (table) {
        table.foreign("brand_id").references("id").inTable("brands")
    })

}


export async function down(knex: Knex): Promise<void> {
}

