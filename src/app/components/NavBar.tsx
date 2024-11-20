import Link from 'next/link';
import styles from './NavBar.module.css'; // Optional: for styling

const NavBar = () => {
    return (
        <nav className={`${styles.navbar} rounded-lg sticky top-0 z-10`}>
            <ul className="flex justify-center space-x-4">
                <li>
                    <Link href="/" className="text-amber-700">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-amber-700">About</Link>
                </li>
                <li>
                    <Link href="/menu" className="text-amber-700">Menu</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-amber-700">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar; 