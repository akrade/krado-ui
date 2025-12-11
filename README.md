# Krado UI Component Library

[![npm version](https://img.shields.io/npm/v/krado-ui.svg)](https://www.npmjs.com/package/@akrade/krado-ui)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

> The coded implementation of the **Krado Life Design System** standards.

---

## 📖 Philosophy

**Krado UI** is a framework-agnostic component library built on **Base UI** (headless components) and styled using **CSS Custom Properties (Design Tokens)**. It serves as the primary component layer for the broader **Krado Life Design System**, providing composable, accessible, and themeable UI primitives that work seamlessly across React, Astro, Vanilla JavaScript, and other frameworks.

### Core Principles

- **Headless First**: Built on `@mui/base` for maximum flexibility
- **Design Token Driven**: Powered by Style Dictionary with CSS Custom Properties and JavaScript API
- **Framework Neutral**: Works with React, Astro, Vue, Svelte, or Vanilla JS
- **Accessible by Default**: ARIA-compliant components with keyboard navigation
- **Single Package**: Simple `npm install krado-ui` - no monorepo complexity

---

## 📦 Installation

Install the package and its peer dependencies:

```bash
npm install krado-ui react react-dom
```

### Peer Dependencies

Krado UI requires the following peer dependencies:

- `react` (^18.0.0 || ^19.0.0)
- `react-dom` (^18.0.0 || ^19.0.0)

---

## 🚀 Usage

### React Example

Import components and styles directly from `krado-ui`:

```jsx
import { useState } from 'react';
import { KradoButton } from 'krado-ui';
import 'krado-ui/dist/krado-ui.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to Krado UI</h1>
      <KradoButton onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </KradoButton>
    </div>
  );
}

export default App;
```

---

### Astro / Vanilla JavaScript Example

For non-React frameworks, import only the CSS and use semantic class names:

**In your layout/head:**

```html
<!-- Import Krado UI styles -->
<link rel="stylesheet" href="/node_modules/krado-ui/dist/krado-ui.css">
```

**In your component/page:**

```html
<button class="krado-button krado-button--primary">
  Click Me
</button>

<input
  type="text"
  class="krado-input"
  placeholder="Enter your name"
/>
```

---

## 🎨 Theming

Krado UI uses **Style Dictionary** to generate design tokens in multiple formats. All tokens are available as CSS Custom Properties and JavaScript exports.

### CSS Theming

Override tokens globally or per-component:

```css
:root {
  /* Override color tokens */
  --krado-color-primary-500: #0066cc;
  --krado-color-secondary-500: #6c757d;

  /* Override spacing tokens */
  --krado-spacing-sm: 0.5rem;
  --krado-spacing-md: 1rem;

  /* Override typography tokens */
  --krado-font-family-base: 'Inter', sans-serif;
  --krado-font-size-base: 16px;
}
```

### JavaScript/Programmatic Theming

Import tokens directly in your JavaScript:

```javascript
import * as tokens from 'krado-ui/src/tokens/tokens.js';

// Use in CSS-in-JS, styled-components, etc.
const styles = {
  color: tokens.ColorPrimary500,
  padding: tokens.SpacingMd,
  fontFamily: tokens.FontFamilyBase
};
```

### Token Source

All design tokens are defined in JSON source files and automatically transformed by Style Dictionary. See [Design Tokens Reference](docs/DESIGN_TOKENS.md) for the complete token catalog.

---

## 📚 Components

### Currently Available

- **KradoButton**: Flexible button component with variants (primary, secondary, outline)
- **KradoInput**: Accessible input field with validation states

### Coming Soon

- KradoCard
- KradoModal
- KradoSelect
- KradoTooltip
- KradoTabs

---

## 🛠️ Development

### Local Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/krado-ui.git
cd krado-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure

```
krado-ui/
├── src/
│   ├── tokens/
│   │   ├── source/       # JSON token definitions (edit these)
│   │   ├── tokens.js     # Generated JavaScript tokens
│   │   └── tokens.d.ts   # Generated TypeScript definitions
│   ├── components/       # React components
│   ├── styles/
│   │   ├── tokens/       # Generated CSS Custom Properties
│   │   └── components/   # Component-specific styles
│   └── index.js          # Main entry point
├── style-dictionary.config.mjs  # Token build configuration
└── dist/                 # Build output (generated)
```

### Build Scripts

- `npm run tokens` - Build design tokens from JSON source
- `npm run tokens:watch` - Watch and rebuild tokens on changes
- `npm run build` - Build tokens + library bundle
- `npm run dev` - Start development server

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](docs/CONTRIBUTING.md) for details on our code of conduct and submission process.

---

## 📄 License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---

## 🔗 Resources

- [Krado Life Design System Documentation](https://krado.design)
- [Base UI Documentation](https://mui.com/base-ui/)
- [Design Tokens Reference](docs/DESIGN_TOKENS.md)
- [Style Dictionary Integration](docs/STYLE_DICTIONARY.md)
- [Architecture Overview](docs/ARCHITECTURE.md)
- [Token Source Files](src/tokens/source/)

---

**Built with ❤️ as part of the Krado Life Design System**
