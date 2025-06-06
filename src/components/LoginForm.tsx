import React, { useState } from 'react';
import logoTropa from '@/assets/Logo-tropa-digital.svg';
import eyeIcon from '@/assets/Eye-icon.svg';
import illustration from '@/assets/Ilustracao-login.svg';
import styles from './LoginForm.module.scss';

type LoginFormProps = {
    onLoginSuccess?: () => void;
};

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simula o login bem-sucedido
        if (onLoginSuccess) onLoginSuccess();
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.left}>
                <img src={logoTropa} className={styles.logo} alt="Logo Tropa Digital" />
                <h2>Bem-vindo de volta</h2>
                <span className={styles.subtitle}>
                    Entre com sua conta para acessar o painel.
                </span>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="email"><h4>E-mail</h4></label>
                    <input
                        id="email"
                        type="email"
                        placeholder="seunome@seuservidor.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password"><h4>Senha</h4></label>
                    <div className={styles.inputPassword}>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Digite aqui"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className={styles.eyeButton}
                            onClick={() => setShowPassword((v) => !v)}
                            tabIndex={-1}
                            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                        >
                            <img src={eyeIcon} alt={showPassword ? "Ocultar senha" : "Mostrar senha"} />
                        </button>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className={styles.right}>
                <img
                    src={illustration}
                    alt="Ilustração de login"
                    className={styles.illustration}
                />
            </div>
        </div>
    );
};

export default LoginForm;