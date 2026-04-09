const tutoriaisData = [
    {
        id: 1, emAlta: true, titulo: "Espada Zangetsu", franquia: "Bleach", criador: "MakerProfissional",
        imagem: "https://placehold.co/400x300/1a0b2e/ff80ab?text=Zangetsu", custo: 120, tempo: "3 Dias", dificuldade: "Média", patrocinio: "Bambu Lab",
        materiais: [{ nome: "Filamento PLA 1kg", preco: 85 }, { nome: "Tinta Prata", preco: 35 }]
    },
    {
        id: 2, emAlta: true, titulo: "Espada Garra Longa (Longclaw)", franquia: "Game of Thrones", criador: "JonSnowProps",
        imagem: "https://placehold.co/400x300/333333/ffffff?text=Garra+Longa", custo: 80, tempo: "4 Dias", dificuldade: "Média", patrocinio: null,
        materiais: [{ nome: "Cano PVC 1m", preco: 15 }, { nome: "EVA 10mm", preco: 45 }]
    },
    {
        id: 3, emAlta: true, titulo: "Máscara do Gabimaru", franquia: "Hell's Paradise", criador: "NinjaCosmaker",
        imagem: "https://placehold.co/400x300/8b0000/ffffff?text=Mascara+Gabimaru", custo: 35, tempo: "1 Dia", dificuldade: "Fácil", patrocinio: "Tekbond",
        materiais: [{ nome: "Tecido Preto 1m", preco: 20 }, { nome: "Elástico", preco: 5 }]
    },
    {
        id: 4, emAlta: false, titulo: "Máscara de Hollow", franquia: "Bleach", criador: "InicianteCos",
        imagem: "https://placehold.co/400x300/ffffff/c2185b?text=Mascara+Hollow", custo: 45, tempo: "2 Dias", dificuldade: "Fácil", patrocinio: null,
        materiais: [{ nome: "Folha de EVA", preco: 25 }, { nome: "Cola de Contato", preco: 20 }]
    },
    {
        id: 5, emAlta: false, titulo: "Espada de Diamante", franquia: "Minecraft", criador: "BlocoMaker",
        imagem: "https://placehold.co/400x300/00bcd4/ffffff?text=Espada+Minecraft", custo: 60, tempo: "2 Dias", dificuldade: "Fácil", patrocinio: null,
        materiais: [{ nome: "Papelão Reforçado", preco: 10 }, { nome: "Tintas Acrílicas", preco: 50 }]
    },
    {
        id: 6, emAlta: false, titulo: "Chapéu de Palha", franquia: "One Piece", criador: "PirateCrafts",
        imagem: "https://placehold.co/400x300/ffb300/ffffff?text=Chapeu+de+Palha", custo: 20, tempo: "1 Dia", dificuldade: "Fácil", patrocinio: null,
        materiais: [{ nome: "Chapéu Base", preco: 15 }, { nome: "Fita Vermelha", preco: 5 }]
    },
    {
        id: 7, emAlta: false, titulo: "Máscara do Ulquiorra", franquia: "Bleach", criador: "Arrancar3D",
        imagem: "https://placehold.co/400x300/4a148c/ffffff?text=Ulquiorra", custo: 90, tempo: "3 Dias", dificuldade: "Difícil", patrocinio: "Bambu Lab",
        materiais: [{ nome: "Resina 3D", preco: 70 }, { nome: "Lixas e Primer", preco: 20 }]
    },
    {
        id: 8, emAlta: false, titulo: "Pokébola Funcional", franquia: "Cobblemon", criador: "ProfessorCarvalho",
        imagem: "https://placehold.co/400x300/e53935/ffffff?text=Pokebola", custo: 110, tempo: "5 Dias", dificuldade: "Média", patrocinio: "Elegoo",
        materiais: [{ nome: "Filamento Vermelho/Branco", preco: 90 }, { nome: "Mini Dobradiça", preco: 10 }]
    }
];

const bountiesIniciais = [
    { id: 1, pedido: "Máscara do Ulquiorra", votos: 254 },
    { id: 2, pedido: "Armadura do Homem de Ferro", votos: 189 },
    { id: 3, pedido: "Espada do Zoro", votos: 145 }
];