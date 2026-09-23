# Alma Legal

Responsive bilingual website for Alma Legal, a Costa Rican legal and notarial practice.

## Preview locally

```sh
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

The site is plain HTML, CSS, and JavaScript, so it can be deployed directly to any static host.

## Deployment

- **GitHub Pages:** pushing to `main` runs the included GitHub Actions workflow. In the repository settings, set **Pages → Source** to **GitHub Actions**.
- **Vercel:** import the GitHub repository in Vercel. Keep the framework preset as **Other** and leave the build/output fields empty.
