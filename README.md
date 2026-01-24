# Next.js E-Commerce Starter

A modern, production-ready Next.js 16 e-commerce starter template featuring React Server Components, parallel routes, SQLite database integration, and shopping cart functionality. Perfect for learning Next.js App Router patterns or bootstrapping your next e-commerce project.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

## ✨ Features

- 🛍️ **Full E-Commerce Flow**: Product listing, cart, checkout, and order confirmation
- ⚡ **React Server Components**: Optimized data fetching with RSC pattern
- 🎨 **Parallel Routes**: Conditional layouts using Next.js slots (@header, @footer)
- 💾 **SQLite Database**: Persistent storage with better-sqlite3
- 🛒 **Shopping Cart**: Context-based cart management with localStorage persistence
- 📱 **Responsive Design**: Mobile-first UI with Tailwind CSS
- 🔒 **Type Safe**: Full TypeScript support throughout
- 🎯 **Server Actions**: Modern data mutations with Next.js server actions

## 🎯 Concepts Demonstrated

### React Server Components (RSC)

- Server Components for data fetching (pages, ProductCard)
- Client Components for interactivity (CartContext, filters)
- Composition pattern: Server Components composing Client Components

### Parallel Routes (Slots)

- `@header` and `@footer` slots for conditional layouts
- Different headers for checkout flow vs main pages
- Catch-all routes for default slot content

### Database Integration

- SQLite with `better-sqlite3` for persistence
- Products and Orders stored in database
- Server Actions for mutations

### State Management

- React Context for cart state
- localStorage persistence for cart across reloads

## 📁 Project Structure

```
src/
├── app/
│   ├── @header/          # Parallel route slot for header
│   ├── @footer/          # Parallel route slot for footer
│   ├── products/         # Products listing page
│   ├── cart/             # Shopping cart page
│   ├── checkout/         # Checkout page (minimal header)
│   ├── confirmation/     # Order confirmation (minimal header)
│   ├── orders/           # Order history page
│   └── layout.tsx        # Root layout with slots
├── components/
│   ├── client/           # Client Components
│   └── *.tsx             # Server Components
├── context/              # React Context providers
├── lib/                  # Database utilities
└── actions/              # Server Actions
```

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## �️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Database**: SQLite with better-sqlite3
- **Language**: TypeScript 5
- **Package Manager**: pnpm

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Server Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Parallel Routes](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

MIT License - feel free to use this starter for your projects.

## 🔗 Keywords

`nextjs` `ecommerce` `react-server-components` `parallel-routes` `sqlite` `typescript` `tailwindcss` `shopping-cart` `starter-template` `app-router` `next16` `react19`
