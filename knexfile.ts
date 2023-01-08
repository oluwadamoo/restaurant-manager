import type { Knex } from "knex";
import * as fs from 'fs'
// Update with your config settings.

const envFile = fs.readFileSync(".env", "utf-8")

let data = envFile.split("\n")

let DB_HOST = data.find(env => env.includes("DB_HOST="));
let DB_PORT: string | number = data.find(env => env.includes("DB_PORT="));
let DB_DATABASE = data.find(env => env.includes("DB_DATABASE="));
let DB_USER = data.find(env => env.includes("DB_USER="));
let DB_PASSWORD = data.find(env => env.includes("DB_PASSWORD="));

DB_HOST = DB_HOST.split("=")[1].trim()
DB_PORT = parseInt(DB_PORT.split("=")[1].trim())
DB_DATABASE = DB_DATABASE.split("=")[1].trim()
DB_USER = DB_USER.split("=")[1].trim()
DB_PASSWORD = DB_PASSWORD.split("=")[1].trim()

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
      host: "0.0.0.0",
      port: DB_PORT
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },


};

module.exports = config;
