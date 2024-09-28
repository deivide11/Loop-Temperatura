var temperatura = [];
for(var i = 0; i < 7; i++){
    var temps = parseInt(prompt("Digite a temperatura do " + (i + 1) + "° dia"));
    
    var previsao = {
        temps: temps
    };

    temperatura.push(previsao); 
    
}

console.log("Todas as temperaturas: ", temperatura);

var totalTemp = 0;
for(var i = 0; i < temperatura.length; i++){
    totalTemp += temperatura[i].temps;
}

console.log("Média de temperatura: ", totalTemp);

var mediaTemp = totalTemp / temperatura.length;
console.log("A media da temperatura dos 7 dias são: ", mediaTemp.toFixed(0));