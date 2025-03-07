import pg from "pg"


const db =  new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: "lms",
    password: 'anirudha',
    port: 5432,
  })

  db.connect()

  export default db
