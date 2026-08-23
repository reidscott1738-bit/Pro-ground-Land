import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Set true when the button sits on a Deep Field dark band. @default false */
  onDark?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Primary call-to-action button. Deep Field on light, Growth Green on dark.
 * @startingPoint section="Forms" subtitle="Primary / secondary / ghost, light + dark" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
