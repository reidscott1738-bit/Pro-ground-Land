import React from 'react';
/** Checkbox with inline label. */
export function Checkbox({ label, id, checked, defaultChecked, onChange, ...rest }) {
  return (
    <label htmlFor={id} style={{ display:'flex', alignItems:'flex-start', gap:10, cursor:'pointer', fontFamily:'var(--font-body)', fontSize:15, color:'var(--pg-ink)', lineHeight:1.4 }}>
      <input id={id} type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} style={{ width:20, height:20, marginTop:1, accentColor:'var(--pg-turf)', flexShrink:0 }} {...rest} />
      <span>{label}</span>
    </label>
  );
}