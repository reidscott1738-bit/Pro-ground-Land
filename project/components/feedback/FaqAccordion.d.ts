import * as React from 'react';
export interface FaqItem { q: string; a: React.ReactNode; }
export interface FaqAccordionProps { items: FaqItem[]; allowMultiple?: boolean; defaultAllOpen?: boolean; style?: React.CSSProperties; }
/**
 * FAQ accordion; visible text must match the page's FAQPage schema exactly.
 * @startingPoint section="Feedback" subtitle="FAQ accordion" viewport="700x360"
 */
export function FaqAccordion(props: FaqAccordionProps): JSX.Element;
