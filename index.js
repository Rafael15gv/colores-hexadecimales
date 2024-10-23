const boton = document.getElementsByTagName('button')[0];
const texto_1 = document.getElementsByTagName('h1')[0];
const fondo = document.getElementsByTagName('body')[0];

boton.addEventListener('click', () => {
    let numero = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let colorHexadeciamal ="#";
    for (let i = 0; i < 6; i++) {
        let indice = Math.floor(Math.random() * 16);
        colorHexadeciamal += numero[indice];
    }
    console.log(colorHexadeciamal);
    fondo.style.background = colorHexadeciamal;
    texto_1.innerText = `${colorHexadeciamal}`;
})