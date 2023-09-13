export default function about({ html, state }) {
  const { attrs } = state;
  const { greeting = "Hello World" } = attrs;
  return html`
    <main>
      <h1>${greeting}</h1>
    </main>
  `;
}
