const boton = document.getElementsByTagName('button')[0];
const texto_1 = document.getElementsByTagName('h1')[0];
const texto_2 = document.getElementsByTagName('h1')[1];
const fondo = document.getElementsByTagName('body')[0];

boton.addEventListener('click', () => {

    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);

    fondo.style.background = `rgb(${r}, ${g}, ${b})`;
    texto_1.innerText = "R:" + r + " G:" + g + " B:" + b; 

    r = convertirColor(r);
    console.log(r);
    g = convertirColor(g);
    console.log(g);
    b = convertirColor(b);
    console.log(b);
    texto_2.innerText = "#"+r+g+b; 

})

function convertirColor(x) {

    let primerNumero = Math.floor(x / 16);
    let segundoNumero = x - (16 * primerNumero);
    
    if (primerNumero > 9) {
        primerNumero = cambiarNumero(primerNumero);
    }
    if (segundoNumero > 9) {
        segundoNumero = cambiarNumero(segundoNumero);
    }
    primerNumero = primerNumero.toString();
    segundoNumero = segundoNumero.toString();
    return primerNumero += segundoNumero;
}

function cambiarNumero(x) {
    switch (x) {
        case 10:
            x = 'A';
            break;
    
        case 11:
            x = 'B';
            break;
    
        case 12:
            x = 'C';
            break;
    
        case 13:
            x = 'D';
            break;
    
        case 14:
            x = 'E';
            break;
    
        case 15:
            x = 'F';
            break;
    
        default:
            break;
    }
    return x;
}


