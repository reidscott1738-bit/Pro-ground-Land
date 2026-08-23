import React from 'react';
import { fieldWrap, labelStyle, reqMark, controlStyle, ring, Msg } from './fieldHelpers.js';
/** Labeled select. options = strings or {value,label}. */
export function Select({ label, id, required, help, error, options=[], placeholder, style, ...rest }) {
  const invalid = !!error;
  const opts = options.map((o)=> typeof o==='string' ? {value:o,label:o} : o);
  return (
    <div style={fieldWrap}>
      {label && <label htmlFor={id} style={labelStyle}>{label}{required && <span style={reqMark}>*</span>}</label>}
      <select id={id} aria-invalid={invalid} aria-required={required} style={{ ...controlStyle(invalid), appearance:'none', backgroundImage:'linear-gradient(45deg,transparent 50%,var(--pg-slate-500) 50%),linear-gradient(135deg,var(--pg-slate-500) 50%,transparent 50%)', backgroundPosition:'calc(100% - 20px) calc(50% - 2px),calc(100% - 15px) calc(50% - 2px)', backgroundSize:'5px 5px,5px 5px', backgroundRepeat:'no-repeat', paddingRight:40, ...style }} {...ring(invalid)} {...rest}>
        {placeholder && <option value="">{placeholder}</option>}
        {opts.map((o)=> <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <Msg error={error} help={help} />
    </div>
  );
}