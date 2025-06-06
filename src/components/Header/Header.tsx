import styles from './Header.module.scss';

export default function Header() {
    return (
        <div className={styles.header}>
            <span className={styles.greeting}>
                Bem vindo de volta, <strong>Kaique Steck</strong>
            </span>
            <h2 className={styles.pageTitle}>Todos eventos</h2>
        </div>
    );
}