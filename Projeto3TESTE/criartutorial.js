// Criar Tutorial
function CriarTutorial({ voltarParaHome }) {
    function salvarTutorial(evento) {
        evento.preventDefault();
        alert('Tutorial enviado! Aguarda aprovacao da moderacao antes de aparecer no feed.');
        voltarParaHome();
    }

    return (
        <div className="container-pagina">
            <div className="card-formulario">
                <h2 className="titulo-secao" style={{fontSize: '1.15rem'}}>
                    Publicar Novo Tutorial
                </h2>
                <p className="subtitulo">
                    Compartilhe seu conhecimento com a comunidade. Tutoriais aprovados aparecem no feed.
                </p>

                <form onSubmit={salvarTutorial}>
                    <div className="grupo-input">
                        <label>Titulo do Projeto *</label>
                        <input type="text" placeholder="Ex: Armadura Mandaloriana" required />
                    </div>
                    <div className="grupo-input">
                        <label>Franquia / Universo *</label>
                        <input type="text" placeholder="Ex: Star Wars, Dragon Ball..." required />
                    </div>
                    <div className="linha-inputs">
                        <div className="grupo-input">
                            <label>Custo Estimado (R$) *</label>
                            <input type="number" placeholder="0" required min="0" />
                        </div>
                        <div className="grupo-input">
                            <label>Tempo Estimado (dias) *</label>
                            <input type="number" placeholder="0" required min="1" />
                        </div>
                        <div className="grupo-input">
                            <label>Dificuldade *</label>
                            <select required>
                                <option value="">Selecione...</option>
                                <option value="Facil">Fácil</option>
                                <option value="Media">Médio</option>
                                <option value="Dificil">Difícil</option>
                            </select>
                        </div>
                    </div>
                    <div className="grupo-input">
                        <label>Materiais Necessarios *</label>
                        <textarea
                            rows="3"
                            placeholder="Liste os materiais separados por virgula. Ex: EVA 5mm, Cola de Contato, Tinta Prata"
                            required
                        ></textarea>
                    </div>
                    <div className="acoes-formulario">
                        <button type="button" className="btn-secundario" onClick={voltarParaHome}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn-primario">
                            Publicar Tutorial
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
