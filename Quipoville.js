var theurl = null
var ville = null

function start(){
  ville = document.getElementById("ville").value;
  event(ville);

}

$.ajax({ // Recherche d'évènements
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=t0qprlCA6uTbA2GdjybSIgANSGtUaAJv",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});

$.ajax({ // Détails des évènements
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey=t0qprlCA6uTbA2GdjybSIgANSGtUaAJv",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});

function event(ville){
  theurl = "https://app.ticketmaster.com/discovery/v2/events.json?city="+ville+"&apikey=t0qprlCA6uTbA2GdjybSIgANSGtUaAJv"
}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open( "GET", theUrl, false ) // false for synchronous request
    xmlHttp.send( null )
    return xmlHttp.responseText
}