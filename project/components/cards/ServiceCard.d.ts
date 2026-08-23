import * as React from 'react';

export interface ServiceCardProps {
  name: string;
  description?: string;
  /** Starting price, e.g. "From $750". Rendered in mono. */
  price?: string;
  /** Image URL. When omitted, a labeled placeholder slot renders. */
  image?: string;
  alt?: string;
  href?: string;
  /** Placeholder label when no image. @default 'ProGround project photo' */
  imageLabel?: string;
  style?: React.CSSProperties;
}

/**
 * Linked service card: photo, name, one line, starting price.
 * @startingPoint section="Cards" subtitle="Service card — photo, name, price" viewport="360x340"
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
