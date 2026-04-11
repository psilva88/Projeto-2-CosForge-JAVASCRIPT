function Login({ aoLogar }) {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    function fazerLogin(evento) {
        evento.preventDefault(); // Impede o botão de recarregar a página
        
        // Separa o nome antes do @ do email para usar como usuário
        let nomeUsuario = email.split('@')[0];
        if (!nomeUsuario) {
            nomeUsuario = "Maker";
        }
        
        aoLogar(nomeUsuario);
    }

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={fazerLogin}>
                <h2>Bem-vindo ao CosForge</h2>
                <p style={{marginBottom: '25px', color: '#666'}}>Faça login para acessar os tutoriais</p>
                
                <input 
                    type="email" 
                    placeholder="Seu E-mail" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                
                <input 
                    type="password" 
                    placeholder="Sua Senha" 
                    required 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                />
                
                <button type="submit" className="btn-login">Entrar na Forja</button>
            </form>
        </div>
    );
}