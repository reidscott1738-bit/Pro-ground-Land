import * as React from 'react';
export interface TextareaProps { label?: string; id?: string; required?: boolean; help?: string; error?: string; style?: React.CSSProperties; rows?: number; [k: string]: any; }
export function Textarea(props: TextareaProps): JSX.Element;
