// Detalhes do Projeto
function Detalhes({ projeto, voltarParaHome }) {
    return (
        <div className="detalhes-container">
            {/* Topo com Botão de Voltar e Botão de Apoiar */}
            <div className="detalhes-header-topo">
                <button className="btn-voltar" onClick={voltarParaHome}>Voltar</button>
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
                        <div className="tag-patrocinio">
                            Patrocinado por: {projeto.patrocinio}
                        </div>
                    )}
                </div>
            </div>

            {/* Espaço reservado para o Vídeo - AGORA ABAIXO DA IMAGEM E INFO */}
            {projeto.videoUrl ? (
                <div className="video-wrapper">
                    <iframe
                        src={projeto.videoUrl}
                        title={`Video do tutorial ${projeto.titulo}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div className="video-placeholder">
                    <p>Video do Tutorial (em breve)</p>
                </div>
            )}

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