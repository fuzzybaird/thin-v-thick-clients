import { getData, updateDataById } from "../../../models/lowdb.mjs";
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

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function post(req) {
  const { body, params } = req;
  let people = await updateDataById("people", params.id, { ...body });
  return {
    location: `/people/${params.id}/edit`,
  };
}
