import * as React from 'react';
export interface BadgeProps { children: React.ReactNode; tone?: 'neutral' | 'green' | 'water'; onDark?: boolean; style?: React.CSSProperties; }
/** Pill badge. Tones: neutral, green, water. */
export function Badge(props: BadgeProps): JSX.Element;
