The signature interaction — a draggable before/after comparison slider with a Growth Green handle. Keyboard-operable (arrow keys, Home/End) and exposes its position to assistive tech. Loads the after image at high priority, before image lazily. Labeled placeholder panels render until real photo pairs (shot from the identical position) are supplied.

```jsx
<BeforeAfterSlider
  beforeImage="/img/bocage-before.webp" afterImage="/img/bocage-after.webp"
  caption="Front bed renovation · Bocage, Baton Rouge" height={440} />
```
