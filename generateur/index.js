const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const quote = [
    "Si haut qu'on monte, on finit toujours par des cendres. - Henri Rochefort",
    "Il vaut mieux se taire et passer pour un con plutôt que de parler et de ne laisser aucun doute sur le sujet. - Pierre Desproges",
    "Le divertissement est le meilleur régime contre le poids de l'existence. - Franck Dhumes",
    "Je n'ai pas parlé à ma belle-mère depuis 18 mois. Je n'aime pas l'interrompre. - Ken Dodd",
    "La dernière fois que j'ai pénétré une femme, c'était en visitant la statue de la Liberté. - Woddy Allen",
    "Un bon mari ne se souvient jamais de l'âge de sa femme mais de son anniversaire, toujours. - Jacques Audiberti",
    "Il vaut mieux mobiliser son intelligence sur des conneries que mobiliser sa connerie sur des choses intelligentes. - Les Shadocks",
    "Depuis que j'ai appris à rire de moi-même, je ne m'ennuie plus jamais. - Georges Bernard Shaw",
];


btn.addEventListener('click', afficher);


function afficher() {
    let index = Math.floor(Math.random() * (quote.length));
    output.innerHTML = quote[index];

}
