import { Client } from "faunadb";
import { query as q } from "faunadb";

export const fauna = new Client({
  secret: process.env.NEXT_PUBLIC_FAUNADB_SECRET || "",
  endpoint: "https://db.fauna.com/",
  /*   headers: { mode: "no-cors" }, */
});
