import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const menu_items = pgTable('menu_items', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    price: text('price').notNull(),
});
