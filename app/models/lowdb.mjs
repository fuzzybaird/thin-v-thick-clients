// Remember to set type: module in package.json or use .mjs extension
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import lodash from "lodash";
import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";
class LowWithLodash extends LowSync {
  constructor(adapter, defaultData) {
    super(adapter, defaultData);
    this.chain = lodash.chain(this).get("data");
  }
}
// db.json file path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

const defaultData = { people: [] };

const adapter = new JSONFileSync(file);

const db = new LowWithLodash(adapter, defaultData);

export async function addData(type = "", data = {}) {
  db.read();
  db.data[type].push(data);
  db.write();
  return db.data[type];
}

export async function getData(type = "") {
  db.read();
  return await db.data[type];
}

export async function getDataChain(type = "") {
  db.read();
  return await db.chain.get(type);
}

export async function getDataById(type = "", id = "") {
  db.read();
  return db.data[type].find((item) => item.id === id);
}

export async function updateDataById(type = "", id = "", data = {}) {
  db.read();
  let people = db.chain.get(type).find({ id }).value();
  const response = db.chain
    .get(type)
    .find({ id })
    .assign({ ...people, ...data })
    .value();
  db.write();
  return people;
}
