import styles from './EventsTable.module.scss';

export default function EventsTable() {
    return (
        <section className={styles.eventsSection}>
            <div className={styles.toolbar}>
                <input className={styles.searchInput} placeholder="Buscar eventos"/>
                <button className={styles.addBtn}>+ Inserir novo</button>
            </div>
            <table className={styles.eventsTable}>
                <thead>
                    <tr>
                        <th>Nome do evento</th>
                        <th>Total de equipes</th>
                        <th>Status</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Clube do Laço Coração Pantaneiro</td>
                        <td>10</td>
                        <td>
                            <span className={`${styles.statusDot} ${styles.active}`}></span> Ativo
                        </td>
                        <td>09 a 11 de Junho</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Clube do Laço Coração Pantaneiro</td>
                        <td>10</td>
                        <td>
                            <span className={`${styles.statusDot} ${styles.active}`}></span> Ativo
                        </td>
                        <td>09 a 11 de Junho</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.pagination}>
                <button>Anterior</button>
                <button className={styles.active}>1</button>
                <button>2</button>
                <button>3</button>
                <button>Próxima</button>
            </div>
        </section>
    );
}