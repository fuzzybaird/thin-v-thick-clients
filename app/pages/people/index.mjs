/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function index({ html, state }) {
  function tbody() {
    let response = state.store.people.map((person) => {
      return html`<tr>
        <td
          class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
        >
          ${person.name}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          ${person.title}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          ${person.email}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          ${new Date(person.date).toLocaleDateString()}
        </td>
        <td
          class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
        >
          <a
            href="/people/${person.id}/edit"
            class="text-indigo-600 hover:text-indigo-900"
          >
            Edit<span class="sr-only">, ${person.name}</span>
          </a>
        </td>
      </tr>`;
    });
    return response.join("");
  }
  return html`
    <my-layout page="people">
      <main class="">
        <div class="container m-auto">
          <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
              <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">
                  people
                </h1>
                <p class="mt-2 text-sm text-gray-700">
                  A list of all the people in your account including their name,
                  title, email and role.
                </p>
              </div>
              <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <form action="/people" method="POST">
                  <input type="hidden" name="id" value="1" />
                  <button
                    type="submit"
                    type="button"
                    class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add person
                  </button>
                </form>
              </div>
            </div>
            <div class="mt-8 flow-root">
              <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div
                  class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                >
                  <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          <a
                            href="/people?sortby=name"
                            class="group inline-flex"
                          >
                            Name
                            <!-- Active: "bg-gray-200 text-gray-900 group-hover:bg-gray-300", Not Active: "invisible text-gray-400 group-hover:visible group-focus:visible" -->
                            <span
                              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
                            >
                              <svg
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <a
                            href="/people?sortby=title"
                            class="group inline-flex"
                          >
                            Title
                            <!-- Active: "bg-gray-200 text-gray-900 group-hover:bg-gray-300", Not Active: "invisible text-gray-400 group-hover:visible group-focus:visible" -->
                            <span
                              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
                            >
                              <svg
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <a
                            href="/people?sortby=email"
                            class="group inline-flex"
                          >
                            Email
                            <!-- Active: "bg-gray-200 text-gray-900 group-hover:bg-gray-300", Not Active: "invisible text-gray-400 group-hover:visible group-focus:visible" -->
                            <span
                              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
                            >
                              <svg
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <a
                            href="/people?sortby=date"
                            class="group inline-flex"
                          >
                            created at
                            <!-- Active: "bg-gray-200 text-gray-900 group-hover:bg-gray-300", Not Active: "invisible text-gray-400 group-hover:visible group-focus:visible" -->
                            <span
                              class="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200"
                            >
                              <svg
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </span>
                          </a>
                        </th>
                        <th
                          scope="col"
                          class="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      ${tbody()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </my-layout>
  `;
}
