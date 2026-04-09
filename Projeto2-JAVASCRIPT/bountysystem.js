function BountySystem() {
    const [bounties, setBounties] = React.useState(bountiesIniciais);

    const votar = (id) => {
        const novos = bounties.map(b => b.id === id ? { ...b, votos: b.votos + 1 } : b);
        novos.sort((a, b) => b.votos - a.votos);
        setBounties(novos);
    };

    return (
        <div className="lateral-direita">
            <h3 style={{color: '#4a148c', marginBottom: '15px'}}>🎯 Bounty System</h3>
            <p style={{fontSize: '0.85rem', marginBottom: '15px', color: '#666'}}>
                Os tutoriais mais votados viram desafios!
            </p>
            {bounties.map((b, index) => (
                <div key={b.id} className="bounty-item">
                    <div>
                        <strong>{index + 1}º</strong> {b.pedido}<br/>
                        <small>{b.votos} Votos</small>
                    </div>
                    <button className="btn-votar" onClick={() => votar(b.id)}>▲</button>
                </div>
            ))}
        </div>
    );
}