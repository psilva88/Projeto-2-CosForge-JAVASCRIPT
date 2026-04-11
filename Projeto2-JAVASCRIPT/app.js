function App() {
    // Variáveis de controle de tela
    const [telaAtual, setTelaAtual] = React.useState('login'); 
    const [projetoSelecionado, setProjetoSelecionado] = React.useState(null);
    const [usuarioLogado, setUsuarioLogado] = React.useState(null);

    function realizarLogin(nome) {
        setUsuarioLogado(nome);
        setTelaAtual('home'); // Muda a tela para a vitrine principal
    }

    function abrirDetalhes(projeto) {
        setProjetoSelecionado(projeto);
        setTelaAtual('detalhes');
        window.scrollTo(0, 0); // Joga a tela para o topo
    }

    function voltarParaHome() {
        setProjetoSelecionado(null);
        setTelaAtual('home');
        window.scrollTo(0, 0);
    }

    function rolarParaEmAlta() {
        if(telaAtual !== 'home') {
            voltarParaHome();
        }
        
        // Espera um tempinho para a tela carregar antes de rolar
        setTimeout(function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    // Usando lógica simples de JavaScript para separar os projetos
    let projetosEmAlta = [];
    let projetosComuns = [];
    
    for (let i = 0; i < tutoriaisData.length; i++) {
        if (tutoriaisData[i].emAlta === true) {
            projetosEmAlta.push(tutoriaisData[i]);
        } else {
            projetosComuns.push(tutoriaisData[i]);
        }
    }

    // Se estiver no login, renderiza só ele
    if (telaAtual === 'login') {
        return <Login aoLogar={realizarLogin} />;
    }

    // Se já passou do login, renderiza o App inteiro
    return (
        <div>
            <Navbar 
                rolarParaEmAlta={rolarParaEmAlta} 
                voltarParaHome={voltarParaHome} 
                usuarioLogado={usuarioLogado} 
            />

            <div className="container-principal">
                <div className="conteudo-esquerdo">
                    
                    {telaAtual === 'home' && (
                        <div>
                            <EmAlta projetos={projetosEmAlta} aoClicarNoProjeto={abrirDetalhes} />
                            <Feed projetos={projetosComuns} aoClicarNoProjeto={abrirDetalhes} />
                        </div>
                    )}
                    
                    {telaAtual === 'detalhes' && projetoSelecionado !== null && (
                        <Detalhes projeto={projetoSelecionado} voltarParaHome={voltarParaHome} />
                    )}

                </div>

                {/* A barra lateral de recompensa fica sempre na tela principal */}
                <BountySystem />
            </div>

            <Rodape />
        </div>
    );
}

// Inicializa tudo dentro do HTML
ReactDOM.render(<App />, document.getElementById('root'));