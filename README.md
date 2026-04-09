# Nixgle Community

Follow these steps to set up the local environment:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/nfsnayem/community.git
    ```
2.  **Navigate to the Directory**
    ```bash
    cd community 
    ```
3.  **Install Dependencies**
    ```bash
    npm install
    ```
4.  **Start the Server**
    ```bash
    npm run dev
    ```
    
> [!TIP]
> The local server will be accessible at `http://localhost:4321`.
---

## 🚀 Project Structure

Inside of community project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx        # Main homepage
│   │       ├── plugins/         # ONLY add/edit plugin here
│   │       ├── themes/          # ONLY add/edit theme here
│   │       └── templates/       # ONLY add/edit template kits here
│   └── content.config.ts
├── astro.config.mjs             # Configuration for :contentReference[oaicite:0]{index=0}
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Auto-generated lock file (do not edit manually)
└── tsconfig.json                # TypeScript configuration

```

Only looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
