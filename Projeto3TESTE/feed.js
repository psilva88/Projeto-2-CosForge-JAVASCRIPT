function Feed({ projetos, projetosEmAlta, aoClicarNoProjeto }) {
    const [filtroAtivo, setFiltroAtivo] = React.useState('Todos');
    const [orcamentoMax, setOrcamentoMax] = React.useState(1000); // Valor inicial alto

    const filtros = ['Todos', 'Facil', 'Media', 'Dificil'];

    function normalizarDif(d) {
        return d.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    // Lógica: se o orçamento for vazio ou 0, ele mostra tudo (sem limite)
    let projetosFiltrados = projetos.filter(function(p) {
        let passaDificuldade = filtroAtivo === 'Todos' || normalizarDif(p.dificuldade) === filtroAtivo;
        let passaOrcamento = !orcamentoMax || orcamentoMax === 0 || p.custo <= orcamentoMax;
        return passaDificuldade && passaOrcamento;
    });

    function getClasseDificuldade(dificuldade) {
        let d = normalizarDif(dificuldade);
        if (d === 'Facil')   return 'dificuldade-tag dif-facil';
        if (d === 'Media')   return 'dificuldade-tag dif-media';
        if (d === 'Dificil') return 'dificuldade-tag dif-dificil';
        return 'dificuldade-tag';
    }

    return (
        <div>
            <div className="hero-banner">
                <h1>Forge Your Cosplay</h1>
                <h2>Encontre o projeto ideal para o seu nível e para o seu bolso.</h2>
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

                    <div className="filtro-bloco filtro-orcamento">
                        <label>Orçamento Máximo (R$)</label>
                        <div className="orcamento-controle">
                            <input 
                                type="range" 
                                min="0" 
                                max="10000" 
                                step="50"
                                value={orcamentoMax || 0} 
                                onChange={(e) => setOrcamentoMax(Number(e.target.value))} 
                                className="filtro-range"
                            />
                            <input 
                                type="number" 
                                min="0"
                                max="10000"
                                className="input-orcamento"
                                value={orcamentoMax}
                                placeholder="Sem limite"
                                onChange={(e) => setOrcamentoMax(Number(e.target.value))}
                            />
                        </div>
                        <span className="ajuda-filtro">
                            {orcamentoMax > 0 ? `Exibindo até R$ ${orcamentoMax}` : "Exibindo todos os valores"}
                        </span>
                    </div>
                </div>
            </div>

            {projetosFiltrados.length === 0 ? (
                <div className="estado-vazio">
                    <p>Nenhum tutorial encontrado com estes critérios.</p>
                </div>
            ) : (
                <div className="vitrine-grid">
                    {projetosFiltrados.map(function(projeto) {
                        return (
                            <div key={projeto.id} className="card-projeto" onClick={() => aoClicarNoProjeto(projeto)}>
                                <img src={projeto.imagem} alt={projeto.titulo} className="card-img" />
                                <div className="card-info">
                                    <h3>{projeto.titulo}</h3>
                                    <p className="card-franquia">{projeto.franquia} - por {projeto.criador}</p>
                                    <div className="card-footer">
                                        <span className="preco">R$ {projeto.custo}</span>
                                        <span className={getClasseDificuldade(projeto.dificuldade)}>
                                            {projeto.dificuldade}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}