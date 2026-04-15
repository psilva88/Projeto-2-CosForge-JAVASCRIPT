// Tela de Login - primeira tela que o usuario ve ao abrir o app
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
        <div className="login-splash">
            {/* logo e nome no topo */}
            <div className="login-marca">
                <img src="imagens/logo_cosforge_recorte.png" alt="CosForge" className="login-logo" />
                <span className="login-nome">CosForge</span>
            </div>

            <p className="login-slogan">A forja dos cosplayers brasileiros</p>

            <div className="login-box">
                <h2>Bem-vindo de volta</h2>
                <p>Entre para criar tutoriais, votar no Bounty System e muito mais.</p>

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

                {/* botao pra continuar sem login */}
                <button className="btn-pular-login" onClick={() => aoLogar('Visitante')}>
                    Continuar sem conta
                </button>
            </div>
        </div>
    );
}
