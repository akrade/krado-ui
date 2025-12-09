# Krado UI Design Tokens

Design tokens are the visual design atoms of the Krado UI system. They are implemented as CSS Custom Properties and serve as the single source of truth for all styling decisions.

---

## Philosophy

Design tokens provide:

- **Consistency**: Unified visual language across all components
- **Maintainability**: Change once, update everywhere
- **Theming**: Easy customization without touching component code
- **Framework Agnostic**: Works with any CSS-capable framework

---

## Token Categories

Krado UI organizes tokens into four primary categories:

1. **Colors** - Brand colors, semantic colors, text, backgrounds, borders
2. **Typography** - Fonts, sizes, weights, line heights, letter spacing
3. **Spacing** - Padding, margins, gaps, border radius
4. **Shadows** - Elevation levels, focus rings, depth

---

## Colors

### Primary Colors

Full spectrum from 50-900 for flexible theming:

```css
--krado-color-primary-50: #e3f2fd;
--krado-color-primary-100: #bbdefb;
--krado-color-primary-200: #90caf9;
--krado-color-primary-300: #64b5f6;
--krado-color-primary-400: #42a5f5;
--krado-color-primary-500: #2196f3;  /* Base primary */
--krado-color-primary-600: #1e88e5;
--krado-color-primary-700: #1976d2;
--krado-color-primary-800: #1565c0;
--krado-color-primary-900: #0d47a1;
```

### Secondary Colors

```css
--krado-color-secondary-500: #9c27b0;  /* Base secondary */
/* Full spectrum also available */
```

### Semantic Colors

```css
--krado-color-success: #4caf50;
--krado-color-warning: #ff9800;
--krado-color-error: #f44336;
--krado-color-info: #2196f3;
```

### Neutral/Gray Colors

```css
--krado-color-gray-50: #fafafa;   /* Lightest */
--krado-color-gray-500: #9e9e9e;  /* Mid-tone */
--krado-color-gray-900: #212121;  /* Darkest */
```

### Text Colors

```css
--krado-color-text-primary: rgba(0, 0, 0, 0.87);
--krado-color-text-secondary: rgba(0, 0, 0, 0.6);
--krado-color-text-disabled: rgba(0, 0, 0, 0.38);
```

### Background Colors

```css
--krado-color-background-default: #ffffff;
--krado-color-background-paper: #f5f5f5;
--krado-color-background-elevated: #ffffff;
```

### Border Colors

```css
--krado-color-border-default: rgba(0, 0, 0, 0.12);
--krado-color-border-light: rgba(0, 0, 0, 0.08);
--krado-color-border-dark: rgba(0, 0, 0, 0.24);
```

---

## Typography

### Font Families

```css
--krado-font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...;
--krado-font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', ...;
--krado-font-family-base: var(--krado-font-family-sans);
```

### Font Sizes

```css
--krado-font-size-xs: 0.75rem;    /* 12px */
--krado-font-size-sm: 0.875rem;   /* 14px */
--krado-font-size-base: 1rem;     /* 16px */
--krado-font-size-md: 1.125rem;   /* 18px */
--krado-font-size-lg: 1.25rem;    /* 20px */
--krado-font-size-xl: 1.5rem;     /* 24px */
--krado-font-size-2xl: 1.875rem;  /* 30px */
--krado-font-size-3xl: 2.25rem;   /* 36px */
--krado-font-size-4xl: 3rem;      /* 48px */
--krado-font-size-5xl: 3.75rem;   /* 60px */
```

### Font Weights

```css
--krado-font-weight-thin: 100;
--krado-font-weight-light: 300;
--krado-font-weight-normal: 400;
--krado-font-weight-medium: 500;
--krado-font-weight-semibold: 600;
--krado-font-weight-bold: 700;
--krado-font-weight-black: 900;
```

### Line Heights

```css
--krado-line-height-none: 1;
--krado-line-height-tight: 1.25;
--krado-line-height-normal: 1.5;
--krado-line-height-relaxed: 1.625;
--krado-line-height-loose: 2;
```

---

## Spacing

### Base Spacing Scale (8px base)

```css
--krado-spacing-0: 0;
--krado-spacing-1: 0.25rem;   /* 4px */
--krado-spacing-2: 0.5rem;    /* 8px */
--krado-spacing-3: 0.75rem;   /* 12px */
--krado-spacing-4: 1rem;      /* 16px */
--krado-spacing-5: 1.25rem;   /* 20px */
--krado-spacing-6: 1.5rem;    /* 24px */
--krado-spacing-8: 2rem;      /* 32px */
--krado-spacing-10: 2.5rem;   /* 40px */
--krado-spacing-12: 3rem;     /* 48px */
--krado-spacing-16: 4rem;     /* 64px */
--krado-spacing-20: 5rem;     /* 80px */
--krado-spacing-24: 6rem;     /* 96px */
--krado-spacing-32: 8rem;     /* 128px */
```

### Semantic Spacing

```css
--krado-spacing-xs: var(--krado-spacing-1);   /* 4px */
--krado-spacing-sm: var(--krado-spacing-2);   /* 8px */
--krado-spacing-md: var(--krado-spacing-4);   /* 16px */
--krado-spacing-lg: var(--krado-spacing-6);   /* 24px */
--krado-spacing-xl: var(--krado-spacing-8);   /* 32px */
```

### Border Radius

```css
--krado-border-radius-none: 0;
--krado-border-radius-sm: 0.125rem;   /* 2px */
--krado-border-radius-base: 0.25rem;  /* 4px */
--krado-border-radius-md: 0.375rem;   /* 6px */
--krado-border-radius-lg: 0.5rem;     /* 8px */
--krado-border-radius-xl: 0.75rem;    /* 12px */
--krado-border-radius-2xl: 1rem;      /* 16px */
--krado-border-radius-full: 9999px;   /* Pill shape */
```

---

## Shadows

### Elevation Shadows

```css
--krado-shadow-none: none;
--krado-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--krado-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), ...;
--krado-shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), ...;
--krado-shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), ...;
--krado-shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), ...;
--krado-shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--krado-shadow-2xl: 0 50px 100px -20px rgba(0, 0, 0, 0.25);
```

### Focus Rings

```css
--krado-shadow-focus-primary: 0 0 0 3px rgba(33, 150, 243, 0.3);
--krado-shadow-focus-error: 0 0 0 3px rgba(244, 67, 54, 0.3);
--krado-shadow-focus-success: 0 0 0 3px rgba(76, 175, 80, 0.3);
```

### Z-Index Layers

```css
--krado-z-index-dropdown: 1000;
--krado-z-index-sticky: 1020;
--krado-z-index-fixed: 1030;
--krado-z-index-modal-backdrop: 1040;
--krado-z-index-modal: 1050;
--krado-z-index-tooltip: 1070;
```

---

## Using Design Tokens

### In CSS

```css
.my-component {
  color: var(--krado-color-primary);
  padding: var(--krado-spacing-md);
  font-size: var(--krado-font-size-lg);
  border-radius: var(--krado-border-radius-md);
  box-shadow: var(--krado-shadow-base);
}
```

### In JavaScript (React)

```jsx
const styles = {
  color: 'var(--krado-color-primary)',
  padding: 'var(--krado-spacing-md)'
};

<div style={styles}>Content</div>
```

### Global Theming

Override tokens at the root level:

```css
:root {
  --krado-color-primary: #9c27b0;
  --krado-spacing-md: 1.5rem;
  --krado-border-radius-md: 12px;
}
```

### Component-Level Theming

```css
.dark-theme {
  --krado-color-text-primary: rgba(255, 255, 255, 0.87);
  --krado-color-background-default: #121212;
}
```

---

## Best Practices

1. **Always use tokens** - Never hardcode values in component styles
2. **Use semantic tokens** - Prefer `--krado-spacing-md` over `--krado-spacing-4`
3. **Maintain the scale** - Add new tokens that fit the existing progression
4. **Document new tokens** - Explain purpose and usage context
5. **Test overrides** - Ensure tokens can be customized without breaking

---

## Adding New Tokens

1. Identify the appropriate category
2. Follow the naming convention: `--krado-{category}-{property}-{variant}`
3. Add to the relevant file in `src/styles/tokens/`
4. Document in this file
5. Test in multiple components

---

## Future Enhancements

- **Motion tokens**: Animation durations and easing functions
- **Breakpoint tokens**: Responsive design breakpoints
- **Dark mode tokens**: Complete dark theme palette
- **Theme presets**: Pre-configured theme packages

---

For more details, see the source files in [`src/styles/tokens/`](../src/styles/tokens/).
