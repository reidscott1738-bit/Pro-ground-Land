import React from 'react';
export const fieldWrap = { display:'flex', flexDirection:'column', gap:6, width:'100%' };
export const labelStyle = { fontFamily:'var(--font-body)', fontSize:14, fontWeight:600, color:'var(--pg-slate-700)' };
export const reqMark = { color:'var(--pg-danger)', marginLeft:3 };
export const helpStyle = { fontFamily:'var(--font-mono)', fontSize:12, color:'var(--pg-slate-500)' };
export const errStyle = { fontFamily:'var(--font-body)', fontSize:13, color:'var(--pg-danger)' };
export function controlStyle(invalid){ return { fontFamily:'var(--font-body)', fontSize:16, color:'var(--pg-ink)', background:'#fff', border:'1px solid '+(invalid?'var(--pg-danger)':'var(--pg-line-strong)'), borderRadius:'var(--radius-sm)', padding:'12px 14px', width:'100%', minHeight:48, outline:'none', transition:'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)' }; }
export function ring(invalid){ return { onFocus:(e)=>{ e.currentTarget.style.borderColor='var(--pg-survey)'; e.currentTarget.style.boxShadow='var(--shadow-focus)'; }, onBlur:(e)=>{ e.currentTarget.style.borderColor=invalid?'var(--pg-danger)':'var(--pg-line-strong)'; e.currentTarget.style.boxShadow='none'; } }; }
export function Msg({error,help}){ if(error) return React.createElement('span',{style:errStyle},error); if(help) return React.createElement('span',{style:helpStyle},help); return null; }
