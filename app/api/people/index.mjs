import _ from "lodash";
import fakePeople from "../fakePeople.mjs";
import { addData, getDataChain } from "../../models/lowdb.mjs";
import filters from "../../helpers/filters.mjs";
/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const { query } = req;
  let people = await getDataChain("people");
  try {
    let response = filters(query, people).value();
    return {
      json: {
        people: response,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
/** @type {import('@enhance/types').EnhanceApiFn} */
export async function post(req) {
  const { query } = req;
  const person = fakePeople(1)[0];
  let people = await addData("people", person);
  return {
    location: "/people",
  };
}
