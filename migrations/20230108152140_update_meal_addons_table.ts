
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    await knex.schema.alterTable("meal_addons", function (table) {
        table.dropColumn("price");
    })

    await knex.schema.alterTable("meal_addons", function (table) {
        table.decimal("price", 14, 2)
    })


}


export async function down(knex: Knex): Promise<void> {
}

