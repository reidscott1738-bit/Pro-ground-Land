import * as React from 'react';
export interface SelectProps { label?: string; id?: string; required?: boolean; help?: string; error?: string; style?: React.CSSProperties; options?: (string | { value: string; label: string })[]; placeholder?: string; [k: string]: any; }
export function Select(props: SelectProps): JSX.Element;
