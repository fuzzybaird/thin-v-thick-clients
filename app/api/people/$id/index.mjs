import { getData } from "../../../models/lowdb.mjs";
import _ from "lodash";
/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  let person = _.find(await getData("people"), ["id", req.params.id]);
  return {
    json: {
      person,
    },
  };
}
