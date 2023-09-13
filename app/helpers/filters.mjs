import zod from "zod";
export default function filters(query, chain) {
  const schema = zod.object({
    sortby: zod.string().optional(),
  });
  const object = schema.parse(query);
  if (object?.sortby) {
    chain = chain.sortBy(query.sortby);
  }
  return chain;
}
