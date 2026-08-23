import React from 'react';
import { fieldWrap, labelStyle, reqMark, controlStyle, ring, Msg } from './fieldHelpers.js';
/** Labeled multi-line textarea. */
export function Textarea({ label, id, required, help, error, rows=4, style, ...rest }) {
  const invalid = !!error;
  return (
    <div style={fieldWrap}>
      {label && <label htmlFor={id} style={labelStyle}>{label}{required && <span style={reqMark}>*</span>}</label>}
      <textarea id={id} rows={rows} aria-invalid={invalid} aria-required={required} style={{ ...controlStyle(invalid), minHeight:'auto', resize:'vertical', lineHeight:1.5, ...style }} {...ring(invalid)} {...rest} />
      <Msg error={error} help={help} />
    </div>
  );
}