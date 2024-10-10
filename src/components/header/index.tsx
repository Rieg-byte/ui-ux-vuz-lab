import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <button onClick={() => navigate('/')}>Home</button>
                    </li>
                    <li className={styles.navItem}>
                        <button onClick={() => navigate('/about')}>About
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};