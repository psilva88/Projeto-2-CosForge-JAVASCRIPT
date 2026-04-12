function Detalhes({ projeto, voltarParaHome }) {
    return (
        <div className="detalhes-container">
            {/* Topo com Botão de Voltar e Botão de Apoiar */}
            <div className="detalhes-header-topo">
                <button className="btn-voltar" onClick={voltarParaHome}> Voltar para Vitrine</button>
                <button className="btn-apoiar-criador">Apoiar Criador ($)</button>
            </div>
            
            {/* Seção de Informações Principais (Imagem + Texto) */}
            <div className="detalhes-header">
                <img src={projeto.imagem} alt={projeto.titulo} className="detalhes-img" />
                <div className="detalhes-info">
                    <h2>{projeto.titulo}</h2>
                    <p className="criador-info">Por: <strong>{projeto.criador}</strong></p>
                    
                    <div className="badges">
                        <span className="badge">Custo Est.: R$ {projeto.custo}</span>
                        <span className="badge">Tempo: {projeto.tempo}</span>
                        <span className="badge">Dificuldade: {projeto.dificuldade}</span>
                    </div>

                    {projeto.patrocinio != null && (
                        <p style={{color: '#e91e63', fontWeight: 'bold', margin: '15px 0'}}>
                            Patrocinado por: {projeto.patrocinio}
                        </p>
                    )}
                </div>
            </div>

            {/* Espaço reservado para o Vídeo - AGORA ABAIXO DA IMAGEM E INFO */}
            <div className="video-placeholder">
                <p>Reproduzir Vídeo do Tutorial (Placeholder)</p>
            </div>

            <h3 className="titulo-materiais">Lista de Materiais Necessários</h3>
            <ul className="materiais-lista">
                {projeto.materiais.map(function(material, i) {
                    return (
                        <li key={i}>
                            <span>{material.nome} - R$ {material.preco}</span>
                            <button className="btn-afiliado">Comprar</button>
                        </li>
                    );
                })}
            </ul>

            <button className="btn-premium">Baixar Arquivos Premium (R$ 50,00)</button>
        </div>
    );
}