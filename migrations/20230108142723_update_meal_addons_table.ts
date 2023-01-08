import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable("meal_addons", function (table) {
        table.dropColumn('category_id');
        table.string("category")

    })

    await knex.schema.table("meal_addons", function (table) {
        table.foreign("category").references("name").inTable("categories")
    })

}


export async function down(knex: Knex): Promise<void> {
}

