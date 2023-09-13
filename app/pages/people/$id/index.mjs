/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function index({ html, state }) {
  const { store } = state;
  store.person;
  return html`
    <my-layout>
      <main>
        <h1>${store?.person?.name}</h1>
      </main>
    </my-layout>
  `;
}
