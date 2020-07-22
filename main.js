// $(document).ready(function() {
// 	//Code
// });


// Attraverso una chiamata ajax all'Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.
// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music
// Layout base:
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout


function init() {

  console.log("hello world");
  chiamataDischi();



}

$(document).ready(init);


function chiamataDischi() {

  $.ajax ({
    url:'https://flynn.boolean.careers/exercises/api/array/music',
    method:'GET',
    success: function(data) {
      var success = data ['success'];
      var value = data ['response'];

      console.log(data);


    },
    error: function(errori) {
      console.log('errore');
    }
  });
}
