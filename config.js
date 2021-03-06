const env = process.env;

const config = {
  db: {
    /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || "john.db.elephantsql.com",
    port: env.DB_PORT || "5432",
    user: env.DB_USER || "srfczfzv",
    password: env.DB_PASSWORD || "Abl5xfpT5NJ2BnKmPVoAEva20qf9hv8_",
    database: env.DB_NAME || "srfczfzv",
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
