/**
 * Krado UI - Main Entry Point
 *
 * This is the primary entry point for the Krado UI component library.
 * Import from this file to get all components and styles.
 *
 * @example
 * ```jsx
 * import { KradoButton, KradoInput } from 'krado-ui';
 * import 'krado-ui/dist/krado-ui.css';
 * ```
 */

// Import all styles (design tokens + component styles)
import './styles/index.css';

// Export all components
export { KradoButton } from './components/Button';
export { KradoInput } from './components/Input';

// You can also export everything from components
export * from './components';
