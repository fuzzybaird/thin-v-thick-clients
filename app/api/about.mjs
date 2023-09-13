import table from "./fakePeople.mjs";
/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(request) {
  return {
    json: {
      people: table(10),
    },
  };
}
