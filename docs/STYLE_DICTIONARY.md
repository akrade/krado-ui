# Style Dictionary Integration

This document explains how Style Dictionary powers the Krado UI token system.

## Overview

**Style Dictionary** transforms design tokens from JSON source files into multiple output formats, enabling both CSS-based theming and programmatic JavaScript access.

## Architecture

```
┌─────────────────────────────────┐
│  Source Tokens (JSON)           │
│  src/tokens/source/*.json       │
└────────────┬────────────────────┘
             │
             ▼
    ┌────────────────────┐
    │  Style Dictionary  │
    │  (Transformer)     │
    └────────┬───────────┘
             │
        ┌────┴────┬─────────────┐
        │         │             │
        ▼         ▼             ▼
   ┌────────┐ ┌──────┐   ┌──────────┐
   │  CSS   │ │  JS  │   │   TS     │
   │ .css   │ │ .js  │   │  .d.ts   │
   └────────┘ └──────┘   └──────────┘
```

## Generated Files

### 1. CSS Custom Properties
**Location:** `src/styles/tokens/generated.css`

```css
:root {
  --krado-color-primary-500: #2196f3;
  --krado-spacing-md: 1rem;
  --krado-shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

**Usage in Components:**
```css
.my-component {
  color: var(--krado-color-primary-500);
  padding: var(--krado-spacing-md);
}
```

### 2. JavaScript/ESM Module
**Location:** `src/tokens/tokens.js`

```javascript
export const ColorPrimary500 = "#2196f3";
export const SpacingMd = "1rem";
export const ShadowBase = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
```

**Usage in JavaScript:**
```javascript
import * as tokens from './src/tokens/tokens.js';

const primaryColor = tokens.ColorPrimary500;
const spacing = tokens.SpacingMd;

// Use in styled-components, emotion, etc.
const Button = styled.button`
  background: ${tokens.ColorPrimary500};
  padding: ${tokens.SpacingMd};
`;
```

### 3. TypeScript Declarations
**Location:** `src/tokens/tokens.d.ts`

Provides full TypeScript support for the generated token exports.

## Workflow

### 1. Edit Source Tokens

Modify JSON files in `src/tokens/source/`:

```json
{
  "color": {
    "brand": {
      "primary": { "value": "#2196f3" }
    }
  }
}
```

### 2. Build Tokens

```bash
npm run tokens
```

This runs Style Dictionary and generates:
- `src/styles/tokens/generated.css`
- `src/tokens/tokens.js`
- `src/tokens/tokens.d.ts`

### 3. Commit Changes

Commit both source files and generated files to version control.

## Build Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `npm run tokens` | `style-dictionary build` | Build tokens once |
| `npm run tokens:watch` | `style-dictionary build --watch` | Watch and rebuild on changes |
| `npm run build` | `npm run tokens && vite build` | Build tokens + library |

## Configuration

The transformation is configured in `style-dictionary.config.mjs`:

```javascript
export default {
  source: ['src/tokens/source/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'krado',  // Adds --krado- prefix
      buildPath: 'src/styles/tokens/',
      files: [{
        destination: 'generated.css',
        format: 'css/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    }
  }
};
```

## Token Structure

### JSON Source Format

```json
{
  "category": {
    "subcategory": {
      "property": {
        "value": "actual-value"
      }
    }
  }
}
```

### Token References

Tokens can reference other tokens:

```json
{
  "color": {
    "primary": {
      "500": { "value": "#2196f3" },
      "base": { "value": "{color.primary.500}" }
    }
  }
}
```

When built, `{color.primary.500}` is resolved to `#2196f3`.

## Naming Conventions

| Source JSON | CSS Output | JavaScript Output |
|-------------|------------|-------------------|
| `color.primary.500` | `--krado-color-primary-500` | `ColorPrimary500` |
| `spacing.md` | `--krado-spacing-md` | `SpacingMd` |
| `font.family.base` | `--krado-font-family-base` | `FontFamilyBase` |

## Best Practices

### 1. Always Edit Source Files
Never manually edit generated files (`generated.css`, `tokens.js`, `tokens.d.ts`).

### 2. Use Semantic Names
Prefer semantic names over descriptive ones:
- ✅ `color.primary`
- ❌ `color.blue`

### 3. Leverage References
Use token references for consistency:
```json
{
  "color": {
    "brand": { "value": "#2196f3" },
    "button": { "value": "{color.brand}" }
  }
}
```

### 4. Run Build Before Commit
Always run `npm run tokens` before committing changes.

### 5. Document New Categories
When adding new token categories, update documentation.

## Framework Integration

### React
```jsx
import { ColorPrimary500 } from './src/tokens/tokens.js';

function MyComponent() {
  return <div style={{ color: ColorPrimary500 }}>Hello</div>;
}
```

### Vanilla CSS/HTML
```html
<link rel="stylesheet" href="dist/krado-ui.css">

<div style="color: var(--krado-color-primary-500)">Hello</div>
```

### Astro
```astro
---
import 'krado-ui/dist/krado-ui.css';
---

<div class="my-component">
  <style>
    .my-component {
      color: var(--krado-color-primary-500);
    }
  </style>
</div>
```

### CSS-in-JS
```javascript
import tokens from './src/tokens/tokens.js';

const styles = {
  color: tokens.ColorPrimary500,
  padding: tokens.SpacingMd
};
```

## Troubleshooting

### Tokens Not Updating
1. Run `npm run tokens` manually
2. Check for syntax errors in JSON source files
3. Verify file paths in `style-dictionary.config.mjs`

### CSS Variables Not Working
1. Ensure `generated.css` is imported in `src/styles/tokens/index.css`
2. Verify the CSS is included in the build output
3. Check browser DevTools for CSS variable availability

### TypeScript Errors
1. Regenerate tokens: `npm run tokens`
2. Restart TypeScript server in your IDE
3. Check `tokens.d.ts` file exists

## Resources

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- [Krado UI Token Reference](./DESIGN_TOKENS.md)
