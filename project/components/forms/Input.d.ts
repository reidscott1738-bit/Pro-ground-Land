import * as React from 'react';
export interface InputProps { label?: string; id?: string; required?: boolean; help?: string; error?: string; style?: React.CSSProperties; type?: string; [k: string]: any; }
export function Input(props: InputProps): JSX.Element;
