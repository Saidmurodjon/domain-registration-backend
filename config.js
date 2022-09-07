require("dotenv").config();
const { env } = process;

module.exports = {
    PORT: env.PORT,
    DB:env.DATABASE_URL
};
