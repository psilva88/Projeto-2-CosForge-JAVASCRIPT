function App() {
    // Estados do aplicativo
    const [telaAtual, setTelaAtual] = React.useState('home'); // Pode ser 'home' ou 'detalhes'
    const [projetoSelecionado, setProjetoSelecionado] = React.useState(null);
    const [modalAberto, setModalAberto] = React.useState(false);

    // Funções de navegação
    const abrirDetalhes = (projeto) => {
        setProjetoSelecionado(projeto);
        setTelaAtual('detalhes');
        window.scrollTo(0, 0); // Sobe a página pro topo
    };

    const voltarParaHome = () => {
        setProjetoSelecionado(null);
        setTelaAtual('home');
    };

    return (
        <div>
            {/* A Navbar sempre fica no topo */}
            <Navbar 
                abrirModalEmAlta={() => setModalAberto(true)} 
                voltarParaHome={voltarParaHome} 
            />

            <div className="container-principal">
                <div className="conteudo-esquerdo">
                    {/* Aqui acontece a mágica: Se for home, mostra o Feed. Se não, mostra os Detalhes */}
                    {telaAtual === 'home' && (
                        <Feed projetos={tutoriaisData} aoClicarNoProjeto={abrirDetalhes} />
                    )}
                    
                    {telaAtual === 'detalhes' && projetoSelecionado && (
                        <Detalhes projeto={projetoSelecionado} voltarParaHome={voltarParaHome} />
                    )}
                </div>

                {/* A barra lateral fica sempre aparecendo à direita */}
                <BountySystem />
            </div>

            {/* O Rodapé no final */}
            <Rodape />

            {/* O POPUP "Em Alta" (Só aparece se modalAberto for true) */}
            {modalAberto && (
                <div className="modal-fundo">
                    <div className="modal-conteudo">
                        <button className="btn-fechar" onClick={() => setModalAberto(false)}>X</button>
                        <h2 style={{color: '#4a148c', marginBottom: '15px'}}>🔥 Projetos em Alta</h2>
                        <p>1. Espada da Saber (Fate) - 45K visualizações</p>
                        <p>2. Máscara do Homem-Aranha - 32K visualizações</p>
                        <p>3. Armadura de Beskar - 28K visualizações</p>
                    </div>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));