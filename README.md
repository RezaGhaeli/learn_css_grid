# 📐 Learn CSS Grid: Two-Dimensional Layouts

Welcome to the **Learn CSS Grid** repository! This project is designed to help you master CSS Grid—the most powerful layout system available in CSS. Unlike Flexbox (which is one-dimensional), Grid handles both columns and rows simultaneously, making complex web layouts clean and intuitive.

---

## 🧠 Core Concept: Container vs. Items

Just like Flexbox, Grid relies on establishing a parent-child relationship:
1. **Grid Container:** The parent element where `display: grid` is applied.
2. **Grid Items:** The direct children of the container that automatically become grid items.

```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>

```

---

## 🏗️ Properties for the Parent (Grid Container)

### 1. `display`

Enables the grid context.

```css
.grid-container {
  display: grid; /* or inline-grid */
}

```

### 2. `grid-template-columns` & `grid-template-rows`

Defines the columns and rows of the grid using a space-separated list of values. You can use pixels, percentages, or the flexible `fr` (fraction) unit.

```css
.grid-container {
  /* Creates three columns: 1fr, 2fr, and 1fr */
  grid-template-columns: 1fr 2fr 1fr;
  
  /* Creates two rows, each 100px tall */
  grid-template-rows: 100px 100px;
}

```

### 3. The `repeat()` Function & `minmax()`

To avoid writing repetitive values, use `repeat()`. Combine it with `minmax()` and `auto-fit`/`auto-fill` for responsive layouts without media queries!

```css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

```

### 4. `gap` (or `grid-gap`)

Sets the size of the gaps (gutters) between rows and columns.

```css
.grid-container {
  gap: 20px; /* Applies 20px gap to both rows and columns */
  /* Or separately: row-gap: 10px; column-gap: 20px; */
}

```

### 5. `grid-template-areas`

Allows you to name sections of your layout for semantic and readable arrangement.

```css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
}

```

---

## 🧱 Properties for the Children (Grid Items)

### 1. `grid-column` & `grid-row`

Controls an item's size and location by spanning across grid lines.

```css
.item-1 {
  /* Starts at column line 1 and ends at column line 4 */
  grid-column: 1 / 4; 
  
  /* Shorthand alternative: span 2 columns */
  /* grid-column: span 2; */
}

```

### 2. `grid-area` (with Grid Templates)

Assigns an item to a specific named area defined in the container.

```css
.header {
  grid-area: header;
}

```

---

## 🚀 Quick Snippet: The Ultimate Responsive Card Grid

This single rule creates a fully responsive, auto-wrapping grid where columns automatically adapt to screen sizes with a minimum width of `300px`:

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

```

---

## 📚 Recommended Resources

* [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [MDN Web Docs: CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [Grid Garden (Interactive Learning Game)](https://cssgridgarden.com/)

```

```
