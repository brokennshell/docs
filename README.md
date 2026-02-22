# Broken Shell Docs

Educational platform built on Next.js 16 (App Router), TypeScript, Tailwind CSS v4, GSAP, and MDX. This project uses no database and no authentication, serving as a static content hub for developers with a dark "coder" aesthetic.

## Architecture & Features

This platform is structured around Next.js App Router for high-performance static rendering and routing.

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom CSS variables (`var(--bg-primary)`)
- **Animations**: GSAP & `@gsap/react` for scroll triggers, page transitions, and element reveals
- **Content**: MDX powered by `next-mdx-remote`, styled via custom components, with server-side syntax highlighting via `shiki`.
- **Pages**:
  - `/` -> Home page with animated Hero and Domain Grid
  - `/[domain]` -> Domain Hub page (e.g., `/full-stack`) showing Roadmaps and Topic Notes
  - `/[domain]/notes/[slug]` -> Individual MDX notes pages
- **State/Data**: All content is statically mocked in `lib/data/` for domains, roadmaps, and notes.
- **Search**: Client-side fuzzy search across all domains, roadmaps, and notes, accessible via the `Cmd/Ctrl + K` menu.

## Setup & Installation

Follow these steps to run the application locally. Make sure you have Node.js 18+ installed.

```bash
# Clone the repository
git clone https://github.com/brokennshell/docs.git
cd docs

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will start on `http://localhost:3000`.

## Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Creates an optimized production build.
- `npm run start` - Starts the Next.js production server.
- `npm run lint` - Runs ESLint to catch issues.

## Adding Content

The platform uses statically mocked content defined in the `@/lib/data` directory and `content/` folder.

1. **Domains**: Defined in `lib/data/domains.ts`.
2. **Roadmaps**: Defined in `lib/data/roadmaps.ts`.
3. **Notes Metadata**: Defined in `lib/data/notes.ts`.
4. **MDX Content**: MDX files are stored in the `content/[domain]/...` directory. Ensure the slug defined in `notes.ts` matches the literal filename (e.g., `slug: 'react-hooks'` expects `content/full-stack/react-hooks.mdx`).

## Contributing

1. **Reporting Issues**: Please open an issue if you encounter bugs or want to request a new feature.

### Commit Guidelines

Please follow these conventions for commit messages to keep our history clean and readable.

#### 1️⃣ **feat** – New Feature
**Purpose:** When a new functionality or feature is added to the project.
**Examples:**
- `feat: add user authentication module`
- `feat: implement dark mode toggle`

#### 2️⃣ **fix** – Bug Fix
**Purpose:** When fixing a bug or issue in the existing code (resolving errors, crashes, unexpected behavior).
**Examples:**
- `fix: resolve issue with login timeout`
- `fix: correct calculation error in invoice total`

#### 3️⃣ **docs** – Documentation Changes
**Purpose:** For documentation related changes only. No change in code logic.
**Examples:**
- `docs: update README with setup instructions`
- `docs: add API usage examples`

#### 4️⃣ **style** – Code Formatting / Styling
**Purpose:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, Prettier/ESLint fixes).
**Examples:**
- `style: format code with prettier`
- `style: fix indentation in user controller`

#### 5️⃣ **refactor** – Code Improvement
**Purpose:** A code change that neither fixes a bug nor adds a feature (e.g., performance optimization, code cleanup).
**Examples:**
- `refactor: improve performance of data processing`
- `refactor: simplify authentication logic`

#### 6️⃣ **test** – Testing Related Changes
**Purpose:** Adding missing tests or correcting existing tests.
**Examples:**
- `test: add unit tests for user service`
- `test: fix failing payment integration test`

#### 7️⃣ **chore** – Maintenance / Miscellaneous Tasks
**Purpose:** Changes to the build process, dependencies, or auxiliary tools/libraries (not tied to a specific feature/bug).
**Examples:**
- `chore: update npm dependencies`
- `chore: configure environment variables`

#### 8️⃣ **wip** – Work In Progress
**Purpose:** When a feature or task is not yet complete but needs to be committed temporarily. (⚠️ Avoid in production/main branch).
**Examples:**
- `wip: initial setup for new payment module`
- `wip: working on dashboard redesign`

#### 9️⃣ **patch** – Small Fix / Minor Update
**Purpose:** For a very small change, minor fix, or typography correction.
**Examples:**
- `patch: update dependencies to latest versions`
- `patch: fix typo in error message`

#### 🔟 **build** – Build System Changes
**Purpose:** Changes that affect the build system, bundler, CI/CD, or external dependency configurations.
**Examples:**
- `build: configure webpack for production`
- `build: update Dockerfile for node 20`

### Pull Request Pattern

When submitting a Pull Request, please follow this pattern for the title and description:

**PR Title Example:** `feat(auth): implement new login flow`

**Description Pattern:**
```yaml
## Description
<!-- Briefly describe what this PR adds or fixes and why it is needed -->

## Type of Change
- [ ] 🚀 New feature (feat)
- [ ] 🐛 Bug fix (fix)
- [ ] 📚 Documentation update (docs)
- [ ] 💅 Styling/formatting (style)
- [ ] ♻️ Refactor (refactor)
- [ ] 🧪 Tests (test)
- [ ] 🔧 Maintenance/Chore (chore)

## Checklist
- [ ] My code follows the code standards of this project.
- [ ] I have performed a self-review of my own code.
- [ ] I have commented my code, particularly in hard-to-understand areas.
- [ ] My changes generate no new warnings or errors (`npm run lint` & `npm run build`).

## Screenshots/Video (if applicable)
<!-- Add visual proof of your changes if they affect the UI -->
```

### Steps to Contribute

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-new-feature`
3. Make your changes and commit using the guidelines above: `git commit -m 'feat(scope): add new feature'`
4. Push to your branch: `git push origin feature/my-new-feature`
5. Submit a pull request using the provided pattern.

## Code Standards

- **Typescript**: Strict typing is enforced. Avoid `any` types where possible.
- **Styling**: Use Tailwind utility classes primarily. Complex, highly reusable components can rely on global CSS custom properties defined in `app/globals.css`.
- **GSAP**: Use the `@gsap/react` hook `useGSAP()` for animations, ensuring proper cleanup on unmount, and always use `{ scope: ref }` where appropriate to limit query selectors to the component instance.

## License

This project is licensed under the MIT License.
