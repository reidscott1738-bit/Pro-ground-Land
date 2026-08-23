import React from 'react';
import { fieldWrap, labelStyle, reqMark, controlStyle, ring, Msg } from './fieldHelpers.js';
/** Labeled text input; label always above the control (never placeholder-only). */
export function Input({ label, id, type='text', required, help, error, style, ...rest }) {
  const invalid = !!error;
  return (
    <div style={fieldWrap}>
      {label && <label htmlFor={id} style={labelStyle}>{label}{required && <span style={reqMark}>*</span>}</label>}
      <input id={id} type={type} aria-invalid={invalid} aria-required={required} style={{ ...controlStyle(invalid), ...style }} {...ring(invalid)} {...rest} />
      <Msg error={error} help={help} />
    </div>
  );
}