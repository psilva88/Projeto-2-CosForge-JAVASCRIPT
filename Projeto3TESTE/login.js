// Tela de Login
function Login({ aoLogar }) {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    function fazerLogin(evento) {
        evento.preventDefault();
        let nomeUsuario = email.split('@')[0];
        if (!nomeUsuario) { nomeUsuario = 'Maker'; }
        aoLogar(nomeUsuario);
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Entrar</h2>
                <p>Faca login para criar tutoriais, votar no Bounty System e mais.</p>
                <form onSubmit={fazerLogin}>
                    <div className="grupo-input">
                        <label>E-mail</label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="grupo-input">
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-login">Entrar na Forja</button>
                </form>
            </div>
        </div>
    );
}
