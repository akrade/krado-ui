# Contributing to Krado UI

Thank you for your interest in contributing to Krado UI! This document provides guidelines and instructions for contributing to the project.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Component Development](#component-development)
- [Design Token Guidelines](#design-token-guidelines)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)

---

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. All contributors are expected to:

- Be respectful and considerate in communication
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

---

## Getting Started

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher
- **Git**: For version control

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/krado-ui.git
   cd krado-ui
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

---

## Development Workflow

### Project Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build the library for production
- `npm run preview` - Preview the production build
- `npm run lint` - Lint the codebase
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates

---

## Component Development

### Creating a New Component

1. **Create component directory**:
   ```
   src/components/YourComponent/
   ├── KradoYourComponent.jsx
   └── index.js
   ```

2. **Component template**:
   ```jsx
   import React from 'react';
   import { BaseComponent } from '@mui/base/ComponentName';
   import PropTypes from 'prop-types';

   export const KradoYourComponent = React.forwardRef(({
     variant = 'default',
     className = '',
     ...props
   }, ref) => {
     const classNames = [
       'krado-your-component',
       variant !== 'default' && `krado-your-component--${variant}`,
       className
     ].filter(Boolean).join(' ');

     return (
       <BaseComponent
         ref={ref}
         className={classNames}
         {...props}
       />
     );
   });

   KradoYourComponent.displayName = 'KradoYourComponent';

   KradoYourComponent.propTypes = {
     variant: PropTypes.oneOf(['default', 'alternative']),
     className: PropTypes.string
   };
   ```

3. **Create component styles**:
   ```css
   /* src/styles/components/your-component.css */
   .krado-your-component {
     /* Use design tokens only */
     padding: var(--krado-spacing-md);
     color: var(--krado-color-text-primary);
   }

   .krado-your-component--alternative {
     /* Variant styles */
   }
   ```

4. **Export the component**:
   ```js
   // src/components/YourComponent/index.js
   export { KradoYourComponent } from './KradoYourComponent';

   // src/components/index.js
   export { KradoYourComponent } from './YourComponent';

   // src/index.js
   export { KradoYourComponent } from './components/YourComponent';
   ```

### Component Checklist

- [ ] Built on Base UI for accessibility
- [ ] Uses only design tokens for styling
- [ ] Includes PropTypes validation
- [ ] Implements `forwardRef` for ref forwarding
- [ ] Supports common props (className, disabled, etc.)
- [ ] Has clear JSDoc comments
- [ ] Includes usage examples
- [ ] Works in both React and vanilla HTML contexts

---

## Design Token Guidelines

### Adding New Tokens

1. **Identify the category**: colors, typography, spacing, shadows
2. **Choose a semantic name**: `--krado-{category}-{property}-{variant}`
3. **Add to appropriate token file**: `src/styles/tokens/{category}.css`

### Token Naming Convention

```css
/* Colors */
--krado-color-{name}-{shade}
--krado-color-primary-500

/* Typography */
--krado-font-{property}-{variant}
--krado-font-size-lg

/* Spacing */
--krado-spacing-{size}
--krado-spacing-md

/* Shadows */
--krado-shadow-{variant}
--krado-shadow-lg
```

### Token Best Practices

- Always use semantic names, not descriptive ones
- Document the purpose of each token
- Maintain consistency with existing token scales
- Avoid hardcoded values in component styles

---

## Coding Standards

### JavaScript/JSX

- Use ES6+ syntax
- Functional components with hooks
- PropTypes for type checking
- Destructure props in function signatures
- Use meaningful variable names

### CSS

- Use BEM-inspired naming for classes
- Mobile-first responsive design
- Only use design tokens for values
- Group related properties together
- Include comments for complex styles

### File Organization

- One component per file
- Index files for clean exports
- Co-locate styles with components logically
- Keep files under 300 lines

### Code Formatting

We use **Prettier** and **ESLint**:

```bash
npm run format  # Auto-format all files
npm run lint    # Check for linting errors
```

---

## Submitting Changes

### Pull Request Process

1. **Update your branch**:
   ```bash
   git fetch upstream
   git rebase upstream/develop
   ```

2. **Run checks**:
   ```bash
   npm run lint
   npm run format
   npm run build
   npm test
   ```

3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add new Button variant"
   ```

   **Commit Message Format**:
   ```
   type(scope): subject

   body (optional)

   footer (optional)
   ```

   **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub with:
   - Clear title and description
   - Reference any related issues
   - Screenshots (for visual changes)
   - Breaking change notes (if applicable)

### Review Process

- PRs require at least one approving review
- Address all review comments
- Keep PR scope focused and atomic
- Be responsive to feedback

---

## Reporting Issues

### Bug Reports

Use the GitHub issue tracker with:

- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Browser/environment details
- Screenshots or code examples

### Feature Requests

Include:

- Problem description
- Proposed solution
- Alternative solutions considered
- Impact on existing functionality

---

## Questions?

- Open a GitHub Discussion for general questions
- Check existing issues and documentation first
- Be patient and respectful when seeking help

---

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.

---

Thank you for contributing to Krado UI!
