let tabuada = 6;
function escreva(){
    document.write("<h1> TABUADA DO  " + tabuada + " </h1>");
    document.write(tabuada + " x 1  = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2  = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3  = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4  = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5  = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6  = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7  = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8  = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9  = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10  = " + (tabuada*10) + "<br>");
}

let lista = ["Jesus","Spessato","Duarte","Raquel","Neuza","Gilmar","Jossyara"];

function mostralista(){
    document.write("Tamanho da lista: " + lista.length + "<br>");
    for(let i = 0; i < lista.length; i++){
        document.write("Professor: " + lista[3] + "<br>");
    }
}

function multiplica(){
    for(let i = 1; i <= 10; i++)
    document.write("tabuada do = " + i + "<br>");
    for(let j = 1; j <= 10; j++){
        document.write(i + "x "+ j +" é " + (i*j) + "<br>");
    }
     document.write("<br>");
}



function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    
    if(!Number(v)){
     alert("o valor deve ser númerico.");
     document.getElementById("valor").value = "";
     document.getElementById("valor").focus();
        return
    }

    if(!Number(j)){
        alert("o juros deve ser númerico.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
           return
       }

       if(!Number(t)){
        alert("o valor dos meses deve ser númerico.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
           return
       }


    let r = 0;
    for(let i=1; i <= t;i++){
         r = v * (1+(j/100));
         
         //document.write("Mês " + " valor: " + moeda(r) + "<br>");
         v = r;
    }
    document.getElementById("totalGeral").innerHTML= "total: "+moeda(r);
    //document.write("resultado: " + r);
}

