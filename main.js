function kattintas(){
    console.log('kattintas');
    document.getElementById('gomb').classList.toggle('fontos');
}

function init(){
    document.getElementById('gomb').addEventListener('click', kattintas);
    document.getElementById('gomb').addEventListener('')
}

document.addEventListener('DOMContentLoaded', init);
console.log('JS fájl vége');

function szamol(){
    let cm = parseFloat(document.getElementById('cm').value);
    let kg = parseFloat(document.getElementById('kg').value);
    document.getElementById('cm').addEventListener()
    
}