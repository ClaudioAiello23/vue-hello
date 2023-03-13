'use strict';

/*Salvare in una variabile locale la funzione createApp, presa 
dalla variabile globale Vue; createApp è come un valore
destrutturato di Vue*/
const { createApp } = Vue; 

/*Inizializzare un'istanza dell'applicazione Vue, invocando 
la funzione createApp*/
createApp({
    data() {
      return {
        myText: 'Scrivi quello che vuoi',
        myClasses: 'blue fontSize scale',
        myImage: '../img/venice2023.jpg',
      }
    }
  }).mount('#app') //  invocare il metodo .mount() per connettere l'istanza al tag HTML con id #app e renderizzare l'app.

