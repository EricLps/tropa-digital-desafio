"use client";
import { useRouter } from "next/navigation";
import styles from './Sidebar.module.scss';
import logo from '@/assets/Logo-tropa-digital.svg';
import userImg from '@/assets/User-Image.svg';
import userIcon from '@/assets/User-icon.svg';
import sairIcon from '@/assets/sair.svg';
import dashboard from '@/assets/Dashboard.svg';
import eventos from '@/assets/Eventos.svg';
import equipes from '@/assets/Equipes-icon.svg';
import inscricao from '@/assets/Inscricoes.svg'

export default function Sidebar() {
    const router = useRouter();

    function handleLogout() {
        // Aqui você pode limpar tokens se usar autenticação real
        router.push("/"); // Redireciona para a página inicial (LoginForm)
    }

    return (
        <aside className={styles.sidebar}>
            <div>
                <div id="sidebar-logo" className={styles.logoContainer}>
                    <img src={logo} alt="Tropa Digital" />
                </div>
                <nav id="sidebar-menu" className={styles.menu}>
                    <span className={styles.menuLabel}>MENU</span>
                    <ul>
                        <li>
                            <img src={dashboard} alt="" className={styles.menuIcon} />
                            Dashboard
                        </li>
                        <li className={styles.active}>
                            <img src={eventos} alt="" className={styles.menuIcon} />
                            Eventos
                        </li>
                        <li>
                            <img src={equipes} alt="" className={styles.menuIcon} />
                            Equipes
                        </li>
                        <li>
                            <img src={inscricao} alt="" className={styles.menuIcon} />
                            Inscrições
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="sidebar-user" className={styles.userFooter}>
                <div className={styles.userInfo}>
                    <div className={styles.avatarBorder}>
                        <img src={userImg} alt="Kaique Steck" className={styles.avatar} />
                    </div>
                    <div>
                        <span className={styles.userName}>Kaique Steck</span>
                        <span className={styles.userRole}>Administrador</span>
                    </div>
                </div>
                <div className={styles.userActions}>
                    <button>
                        <img src={userIcon} alt="Alterar dados" className={styles.icon} />
                        Alterar dados
                    </button>
                    <button onClick={handleLogout}>
                        <img src={sairIcon} alt="Sair" className={styles.icon} />
                        Sair
                    </button>
                </div>
            </div>
        </aside>
    );
}