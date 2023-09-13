import { faker } from "@faker-js/faker";
export default function (rows = 1) {
  let table = [];
  for (let index = 0; index < rows; index++) {
    table.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      title: faker.person.jobTitle(),
      email: faker.internet.email(),
      role: faker.person.jobType(),
      date: faker.date.past(),
    });
  }
  return table;
}
