
let button9= document.getElementById("button9");
let button8= document.getElementById("button8");
let button7= document.getElementById("button7");
let button6= document.getElementById("button6");
let button5= document.getElementById("button5");
let button4= document.getElementById("button4");
let button3= document.getElementById("button3");
let button2= document.getElementById("button2");
let button1= document.getElementById("button1");
let button0= document.getElementById("button0");
let buttonsuma= document.getElementById("buttonsuma")
let buttonresta= document.getElementById("buttonresta")
let buttonmulti= document.getElementById("buttonmulti")
let buttondivi= document.getElementById("buttondivi")
let buttondecimal= document.getElementById("buttondecimal")
let buttonclear= document.getElementById("buttonclear")
let display= document.getElementById("inputs")


button9.addEventListener("click", alHacerClickEnElBoton9);
button8.addEventListener("click", alHacerClickEnElBoton8);
button7.addEventListener("click", alHacerClickEnElBoton7);
button6.addEventListener("click", alHacerClickEnElBoton6);
button5.addEventListener("click", alHacerClickEnElBoton5);
button4.addEventListener("click", alHacerClickEnElBoton4);
button3.addEventListener("click", alHacerClickEnElBoton3);
button2.addEventListener("click", alHacerClickEnElBoton2);
button1.addEventListener("click", alHacerClickEnElBoton1);
button0.addEventListener("click", alHacerClickEnElBoton0);
buttonsuma.addEventListener("click", alHacerClickEnElBotonSuma);
buttonresta.addEventListener("click", alHacerClickEnElBotonResta);
buttonmulti.addEventListener("click", alHacerClickEnElBotonMultiplicar);
buttondivi.addEventListener("click", alHacerClickEnElBotonDividir);
buttonigual.addEventListener("click", alHacerClickEnElBotonIgual);
buttondecimal.addEventListener("click", alHacerClickEnElBotonDecimal);
buttonclear.addEventListener("click", alHacerClickEnElBotonBorrar);




function alHacerClickEnElBoton9()
{
 let display = document.getElementById("inputs");
  display.value += "9";
}


function alHacerClickEnElBoton8()
{
 let display=document.getElementById("inputs");
  display.value +="8";
}


function alHacerClickEnElBoton7()
{
 let display=document.getElementById("inputs");
  display.value +="7";
}


function alHacerClickEnElBoton6()
{
 let display=document.getElementById("inputs");
  display.value +="6";
}


function alHacerClickEnElBoton5()
{
 let display=document.getElementById("inputs");
  display.value +="5";
}


function alHacerClickEnElBoton4()
{
 let display=document.getElementById("inputs");
  display.value +="4";
}


function alHacerClickEnElBoton3()
{
 let display=document.getElementById("inputs");
  display.value +="3";
}


function alHacerClickEnElBoton2()
{
 let display=document.getElementById("inputs");
  display.value +="2";
}



function alHacerClickEnElBoton1()
{
 let display=document.getElementById("inputs");
  display.value +="1";
}


function alHacerClickEnElBoton0()
{
 let display=document.getElementById("inputs");
  display.value +="0";
}


function alHacerClickEnElBotonSuma()
{
 let display=document.getElementById("inputs");
  display.value +="+";
}


function alHacerClickEnElBotonResta()
{
 let display=document.getElementById("inputs");
  display.value +="-";
}


function alHacerClickEnElBotonMultiplicar()
{
 let display=document.getElementById("inputs");
  display.value +="*";
}


function alHacerClickEnElBotonDividir()
{
 let display=document.getElementById("inputs")
  display.value +="/";
 }


function alHacerClickEnElBotonIgual()
{try
    {
        let display = document.getElementById("inputs");
    
        display.value = eval(display.value);
        
        if (display.value == "undefined")
        {
            display.value = "";
        }
    }
    catch
    {
        alert("ERROR DE CALC");
    }
}


function alHacerClickEnElBotonDecimal()
{
 let display=document.getElementById("inputs");
  display.value +=".";
}



function alHacerClickEnElBotonBorrar()
{
 let display=document.getElementById("inputs");
  display.value = "";
}
