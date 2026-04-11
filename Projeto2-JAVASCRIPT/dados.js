// Simulação do nosso banco de dados
const tutoriaisData = [
    {
        id: 1, emAlta: true, titulo: "Espada Zangetsu", franquia: "Bleach", criador: "MakerProfissional",
        imagem: "imagens/zangetsu.png", custo: 120, tempo: "3 Dias", dificuldade: "Média", patrocinio: "Bambu Lab",
        materiais: [{ nome: "Filamento PLA 1kg", preco: 85 }, { nome: "Tinta Prata", preco: 35 }]
    },
    {
        id: 2, emAlta: true, titulo: "Máscara do Ulquiorra", franquia: "Bleach", criador: "Arrancar3D",
        imagem: "imagens/mascara_ulquiorra.png", custo: 90, tempo: "3 Dias", dificuldade: "Difícil", patrocinio: "Bambu Lab",
        materiais: [{ nome: "Resina 3D", preco: 70 }, { nome: "Lixas e Primer", preco: 20 }]
    },
    {
        id: 3, emAlta: true, titulo: "Espada de Ferro", franquia: "Minecraft", criador: "BlocoMaker",
        imagem: "imagens/minecraft_sword.png", custo: 60, tempo: "2 Dias", dificuldade: "Fácil", patrocinio: "Tekbond",
        materiais: [{ nome: "Papelão Reforçado", preco: 10 }, { nome: "Tintas Acrílicas", preco: 50 }]
    },
    {
        id: 4, emAlta: false, titulo: "Máscara de Hollow", franquia: "Bleach", criador: "InicianteCos",
        imagem: "imagens/mascara_hollow.png", custo: 45, tempo: "2 Dias", dificuldade: "Fácil", patrocinio: null,
        materiais: [{ nome: "Folha de EVA", preco: 25 }, { nome: "Cola de Contato", preco: 20 }]
    },
    {
        id: 5, emAlta: false, titulo: "Chapéu de Palha", franquia: "One Piece", criador: "PirateCrafts",
        imagem: "imagens/chapeu_luffy.png", custo: 20, tempo: "1 Dia", dificuldade: "Fácil", patrocinio: null,
        materiais: [{ nome: "Chapéu Base", preco: 15 }, { nome: "Fita Vermelha", preco: 5 }]
    },
    {
        id: 6, emAlta: false, titulo: "Armadura EVA Básica", franquia: "Genérico", criador: "CosplayFacil",
        imagem: "imagens/armadura.png", custo: 150, tempo: "2 Semanas", dificuldade: "Média", patrocinio: null,
        materiais: [{ nome: "Placa EVA 10mm", preco: 100 }, { nome: "Soprador Térmico", preco: 50 }]
    }
];

const bountiesIniciais = [
    { id: 1, pedido: "Máscara do Zaraki", votos: 254 },
    { id: 2, pedido: "Armadura do Homem de Ferro", votos: 189 },
    { id: 3, pedido: "Espada do Zoro", votos: 145 }
];