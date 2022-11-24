
export const backSkill = [

    {
        name: "NodeJs",
        porcent: "50%",
        type: "back"
    },
    {
        name: "MySQL",
        porcent: "40%",
        type: "back"
    },
    {
        name: "Firebase",
        porcent: "40%",
        type: "back"
    },

]

export const frontSkill = [

    {
        name: "HTML",
        porcent: "85%",
        type: "front"
    },
    {
        name: "CSS",
        porcent: "80%",
        type: "front"
    },
    {
        name: "Javascript",
        porcent: "79%",
        type: "front"
    },

    {
        name: "ReactJs",
        porcent: "75%",
        type: "front"
    },
    {
        name: "TailwindCss",
        porcent: "70%",
        type: "front"
    },


]

export const softSkill = [
    {
        name: "Trabalho em equipe",
        porcent: "90%",
        type: "soft"
    },
    {
        name: "Comprometimento",
        porcent: "85%",
        type: "soft"
    },
    {
        name: "Pontualidade",
        porcent: "88%",
        type: "soft"
    },
    {
        name: "Controle Emocional",
        porcent: "85%",
        type: "soft"
    },

]


import bateria from '../assets/images/projetos/bateria.png';
import calculadora from '../assets/images/projetos/calculadora.png';
import imc from '../assets/images/projetos/imc.png';
import lojaroupa from '../assets/images/projetos/lojaroupa.png';
import memorygame from '../assets/images/projetos/memorygame.png';
import todolist from '../assets/images/projetos/todolist.png';
import urna from '../assets/images/projetos/urna.png';
import watch from '../assets/images/projetos/watch.png';
import portfolio from '../assets/images/projetos/portfolio.png'



import html from '../assets/images/svg/html.svg';
import css from '../assets/images/svg/css.svg';
import javascript from '../assets/images/svg/javascript.svg';
import react from '../assets/images/svg/react.svg';
import typescript from '../assets/images/svg/typescript.svg';
import tailwind from '../assets/images/svg/tailwind.svg';
import mysql from '../assets/images/svg/mysql.svg';
import firebase from '../assets/images/svg/firebase.svg';
import git from '../assets/images/svg/git.svg';
import github from '../assets/images/svg/github.svg';



export const dataProjetos = [
    {
        name: 'Meu portfólio pessoal',
        description: 'Portfólio pessoal desenvolvido usando meus conhecimentos em ReactJs, Typescript, TailwindCSS',
        src: portfolio,
        type: 'ReactJs',
        icons: [react, typescript, tailwind],
        link: 'https://github.com/CamilodeAssis/personal-portfolio'
        

    },
    {
        name: 'Bateria Javascript',
        description: 'Simulador de bateria desenvolvido em Javascript durante o curso da B7Web',
        src: bateria,
        type: 'Javascript',
        icons: [javascript, html, css, ],
        link: 'https://github.com/CamilodeAssis/bateria-js'
        

    },
    {
        name: 'Calculadora Javascript',
        description: 'Calculadora desenvolvida em Javascript',
        src: calculadora,
        type: 'Javascript',
        icons: [javascript, html, css, ],
        link: 'https://github.com/CamilodeAssis/calculadora-js'

    },
    {
        name: 'Loja de roupas Javascript',
        description: 'Loja de roupas desenvolvida em Javascript',
        src: lojaroupa,
        type: 'Javascript',
        icons: [javascript, html, css, ],
        link: 'https://github.com/CamilodeAssis/Projeto-loja-com-carrinho-de-compras-Javascript-'

    },
    {
        name: 'Urna eletrônica Javascript',
        description: 'Simulador da urna eletrônica desenvolvida em Javascript',
        src: urna,
        type: 'Javascript',
        icons: [javascript, html, css, ],
        link: 'https://github.com/CamilodeAssis/urna-eletronica-js'

    },
    {
        name: 'Relógio analógico  Javascript',
        description: 'Relógio analógico desenvolvido em Javascript',
        src: watch,
        type: 'Javascript',
        icons: [javascript, html, css, ],
        link: 'https://github.com/CamilodeAssis/relogio-js'

    },
    {
        name: 'Calculadora IMC ReactJs',
        description: 'Calculadora IMC desenvolvida em ReactJs + Typescript',
        src: imc,
        type: 'ReactJs',
        icons: [react, typescript, tailwind],
        link: 'https://github.com/CamilodeAssis/calculadora-imc-react'

    },
    {
        name: 'Lista de taferas ReactJs',
        description: 'Lista de tarefas do dia a dia desenvolida em ReactJs + Typescript',
        src: todolist,
        type: 'ReactJs',
        icons: [react, typescript, tailwind, firebase] ,
        link: 'https://github.com/CamilodeAssis/To-do-list'

    },
    {
        name: 'Jogo da memória ReactJs',
        description: 'Jogo da memória desenvolido em ReactJs + Typescript',
        src: memorygame,
        type: 'ReactJs',
        icons: [react, typescript, tailwind] ,
        link: 'https://github.com/CamilodeAssis/game-react-ts'

    },
]


export const dataQuali = [
    {
        name: "HTML & CSS",
        escola: "B7Web",
        data: "2022",
        icon: [html, css],
    },
    {
        name: "Javascript",
        escola: "B7Web",
        data: "2022",
        icon: javascript,
    },
    {
        name: "Typescript",
        escola: "B7Web",
        data: "2022",
        icon: typescript,
    },
    {
        name: "ReactJs",
        escola: "B7Web",
        data: "2022",
        icon: react,
    },
    {
        name: "Análise e Desenvolvimento de Sistemas",
        escola: "Estácio",
        data: "Cursando (2023)",
        icon: [javascript, html, css],
    },
    {
        name: "Língua polonesa e matérias especializadas",
        escola: "Miedzynarodowe Centrum Ksztalcenia Politechniki",
        data: "2018",
        
    },
    {
        name: "Web Design",
        escola: "Virtual Myllênnyum Informática",
        data: "2012",
        
    }
]