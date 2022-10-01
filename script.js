
function cargarPlano(){
    var tamanios = [6,10,20];
    var orientacionViento=[-1,1];
    var tamanioAleatorio = tamanios[valorAleatorio(3)];
    var contadorAux =tamanioAleatorio;
    var pastoSeco = valorAleatorio(contadorAux);
    contadorAux-=pastoSeco;
    var pastoVerde = valorAleatorio(contadorAux);
    contadorAux-=pastoVerde;
    var maderaSeca =valorAleatorio(contadorAux);
    contadorAux-=maderaSeca;
    var madera = contadorAux;
    var viento = orientacionViento[valorAleatorio(2)]*valorAleatorio(5);
    var objetos = new Array(); 
    var quemados;

    for(i=0;i<pastoSeco;i++){
        objetos.push("Pasto Seco");
    }
    for(i=0;i<pastoVerde;i++){
        objetos.push("Pasto Verde");
    }
    for(i=0;i<maderaSeca;i++){
        objetos.push("Madera Seca");
    }
    for(i=0;i<madera;i++){
        objetos.push("Madera");
    }

    objetos = objetos.sort(function(){return Math.random() - 0.5});
   
    var terrenoPreparado ="";
    var centro;

    for(i=0;i<tamanioAleatorio;i++){
        if(i+1==tamanioAleatorio/2){
            terrenoPreparado= terrenoPreparado +"<div id='terreno"+i+"' class='cuadroTerreno cuadroTerrenoCentro'>"+objetos[i]+"</div>";
            centro=i;
        }else{
            terrenoPreparado= terrenoPreparado +"<div id='terreno"+i+"' class='cuadroTerreno'>"+objetos[i]+"</div>";
        }
        
    }



    document.getElementById('terreno').innerHTML=terrenoPreparado;

    document.getElementById('tdTerreno').innerHTML=tamanioAleatorio;
    document.getElementById('tdPastoSeco').innerHTML=pastoSeco;
    document.getElementById('tdPastoVerde').innerHTML=pastoVerde;
    document.getElementById('tdMaderaSeca').innerHTML=maderaSeca;
    document.getElementById('tdMadera').innerHTML=madera;
    document.getElementById('tdViento').innerHTML=viento;

    document.getElementById('quemar').style="margin-top:50px;";

    
    
}


function valorAleatorio(maximo){
    return Math.round(Math.random()*(maximo-1))
}

function quemarBloque(id){
    let map = new Map();
    map.set('Pasto Seco', 3000);
    map.set('Pasto Verde', 6000);
    map.set('Madera Seca', 5000);
    map.set('Madera', 10000);
    map.set('Q', 1000);
    
    setTimeout(() => { 
        document.getElementById('terreno'+id).innerHTML="Fire";
        document.getElementById('terreno'+id).style.backgroundColor = 'red';
    }, map.get(document.getElementById('terreno'+id).innerHTML));
    
}

function todoQuemado(cantTerreno){
    var estaQuemado = true;
    for(i=0;i<cantTerreno;i++){
        if(!document.getElementById('terreno'+i).innerHTML==='Q'){
            return false;
        }
    }
    return estaQuemado;
}

function quemar(){
    
    var viento = parseInt(document.getElementById('tdViento').innerHTML,10);
   var tamanioTerreno = parseInt(document.getElementById('tdTerreno').innerHTML,10);
   var centro = (viento<0)?tamanioTerreno/2:(tamanioTerreno/2)+1;
    if(viento<0){
        for(i = centro;i=>0;i--)
        {
            quemarBloque(i-1);
        }
    }else if(viento >0){
        for(i = centro;i<=tamanioTerreno;i++)
        {
            quemarBloque(i-1);
        }
    }
}




