console.log('Loading Javascript');

const valorA = document.getElementById('numeroA').value

console.log('Valor A =>', valorA)

function suma(){ 
    console.log('sumando')
    const valorA = document.getElementById('numeroA').value;
    const valorB = document.getElementById('numeroB').value;
    console.log('Valor ingresado A=>',valorA);
    console.log('Valor ingresado B =>',valorB);
//Es importante declarar la variable number para quepueda hacer operaciones
    const resultado= Number(valorA)+Number(valorB);
    console.log('El resultado es', resultado);
//Variable que captura suma 
    let r= document.getElementById('resultado');
    r.value=resultado
}

function resta(){ 
    console.log('restando')
    const valorA = document.getElementById('numeroA').value;
    const valorB = document.getElementById('numeroB').value;
    console.log('Valor ingresado A=>',valorA);
    console.log('Valor ingresado B =>',valorB);
//Es importante declarar la variable number para quepueda hacer operaciones
    const resultado= Number(valorA)-Number(valorB);
    console.log('El resultado es', resultado);
//Variable que captura datos 
    let r= document.getElementById('resultado');
    r.value=resultado
}

function division(){ 
    console.log('dividiendo')
    const valorA = document.getElementById('numeroA').value;
    const valorB = document.getElementById('numeroB').value;
    console.log('Valor ingresado A=>',valorA);
    console.log('Valor ingresado B =>',valorB);
//Es importante declarar la variable number para que pueda operar
    const resultado= Number(valorA)/Number(valorB);
    console.log('El resultado es', resultado);
//Variable que captura datos 
    let r= document.getElementById('resultado');
    r.value=resultado
}

function multiplicar(){ 
    console.log('multiplicando')
    const valorA = document.getElementById('numeroA').value;
    const valorB = document.getElementById('numeroB').value;
    console.log('Valor ingresado A=>',valorA);
    console.log('Valor ingresado B =>',valorB);
//Es importante declarar la variable number para que pueda operar
    const resultado= Number(valorA)*Number(valorB);
    console.log('El resultado es', resultado);
//Variable que captura datos 
    let r= document.getElementById('resultado');
    r.value=resultado
}