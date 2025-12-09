import React from 'react';
import { Button as BaseButton } from '@mui/base/Button';
import PropTypes from 'prop-types';

/**
 * KradoButton Component
 *
 * A flexible, accessible button component built on Base UI.
 * Supports multiple variants, sizes, and states.
 *
 * @example
 * ```jsx
 * <KradoButton variant="primary" size="md" onClick={handleClick}>
 *   Click Me
 * </KradoButton>
 * ```
 */
export const KradoButton = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  ...props
}, ref) => {
  // Build class names based on props
  const classNames = [
    'krado-button',
    variant !== 'primary' && `krado-button--${variant}`,
    size !== 'md' && `krado-button--${size}`,
    fullWidth && 'krado-button--full-width',
    loading && 'krado-button--loading',
    className
  ].filter(Boolean).join(' ');

  return (
    <BaseButton
      ref={ref}
      className={classNames}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </BaseButton>
  );
});

KradoButton.displayName = 'KradoButton';

KradoButton.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,

  /** Visual variant of the button */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'ghost',
    'danger',
    'success'
  ]),

  /** Size of the button */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** Make button full width */
  fullWidth: PropTypes.bool,

  /** Show loading state */
  loading: PropTypes.bool,

  /** Disable the button */
  disabled: PropTypes.bool,

  /** Additional CSS classes */
  className: PropTypes.string,

  /** Click handler */
  onClick: PropTypes.func
};
