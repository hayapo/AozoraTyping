import { Client } from "pg"

const pgClient = new Client({
  user: "docker_user",
  password: "GAdab0568.",
  database: "docker_db",
  port: 5432,
})

pgClient.connect()
console.log("connected")

pgClient
  .query("select now()")
  .then((res: any) => console.log(res.rows))
  .catch((err: Error) => console.error("connection error", err.stack))
  .then(() => pgClient.end())
  .then(() => console.log("disconnected"))
