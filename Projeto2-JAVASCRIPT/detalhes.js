function Detalhes({ projeto, voltarParaHome }) {
    return (
        <div className="detalhes-container">
            <button className="btn-voltar" onClick={voltarParaHome}>⬅ Voltar para Vitrine</button>
            
            <div className="detalhes-header">
                <img src={projeto.imagem} alt={projeto.titulo} className="detalhes-img" />
                <div className="detalhes-info">
                    <h2>{projeto.titulo}</h2>
                    <p>Por: <strong>{projeto.criador}</strong></p>
                    
                    <div className="badges">
                        <span className="badge">💰 R$ {projeto.custo}</span>
                        <span className="badge">⏳ {projeto.tempo}</span>
                        <span className="badge">🛠️ {projeto.dificuldade}</span>
                    </div>

                    {projeto.patrocinio && (
                        <p style={{color: '#e91e63', fontWeight: 'bold', margin: '15px 0'}}>
                            ⭐ Patrocinado por: {projeto.patrocinio}
                        </p>
                    )}
                </div>
            </div>

            <h3>Lista de Materiais Necessários</h3>
            <ul className="materiais-lista">
                {projeto.materiais.map((mat, i) => (
                    <li key={i}>
                        <span>{mat.nome} - R$ {mat.preco}</span>
                        <button className="btn-afiliado">🛒 Comprar</button>
                    </li>
                ))}
            </ul>

            <button className="btn-premium">⬇️ Baixar Arquivos Premium (R$ 15,00)</button>
        </div>
    );
}