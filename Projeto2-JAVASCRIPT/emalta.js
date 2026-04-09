function EmAlta({ projetos, aoClicarNoProjeto }) {
    return (
        <div id="secao-em-alta" style={{marginBottom: '40px'}}>
            <h2 className="titulo-secao">🔥 Projetos em Alta na Semana</h2>
            <div className="vitrine-em-alta">
                {projetos.map(projeto => (
                    <div key={projeto.id} className="card-projeto" onClick={() => aoClicarNoProjeto(projeto)} style={{minWidth: '280px'}}>
                        <img src={projeto.imagem} alt={projeto.titulo} className="card-img" style={{height: '180px'}} />
                        <div className="card-info">
                            <h3 style={{color: '#c2185b'}}>{projeto.titulo}</h3>
                            <p style={{fontSize: '0.9rem'}}>{projeto.franquia}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}