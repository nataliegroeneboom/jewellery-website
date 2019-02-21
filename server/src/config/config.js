module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'jewellery',
        user: process.env.DB_USER || 'jewellery',
        password:process.env.DB_PASSWORD || 'jewellery',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './jewellery.sqlite'
        }
    }
}