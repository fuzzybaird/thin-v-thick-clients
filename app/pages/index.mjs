/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function index({ html, state }) {
  return html`
    <my-layout page="home">
      <main class="">
        <div class="container m-auto">
          <h2>home</h2>
        </div>
      </main>
    </my-layout>
  `;
}
