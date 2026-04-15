// App - Base Principal
function App() {
    const [telaAtual, setTelaAtual] = React.useState('login'); // começa no login
    const [projetoSelecionado, setProjetoSelecionado] = React.useState(null);
    const [usuarioLogado, setUsuarioLogado] = React.useState(null); // null = nao logado

    function mudarTela(novaTela) {
        setTelaAtual(novaTela);
        window.scrollTo(0, 0);
    }

    function abrirDetalhes(projeto) {
        setProjetoSelecionado(projeto);
        mudarTela('detalhes');
    }

    function realizarLogin(nome) {
        setUsuarioLogado(nome);
        mudarTela('home');
    }

    let projetosEmAlta = [];
    let projetosComuns = [];
    for (let i = 0; i < tutoriaisData.length; i++) {
        if (tutoriaisData[i].emAlta === true) {
            projetosEmAlta.push(tutoriaisData[i]);
        } else {
            projetosComuns.push(tutoriaisData[i]);
        }
    }

    return (
        <div className="app-wrapper">
            <Navbar mudarTela={mudarTela} usuarioLogado={usuarioLogado} telaAtual={telaAtual} />

            {telaAtual === 'home' && (
                <div className="container-principal">
                    <Feed projetos={projetosComuns} projetosEmAlta={projetosEmAlta} aoClicarNoProjeto={abrirDetalhes} />
                    <div id="secao-bounty">
                        <BountySystem />
                    </div>
                </div>
            )}

            {telaAtual === 'detalhes' && projetoSelecionado !== null && (
                <div className="container-principal">
                    <Detalhes projeto={projetoSelecionado} voltarParaHome={() => mudarTela('home')} />
                </div>
            )}

            {telaAtual === 'sobre' && (
                <SobreNos />
            )}

            {telaAtual === 'criar' && (
                <CriarTutorial voltarParaHome={() => mudarTela('home')} />
            )}

            {telaAtual === 'login' && (
                <Login aoLogar={realizarLogin} />
            )}

            <Rodape mudarTela={mudarTela} />
            <NavbarInferior mudarTela={mudarTela} telaAtual={telaAtual} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Navbar 

function Navbar({ mudarTela, usuarioLogado, telaAtual }) {
    const [menuAberto, setMenuAberto] = React.useState(false);

    function irParaBounty() {
        setMenuAberto(false);
        if (telaAtual === 'home') {
            let secao = document.getElementById('secao-bounty');
            if (secao) secao.scrollIntoView({ behavior: 'smooth' });
        } else {
            mudarTela('home');
            setTimeout(function() {
                let secao = document.getElementById('secao-bounty');
                if (secao) secao.scrollIntoView({ behavior: 'smooth' });
            }, 80);
        }
    }

    function navegar(tela) {
        setMenuAberto(false);
        mudarTela(tela);
    }

    return (
        <nav className="navbar">
            <div className="nav-topo">
                <img src="imagens/logo_cosforge_recorte.png" alt="CosForge" className="img-logo" onClick={() => navegar('home')} />
                <input className="nav-busca" type="text" placeholder="Buscar tutoriais..." />
                <button className="btn-sanduiche" onClick={() => setMenuAberto(!menuAberto)}>
                    <span className={'linha-sanduiche' + (menuAberto ? ' aberta' : '')}></span>
                    <span className={'linha-sanduiche' + (menuAberto ? ' aberta' : '')}></span>
                    <span className={'linha-sanduiche' + (menuAberto ? ' aberta' : '')}></span>
                </button>
            </div>
            <div className={'nav-menu' + (menuAberto ? ' menu-aberto' : '')}>
                <div className="nav-esquerda">
                    <button className="btn-inicio" onClick={() => navegar('home')}>Inicio</button>
                    <button className="btn-nav" onClick={() => navegar('sobre')}>Sobre Nos</button>
                    <button className="btn-nav" onClick={irParaBounty}>Bounty System</button>
                </div>
                <div className="nav-acoes">
                    <button className="btn-criar" onClick={() => navegar('criar')}>+ Criar Tutorial</button>
                    <div className="perfil-usuario" onClick={() => navegar('login')}>
                        <img src={`https://placehold.co/40x40/4a148c/ffffff?text=${usuarioLogado ? usuarioLogado.charAt(0).toUpperCase() : 'E'}`} alt="Perfil" />
                        <span>{usuarioLogado || 'Entrar'}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Navbar Inferior (so aparece no mobile)
function NavbarInferior({ mudarTela, telaAtual }) {
    function irParaBounty() {
        if (telaAtual === 'home') {
            let secao = document.getElementById('secao-bounty');
            if (secao) secao.scrollIntoView({ behavior: 'smooth' });
        } else {
            mudarTela('home');
            setTimeout(function() {
                let secao = document.getElementById('secao-bounty');
                if (secao) secao.scrollIntoView({ behavior: 'smooth' });
            }, 80);
        }
    }

    let ativo = telaAtual;

    return (
        <nav className="navbar-inferior">
            <button className={'nav-inf-btn' + (ativo === 'home' ? ' nav-inf-ativo' : '')} onClick={() => mudarTela('home')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
                    <polyline points="9 21 9 12 15 12 15 21"/>
                </svg>
                <span>Inicio</span>
            </button>
            <button className={'nav-inf-btn' + (ativo === 'sobre' ? ' nav-inf-ativo' : '')} onClick={() => mudarTela('sobre')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span>Sobre Nos</span>
            </button>
            <button className={'nav-inf-btn' + (ativo === 'bounty' ? ' nav-inf-ativo' : '')} onClick={irParaBounty}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <span>Bounty</span>
            </button>
            <button className={'nav-inf-btn' + (ativo === 'criar' ? ' nav-inf-ativo' : '')} onClick={() => mudarTela('criar')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="16"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
                <span>Criar</span>
            </button>
        </nav>
    );
}

// Em Alta

function EmAlta({ projetos, aoClicarNoProjeto }) {
    return (
        <div id="secao-em-alta">
            <h2 className="titulo-secao">Em Alta esta Semana!</h2>
            <div className="vitrine-em-alta">
                {projetos.map(function(projeto) {
                    return (
                        <div key={projeto.id} className="card-em-alta" onClick={() => aoClicarNoProjeto(projeto)}>
                            <span className="badge-emalta">Em Alta</span>
                            <img src={projeto.imagem} alt={projeto.titulo} className="card-img" />
                            <div className="card-info">
                                <h3>{projeto.titulo}</h3>
                                <span className="franquia-tag">{projeto.franquia}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// Bounty System

function BountySystem() {
    const [bounties, setBounties] = React.useState(bountiesIniciais);
    const [novoPedido, setNovoPedido] = React.useState('');

    const desafioAtivo = {
        titulo: 'Armadura Space Marine (Warhammer 40K)',
        descricao: 'Crie o tutorial mais completo , com lista de materiais, passo a passo e vídeo. O melhor ou mais rápido entregue dentro do prazo ganha o prêmio.',
        recompensa: 'R$ 1000,00',
        prazo: '18d 04h 32m 11s'
    };

    const vencedoresAnteriores = [
        { id: 1, titulo: 'Invencível Cosplay', vencedor: 'Conquest', detalhes: 'entregue em 12 dias', premio: 'R$ 500,00' },
        { id: 2, titulo: 'Espadas do Zoro (3 Estilos)', vencedor: 'SwordsmanBR', detalhes: 'entregue em 19 dias', premio: 'R$ 500,00' }
    ];

    function votar(idDoProjeto) {
        let novaLista = bounties.map(function(item) {
            if (item.id === idDoProjeto) {
                return { id: item.id, pedido: item.pedido, votos: item.votos + 1 };
            }
            return item;
        });
        novaLista.sort(function(a, b) { return b.votos - a.votos; });
        setBounties(novaLista);
    }

    function adicionarBounty() {
        if (novoPedido.trim() === '') return;
        let novoItem = {
            id: bounties.length + 10,
            pedido: novoPedido,
            votos: 1
        };
        setBounties([...bounties, novoItem]);
        setNovoPedido('');
    }

    return (
        <div className="container-pagina bounty-page">
            <div className="bounty-header">
                <h1>Bounty System</h1>
                <p className="subtitulo">
                    Vote nos tutoriais que você quer ver. Os mais pedidos viram desafios
                    oficiais com prêmios em dinheiro para o Maker que criar.
                </p>
            </div>

            <div className="bounty-ativo-card">
                <div className="bounty-ativo-top">
                    <span className="badge-ativo">Desafio Ativo</span>
                    <span className="bounty-reward-tag">{desafioAtivo.recompensa}</span>
                </div>
                <div className="bounty-ativo-body">
                    <div>
                        <h2>{desafioAtivo.titulo}</h2>
                        <p className="bounty-ativo-descricao">{desafioAtivo.descricao}</p>
                        <p className="bounty-ativo-prazo">Encerra em <strong>{desafioAtivo.prazo}</strong></p>
                    </div>
                    <button className="btn-enviar-versao">Enviar minha versão do tutorial</button>
                </div>
            </div>

            <section className="bounty-section bounty-winners-section">
                <h3>Vencedores anteriores</h3>
                <div className="bounty-winners">
                    {vencedoresAnteriores.map(function(item) {
                        return (
                            <div key={item.id} className="winner-item">
                                <div>
                                    <p className="winner-titulo">{item.titulo}</p>
                                    <p className="winner-detalhes">Vencedor: {item.vencedor} — {item.detalhes}</p>
                                </div>
                                <span className="winner-premio">{item.premio}</span>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="bounty-section bounty-voting-section">
                <div className="bounty-voting-header">
                    <div>
                        <p className="voting-title">Vote no Próximo Desafio</p>
                        <p className="voting-note">Votação encerra em 18d</p>
                    </div>
                </div>
                <div className="bounty-lista">
                    {bounties.map(function(bounty, index) {
                        let isPrimeiro = index === 0;
                        return (
                            <div key={bounty.id} className={'bounty-item' + (isPrimeiro ? ' primeiro-lugar' : '')}>
                                <div>
                                    <p className="bounty-posicao">{index + 1}. lugar</p>
                                    <p className="bounty-nome">{bounty.pedido}</p>
                                    <p className="bounty-votos">{bounty.votos} votos</p>
                                    {isPrimeiro && <span className="bounty-favorito">Favorito para o Próximo</span>}
                                </div>
                                <button className="btn-votar" onClick={() => votar(bounty.id)}>
                                    Votar
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            <div className="novo-bounty-form">
                <h3>Sugerir um tutorial</h3>
                <div className="novo-bounty-input">
                    <input
                        type="text"
                        placeholder="Ex: Sabre de Luz"
                        value={novoPedido}
                        onChange={(e) => setNovoPedido(e.target.value)}
                    />
                    <button className="btn-adicionar-bounty" onClick={adicionarBounty}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}

// Rodapé

function Rodape({ mudarTela }) {
    return (
        <footer className="rodape">
            <img src="imagens/logo_cosforge_recorte.png" alt="CosForge" className="rodape-logo" />
            <h3>Apoie a Comunidade CosForge</h3>
            <p>
                Ajude a manter a plataforma no ar e financie os projetos em desenvolvimento
                no Bounty System.
            </p>
            <button className="btn-crowdfunding">
                Apoiar a Plataforma
            </button>
            <div className="rodape-links">
                <span onClick={() => mudarTela('sobre')}>Sobre nós</span>
                <span onClick={() => mudarTela('criar')}>Criar Tutorial</span>
                <span onClick={() => mudarTela('login')}>Entrar</span>
            </div>
            <p className="rodape-copy">
                2026 CosForge
            </p>
        </footer>
    );
}