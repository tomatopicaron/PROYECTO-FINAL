const botones = document.querySelectorAll('.boton');
const informacion = document.getElementById('informacion');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const categoria = (link unavailable);
    mostrarInformacion(categoria);
  });
});

function mostrarInformacion(categoria) {
  informacion.innerHTML = '';

  switch (categoria) {
    case 'gustos':
      informacion.innerHTML = `
        <h3>Mis gustos</h3>
        <p>Me fascina dibujar, el Metal, mi banda favorita es Metallica, el BMX, el skate board, me gustan mucho algunas series como la de Teen Titans donde mi personaje favorito es Raven, tengo un gusto increíble por los carros.</p>
        <img src="imagen1.jpg" alt="Imagen 1">
        <img src="imagen2.jpg" alt="Imagen 2">
        <img src="imagen3.jpg" alt="Imagen 3">
        <img src="imagen4.jpg" alt="Imagen 4">
        <img src="imagen5.jpg" alt="Imagen 5">
      `;
      break;
    case 'hobbies':
      informacion.innerHTML = `
        <h3>Mis hobbies</h3>
        <p>Dibujo cuando me aburro.</p>
        <img src="imagen6.jpg" alt="Imagen 6">
        <img src="imagen7.jpg" alt="Imagen 7">
      `;
      break;
    case 'vehiculos':
      informacion.innerHTML = `
        <h3>Mis vehículos favoritos</h3>
        <p>Dodge Challenger</p>
        <img src="imagen8.jpg" alt="Imagen 8">
        <p>Kawasaki H2</p>
        <img src="imagen9.jpg" alt="Imagen 9">
        <p>Dodge Ram</p>
        <img src="imagen10.jpg" alt="Imagen 10">
      `;
      break;
    case 'mascotas':
      informacion.innerHTML = `
        <h3>Mis mascotas</h3>
        <p>Vivo con 5 mascotas:</p>
        <ul>
          <li>Melody</li>
          <img src="imagen11.jpg" alt="Imagen 11">
          <li>Lupe</li>
          <img src="imagen12.jpg" alt="Imagen 12">
          <li>Tatto</li>
          <img src="imagen13.jpg" alt="Imagen 13">
          <li>Felix</li>
          <img src="imagen14.jpg" alt="Imagen 14">
          <li>Chispa</li>
          <img src="imagen15.jpg" alt="Imagen 15">
        </ul>
      `;
      break;
    case 'estudios':
      informacion.innerHTML = `
        <h3>Mis estudios y trabajos</h3>
        <p>Estudié un poco de administración de empresas y Excel antes del colegio, luego estudié Geografía en la Uni del Valle tres semestres, luego trabajé año y medio en KFC y ahora estudio Mecatrónica y Desarrollo de Software.</p>
        <img src="imagen16.jpg" alt="Imagen 16">
        <img src="imagen17.jpg" alt="Imagen 17">
        <img src="imagen18.jpg" alt="Imagen 18">
        <img src="imagen19.jpg" alt="Imagen 19">
      `;
      break;
    case 'random':
      const datosRandom = [
        'De niño llegué a creer que vivía en una simulación y todos eran actores.',
        'Fanático del automovilismo a morir.',
        'Team frío y así esté a -30 centígrados seguiré prefiriendo el frío siempre.',
        'Solía hacer parkour en la preparatoria pero un día casi me muero por una caída así que dejé de hacerlo.',
        'Me fascina la guitarra eléctrica y la batería.',
        'Soy agnóstico, prefiero dejarle todo al beneficio de la duda, si quieres debatir sobre nuestra existencia pues estoy adelante.',
        'Pizza con piña.',
        'No me gusta mucho el fútbol pero la gente que me rodea me obliga a mantenerme informado sobre este deporte.',
        'Estaba estudiando animación web de forma independiente hasta que entré a dos institutos al tiempo y ya no me quedó tiempo.',
        'Soy muy olvidadizo.',
        'Soy amante de los animales.'
      ];
      const indiceAleatorio = Math.floor(Math.random() * datosRandom.length
    }    }