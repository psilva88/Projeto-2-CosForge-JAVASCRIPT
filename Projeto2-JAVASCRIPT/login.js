function Login({ aoLogar }) {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const fazerLogin = (e) => {
        e.preventDefault(); // Evita que a página recarregue
        // Pega o que está antes do @ no e-mail para usar como nome
        const nomeUsuario = email.split('@')[0] || "Maker"; 
        aoLogar(nomeUsuario);
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={fazerLogin}>
                <h2>Bem-vindo ao CosForge</h2>
                <p style={{marginBottom: '25px', color: '#666'}}>Faça login para acessar os tutoriais</p>
                
                <input type="email" placeholder="Seu E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Sua Senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                
                <button type="submit" className="btn-login">Entrar na Forja</button>
                <p style={{marginTop: '15px', fontSize: '0.9rem', color: '#888'}}>Não tem conta? Cadastre-se</p>
            </form>
        </div>
    );
}