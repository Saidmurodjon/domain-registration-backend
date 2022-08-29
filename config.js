require("dotenv").config();
const { env } = process;
module.exports = {
    DB_HOST: env.DATABASE_HOST,
    DB_USER: env.DATABASE_USER,
    DB_PASSWORD: env.DATABASE_PASSWORD,
    DB: env.DATABASE,
    PORT: env.PORT,
};
