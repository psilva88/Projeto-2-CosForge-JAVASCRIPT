// Feed - Tela Principal com Filtros
function Feed({ projetos, projetosEmAlta, aoClicarNoProjeto }) {
    const [filtroAtivo, setFiltroAtivo] = React.useState('Todos');
    const TEMPO_TETO_DIAS = 60;
    const [tempoMaxDias, setTempoMaxDias] = React.useState(0);
    const ORCAMENTO_TETO = 10000;
    const [orcamentoMax, setOrcamentoMax] = React.useState(0);

    const filtros = ['Todos', 'Fácil', 'Médio', 'Difícil'];

    function normalizarDif(d) {
        return d;
    }

    function converterTempoParaDias(tempo) {
        let match = tempo.match(/(\d+)\s*(dia|dias|semana|semanas)/i);
        if (!match) return 0;

        let valor = Number(match[1]);
        let unidade = match[2].toLowerCase();
        if (unidade.includes('semana')) {
            return valor * 7;
        }
        return valor;
    }

    let projetosFiltrados = projetos.filter(function(p) {
        let passaDificuldade = filtroAtivo === 'Todos' || normalizarDif(p.dificuldade) === filtroAtivo;
        let passaOrcamento = orcamentoMax === 0 || p.custo <= orcamentoMax;
        let passaTempo = tempoMaxDias === 0 || converterTempoParaDias(p.tempo) <= tempoMaxDias;
        return passaDificuldade && passaOrcamento && passaTempo;
    });

    function getClasseDificuldade(dificuldade) {
        if (dificuldade === 'Fácil')   return 'dificuldade-tag dif-facil';
        if (dificuldade === 'Médio')   return 'dificuldade-tag dif-media';
        if (dificuldade === 'Difícil') return 'dificuldade-tag dif-dificil';
        return 'dificuldade-tag';
    }

    return (
        <div>
            <div className="banner">
                <div className="banner-logo-nome">
                    <img src="imagens/logo_cosforge_recorte.png" alt="CosForge" className="banner-logo" />
                    <span className="banner-nome">CosForge</span>
                </div>
                <h1>Forge Your Cosplay</h1>
                <h3>Encontre o projeto ideal para o seu nível e para o seu bolso.</h3>
            </div>

            <EmAlta projetos={projetosEmAlta} aoClicarNoProjeto={aoClicarNoProjeto} />

            <h2 className="titulo-secao">Filtre seu Cosplay!</h2>

            <div className="filtros-secao">
                <div className="filtro-card">
                    <div className="filtro-bloco">
                        <label>Dificuldade</label>
                        <div className="filtros-botoes">
                            {filtros.map(f => (
                                <button
                                    key={f}
                                    className={`btn-filtro ${filtroAtivo === f ? 'ativo' : ''}`}
                                    onClick={() => setFiltroAtivo(f)}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filtro-bloco filtro-tempo">
                        <label>Tempo Estimado (Dias)</label>
                        <div className="orcamento-controle">
                            <input
                                type="range"
                                min="0"
                                max={TEMPO_TETO_DIAS}
                                step="1"
                                value={tempoMaxDias}
                                onChange={(e) => setTempoMaxDias(Number(e.target.value))}
                                className="filtro-range"
                            />
                            <input
                                type="number"
                                min="0"
                                max={TEMPO_TETO_DIAS}
                                className="input-orcamento"
                                value={tempoMaxDias}
                                onChange={(e) => {
                                    let valor = Number(e.target.value);
                                    if (valor < 0) valor = 0;
                                    if (valor > TEMPO_TETO_DIAS) valor = TEMPO_TETO_DIAS;
                                    setTempoMaxDias(valor);
                                }}
                            />
                        </div>
                        <span className="ajuda-filtro">
                            {tempoMaxDias === 0 ? 'Exibindo todos os tempos' : `Exibindo até ${tempoMaxDias} dia${tempoMaxDias === 1 ? '' : 's'}`}
                        </span>
                    </div>

                    <div className="filtro-bloco filtro-orcamento">
                        <label>Orçamento Máximo (R$)</label>
                        <div className="orcamento-controle">
                            <input
                                type="range"
                                min="0"
                                max={ORCAMENTO_TETO}
                                step="50"
                                value={orcamentoMax}
                                onChange={(e) => setOrcamentoMax(Number(e.target.value))}
                                className="filtro-range"
                            />
                            <input
                                type="number"
                                min="0"
                                max={ORCAMENTO_TETO}
                                className="input-orcamento"
                                value={orcamentoMax}
                                placeholder="Sem limite"
                                onChange={(e) => setOrcamentoMax(Number(e.target.value))}
                            />
                        </div>
                        <span className="ajuda-filtro">
                            {orcamentoMax > 0 ? `Exibindo até R$ ${orcamentoMax}` : 'Exibindo todos os valores'}
                        </span>
                    </div>
                </div>
            </div>

            {/* contador de resultados */}
            <p className="contador-resultados">
                {projetosFiltrados.length} {projetosFiltrados.length === 1 ? 'tutorial encontrado' : 'tutoriais encontrados'}
            </p>

            {projetosFiltrados.length === 0 ? (
                <div className="estado-vazio">
                    <p>Nenhum tutorial encontrado com estes critérios.</p>
                </div>
            ) : (
                <div className="vitrine-grid">
                    {projetosFiltrados.map(function(projeto) {
                        let isPlaceholder = projeto.imagem === 'imagens/placeholder.png';
                        return (
                            <div key={projeto.id} className={'card-projeto' + (isPlaceholder ? ' card-placeholder' : '')} onClick={() => aoClicarNoProjeto(projeto)}>
                                <img src={projeto.imagem} alt={projeto.titulo} className="card-img" />
                                <div className="card-info">
                                    <h3>{projeto.titulo}</h3>
                                    <p className="card-franquia">{projeto.franquia} - por {projeto.criador}</p>
                                    {isPlaceholder ? (
                                        <span className="badge-em-breve">Em breve</span>
                                    ) : (
                                        <div className="card-footer">
                                            <span className="preco">R$ {projeto.custo}</span>
                                            <div className="card-tags">
                                                <span className={getClasseDificuldade(projeto.dificuldade)}>
                                                    {projeto.dificuldade}
                                                </span>
                                                <span className="tempo-tag">{projeto.tempo}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
