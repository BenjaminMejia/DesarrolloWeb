var segundo = 0;
var minuto = 0;
var hora = 0;
var d = new Date();

setInterval(
    function(){
        d = new Date();
        segundo = d.getSeconds() * 6;
        minuto = d.getMinutes() * 6;
        hora = d.getHours() * 30 + Math.round(minuto / 12);
        document.getElementById("brazo-segundo").style.transform = "rotate(" + segundo + "deg)";
        document.getElementById("brazo-minuto").style.transform = "rotate(" + minuto + "deg)";
        document.getElementById("brazo-hora").style.transform = "rotate(" + hora + "deg)";
    }, 1000
);