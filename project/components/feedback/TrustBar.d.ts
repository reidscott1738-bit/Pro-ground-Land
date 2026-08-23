import * as React from 'react';
export interface TrustBarProps { items: string[]; onDark?: boolean; style?: React.CSSProperties; }
/** Trust bar — one line of proof, no icons larger than the text. */
export function TrustBar(props: TrustBarProps): JSX.Element;
