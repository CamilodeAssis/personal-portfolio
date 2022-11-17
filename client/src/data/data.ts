
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

]


import bateria from '../assets/images/projetos/bateria.png';
import calculadora from '../assets/images/projetos/calculadora.png';
import imc from '../assets/images/projetos/imc.png';
import lojaroupa from '../assets/images/projetos/lojaroupa.png';
import memorygame from '../assets/images/projetos/memorygame.png';
import todolist from '../assets/images/projetos/todolist.png';
import urna from '../assets/images/projetos/urna.png';
import watch from '../assets/images/projetos/watch.png';



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
        name: 'Bateria Javascript',
        description: 'Simulador de bateria desenvolvido em Javascript durante o curso da B7Web',
        src: bateria,
        type: 'Javascript',
        icons: [html, css, javascript]

    },
    {
        name: 'Calculadora Javascript',
        description: 'Calculadora desenvolvida em Javascript',
        src: calculadora,
        type: 'Javascript',
        icons: [html, css, javascript]

    },
    {
        name: 'Loja de roupas Javascript',
        description: 'Loja de roupas desenvolvida em Javascript',
        src: lojaroupa,
        type: 'Javascript',
        icons: [html, css, javascript]

    },
    {
        name: 'Urna eletrônica Javascript',
        description: 'Simulador da urna eletrônica desenvolvida em Javascript',
        src: urna,
        type: 'Javascript',
        icons: [html, css, javascript]

    },
    {
        name: 'Reolôgio analógico  Javascript',
        description: 'Reolôgio analógico desenvolvido em Javascript',
        src: watch,
        type: 'Javascript',
        icons: [html, css, javascript]

    },
    {
        name: 'Calculadora IMC ReactJs',
        description: 'Calculadora IMC desenvolvida em ReactJs + Typescript',
        src: imc,
        type: 'ReactJs',
        icons: [react, typescript, tailwind] 

    },
    {
        name: 'Lista de taferas ReactJs',
        description: 'Lista de tarefas do dia a dia desenvolida em ReactJs + Typescript',
        src: todolist,
        type: 'Firebase',
        icons: [react, typescript, tailwind, firebase] 

    },
    {
        name: 'Jogo da memória ReactJs',
        description: 'Jogo da memória desenvolido em ReactJs + Typescript',
        src: memorygame,
        type: 'ReactJs',
        icons: [react, typescript, tailwind] 

    },
]
