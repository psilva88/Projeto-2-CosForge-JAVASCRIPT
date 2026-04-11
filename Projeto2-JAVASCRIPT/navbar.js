function Navbar({ rolarParaEmAlta, voltarParaHome, usuarioLogado }) {
    return (
        <nav className="navbar">
            {/* Lembre-se de colocar a imagem logo-cosforge.png na mesma pasta do seu projeto */}
            <div className="nav-logo" onClick={voltarParaHome} title="Voltar para o Início">
                <img 
                    src="imagens/logo_cosforge.png" 
                    alt="Logo CosForge" 
                    className="img-logo" 
                />
            </div>
            
            <div className="nav-busca">
                <input type="text" placeholder="Pesquisar projetos, ferramentas ou makers..." />
            </div>
            
            <div className="nav-acoes">
                <button className="btn-nav" onClick={rolarParaEmAlta}>🔥 Em Alta</button>
                <button className="btn-criar">+ Criar Tutorial</button>
                
                <div className="perfil-usuario">
                    <img src="https://placehold.co/40x40/ffffff/4a148c?text=U" alt="Perfil" />
                    <span>{usuarioLogado}</span>
                </div>
            </div>
        </nav>
    );
}