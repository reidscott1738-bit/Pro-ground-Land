import * as React from 'react';

export interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  /** Mono caption naming the service and city, e.g. "Front bed renovation · Bocage, Baton Rouge". */
  caption?: string;
  /** Initial divider position 0–100. @default 50 */
  initial?: number;
  /** Pixel height of the frame. @default 420 */
  height?: number;
  style?: React.CSSProperties;
}

/**
 * The signature before/after comparison slider. Draggable + keyboard (arrows/Home/End).
 * @startingPoint section="Interactive" subtitle="Before/after comparison slider" viewport="700x480"
 */
export function BeforeAfterSlider(props: BeforeAfterSliderProps): JSX.Element;
