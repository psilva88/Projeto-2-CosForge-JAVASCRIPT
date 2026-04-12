// Dados dos Tutoriais
const tutoriaisData = [
    {
        id: 1,
        emAlta: true,
        titulo: "Espada Zangetsu",
        franquia: "Bleach",
        criador: "MakerProfissional",
        imagem: "imagens/zangetsu.png",
        videoUrl: "https://www.youtube.com/embed/FgPOX6dGFUQ?si=OZAbANEJlkK_-yWa",
        custo: 120,
        tempo: "3 Dias",
        dificuldade: "Média",
        patrocinio: "Bambu Lab",
        materiais: [
            { nome: "Filamento PLA 1kg", preco: 85 },
            { nome: "Tinta Prata Spray", preco: 35 }
        ]
    },
    {
        id: 2,
        emAlta: true,
        titulo: "Máscara do Ulquiorra",
        franquia: "Bleach",
        criador: "Arrancar3D",
        imagem: "imagens/mascara_ulquiorra.png",
        videoUrl: "",
        custo: 90,
        tempo: "3 Dias",
        dificuldade: "Difícil",
        patrocinio: "Bambu Lab",
        materiais: [
            { nome: "Resina 3D 500ml", preco: 70 },
            { nome: "Kit Lixas e Primer", preco: 20 }
        ]
    },
    {
        id: 3,
        emAlta: true,
        titulo: "Espada de Ferro",
        franquia: "Minecraft",
        criador: "BlocoMaker",
        imagem: "imagens/minecraft_sword.png",
        videoUrl: "",
        custo: 60,
        tempo: "2 Dias",
        dificuldade: "Fácil",
        patrocinio: "Tekbond",
        materiais: [
            { nome: "Papelão Reforçado", preco: 10 },
            { nome: "Tintas Acrílicas", preco: 50 }
        ]
    },
    {
        id: 4,
        emAlta: false,
        titulo: "Máscara de Hollow",
        franquia: "Bleach",
        criador: "InicianteCos",
        imagem: "imagens/mascara_hollow.png",
        videoUrl: "",
        custo: 45,
        tempo: "2 Dias",
        dificuldade: "Fácil",
        patrocinio: null,
        materiais: [
            { nome: "Folha de EVA 2mm", preco: 25 },
            { nome: "Cola de Contato", preco: 20 }
        ]
    },
    {
        id: 5,
        emAlta: false,
        titulo: "Chapéu de Palha",
        franquia: "One Piece",
        criador: "PirateCrafts",
        imagem: "imagens/chapeu_luffy.png",
        videoUrl: "",
        custo: 20,
        tempo: "1 Dia",
        dificuldade: "Fácil",
        patrocinio: null,
        materiais: [
            { nome: "Chapéu de Palha Base", preco: 15 },
            { nome: "Fita Vermelha 2m", preco: 5 }
        ]
    },
    {
        id: 6,
        emAlta: false,
        titulo: "Armadura EVA Básica",
        franquia: "Genérico",
        criador: "CosplayFacil",
        imagem: "imagens/armadura.png",
        videoUrl: "https://www.youtube.com/embed/3ajOJivJisg?si=BDAanhhI9HbQK_f4",
        custo: 150,
        tempo: "14 Dias",
        dificuldade: "Média",
        patrocinio: null,
        materiais: [
            { nome: "Placa EVA 10mm", preco: 100 },
            { nome: "Soprador Térmico", preco: 50 }
        ]
    },
    {
        id: 7,
        emAlta: false,
        titulo: "Espada Nozarashi",
        franquia: "Bleach",
        criador: "KenpachiProps",
        imagem: "imagens/nozarashi.png",
        videoUrl: "",
        custo: 180,
        tempo: "7 Dias",
        dificuldade: "Média",
        patrocinio: "Madeira BR",
        materiais: [
            { nome: "Cabo de Madeira 1.5m", preco: 40 },
            { nome: "EVA 5mm e Tinta Metálica", preco: 140 }
        ]
    },
    {
        id: 8,
        emAlta: false,
        titulo: "Ryujin Jakka",
        franquia: "Bleach",
        criador: "ShigekuniCos",
        imagem: "imagens/ryujinjakka.png",
        videoUrl: "",
        custo: 110,
        tempo: "4 Dias",
        dificuldade: "Fácil",
        patrocinio: null,
        materiais: [
            { nome: "Bastão de Madeira Entalhada", preco: 80 },
            { nome: "Fita e Acabamento", preco: 30 }
        ]
    },
    {
        id: 9,
        emAlta: false,
        titulo: "Espadas do Zoro (3 Estilos)",
        franquia: "One Piece",
        criador: "SwordsmanBR",
        imagem: "imagens/espadas_zoro.png",
        videoUrl: "",
        custo: 280,
        tempo: "14 Dias",
        dificuldade: "Difícil",
        patrocinio: "Bambu Lab",
        materiais: [
            { nome: "Filamento PETG 2kg", preco: 160 },
            { nome: "Kits de Lixa e Tintas Variadas", preco: 120 }
        ]
    },
    {
        id: 10,
        emAlta: false,
        titulo: "Godzilla Cosplay Completo",
        franquia: "Godzilla",
        criador: "GodCraft",
        imagem: "imagens/godzilla_cosplay.png",
        videoUrl: "",
        custo: 700,
        tempo: "21 Dias",
        dificuldade: "Difícil",
        patrocinio: "Tekbond",
        materiais: [
            { nome: "Placas de EVA de Alta Densidade", preco: 55 },
            { nome: "Cola de Contato e Verniz", preco: 20 }
        ]
    }
];

// bounties iniciais pra página do bounty system
const bountiesIniciais = [
    { id: 1, pedido: "Máscara do Obito Uchiha", votos: 254 },
    { id: 2, pedido: "Armadura do Homem de Ferro", votos: 189 },
    { id: 3, pedido: "Espada do Roronoa Zoro", votos: 145 }
];
