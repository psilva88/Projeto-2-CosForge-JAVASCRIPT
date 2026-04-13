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
        dificuldade: "Médio",
        patrocinio: "Bambu Lab",
        premium: { preco: 25, descricao: "Arquivos otimizados + guia de impressão com configurações de suporte" },
        materiais: [
            { nome: "Filamento PLA 1kg", preco: 85 },
            { nome: "Tinta Prata Spray", preco: 35 },
            { nome: "Lixa d'água 220 e 400", preco: 12 },
            { nome: "Primer para plástico", preco: 18 },
            { nome: "Fita crepe (para mascarar durante pintura)", preco: 8 },
            { nome: "Verniz fosco em spray", preco: 22 }
        ]
    },
    {
        id: 2,
        emAlta: true,
        titulo: "Máscara do Ulquiorra",
        franquia: "Bleach",
        criador: "Arrancar3D",
        imagem: "imagens/mascara_ulquiorra.png",
        videoUrl: "https://www.youtube.com/embed/-kY2RauAIzI?si=Itmr4zvQCIpuvDk4",
        custo: 90,
        tempo: "3 Dias",
        dificuldade: "Difícil",
        patrocinio: "Bambu Lab",
        premium: { preco: 30, descricao: "Molde em resina impresso" },
        materiais: [
            { nome: "Resina 3D 500ml", preco: 70 },
            { nome: "Kit Lixas e Primer", preco: 20 },
            { nome: "Tinta acrílica branca e preta", preco: 15 },
            { nome: "Elástico ajustável 1m", preco: 6 },
            { nome: "Luvas de proteção (para resina)", preco: 12 }
        ]
    },
    {
        id: 3,
        emAlta: true,
        titulo: "Espada de Diamante",
        franquia: "Minecraft",
        criador: "BlocoMaker",
        imagem: "imagens/espada_diamante.png",
        videoUrl: "https://www.youtube.com/embed/6rZW4kWJLpQ?si=XpvfMeBV4e3vJAhR",
        custo: 60,
        tempo: "2 Dias",
        dificuldade: "Fácil",
        patrocinio: "Tekbond",
        premium: null,
        materiais: [
            { nome: "Papelão Reforçado (3 folhas)", preco: 10 },
            { nome: "Tintas Acrílicas (cinza, azul, preto)", preco: 30 },
            { nome: "Cola azul/PVA 500ml", preco: 12 },
            { nome: "Pincel chato e fino", preco: 8 },
            { nome: "Régua e estilete", preco: 15 },
            { nome: "Verniz acrílico brilhante", preco: 14 }
        ]
    },
    {
        id: 4,
        emAlta: false,
        titulo: "Máscara Hollow (Ichigo)",
        franquia: "Bleach",
        criador: "InicianteCos",
        imagem: "imagens/mascara_hollow.png",
        videoUrl: "https://www.youtube.com/embed/sw0q7bi_D4I?si=ZaIRDMAbjJSsMvy9",
        custo: 45,
        tempo: "2 Dias",
        dificuldade: "Fácil",
        patrocinio: null,
        premium: null,
        materiais: [
            { nome: "Folha de EVA 2mm (branco)", preco: 15 },
            { nome: "Folha de EVA 2mm (preto)", preco: 10 },
            { nome: "Cola de Contato 75g", preco: 12 },
            { nome: "Tinta preta para detalhes", preco: 8 },
            { nome: "Elástico 50cm", preco: 5 }
        ]
    },
    {
        id: 5,
        emAlta: false,
        titulo: "Chapéu de Palha",
        franquia: "One Piece",
        criador: "PirateCrafts",
        imagem: "imagens/chapeu_luffy.png",
        videoUrl: "https://www.youtube.com/embed/3LbNbRAQjx4?si=vg3XVhE3VrBH6ne0",
        custo: 20,
        tempo: "1 Dia",
        dificuldade: "Fácil",
        patrocinio: null,
        premium: null,
        materiais: [
            { nome: "Chapéu de Palha Base", preco: 15 },
            { nome: "Fita Vermelha 2m", preco: 5 }
        ]
    },
    {
        id: 6,
        emAlta: false,
        titulo: "Armadura Básica",
        franquia: "Genérico",
        criador: "CosplayFacil",
        imagem: "imagens/armadura.png",
        videoUrl: "https://www.youtube.com/embed/3ajOJivJisg?si=BDAanhhI9HbQK_f4",
        custo: 150,
        tempo: "14 Dias",
        dificuldade: "Médio",
        patrocinio: null,
        premium: { preco: 40, descricao: "Moldes em PDF tamanho real para 5 tamanhos" },
        materiais: [
            { nome: "Placa EVA 10mm (pacote 5 unidades)", preco: 80 },
            { nome: "Soprador Térmico 1500W", preco: 50 },
            { nome: "Cola de Contato 250ml", preco: 22 },
            { nome: "Primer spray", preco: 18 },
            { nome: "Tinta acrílica metálica", preco: 25 },
            { nome: "Lixa 120 e 220", preco: 10 },
            { nome: "Fita dupla face larga", preco: 8 },
            { nome: "Elástico para fixação (2m)", preco: 12 }
        ]
    },
    {
        id: 7,
        emAlta: false,
        titulo: "Espada Nozarashi",
        franquia: "Bleach",
        criador: "KenpachiProps",
        imagem: "imagens/nozarashi.png",
        videoUrl: "https://www.youtube.com/embed/1H-KaACjsRM?si=j7P4Ox5QM3Jjzoex",
        custo: 180,
        tempo: "7 Dias",
        dificuldade: "Médio",
        patrocinio: "Madeira BR",
        premium: null,
        materiais: [
            { nome: "Cabo de Madeira MDF 1.5m", preco: 40 },
            { nome: "Folha EVA 5mm (cinza)", preco: 35 },
            { nome: "Tinta Metálica Prata", preco: 28 },
            { nome: "Tinta preta para acabamento", preco: 35 },
            { nome: "Cola de Contato 100ml", preco: 18 },
            { nome: "Lixa 180 e 320", preco: 10 },
            { nome: "Fita de tecido preta 1m (cabo)", preco: 14 },
            { nome: "Verniz fosco spray", preco: 20 }
        ]
    },
    {
        id: 8,
        emAlta: false,
        titulo: "Espada Ryujin Jakka",
        franquia: "Bleach",
        criador: "ShigekuniCos",
        imagem: "imagens/ryujinjakka.png",
        videoUrl: "https://www.youtube.com/embed/9-dDRE0RcV0?si=dX7w3A1b60UCUIus",
        custo: 110,
        tempo: "4 Dias",
        dificuldade: "Fácil",
        patrocinio: null,
        premium: null,
        materiais: [
            { nome: "Chapa de MDF 3mm ou Madeira leve (Lâmina)", preco: 30 },
            { nome: "Tinta Spray Prata Metálica", preco: 25 },
            { nome: "Placa de EVA 5mm (para a guarda/tsuba e detalhes)", preco: 15 },
            { nome: "Fita de cetim roxa escuro (para o cabo/tsuka-ito)", preco: 20 },
            { nome: "Cola de contato e tinta acrílica preta", preco: 20 }
        ]
    },
    {
        id: 9,
        emAlta: false,
        titulo: "Espadas do Zoro (3 Estilos)",
        franquia: "One Piece",
        criador: "SwordsmanBR",
        imagem: "imagens/espadas_zoro.png",
        videoUrl: [
            "https://www.youtube.com/embed/Id0FNIwSmdc?si=5eYrbxGjhyWJJ3Ij",
            "https://www.youtube.com/embed/1FYLvRg2Zb0?si=aiQBlVWrQL0etl9v",
            "https://www.youtube.com/embed/ovrTVFeWPdY?si=LkoEYFbQ-A-xcGf5  "
        ],
        custo: 280,
        tempo: "14 Dias",
        dificuldade: "Difícil",
        patrocinio: "Bambu Lab",
        premium: { preco: 50, descricao: "3 arquivoss (Wado, Enma e Sandai) + guia de pintura por etapas em PDF" },
        materiais: [
            { nome: "Filamento PETG 2kg", preco: 160 },
            { nome: "Kit de Lixa 120/220/400", preco: 20 },
            { nome: "Primer spray 2 unidades", preco: 36 },
            { nome: "Tintas Acrílicas Variadas (5 cores)", preco: 45 },
            { nome: "Verniz fosco e brilhante", preco: 28 },
            { nome: "Suporte de cintura (coldre adaptado)", preco: 35 }
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
        premium: { preco: 80, descricao: "Pacote completo: moldes A0 para todas as peças + cronograma de montagem" },
        materiais: [
            { nome: "Placas de EVA Alta Densidade 10mm (10 unidades)", preco: 200 },
            { nome: "Placas de EVA 5mm para detalhes (5 unidades)", preco: 80 },
            { nome: "Cola de Contato 500ml (2 unidades)", preco: 60 },
            { nome: "Soprador Térmico", preco: 50 },
            { nome: "Tinta acrílica verde escuro, cinza e preto", preco: 55 },
            { nome: "Primer spray (3 unidades)", preco: 54 },
            { nome: "Verniz fosco spray (3 unidades)", preco: 60 },
            { nome: "Fita dupla face e elásticos", preco: 25 },
            { nome: "Lixa 120, 220 e 400 (kit)", preco: 20 },
            { nome: "Espuma para enchimento interno", preco: 40 }
        ]
    },
    {
        id: 11,
        emAlta: false,
        titulo: "Bandana e Kunai do Naruto",
        franquia: "Naruto",
        criador: "HokageCraft",
        imagem: "imagens/bandana_kunai.png",
        videoUrl: [
            "https://www.youtube.com/embed/pWZVlPDqfmc?si=0LRcDNDmmntkjLjt",
            "https://www.youtube.com/embed/z4D3AS6vWp8?si=w6uOLOYwZ-bnGIFs"
        ],
        custo: 55,
        tempo: "2 Dias",
        dificuldade: "Fácil",
        patrocinio: null,
        premium: null,
        materiais: [
            { nome: "Folha de EVA cinza 2mm", preco: 10 },
            { nome: "Fita de tecido azul marinho 1m", preco: 8 },
            { nome: "Tinta prata e preta acrílica", preco: 14 },
            { nome: "Papel metálico prateado (para detalhes)", preco: 7 },
            { nome: "Cola quente (bastões)", preco: 6 },
            { nome: "Elástico 50cm para bandana", preco: 5 },
            { nome: "Verniz fosco spray", preco: 18 }
        ]
    },
    {
        id: 12,
        emAlta: false,
        titulo: "Invencível Cosplay",
        franquia: "Invincible",
        criador: "Conquest",
        imagem: "imagens/invencivel.png",
        videoUrl: "https://www.youtube.com/embed/oWqYMXhJPT4?si=kMd99nJ6gPzq3TN7",
        custo: 220,
        tempo: "10 Dias",
        dificuldade: "Difícil",
        patrocinio: null,
        premium: { preco: 35, descricao: "Moldes da capa em PDF + diagrama do equipamento para referência de construção" },
        materiais: [
            { nome: "Tecido Spandex/Lycra Azul 2m", preco: 45 },
            { nome: "Tecido Spandex/Lycra Amarelo 2m", preco: 45 },
            { nome: "Placa de EVA 2mm (para estrutura da máscara)", preco: 15 },
            { nome: "Tela branca vazada (para os olhos da máscara)", preco: 15 },
            { nome: "Luvas amarelas base", preco: 20 },
            { nome: "Zíper invisível 50cm", preco: 5 },
            { nome: "Tinta flexível amarela (para botas)", preco: 25 },
            { nome: "Sapatilha base (para fazer as boot covers)", preco: 25 },
            { nome: "Cola de contato 100ml", preco: 15 },
            { nome: "Linha de costura reforçada (azul e amarela)", preco: 10 }
        ]
    },
    {
        id: 13,
        emAlta: false,
        titulo: "Espada do Tanjiro",
        franquia: "Demon Slayer",
        criador: "DemonBlade",
        imagem: "imagens/tanjiro.png",
        videoUrl: "https://www.youtube.com/embed/BdrFBZGGc9Y?si=VrjA_FS39BGXU5n4",
        custo: 85,
        tempo: "3 Dias",
        dificuldade: "Fácil",
        patrocinio: null,
        premium: null,
        materiais: [
            { nome: "Folha de EVA 5mm preta (lâmina)", preco: 20 },
            { nome: "Bastão de MDF 40cm (cabo)", preco: 15 },
            { nome: "Tinta preta e vermelha acrílica", preco: 16 },
            { nome: "Fita de tecido vermelho escuro 80cm", preco: 10 },
            { nome: "Cola de Contato 75g", preco: 12 },
            { nome: "Lixa 220 para acabamento", preco: 6 },
            { nome: "Verniz brilhante spray", preco: 18 }
        ]
    },
    {
        id: 14,
        emAlta: false,
        titulo: "Máscara do Homem-Aranha",
        franquia: "Marvel",
        criador: "WebSlinger",
        imagem: "imagens/homem_aranha.png",
        videoUrl: "https://www.youtube.com/embed/jnxqm10UaE4?si=GZXlo9gHdRJ4R2Ja",
        custo: 310,
        tempo: "14 Dias",
        dificuldade: "Difícil",
        patrocinio: null,
        premium: null,
        materiais: [
            { nome: "Faceshell em Resina", preco: 90 },
            { nome: "Par de Lentes com moldura magnética e tela", preco: 65 },
            { nome: "Tecido Lycra/Spandex Vermelho com textura 1m", preco: 55 },
            { nome: "Tinta Relevo 3D Preta (Puff Paint) para as teias", preco: 35 },
            { nome: "Cola de contato e Supercola", preco: 25 },
            { nome: "Ímãs de Neodímio (para fixar as lentes)", preco: 20 },
            { nome: "Zíper invisível vermelho (para a nuca)", preco: 10 },
            { nome: "Espuma fina para forro interno", preco: 10 }
        ]
    },
    {
        id: 15,
        emAlta: false,
        titulo: "Capacete do Mandaloriano",
        franquia: "Star Wars",
        criador: "BeskarForge",
        imagem: "imagens/mandaloriano.png",
        videoUrl: "https://www.youtube.com/embed/p2LbHjxXyoU?si=NTJsDeQYJigIABpZ",
        custo: 195,
        tempo: "7 Dias",
        dificuldade: "Difícil",
        patrocinio: null,
        premium: { preco: 30, descricao: "Arquivos completos do capacete em 3 partes encaixáveis + guia de envelhecimento metálico" },
        materiais: [
            { nome: "Filamento PLA+ prata 1kg", preco: 90 },
            { nome: "Primer spray para plástico", preco: 20 },
            { nome: "Tinta acrílica prata metálica", preco: 18 },
            { nome: "Tinta preta para envelhecimento", preco: 12 },
            { nome: "Lixa d'água 180, 320 e 600", preco: 15 },
            { nome: "Verniz metálico em spray", preco: 22 },
            { nome: "Espuma de vedação (para conforto interno)", preco: 18 }
        ]
    }
];

// bounties iniciais pra página do bounty system
const bountiesIniciais = [
    { id: 1, pedido: "Espada do Jonh Snow", votos: 312 },
    { id: 2, pedido: "Capacete do Darth Vader", votos: 198 },
    { id: 3, pedido: "Tridente do Aquaman", votos: 87 }
];
