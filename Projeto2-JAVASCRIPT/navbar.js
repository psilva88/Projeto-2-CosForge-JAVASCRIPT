function Navbar({ abrirModalEmAlta, voltarParaHome }) {
    return (
        <nav className="navbar">
            {/* Clicar na logo volta para o início */}
            <div className="nav-logo" onClick={voltarParaHome} style={{cursor: 'pointer'}}>
                <h1>CosForge</h1>
            </div>
            
            <div className="nav-busca">
                <input type="text" placeholder="Pesquisar tutoriais, materiais ou makers..." />
            </div>
            
            <div className="nav-acoes">
                <button className="btn-nav" onClick={abrirModalEmAlta}>🔥 Em Alta</button>
                <button className="btn-criar">+ Criar Tutorial</button>
                {/* Visual do Login: Imagem de Perfil */}
                <img 
                    src="https://placehold.co/100x100/ff80ab/4a148c?text=User" 
                    alt="Perfil" 
                    className="perfil-img" 
                    title="Meu Perfil / Login"
                />
            </div>
        </nav>
    );
}