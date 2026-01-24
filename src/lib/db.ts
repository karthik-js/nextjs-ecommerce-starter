import Database from "better-sqlite3";
import path from "path";

// Database file will be created in the project root
const dbPath = path.join(process.cwd(), "shop.db");

// Create and export database instance
const db = new Database(dbPath);

// Initialize database schema
db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_number TEXT UNIQUE NOT NULL,
    items TEXT NOT NULL,
    subtotal REAL NOT NULL,
    tax REAL NOT NULL,
    total REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL
  );
`);

// Seed products if table is empty
const productCount = db.prepare("SELECT COUNT(*) as count FROM products").get() as { count: number };

if (productCount.count === 0) {
  const seedProducts = [
    {
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
      category: "Electronics"
    },
    {
      name: "Smart Watch",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      description: "Feature-rich smartwatch with health tracking and GPS.",
      category: "Electronics"
    },
    {
      name: "Running Shoes",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      description: "Lightweight running shoes with superior cushioning.",
      category: "Sports"
    },
    {
      name: "Leather Backpack",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      description: "Stylish leather backpack perfect for work or travel.",
      category: "Accessories"
    },
    {
      name: "Coffee Maker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
      description: "Programmable coffee maker with thermal carafe.",
      category: "Home"
    },
    {
      name: "Yoga Mat",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
      description: "Eco-friendly yoga mat with excellent grip and cushioning.",
      category: "Sports"
    },
    {
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      description: "Portable Bluetooth speaker with 360° sound.",
      category: "Electronics"
    },
    {
      name: "Sunglasses",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      description: "Polarized sunglasses with UV protection.",
      category: "Accessories"
    },
    {
      name: "Plant Pot Set",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
      description: "Set of 3 ceramic plant pots in modern design.",
      category: "Home"
    },
    {
      name: "Desk Lamp",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "LED desk lamp with adjustable brightness.",
      category: "Home"
    },
    {
      name: "Water Bottle",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      description: "Insulated stainless steel water bottle.",
      category: "Sports"
    },
    {
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
      description: "RGB mechanical keyboard with customizable switches.",
      category: "Electronics"
    }
  ];

  const insertProduct = db.prepare(`
    INSERT INTO products (name, price, image, description, category)
    VALUES (?, ?, ?, ?, ?)
  `);

  const insertMany = db.transaction((products: typeof seedProducts) => {
    for (const product of products) {
      insertProduct.run(product.name, product.price, product.image, product.description, product.category);
    }
  });

  insertMany(seedProducts);
}

export default db;

// Types for products
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

// Get all products
export function getProducts(): Product[] {
  const stmt = db.prepare("SELECT * FROM products ORDER BY id");
  return stmt.all() as Product[];
}

// Get product by ID
export function getProductById(id: number): Product | null {
  const stmt = db.prepare("SELECT * FROM products WHERE id = ?");
  return (stmt.get(id) as Product) || null;
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  const stmt = db.prepare("SELECT * FROM products WHERE category = ? ORDER BY id");
  return stmt.all(category) as Product[];
}

// Get all unique categories
export function getCategories(): string[] {
  const stmt = db.prepare("SELECT DISTINCT category FROM products ORDER BY category");
  const rows = stmt.all() as { category: string }[];
  return rows.map(row => row.category);
}

// Types for orders
export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface Order {
  id: number;
  order_number: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  created_at: string;
}

// Database row type (items stored as JSON string)
interface OrderRow {
  id: number;
  order_number: string;
  items: string;
  subtotal: number;
  tax: number;
  total: number;
  created_at: string;
}

// Generate unique order number
function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `ORD-${timestamp}-${random}`;
}

// Create a new order
export function createOrder(
  items: OrderItem[],
  subtotal: number,
  tax: number,
  total: number
): Order {
  const orderNumber = generateOrderNumber();
  const itemsJson = JSON.stringify(items);

  const stmt = db.prepare(`
    INSERT INTO orders (order_number, items, subtotal, tax, total)
    VALUES (?, ?, ?, ?, ?)
  `);

  const result = stmt.run(orderNumber, itemsJson, subtotal, tax, total);

  return {
    id: result.lastInsertRowid as number,
    order_number: orderNumber,
    items,
    subtotal,
    tax,
    total,
    created_at: new Date().toISOString(),
  };
}

// Get all orders
export function getOrders(): Order[] {
  const stmt = db.prepare(`
    SELECT * FROM orders ORDER BY created_at DESC
  `);

  const rows = stmt.all() as OrderRow[];

  return rows.map((row) => ({
    ...row,
    items: JSON.parse(row.items) as OrderItem[],
  }));
}

// Get order by order number
export function getOrderByNumber(orderNumber: string): Order | null {
  const stmt = db.prepare(`
    SELECT * FROM orders WHERE order_number = ?
  `);

  const row = stmt.get(orderNumber) as OrderRow | undefined;

  if (!row) return null;

  return {
    ...row,
    items: JSON.parse(row.items) as OrderItem[],
  };
}
