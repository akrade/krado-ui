import React from 'react';
import { Input as BaseInput } from '@mui/base/Input';
import PropTypes from 'prop-types';

/**
 * KradoInput Component
 *
 * An accessible input field component built on Base UI.
 * Supports labels, helper text, validation states, and multiple sizes.
 *
 * @example
 * ```jsx
 * <KradoInput
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   helperText="We'll never share your email"
 *   required
 * />
 * ```
 */
export const KradoInput = React.forwardRef(({
  label,
  helperText,
  error = false,
  success = false,
  size = 'md',
  required = false,
  className = '',
  id,
  ...props
}, ref) => {
  // Generate unique ID if not provided
  const inputId = id || React.useId();

  // Build class names based on props
  const inputClassNames = [
    'krado-input',
    error && 'krado-input--error',
    success && 'krado-input--success',
    size !== 'md' && `krado-input--${size}`,
    className
  ].filter(Boolean).join(' ');

  const helperTextClassNames = [
    'krado-input-helper-text',
    error && 'krado-input-helper-text--error',
    success && 'krado-input-helper-text--success'
  ].filter(Boolean).join(' ');

  return (
    <div className="krado-input-wrapper">
      {label && (
        <label
          htmlFor={inputId}
          className={`krado-input-label${required ? ' krado-input-label--required' : ''}`}
        >
          {label}
        </label>
      )}

      <BaseInput
        ref={ref}
        id={inputId}
        className={inputClassNames}
        aria-invalid={error}
        aria-describedby={helperText ? `${inputId}-helper-text` : undefined}
        required={required}
        {...props}
      />

      {helperText && (
        <span
          id={`${inputId}-helper-text`}
          className={helperTextClassNames}
        >
          {helperText}
        </span>
      )}
    </div>
  );
});

KradoInput.displayName = 'KradoInput';

KradoInput.propTypes = {
  /** Label text for the input */
  label: PropTypes.string,

  /** Helper text below the input */
  helperText: PropTypes.string,

  /** Show error state */
  error: PropTypes.bool,

  /** Show success state */
  success: PropTypes.bool,

  /** Size of the input */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** Mark input as required */
  required: PropTypes.bool,

  /** Input type */
  type: PropTypes.string,

  /** Placeholder text */
  placeholder: PropTypes.string,

  /** Input value */
  value: PropTypes.string,

  /** Change handler */
  onChange: PropTypes.func,

  /** Additional CSS classes */
  className: PropTypes.string,

  /** Unique ID for the input */
  id: PropTypes.string,

  /** Disable the input */
  disabled: PropTypes.bool
};
