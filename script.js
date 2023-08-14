const boton = document.getElementById('cambiarColor');

boton.addEventListener('click', () => {
  const colorAleatorio = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = colorAleatorio;
});
