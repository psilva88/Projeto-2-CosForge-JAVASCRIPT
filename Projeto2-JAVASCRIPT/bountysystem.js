function BountySystem() {
    const [bounties, setBounties] = React.useState(bountiesIniciais);

    // Lógica manual para ser fácil de explicar
    function votar(idDoProjeto) {
        let novaLista = [];
        
        for (let i = 0; i < bounties.length; i++) {
            let itemAtual = bounties[i];
            if (itemAtual.id === idDoProjeto) {
                itemAtual.votos = itemAtual.votos + 1; // Soma um voto
            }
            novaLista.push(itemAtual);
        }

        // Organiza a lista do maior pro menor
        novaLista.sort(function(a, b) {
            return b.votos - a.votos;
        });

        setBounties(novaLista);
    }

    return (
        <div className="lateral-direita">
            <h3 style={{color: '#4a148c', marginBottom: '10px'}}>🎯 Bounty System</h3>
            <p style={{fontSize: '0.85rem', marginBottom: '20px', color: '#666'}}>
                Os tutoriais mais votados pela comunidade viram desafios valendo prêmios!
            </p>
            
            {bounties.map(function(bounty, index) {
                // Se for o primeiro, ganha a classe de destaque
                let classeDoItem = "bounty-item";
                if (index === 0) {
                    classeDoItem = "bounty-item primeiro-lugar";
                }

                return (
                    <div key={bounty.id} className={classeDoItem}>
                        <div>
                            <strong>{index + 1}º Lugar</strong> <br/>
                            {bounty.pedido} <br/>
                            <small style={{color: '#888'}}>{bounty.votos} Votos</small>
                        </div>
                        
                        <button className="btn-votar" onClick={() => votar(bounty.id)}>
                            + Votar
                        </button>
                    </div>
                );
            })}
        </div>
    );
}