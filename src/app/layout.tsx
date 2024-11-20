import './globals.css'; // Import global styles
import { ReactNode } from 'react';
import NavBar from './components/NavBar'; // Import the NavBar component
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eleven Cafe Labuan Bajo',
  description: 'comfortable cafe in Labuan Bajo, viral cafe in Labuan Bajo',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <NavBar />
                <main className="flex-grow p-2 bg-gray-100">
                    {children}
                </main>
                <footer className="text-center">
                    <p className="text-gray-600">Visit us for a delightful dining experience! | Jalan Tongkol Nomor 20, Labuan Bajo | +628121314151617</p>
                </footer>
            </body>
        </html>
    );
}