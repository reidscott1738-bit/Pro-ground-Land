Button — the site's call-to-action. Primary is Deep Field/white on light and Growth Green/Deep Field on dark; secondary is a 1px outline; hover changes color only, never size.

```jsx
<Button variant="primary" size="lg" href="/request-estimate/">Request an estimate</Button>
<Button variant="secondary">Call (225) 324-8252</Button>
<div className="on-dark" style={{background:'var(--pg-deep-field)',padding:24}}>
  <Button variant="primary" onDark>Request an estimate</Button>
</div>
```

Variants: `primary | secondary | ghost`. Sizes: `sm | md | lg`. Set `onDark` on dark bands. Pass `href` to render an `<a>`.
