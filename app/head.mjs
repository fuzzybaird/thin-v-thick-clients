import { getStyles } from "@enhance/arc-plugin-styles";

const { linkTag } = getStyles;

export default function Head(state) {
  const { req } = state;
  const { path } = req;
  const title = `thick v thin — ${path}`;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      ${linkTag()}
      <link rel="icon" href="/_public/favicon.svg">
      <meta name="description" content="The HTML first full stack web framework.">
      <link rel="stylesheet" href="/_public/app.css" />
      <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
    </head>
`;
}
