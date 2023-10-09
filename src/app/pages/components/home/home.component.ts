import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit() {

  }
  activarLectorVoz() {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      /// Trae la lista de voces disponibles
      const voces = synth.getVoices();

      const vozEspañol = voces.find((voice) => voice.lang === 'es-ES');
        if (vozEspañol) {
          const mensaje = new SpeechSynthesisUtterance('¡Hola! Esto es una prueba del lector de voz en Angular. Henrry Jean Paul ha invocado esta funcion! , de lo contario no estaria funcionando.');

          // Establezco la voz en español
          mensaje.voice = vozEspañol;

          // Configuro la velocidad de habla y el volumen
          mensaje.rate = 1.0; // Velocidad de habla normal
          mensaje.volume = 1.0; // Volumen al máximo

          synth.speak(mensaje);

        } else {
          console.error('No se encontró una voz en español.');
        }
        console.log('Lista de voces' , voces);

    } else {
      console.error('El lector de voz no es compatible con este navegador.');
    }
  }
}
