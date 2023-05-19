let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #c9d9ff;"> Desarrollo sitios web, edito y diseño 🌷.')
  .pauseFor(200)
  .deleteChars(10)
  .start();