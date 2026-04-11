function Feed({ projetos, aoClicarNoProjeto }) {
    return (
        <div>
            <h2 className="titulo-secao">Recomendados para Você</h2>
            
            <div className="vitrine-grid">
                {projetos.map(function(projeto) {
                    return (
                        <div key={projeto.id} className="card-projeto" onClick={() => aoClicarNoProjeto(projeto)}>
                            <img src={projeto.imagem} alt={projeto.titulo} className="card-img" />
                            <div className="card-info">
                                <h3>{projeto.titulo}</h3>
                                <p style={{fontSize: '0.9rem', color: '#666'}}>{projeto.franquia}</p>
                                <p className="preco">R$ {projeto.custo}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}