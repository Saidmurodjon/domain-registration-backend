require("dotenv").config();
const { env } = process;

module.exports = {
    PORT: env.PORT,
    // DB:env.DATABASE_URL,
    DB_USERNAME:env.DATABASE_USERNAME,
    DB_PASSWORD:env.DATABASE_PASSWORD,
    DB_HOST:env.DATABASE_HOST,
    DB_NAME:env.DATABASE_NAME,
};
