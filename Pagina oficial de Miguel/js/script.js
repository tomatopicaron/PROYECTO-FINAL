const botones = document.querySelectorAll(".boton");
const tituloInformacion = document.getElementById("titulo-informacion");
const listaInformacion = document.getElementById("lista-informacion");


botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    mostrarInformacion(boton.id);
  });
});

function mostrarInformacion(categoria) {
  tituloInformacion.innerHTML = "";
  listaInformacion.innerHTML = "";

  switch (categoria) {
    case "gustos":
      tituloInformacion.textContent = "Mis gustos";
      listaInformacion.innerHTML = `
        <p>Me fascina dibujar, el Metal,
         mi banda favorita es Metallica, el BMX,
          el skate board, me gustan mucho algunas series como
           la de Teen Titans donde mi personaje favorito es Raven,
            tengo un gusto increíble por los carros.</p>
        <img src="/imagenes/bmx.jpg" alt="bicicleta de bmx">
        <img src="/imagenes/challenherNieve.jpeg" alt="Dodge challenger nevado">
        <img src="/imagenes/dibujo Raven.jpeg" alt="Dibujo de Raven teen titans">
        <img src="/imagenes/skateMonster.jpeg" alt="skate board con una monster encima">
      `;
      break;
    case "hobbies":
      tituloInformacion.textContent = "Mis hobbies";
      listaInformacion.innerHTML = `
        <p>Dibujo cuando me aburro.</p>
        <img src="/imagenes/dibujoDeRavenCuerCom.jpg" alt="dibujo de raven de nuevo">
        <img src="/imagenes/dibujomio.jpeg" alt="dibujo mio y de mis gatos">
        <img src="/imagenes/pinturaExtraterrestre.jpeg" alt="Pintura de un Extraterrestre">
        <img src="/imagenes/dibujoChica.jpg" alt="dibujo simple de una figura femenina">
      `;
      break;
    case "vehiculos":
      tituloInformacion.textContent = "Mis vehículos favoritos";
      listaInformacion.innerHTML = `
        <p>Dodge Challenger</p>
        <img src="/imagenes/dodgeChallenger.jpeg" alt="un dodge challenger rojo">
        <p>Kawasaki H2</p>
        <img src="/imagenes/kawasakiH2.jpeg" alt="una moto kawasaki H2">
        <p>Dodge Ram</p>
        <img src="/imagenes/dodgeRam.jpeg" alt="una camioneta Dodge Ram">
      `;
      break;
    case "mascotas":
      tituloInformacion.textContent = "Mis mascotas";
      listaInformacion.innerHTML = `
        <p>Vivo con 5 mascotas:</p>
        <p>
          <li>Melody</li>
          <img src="/imagenes/melody.jpeg" alt="perrito blanco disfrazado de bruja">
          <li>Lupe</li>
          <img src="/imagenes/lupe.jpeg" alt="perrito disfrazado de dracula">
          <li>Tatto</li>
          <img src="/imagenes/tattooMayor.jpeg" alt="perrito pequeño pero viejito">
          <img src="/imagenes/tattoobb.jpeg" alt="perrito pequeño bebe>
          <img src="/imagenes/felix.jpeg" alt="gato">
          <li>Chispa y Felix</li>
          <img src="/imagenes/chispaDisfrazada.jpeg" alt="gato disfrazado de araña">
          <img src="/imagenes/felix.jpeg" alt="dos gatitos">
        </p>
      `;
      break;
    case "estudios":
      tituloInformacion.textContent = "Mis estudios y trabajos";
      listaInformacion.innerHTML = `
        <p>Estudié un poco de administración de empresas y Excel antes del colegio,
         luego estudié Geografía en la Uni del Valle tres semestres,
          luego trabajé año y medio en KFC y ahora estudio Mecatrónica y Desarrollo de Software.</p>
        <img src="/imagenes/mecatronica.jpeg" alt="grupo de estudiantes de mecatronica">
        <img src="/imagenes/kfc.jpeg" alt="tres chicos que trabajan en kfc">

      `;
      break;
    case "random":
      const datosRandom = [
        "De niño llegué a creer que vivía en una simulación y todos eran actores.",
        "Fanático del automovilismo a morir.", 
        "Team frío y así esté a -30 centígrados seguiré prefiriendo el frío siempre.",
        "Solía hacer parkour en la preparatoria pero un día casi me muero por una caída así que dejé de hacerlo.",
        "Me fascina la guitarra eléctrica y la batería.",
        "Soy agnóstico, prefiero dejarle todo al beneficio de la duda, si quieres debatir sobre nuestra existencia pues habla conmigo.",
        "Pizza con piña.",
        "No me gusta mucho el fútbol pero la gente que me rodea me obliga a mantenerme informado sobre este deporte.",
        "Estaba estudiando animación web de forma independiente hasta que entré a dos institutos al tiempo y ya no me quedó tiempo.",
        "Soy muy olvidadizo.",
        "Mi sueño es viajar por todo el mundo",
        "Me gustan los juegos ambientados en la segunda guerra mundial",
        "Me gusta mucho Dragon Ball",
        "Mido 1.68 aunque en mi cedula diga 1.71",
        "Soy muy procrastinador",
        "Me enamore de una rola cuando estaba en el kinder pero se fue a bogota y nunca la volvi a ver, han pasado 18 años",
        "De niño era muy bueno corriendo en la bici, ganaba todas las competiciones",
        "Me gusta muchisimo la musica, no me puedo concentrar bien al estudiar si no estoy escuchando musica",
        "Me robaron antes de nacer",
        "Androide 17 es mi favorito de todo dragon ball",
        "De niño meti unas pinsas en un tomacorriente y deje sin luz la cuadra",
        "No he tenido buenas experiencias romanticas",
        "El exceso de confianza me ha traicionado muchas veces",
        "A los 11 estrelle el carro de mi papa contra el de mi abuelo",
        "Aborrezco la politica",
        "Siempre quise ser piloto de carros pero joder! que caro es",

      ];
      const indiceAleatorio = Math.floor(Math.random() * datosRandom.length);
      tituloInformacion.textContent = "Algo random sobre mí";
      listaInformacion.innerHTML = `
          <p class="datosRandom">${datosRandom[indiceAleatorio]}</p>
        `;
      break;
    default:
      tituloInformacion.style.display = "none";
      listaInformacion.style.display = "none";
  }
}


/*const btn1 = document.getElementById("gustos")
  btn1.addEventListener("click", () => { 
    console.log("click")
    tituloInformacion.textContent = 'Mis gustos';
      listaInformacion.innerHTML = `
        <p>Me fascina dibujar, el Metal,
         mi banda favorita es Metallica, el BMX,
          el skate board, me gustan mucho algunas series como
           la de Teen Titans donde mi personaje favorito es Raven,
            tengo un gusto increíble por los carros.</p>
        <img src="imagen1.jpg" alt="Imagen 1">
        <img src="imagen2.jpg" alt="Imagen 2">
        <img src="imagen3.jpg" alt="Imagen 3">
        <img src="imagen4.jpg" alt="Imagen 4">
        <img src="imagen5.jpg" alt="Imagen 5">
      `;}*/
