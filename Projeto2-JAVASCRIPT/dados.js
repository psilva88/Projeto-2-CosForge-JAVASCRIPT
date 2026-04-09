const tutoriaisData = [
    {
        id: 1,
        titulo: "Espada Zangetsu - Escala Real",
        franquia: "Bleach",
        criador: "MakerProfissional",
        imagem: "https://placehold.co/400x300/4a148c/FFF?text=Espada+Zangetsu", // Imagem placeholder roxa
        custo: 120,
        tempo: "3 Dias",
        dificuldade: "Intermediária",
        patrocinio: "Bambu Lab",
        materiais: [
            { nome: "Filamento PLA Preto 1kg", preco: 85 },
            { nome: "Tinta Acrílica Prata", preco: 35 }
        ]
    },
    {
        id: 2,
        titulo: "Máscara de Hollow",
        franquia: "Bleach",
        criador: "InicianteCos",
        imagem: "https://placehold.co/400x300/e91e63/FFF?text=Mascara+Hollow", // Imagem placeholder rosa
        custo: 45,
        tempo: "1 Fim de Semana",
        dificuldade: "Fácil",
        patrocinio: null,
        materiais: [
            { nome: "Folha de EVA 5mm", preco: 25 },
            { nome: "Cola de Contato Tekbond", preco: 20 }
        ]
    },
    {
        id: 3,
        titulo: "Armadura do Homem de Ferro",
        franquia: "Marvel",
        criador: "TonyStarkBR",
        imagem: "https://placehold.co/400x300/9c27b0/FFF?text=Armadura+EVA",
        custo: 250,
        tempo: "2 Meses",
        dificuldade: "Difícil",
        patrocinio: null,
        materiais: [
            { nome: "Kit EVA 10mm", preco: 150 },
            { nome: "LEDs Azuis", preco: 40 }
        ]
    }
];

const bountiesIniciais = [
    { id: 1, pedido: "Máscara do Ulquiorra", votos: 154 },
    { id: 2, pedido: "Espada do Sasuke", votos: 89 },
    { id: 3, pedido: "Mochila Caça-Fantasmas", votos: 210 }
];