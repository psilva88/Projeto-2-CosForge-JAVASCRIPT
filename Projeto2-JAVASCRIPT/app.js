function App() {
    // Começa na tela de Login
    const [telaAtual, setTelaAtual] = React.useState('login'); 
    const [projetoSelecionado, setProjetoSelecionado] = React.useState(null);
    const [usuarioLogado, setUsuarioLogado] = React.useState(null);

    // Funções
    const realizarLogin = (nome) => {
        setUsuarioLogado(nome);
        setTelaAtual('home');
    };

    const abrirDetalhes = (projeto) => {
        setProjetoSelecionado(projeto);
        setTelaAtual('detalhes');
        window.scrollTo(0, 0); 
    };

    const voltarParaHome = () => {
        setProjetoSelecionado(null);
        setTelaAtual('home');
        window.scrollTo(0, 0);
    };

    // Função que rola a página suavemente até o topo onde fica o "Em Alta"
    const rolarParaEmAlta = () => {
        if(telaAtual !== 'home') voltarParaHome();
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    // Filtra os projetos para separar os que estão em alta
    const projetosEmAlta = tutoriaisData.filter(p => p.emAlta);
    const projetosComuns = tutoriaisData.filter(p => !p.emAlta);

    // Se estiver na tela de login, desenha SÓ o login
    if (telaAtual === 'login') {
        return <Login aoLogar={realizarLogin} />;
    }

    // Se passou do login, desenha a loja inteira
    return (
        <div>
            <Navbar rolarParaEmAlta={rolarParaEmAlta} voltarParaHome={voltarParaHome} usuarioLogado={usuarioLogado} />

            <div className="container-principal">
                <div className="conteudo-esquerdo">
                    
                    {telaAtual === 'home' && (
                        <div>
                            <EmAlta projetos={projetosEmAlta} aoClicarNoProjeto={abrirDetalhes} />
                            <Feed projetos={projetosComuns} aoClicarNoProjeto={abrirDetalhes} />
                        </div>
                    )}
                    
                    {telaAtual === 'detalhes' && projetoSelecionado && (
                        <Detalhes projeto={projetoSelecionado} voltarParaHome={voltarParaHome} />
                    )}

                </div>

                <BountySystem />
            </div>

            <Rodape />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));