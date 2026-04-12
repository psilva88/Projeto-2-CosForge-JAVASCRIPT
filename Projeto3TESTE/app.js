// App - Base Principal
function App() {
    const [telaAtual, setTelaAtual] = React.useState('home');
    const [projetoSelecionado, setProjetoSelecionado] = React.useState(null);
    const [usuarioLogado, setUsuarioLogado] = React.useState('Entrar');

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
        <div>
            <Navbar mudarTela={mudarTela} usuarioLogado={usuarioLogado} />

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

            {telaAtual === 'criar' && (
                <CriarTutorial voltarParaHome={() => mudarTela('home')} />
            )}

            {telaAtual === 'login' && (
                <Login aoLogar={realizarLogin} />
            )}

            <Rodape />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Navbar 

function Navbar({ mudarTela, usuarioLogado }) {

    function irParaBounty() {
        mudarTela('home');
        setTimeout(function() {
            let secao = document.getElementById('secao-bounty');
            if (secao) secao.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    }

    return (
        <nav className="navbar">
            {/* Lado Esquerdo: Logo, Início e Busca */}
            <div className="nav-esquerda">
                <div className="nav-logo">
                    <img src="imagens/logo_cosforge_recorte.png" alt="CosForge" className="img-logo" onClick={() => mudarTela('home')} />
                    <button className="btn-inicio" onClick={() => mudarTela('home')}>Inicio</button>
                </div>
                <input className="nav-busca" type="text" placeholder="Buscar tutoriais..." />
            </div>

            {/* Lado Direito: Ações e Perfil */}
            <div className="nav-acoes">
                <button className="btn-nav" onClick={irParaBounty}>Bounty System</button>
                <button className="btn-criar" onClick={() => mudarTela('criar')}>+ Criar Tutorial</button>
                <div className="perfil-usuario" onClick={() => mudarTela('login')}>
                    <img src={`https://placehold.co/40x40/4a148c/ffffff?text=${usuarioLogado.charAt(0).toUpperCase()}`} alt="Perfil" />
                    <span>{usuarioLogado}</span>
                </div>
            </div>
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
                        <div
                            key={projeto.id}
                            className="card-em-alta"
                            onClick={() => aoClicarNoProjeto(projeto)}
                        >
                            <span className="badge-trending">TRENDING</span>
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
        <div className="container-pagina">
            <div className="bounty-header">
                <h1>Bounty System</h1>
                <p className="subtitulo">
                    Vote nos tutoriais que você quer ver. Os mais pedidos viram desafios
                    oficiais com prémios em dinheiro para o Maker que criar.
                </p>
            </div>

            <div className="bounty-lista">
                {bounties.map(function(bounty, index) {
                    let isPrimeiro = index === 0;
                    return (
                        <div key={bounty.id} className={'bounty-item' + (isPrimeiro ? ' primeiro-lugar' : '')}>
                            <div>
                                <p className="bounty-posicao">
                                    {index + 1}. lugar {isPrimeiro ? '🏆' : ''}
                                </p>
                                <p className="bounty-nome">{bounty.pedido}</p>
                                <p className="bounty-votos">{bounty.votos} votos da comunidade</p>
                            </div>
                            <button className="btn-votar" onClick={() => votar(bounty.id)}>
                                Votar
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="novo-bounty-form">
                <h3>Sugerir um tutorial</h3>
                <div className="novo-bounty-input">
                    <input
                        type="text"
                        placeholder="Descreva o tutorial que você quer ver!"
                        value={novoPedido}
                        onChange={(e) => setNovoPedido(e.target.value)}
                    />
                    <button className="btn-adicionar-bounty" onClick={adicionarBounty}>
                        Enviar Pedido
                    </button>
                </div>
            </div>
        </div>
    );
}

// Rodapé 

function Rodape() {
    return (
        <footer className="rodape">
            <img src="imagens/logo_cosforge_recorte.png" alt="CosForge" className="rodape-logo" />
            <h3>Apoie a Comunidade CosForge</h3>
            <p>
                Ajude a manter a plataforma no ar e financie os projetos em desenvolvimento
                no Bounty System.
            </p>
            <button className="btn-crowdfunding">
                Apoiar a Plataforma (R$ 5)
            </button>
            <p className="rodape-copy">
                2026 CosForge — Feito para a comunidade Maker brasileira
            </p>
        </footer>
    );
}