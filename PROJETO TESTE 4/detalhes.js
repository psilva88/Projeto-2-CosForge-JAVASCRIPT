// Detalhes do Projeto
function Detalhes({ projeto, voltarParaHome }) {
    return (
        <div className="detalhes-container">

            <div className="detalhes-header-topo">
                <button className="btn-voltar" onClick={voltarParaHome}>Voltar</button>
                <button className="btn-apoiar-criador">Apoiar Criador ($)</button>
            </div>
            
            {/* Informações Principais */}
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

            {}
            {(function() {

                let videos = Array.isArray(projeto.videoUrl)
                    ? projeto.videoUrl.filter(function(v) { return v !== ''; })
                    : (projeto.videoUrl ? [projeto.videoUrl] : []);

                if (videos.length === 0) {
                    return (
                        <div className="video-placeholder">
                            <p>Video do Tutorial (em breve)</p>
                        </div>
                    );
                }

                return (
                    <div>
                        {videos.map(function(url, i) {
                            return (
                                <div key={i} className="video-wrapper">
                                    {videos.length > 1 && (
                                        <p className="video-label">Parte {i + 1} de {videos.length}</p>
                                    )}
                                    <iframe
                                        src={url}
                                        title={`Video ${i + 1} do tutorial ${projeto.titulo}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            );
                        })}
                    </div>
                );
            })()}

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

            {projeto.premium !== null && (
                <div className="premium-box">
                    <p className="premium-descricao">{projeto.premium.descricao}</p>
                    <button className="btn-premium">
                        Baixar Arquivos Premium — R$ {projeto.premium.preco},00
                    </button>
                </div>
            )}
        </div>
    );
}