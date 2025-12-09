# Krado UI Architecture

This document outlines the architectural decisions and structure of the Krado UI component library.

## Overview

Krado UI is built as a single-package component library that bridges headless UI functionality (via Base UI) with a comprehensive design token system, creating framework-agnostic, accessible, and themeable components.

---

## Core Principles

### 1. **Separation of Concerns**

- **Logic Layer**: Base UI provides the behavioral logic (accessibility, state management, keyboard navigation)
- **Style Layer**: CSS Custom Properties define the visual design system
- **Component Layer**: React components compose logic and styles with a clean API

### 2. **Framework Neutrality**

Components can be used in multiple ways:

- **React**: Import components directly (`<KradoButton />`)
- **Other Frameworks**: Import CSS and use class names (`class="krado-button"`)
- **Vanilla JS**: Pure HTML + CSS with Krado classes

### 3. **Design Token Foundation**

All visual styling is driven by CSS Custom Properties generated from JSON source files using **Style Dictionary**. This provides a single source of truth that outputs both CSS variables and JavaScript modules, making theming and customization trivial without touching component code.

---

## Project Structure

```
krado-ui/
├── src/
│   ├── tokens/
│   │   ├── source/            # JSON token definitions (EDIT THESE)
│   │   │   ├── color.json
│   │   │   ├── typography.json
│   │   │   ├── spacing.json
│   │   │   └── shadow.json
│   │   ├── tokens.js          # Generated JavaScript tokens
│   │   ├── tokens.d.ts        # Generated TypeScript definitions
│   │   └── README.md
│   │
│   ├── components/            # React component implementations
│   │   ├── Button/
│   │   │   ├── KradoButton.jsx
│   │   │   └── index.js
│   │   ├── Input/
│   │   └── index.js
│   │
│   ├── styles/
│   │   ├── tokens/
│   │   │   ├── generated.css  # Generated from JSON source
│   │   │   └── index.css      # Imports generated.css
│   │   ├── components/        # Component-specific styles
│   │   │   ├── button.css
│   │   │   ├── input.css
│   │   │   └── index.css
│   │   └── index.css          # Main stylesheet entry
│   │
│   └── index.js               # Package entry point
│
├── style-dictionary.config.mjs  # Token build configuration
├── examples/                  # Usage examples
├── docs/                      # Documentation
└── dist/                      # Build output (generated)
    ├── krado-ui.js            # ESM JavaScript bundle
    └── krado-ui.css           # Compiled stylesheet
```

---

## Build System

### Vite Configuration

Krado UI uses **Vite** with **Rollup** for bundling:

**Key Configuration Points:**

1. **Library Mode**: Builds as an NPM package, not an application
2. **External Dependencies**: React and Base UI are peer dependencies
3. **CSS Extraction**: Single CSS file output (`krado-ui.css`)
4. **ESM Format**: Modern JavaScript module format
5. **Sourcemaps**: Enabled for debugging

**Build Outputs:**

- `dist/krado-ui.js` - ESM JavaScript bundle
- `dist/krado-ui.css` - Compiled stylesheet with all tokens and component styles

### Style Dictionary Pipeline

Krado UI uses **Style Dictionary** to transform design tokens from JSON into multiple formats:

**Source → Transform → Output:**

```
src/tokens/source/*.json  →  Style Dictionary  →  CSS + JS + TS
   (Single Source)            (Transformer)       (Multi-Format)
```

**Key Features:**

1. **JSON Source Files**: All tokens defined in `src/tokens/source/`
2. **Token References**: Tokens can reference other tokens using `{category.property.variant}` syntax
3. **Multi-Format Output**:
   - CSS: `src/styles/tokens/generated.css` (CSS Custom Properties with `--krado-` prefix)
   - JavaScript: `src/tokens/tokens.js` (ESM module exports)
   - TypeScript: `src/tokens/tokens.d.ts` (Type definitions)
4. **Build Integration**: Tokens are built before library compilation

**Build Command:**

```bash
npm run tokens      # Build tokens once
npm run build       # Build tokens + library
```

**Token Transformation Example:**

```json
// src/tokens/source/color.json
{
  "color": {
    "primary": {
      "500": { "value": "#2196f3" }
    }
  }
}
```

Transforms to:

```css
/* src/styles/tokens/generated.css */
:root {
  --krado-color-primary-500: #2196f3;
}
```

```javascript
// src/tokens/tokens.js
export const ColorPrimary500 = "#2196f3";
```

---

## Component Architecture

### Anatomy of a Krado Component

Each component follows this structure:

```jsx
import { BaseComponent } from '@mui/base/ComponentName';

export const KradoComponent = React.forwardRef(({
  // Props with defaults
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  // Build class names from props
  const classNames = [
    'krado-component',
    variant !== 'default' && `krado-component--${variant}`,
    size !== 'md' && `krado-component--${size}`,
    className
  ].filter(Boolean).join(' ');

  // Render Base UI component with Krado classes
  return (
    <BaseComponent
      ref={ref}
      className={classNames}
      {...props}
    />
  );
});
```

**Key Patterns:**

- **forwardRef**: Allows parent components to access the underlying DOM element
- **Prop-driven classNames**: Variants and sizes are CSS classes
- **Base UI delegation**: All accessibility and behavior comes from Base UI
- **Spread props**: Supports all Base UI props transparently

---

## Styling Strategy

### CSS Architecture

1. **Design Token Source** (`src/tokens/source/`)
   - JSON files define all design decisions
   - Single source of truth for the design system
   - Token references for consistency

2. **Generated Design Tokens** (`src/styles/tokens/generated.css`)
   - Auto-generated CSS Custom Properties with `--krado-` prefix
   - Never manually edited
   - Rebuilt with `npm run tokens`

3. **Component Styles** (`src/styles/components/`)
   - Use only design tokens for styling
   - BEM-inspired naming: `.krado-button--primary`
   - State classes: `:hover`, `:focus`, `:disabled`

4. **CSS Import Chain**

```
src/index.js
└── src/styles/index.css
    ├── src/styles/tokens/index.css
    │   ├── colors.css
    │   ├── typography.css
    │   ├── spacing.css
    │   └── shadows.css
    └── src/styles/components/index.css
        ├── button.css
        └── input.css
```

### Naming Convention

- **Tokens**: `--krado-{category}-{property}-{variant}`
  - Example: `--krado-color-primary-500`
- **Components**: `.krado-{component}--{modifier}`
  - Example: `.krado-button--outline`

---

## Package Exports

The `package.json` defines clean export paths:

```json
{
  "exports": {
    ".": {
      "import": "./dist/krado-ui.js",
      "types": "./dist/types/index.d.ts"
    },
    "./styles": "./dist/krado-ui.css",
    "./dist/krado-ui.css": "./dist/krado-ui.css"
  }
}
```

**Usage:**

```jsx
// Import components
import { KradoButton } from 'krado-ui';

// Import styles
import 'krado-ui/dist/krado-ui.css';
```

---

## Accessibility

All components inherit accessibility from Base UI:

- **ARIA attributes**: Properly applied for screen readers
- **Keyboard navigation**: Tab, Enter, Space, Arrow keys
- **Focus management**: Visible focus indicators
- **Semantic HTML**: Correct element usage

---

## Theming

### Global Theme Customization

Override CSS Custom Properties at the `:root` level:

```css
:root {
  --krado-color-primary: #9c27b0;
  --krado-spacing-md: 1.5rem;
  --krado-border-radius-md: 12px;
}
```

### Component-Level Customization

Override for specific components:

```css
.my-special-button {
  --krado-color-primary: #ff5722;
}
```

---

## Future Considerations

### Potential Enhancements

1. **TypeScript**: Add full TypeScript support with type definitions
2. **Theme Presets**: Provide pre-built theme packages
3. **Component Composition**: Higher-order components for common patterns
4. **Animation System**: Standardized motion tokens
5. **Dark Mode**: Built-in dark theme support
6. **Monorepo Evolution**: Split into multiple packages if scope grows

---

## References

- [Base UI Documentation](https://mui.com/base-ui/)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)
