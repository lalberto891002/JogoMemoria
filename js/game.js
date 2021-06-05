/**
 * Created by LACD on 9/4/2018.
 */

var cartas =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var contador_virados=0;
var virado1=-1;
var virado2=-1;
var i=1;
var deshabilita=true;
var minutos=0;
var segundos=0;
var encontrados=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var score=0;
var stop_time=false;
var pulsaciones=0;
$(document).ready(function(){

   shiftArray();
   setTimeout(todas_grises,5000);
    i=0;
    $("#c1").click(click_c1);
    $("#c2").click(click_c1);
    $("#c3").click(click_c1);
    $("#c4").click(click_c1);
    $("#c5").click(click_c1);
    $("#c6").click(click_c1);
    $("#c7").click(click_c1);
    $("#c8").click(click_c1);
    $("#c9").click(click_c1);
    $("#c10").click(click_c1);
    $("#c11").click(click_c1);
    $("#c12").click(click_c1);
    $("#c13").click(click_c1);
    $("#c14").click(click_c1);
    $("#c15").click(click_c1);
    $("#c16").click(click_c1);
    setTimeout(contarTiempo,1000);

    })

function shiftArray() {
    while (i <= 8) {
        numero = Math.floor(Math.random() * 16 + 1);
        /*numero aleatorio entre 1 y 8*/
        values = cartas.filter(function (x) {
            return x == numero
        });
        if (values.length >= 2)
            continue;

        var carta1 = $('#c' + i + '');
        var intermedio = i + 8;
        var carta2 = $('#c' + intermedio + '');
        cartas[i-1] = numero;
        cartas[i + 7] = numero;
        carta1.css("background", "url(./images/" + numero + ".JPG)");
        carta2.css("background", "url(./images/" + numero + ".JPG)");
        i++;


    }

     i = 0;

    while(i<16)
    {
       var numero1=Math.floor(Math.random()*16+1);/*numero aleatorio entre 0 y 15*/
        var numero2 = Math.floor(Math.random() *16+1);
        /*numero aleatorio entre 1 y 16*/

       if(cartas[numero2-1]==cartas[numero1-1])
            continue;

        var intermedio = cartas[numero1-1];
        cartas[numero1-1] = cartas[numero2-1];
        cartas[numero2-1] = intermedio;



        var carta1 = $('#c' + numero1 + '');
        var carta2 = $('#c' + numero2 + '');

        carta1.css("background", "url(./images/" + cartas[numero1-1] + ".JPG)");
        carta2.css("background", "url(./images/" + cartas[numero2-1] + ".JPG)");
        i++;
    }

}

function todas_grises()
{
    i=0;
    virado2=-1;
    virado1=-1;
    contador_virados=0;
    while(i<=16)
    {

        if(encontrados[i]!=1)
        {
            intermedio=i+1;
            var carta = $('#c' + intermedio + '');
            carta.css("background", "gray");
        }
        i++;

    }
    deshabilita=false;




}

/*click de las fotos*/
function click_c1()
{

    var $this=$(this);
    var id=this.id;
    var x=id.split('');

    if(x[2]==undefined)
         x=x[1];
    else
        x=x[1]+x[2];

    if(encontrados[x-1]==1||deshabilita||virado1==x-1)
        return;
    incrementaPulsaciones();
    var carta = $('#c'+x+'');

    carta.css("background", "url(./images/" + cartas[x-1] + ".JPG)");
    if(contador_virados==1) {

        virado2=x-1;
        deshabilita=true;
        if(cartas[virado1]==cartas[virado2])
        {
            found(virado1,virado2);
            return;

        }
        else

                setTimeout(todas_grises, 1000);


    }
    else
    {
        virado1=x-1;
        contador_virados++;
    }




}




/*asi se cuando gane y quienes son los encontrados*/


function found(virado1, virado2)
{

    incrementaPulsaciones();


    setTimeout(intermedio,1000);

    function intermedio()
    {
        virado11=virado1+1;
        virado22=virado2+1;
        var carta1 = $('#c' + virado11 + '');
        var carta2 = $('#c' + virado22 + '');
        /*carta1.css("width","3px");
        carta2.css("width", "3px");
        carta1.css("background","black");
        carta2.css("background", "black");
        carta1.css("marginLeft","50px");
        carta2.css("marginLeft","50px");*/
        carta1.css("box-shadow","black 0px 0px 20px");
        carta2.css("box-shadow","black 0px 0px 20px");
        carta1.css("transform","skew(0deg ,10deg)");
        carta2.css("transform","skew(0deg ,10deg)");


        setTimeout(intermedio2,100);
    }

    function intermedio2()
    {

        virado11=virado1+1;
        virado22=virado2+1;
        var carta1 = $('#c' + virado11 + '');
        var carta2 = $('#c' + virado22 + '');
        carta1.css("width","1px");
        carta2.css("width", "1px");
        carta1.css("background","black");
        carta2.css("background", "black");
        carta1.css("marginLeft","50px");
        carta2.css("marginLeft","50px");
        carta1.css("box-shadow","black 0px 0px 10px");
        carta2.css("box-shadow","black 0px 0px 10px");
        carta1.css("transform","skew(0deg ,20deg)");
        carta2.css("transform","skew(0deg ,20deg)");
        setTimeout(intermedio3,200);

    }

    function intermedio3()
    {

        virado11=virado1+1;
        virado22=virado2+1;
        var carta1 = $('#c' + virado11 + '');
        var carta2 = $('#c' + virado22 + '');

        carta1.css("background", "url(./images/win.jpg)");
        carta2.css("background", "url(./images/win.jpg)");
        carta1.css("width","10px");
        carta2.css("width", "10px");
        carta1.css("transform","skew(0deg ,20deg)");
        carta2.css("transform","skew(0deg ,20deg)");
        carta1.css("marginLeft","50px");
        carta2.css("marginLeft","50px");
        carta1.css("box-shadow","black 0px 0px 20px");
        carta2.css("box-shadow","black 0px 0px 20px");
        setTimeout(final,200);

    }

    function final() {

        virado11=virado1+1;
        virado22=virado2+1;
        var carta1 = $('#c' + virado11 + '');
        var carta2 = $('#c' + virado22 + '');
        carta1.css("background", "url(./images/win.jpg)");
        carta2.css("background", "url(./images/win.jpg)");
        carta1.css("width","100px");
        carta2.css("width", "100px");
        carta1.css("marginLeft","0px");
        carta2.css("marginLeft","0px");
        carta1.css("box-shadow"," black 0px 0px 0px");
        carta2.css("box-shadow","black 0px 0px 0px");
        carta1.css("transform","transform: skew(30deg ,0deg)");
        carta2.css("transform","transform: skew(30deg ,0deg)");
        carta1.css("transform","transform: skew(0deg ,0deg)");
        carta2.css("transform","transform: skew(0deg ,0deg)");
        carta1.css("transform","skew(0deg ,0deg)");
        carta2.css("transform","skew(0deg ,0deg)");
        encontrados[virado1]=1;
        encontrados[virado2]=1;
        contador_virados=0;
        deshabilita=false;
        incrementaScore();
    }


}


function contarTiempo()
{
    if(stop_time)
        return;
        var time=$("#time");
    segundos++;
    if(segundos==60)
    {
        minutos++;
        segundos=0;

    }
    var minutosString="";
    var segundosString="";
    if(segundos<10)
        segundosString="0"+segundos;
    else
        segundosString=segundos+"";

    if(minutos<10)
        minutosString="0"+minutos;
    else
        minutosString=minutos+"";

    time.text("Time : "+minutosString+ ": "+segundosString);
    setTimeout(contarTiempo,1000);

}

function incrementaScore() {
        score+=10;
        $("#score").text("Score: "+score);
        if(victoria()) {
            alert("Has ganado!!");
            stop_time = true;
        }
}

function incrementaPulsaciones() {
    pulsaciones+=1;
    if(pulsaciones>=10)
        $("#pulsaciones").text("Pulsaciones: "+pulsaciones);
    else
        $("#pulsaciones").text("Pulsaciones: 0"+pulsaciones);

    if(victoria()) {
        alert("Has Ganado!!");
        stop_time = true;
    }
}

function victoria() {
    i=0;
    while(i<16)
    {
        if(encontrados[i]==0)
            return false;

        i++;
    }
    return true;

}
