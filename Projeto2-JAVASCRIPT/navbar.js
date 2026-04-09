function Navbar({ rolarParaEmAlta, voltarParaHome, usuarioLogado }) {
    return (
        <nav className="navbar">
            <div className="nav-logo" onClick={voltarParaHome} style={{cursor: 'pointer'}}>
                <h1>CosForge</h1>
            </div>
            <div className="nav-busca">
                <input type="text" placeholder="Pesquisar projetos, ferramentas ou makers..." />
            </div>
            <div className="nav-acoes">
                <button className="btn-nav" onClick={rolarParaEmAlta}>🔥 Em Alta</button>
                <button className="btn-criar">+ Criar Tutorial</button>
                
                {/* Mostra uma imagem de perfil genérica com o nome do usuário */}
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <img src="imagens/CosForge - Logo.png" alt="Perfil" style={{borderRadius: '50%'}} />
                    <span style={{fontWeight: 'bold', fontSize: '0.9rem'}}>{usuarioLogado}</span>
                </div>
            </div>
        </nav>
    );
}