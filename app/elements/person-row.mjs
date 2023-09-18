export default function PersonRow(person) {
  return /* html */ `<tr
    id="person-${person.id}"
    hx-target="#person-${person.id}"
    hx-swap="afterend"
    hx-select="#edit-form"
  >
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
        hx-get="/people/${person.id}/edit"
        class="text-indigo-600 hover:text-indigo-900"
      >
        Edit<span class="sr-only">, ${person.name}</span>
      </a>
    </td>
  </tr>`;
}
