import * as React from 'react';
export interface PriceBlockProps { service?: string; price: string; drivers?: string[]; onDark?: boolean; footnote?: string; style?: React.CSSProperties; }
/**
 * Price block — mono figure, cost drivers, mandatory footnote. Identical everywhere.
 * @startingPoint section="Content" subtitle="Price + drivers + mandatory footnote" viewport="480x300"
 */
export function PriceBlock(props: PriceBlockProps): JSX.Element;
