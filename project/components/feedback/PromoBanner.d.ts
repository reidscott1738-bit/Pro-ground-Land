import * as React from 'react';
export interface PromoBannerProps { active?: boolean; children: React.ReactNode; dismissible?: boolean; style?: React.CSSProperties; }
/** Reusable promotion banner with an on/off switch. */
export function PromoBanner(props: PromoBannerProps): JSX.Element;
