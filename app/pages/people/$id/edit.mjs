/** @type {import('@enhance/types').EnhanceElemFn} */
export default function about({ html, state }) {
  const { store } = state;
  const form = html`
    <form
      action="/people/${store.person.id}/edit"
      method="POST"
      hx-post="/people/${store.person.id}/edit"
      hx-target="#person-${store.person.id}"
      hx-swap="outerHTML"
      class="block w-full"
    >
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-full">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="given-name"
                  value="${store.person.name}"
                  class="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-full">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  value="${store.person.email}"
                  class="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="title"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Street address</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  autocomplete="title"
                  value="${store.person.title}"
                  class="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
          onclick="document.getElementById('edit-form').remove()"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  `;
  return html`
    <my-layout page="people-edit">
      ${form}
      <div class="hidden">
        <table>
          <tr id="edit-form" _="on htmx:afterRequest remove me">
            <td colspan="5" class="py-3">${form}</td>
          </tr>
        </table>
      </div>
    </my-layout>
  `;
}
