import { getData, updateDataById } from "../../../models/lowdb.mjs";
import PersonRow from "../../../elements/person-row.mjs";
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
  const { body, params, headers } = req;
  let person = await updateDataById("people", params.id, { ...body });
  if (headers["hx-request"] === "true") {
    return {
      status: 200,
      html: PersonRow(person),
    };
  }

  return {
    location: `/people/${params.id}/edit`,
  };
}
