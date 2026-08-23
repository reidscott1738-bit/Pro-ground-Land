import * as React from 'react';
export interface CheckboxProps { label: React.ReactNode; id?: string; checked?: boolean; defaultChecked?: boolean; onChange?: (e: React.ChangeEvent) => void; [k: string]: any; }
export function Checkbox(props: CheckboxProps): JSX.Element;
