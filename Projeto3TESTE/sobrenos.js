// Sobre Nós
function SobreNos() {
    const membros = [
        { inicial: 'A', nome: 'Arthur Pereira', papel: 'Front-end' },
        { inicial: 'R', nome: 'Rodrigo Lira', papel: 'Front-end' },
        { inicial: 'B', nome: 'Bernardo Ramos', papel: 'Design' },
        { inicial: 'L', nome: 'Luiz Gustavo', papel: 'Dados' },
        { inicial: 'G', nome: 'Georgio Filho', papel: 'Conteúdo' }
    ];

    const passos = [
        { num: '1', titulo: 'Escolha o projeto', desc: 'Filtre por orçamento, tempo e dificuldade até achar o cosplay certo pra você.' },
        { num: '2', titulo: 'Siga o tutorial', desc: 'Lista de materiais, vídeo e passo a passo detalhado em um lugar só.' },
        { num: '3', titulo: 'Compre os materiais', desc: 'Links diretos para comprar tudo com o melhor preço, sem sair da plataforma.' }
    ];

    function enviarContato(e) {
        e.preventDefault();
        alert('Mensagem enviada! Entraremos em contato em breve.');
    }

    return (
        <div className="container-pagina">

            {/* Hero */}
            <div className="hero-banner" style={{marginBottom: '32px'}}>
                <h1>Sobre o CosForge</h1>
                <h3>
                    Nascemos da frustração de não encontrar tutoriais organizados. Nossa missão é
                    centralizar tudo que um cosplayer precisa em um lugar só, com orçamento real, tempo estimado e dificuldade.
                </h3>
            </div>

            {/* Como Funciona */}
            <h2 className="titulo-secao">Como Funciona</h2>
            <div className="passos-grid">
                {passos.map(function(passo) {
                    return (
                        <div key={passo.num} className="passo-card">
                            <div className="passo-num">{passo.num}</div>
                            <h3>{passo.titulo}</h3>
                            <p>{passo.desc}</p>
                        </div>
                    );
                })}
            </div>

            {/* Quem fez */}
            <h2 className="titulo-secao">Quem Fez o CosForge</h2>
            <div className="time-grid">
                {membros.map(function(m) {
                    return (
                        <div key={m.nome} className="membro-card">
                            <div className="membro-avatar">{m.inicial}</div>
                            <p className="membro-nome">{m.nome}</p>
                            <p className="membro-papel">{m.papel}</p>
                        </div>
                    );
                })}
            </div>

            {/* Contato */}
            <h2 className="titulo-secao">Contato</h2>
            <div className="card-formulario-largo">
                <p className="subtitulo">Tem uma marca ou produto relacionado ao universo maker? Entre em contato.</p>
                <form onSubmit={enviarContato}>
                    <div className="linha-inputs">
                        <div className="grupo-input">
                            <input type="text" placeholder="Nome" required />
                        </div>
                        <div className="grupo-input">
                            <input type="email" placeholder="E-mail" required />
                        </div>
                    </div>
                    <div className="linha-inputs">
                        <div className="grupo-input">
                            <input type="text" placeholder="Empresa / Marca" required />
                        </div>
                        <div className="grupo-input">
                            <select required>
                                <option value="">Tipo de parceria</option>
                                <option>Patrocínio de Tutorial</option>
                                <option>Marketing de Afiliados</option>
                                <option>Bounty System</option>
                                <option>Outro</option>
                            </select>
                        </div>
                    </div>
                    <div className="grupo-input">
                        <textarea rows="5" placeholder="Mensagem..." required></textarea>
                    </div>
                    <button type="submit" className="btn-primario" style={{width: '100%'}}>
                        Enviar mensagem
                    </button>
                </form>
            </div>

        </div>
    );
}
