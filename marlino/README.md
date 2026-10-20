# Marlino B. Caballero Portfolio

Static HTML portfolio. Deployment requires no build step or server-side runtime.

The generated Tailwind stylesheet is committed at `assets/tailwind.css`, so static hosts can serve the portfolio directly. If you change Tailwind classes, regenerate the stylesheet with the development steps below and include the updated CSS in your deployment.

## Development

1. Install Node.js.
2. Run `npm install` in this folder.
3. Run `npm run build:css` after changing Tailwind classes in `code.html`.

The compiled CSS is written to `assets/tailwind.css`.

## GitHub Pages

1. Push this folder to a GitHub repository.
2. Open **Settings > Pages** for the repository.
3. Select **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save.
4. GitHub Pages serves `index.html`, which forwards visitors to `code.html`.

## Vercel

1. Import the repository in Vercel.
2. Set the framework preset to **Other**.
3. Leave the build command empty and set the output directory to `.`.
4. Deploy. The root `index.html` forwards to the portfolio page.

## Before publishing

- The GitHub buttons link to `https://github.com/marlinscaballero-spec`.
- Check project, certificate, education, and experience details for accuracy.
- The CV button currently downloads a generated plain-text CV; update its contents in `code.html` or replace it with your final PDF.
- The contact form validates the fields and opens a prefilled email draft. It does not send or store messages on a server.
