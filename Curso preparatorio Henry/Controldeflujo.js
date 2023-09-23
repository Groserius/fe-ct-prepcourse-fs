function viajar(destino){
    if (destino === "Brasil") {
        console.log ("Gire a la IZQUIERDA" );
    } else if (destino === "Argentina" ) {
        console.log("Gire a la DERECHA");
    } else {
        consolw.log("Nos PERDIMOS");
    }
}
viajar('PUREBA');

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);