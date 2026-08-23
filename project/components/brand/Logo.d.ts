import * as React from 'react';
export interface LogoProps { onDark?: boolean; height?: number; src?: string; alt?: string; style?: React.CSSProperties; }
/** ProGround logo — image lockup on dark, typographic interim on light. */
export function Logo(props: LogoProps): JSX.Element;
