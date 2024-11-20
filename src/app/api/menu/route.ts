import { NextResponse } from 'next/server';
import { getMenuItems, createMenuItem, deleteMenuItem } from '../../actions/menu-items-actions';

export async function GET() {
    try {
        const result = await getMenuItems();
        return NextResponse.json(result);
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { name, price } = await request.json();
        const result = await createMenuItem(name, price);
        return NextResponse.json(result);
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        const result = await deleteMenuItem(id);
        return NextResponse.json(result);
    } catch (error) {
        const errorMessage = (error as Error).message;
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}