# Krado UI Design Tokens

This directory contains the design token system powered by **Style Dictionary**.

## Directory Structure

```
src/tokens/
├── source/                  # Source token definitions (edit these)
│   ├── color.json
│   ├── typography.json
│   ├── spacing.json
│   └── shadow.json
├── tokens.js               # Generated JavaScript/ESM module (auto-generated)
└── tokens.d.ts            # Generated TypeScript definitions (auto-generated)
```

## How It Works

1. **Source Tokens**: Define your design tokens in JSON format in `source/` directory
2. **Build Process**: Run `npm run tokens` to transform source tokens
3. **Output**: Style Dictionary generates:
   - `src/styles/tokens/generated.css` - CSS Custom Properties
   - `src/tokens/tokens.js` - JavaScript/ESM module
   - `src/tokens/tokens.d.ts` - TypeScript declarations

## Editing Tokens

### Adding a New Token

1. Edit the appropriate JSON file in `src/tokens/source/`
2. Follow the existing structure:
   ```json
   {
     "color": {
       "brand": {
         "primary": { "value": "#2196f3" }
       }
     }
   }
   ```
3. Run `npm run tokens` to regenerate outputs

### Token References

Tokens can reference other tokens using the `{}` syntax:

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

## Using Generated Tokens

### In CSS (Vanilla/Astro)

The generated CSS custom properties are automatically imported into your component styles:

```css
.my-component {
  color: var(--krado-color-primary-base);
  padding: var(--krado-spacing-md);
}
```

### In JavaScript/React

Import the JavaScript module for programmatic access:

```javascript
import tokens from './src/tokens/tokens.js';

const primaryColor = tokens.color.primary.base;
const spacingMd = tokens.spacing.md;

// Use in styled-components, emotion, etc.
const Button = styled.button`
  background: ${tokens.color.primary.base};
  padding: ${tokens.spacing.md};
`;
```

### In TypeScript

TypeScript definitions are automatically generated:

```typescript
import tokens from './src/tokens/tokens.js';

// Full type safety
const color: string = tokens.color.primary.base;
```

## Build Scripts

- `npm run tokens` - Build tokens once
- `npm run tokens:watch` - Watch for changes and rebuild automatically
- `npm run build` - Build tokens + build the library

## Configuration

The transformation is configured in [`style-dictionary.config.js`](../../style-dictionary.config.js) at the project root.

## Token Naming Convention

Tokens follow this structure:
- **Source**: `category.subcategory.property.variant`
- **CSS Output**: `--krado-category-subcategory-property-variant`
- **JS Output**: `tokens.category.subcategory.property.variant`

### Examples

| Source JSON | CSS Variable | JavaScript |
|-------------|--------------|------------|
| `color.primary.500` | `--krado-color-primary-500` | `tokens.color.primary[500]` |
| `spacing.md` | `--krado-spacing-md` | `tokens.spacing.md` |
| `font.family.base` | `--krado-font-family-base` | `tokens.font.family.base` |

## Best Practices

1. **Always edit source files**, never the generated files
2. **Run `npm run tokens`** after making changes
3. **Use semantic names** (e.g., `primary`, `success`) over descriptive names (e.g., `blue`, `green`)
4. **Leverage token references** to maintain consistency
5. **Document new token categories** in this README

## Resources

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
