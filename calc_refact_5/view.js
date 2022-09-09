import { CalcController } from './controller.js';
import { CalcModel } from './model.js';


function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
    /*Acceso a una posición específica de la tabla (fila,columna)
    tabla.childNodes[0].childNodes[nroFila]
    tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

    //Añade el elemento recibido
    tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}

class CalcView extends HTMLElement
{
    constructor( externalModel )
    {
        super(); //invocacion constructor de la clase base

        this.innerview = externalModel;  
        this.innerModel = new CalcModel()
        this.innerController = new CalcController(this,this.innerModel);

        this.display = document.createElement("input");
        this.display.type = "text";
        this.display.placeholder="0";
        this.display.classList.add("inputx")

        this.button0 = document.createElement("button");
        this.button0.innerText = "0";
        this.button0.classList.add( "bluebuttons");

        this.button1 = document.createElement("button");
        this.button1.innerText = "1";
        this.button1.classList.add( "bluebuttons");

        this.button2 = document.createElement("button");
        this.button2.innerText = "2";
        this.button2.classList.add( "bluebuttons");

        this.button3 = document.createElement("button");
        this.button3.innerText = "3";
        this.button3.classList.add( "bluebuttons");

        this.button4 = document.createElement("button");
        this.button4.innerText = "4";
        this.button4.classList.add("bluebuttons");

        this.button5 = document.createElement("button");
        this.button5.innerText = "5";
        this.button5.classList.add( "bluebuttons");

        this.button6 = document.createElement("button");
        this.button6.innerText = "6";
        this.button6.classList.add("bluebuttons");

        this.button7 = document.createElement("button");
        this.button7.innerText = "7";
        this.button7.classList.add( "bluebuttons");

        this.button8 = document.createElement("button");
        this.button8.innerText = "8";
        this.button8.classList.add( "bluebuttons");

        this.button9 = document.createElement("button");
        this.button9.innerText = "9";
        this.button9.classList.add( "bluebuttons");

        this.buttonigual = document.createElement("button");
        this.buttonigual.innerText = "=";
        this.buttonigual.classList.add( "yellowbuttons");

        this.buttonsuma = document.createElement("button");
        this.buttonsuma.innerText = "+";
        this.buttonsuma.classList.add( "greenbuttons");

        this.buttonresta = document.createElement("button");
        this.buttonresta.innerText = "-";
        this.buttonresta.classList.add( "greenbuttons");

        this.buttonmulti = document.createElement("button");
        this.buttonmulti.innerText = "*";
        this.buttonmulti.classList.add( "greenbuttons");

        this.buttondivi = document.createElement("button");
        this.buttondivi.innerText = "/";
        this.buttondivi.classList.add( "greenbuttons");

        this.buttondecimal = document.createElement("button");
        this.buttondecimal.innerText = ".";
        this.buttondecimal.classList.add("bluebuttons");

        this.buttonclear = document.createElement("button");
        this.buttonclear.innerText = "Borrar ";
        this.buttonclear.classList.add("redbuttons");


        this.layout = document.createElement("table");
        for ( let i = 0; i<4; i++)
        {
            let filaActual = this.layout.insertRow();

            for( let c = 0; c<4; c++ )
            {
                filaActual.insertCell();
            }
        }

        let lastCell = this.layout.insertRow().insertCell();
        lastCell.setAttribute("colspan", 4);
    }


    connectedCallback()//inicializacion del elemento grafico
    {
        this.appendChild(this.display);
        this.appendChild(this.layout);
        posicionarElementoEnTabla(this.layout,0,0,this.button7);
        posicionarElementoEnTabla(this.layout,0,1,this.button8);
        posicionarElementoEnTabla(this.layout,0,2,this.button9);
        posicionarElementoEnTabla(this.layout,0,3,this.buttonsuma);
        posicionarElementoEnTabla(this.layout,1,0,this.button4);
        posicionarElementoEnTabla(this.layout,1,1,this.button5);
        posicionarElementoEnTabla(this.layout,1,2,this.button6);
        posicionarElementoEnTabla(this.layout,1,3,this.buttonresta);
        posicionarElementoEnTabla(this.layout,2,0,this.button1);
        posicionarElementoEnTabla(this.layout,2,1,this.button2);
        posicionarElementoEnTabla(this.layout,2,2,this.button3);
        posicionarElementoEnTabla(this.layout,2,3,this.buttonmulti);
        posicionarElementoEnTabla(this.layout,3,0,this.button0);
        posicionarElementoEnTabla(this.layout,3,1,this.buttondecimal);
        posicionarElementoEnTabla(this.layout,3,2,this.buttonigual);
        posicionarElementoEnTabla(this.layout,3,3,this.buttondivi);
        posicionarElementoEnTabla(this.layout,4,0,this.buttonclear);
        this.button1.addEventListener('click', () => this.innerController.onclickbutton1() );
        this.button2.addEventListener('click', () => this.innerController.onclickbutton2() );
        this.button3.addEventListener('click', () => this.innerController.onclickbutton3() );
        this.button4.addEventListener('click', () => this.innerController.onclickbutton4() );
        this.button5.addEventListener('click', () => this.innerController.onclickbutton5() );
        this.button6.addEventListener('click', () => this.innerController.onclickbutton6() );
        this.button7.addEventListener('click', () => this.innerController.onclickbutton7() );
        this.button8.addEventListener('click', () => this.innerController.onclickbutton8() );
        this.button9.addEventListener('click', () => this.innerController.onclickbutton9() );
        this.button0.addEventListener('click', () => this.innerController.onclickbutton0() );

        this.buttonsuma.addEventListener('click', () => this.innerController.onclickbuttonSum() );
        this.buttonresta.addEventListener('click', () => this.innerController.onclickbuttonSubtract() );
        this.buttonmulti.addEventListener('click', () => this.innerController.onclickbuttonMultiply() );
        this.buttondivi.addEventListener('click', () => this.innerController.onclickbuttonDivide() );
        this.buttondecimal.addEventListener('click', () => this.innerController.onclickbuttonDecimal() );
        this.buttonigual.addEventListener('click', () => this.innerController.onclickbuttonCalculate() );
        this.buttonclear.addEventListener('click', () => this.innerController.onclickbuttonClear() );
     }
} 




customElements.define('x-calculator-view', CalcView );

export{CalcView};
