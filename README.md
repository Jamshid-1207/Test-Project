# Product Catalog

Online store catalog powered by the [DummyJSON](https://dummyjson.com) API: browse products, search by name, filter by category and collect items in a cart.

🔗 **Live demo:** https://test-project-henna-nine.vercel.app

## Features

- Products loaded from the DummyJSON API, with a loading indicator
- Search by product title through a reusable, typed `useSearch` hook
- Category filters
- Product cards with image, brand, price and discount, stock status, rating and tags
- Adding to the cart goes through a confirmation modal rendered with a React portal; the same product is never added twice
- Cart with item removal

## Tech stack

React 19 · TypeScript · Vite · Fetch API · CSS

## Architecture

The code is split into Feature-Sliced Design layers: **pages** → **widgets** (cart, product list, search panel) → **features** (cart, products, search hooks) → **entities** (product types) → **shared** (API client, UI components).

## Getting started

```bash
npm install
npm run dev
```

The API address comes from the `.env` file:

```
VITE_BASE_URL=https://dummyjson.com
```

## Author

Jamshidbek Samandarov · [GitHub](https://github.com/Jamshid-1207) · [Telegram](https://t.me/Samandarov_2804)
