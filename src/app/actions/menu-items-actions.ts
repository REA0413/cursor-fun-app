import { db } from '../../db/index';
import { eq } from 'drizzle-orm';
import { menu_items } from '../../db/schema';

export async function getMenuItems() {
    try {
        const result = await db.select().from(menu_items);
        return result;
    } catch (error) {
        console.error('Error fetching menu items:', error);
        throw new Error('Database query failed');
    }
}

export async function createMenuItem(name: string, price: string) {
    try {
        const result = await db.insert(menu_items).values({ name, price });
        return result;
    } catch (error) {
        console.error('Error inserting menu item:', error);
        throw new Error((error as { message: string }).message);
    }
}

export async function deleteMenuItem(id: number) {
    try {
        await db.delete(menu_items).where(eq(menu_items.id, id));
        return { message: 'Item deleted successfully' };
    } catch (error) {
        console.error('Error deleting menu item:', error);
        throw new Error((error as { message: string }).message);
    }
}
