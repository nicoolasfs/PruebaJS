
/*let nombre = prompt("¿Cómo te llamas?");
frase = `soy ${nombre}`;
document.write(frase);*/

function square(number) {
    return number * number;
  }

  square(8);

document.write(square(8));

const h1 = document.querySelector('.title');
const pid = document.querySelector('.pid');
const input = document.querySelector('.input1');

document.querySelector('button').addEventListener('click', () => {
    console.log(document.querySelector('.input1').value);
} );

h1.innerHTML = 'Hola bbsita';


const img = document.createElement('img');
img.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
pid.append(img);

const input1 = document.querySelector('.calculo');
const input2 = document.querySelector('.calculo2');
const button = document.querySelector('.btncalcular');
const form = document.querySelector('.form');
const result = document.querySelector('.Result');

form.addEventListener('click', btnonclick);

function btnonclick(event) {
  event.preventDefault();
  const suma = input1.value + input2.value; 
  result.innerText = "resultado: " + suma;
}