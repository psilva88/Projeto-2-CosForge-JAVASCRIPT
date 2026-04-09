function Feed({ projetos, aoClicarNoProjeto }) {
    return (
        <div>
            <h2 style={{marginBottom: '20px', color: '#4a148c'}}>Recomendados para Você</h2>
            <div className="vitrine-grid">
                {projetos.map(projeto => (
                    <div key={projeto.id} className="card-projeto" onClick={() => aoClicarNoProjeto(projeto)}>
                        <img src={projeto.imagem} alt={projeto.titulo} className="card-img" />
                        <div className="card-info">
                            <h3>{projeto.titulo}</h3>
                            <p style={{fontSize: '0.9rem', color: '#666'}}>{projeto.franquia}</p>
                            <p className="preco">R$ {projeto.custo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}