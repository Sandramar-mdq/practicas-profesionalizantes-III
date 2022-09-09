
class  CalcController
{
    constructor( View, Model )
    {
       this.innerView = View;
       this.innerModel = Model;
    }

    onclickbutton1()
     {
        this.innerView.display.value += '1';
     }

    onclickbutton2()
     {
        this.innerView.display.value += '2';
     }

    onclickbutton3()
     {
        this.innerView.display.value += '3';
     }
    
     onclickbutton4()
     {
        this.innerView.display.value += '4';
     }

    onclickbutton5()
     {
        this.innerView.display.value += '5';
     }

    onclickbutton6()
     {
        this.innerView.display.value += '6';
     }

    onclickbutton7()
     {
        this.innerView.display.value += '7';
     }

    onclickbutton8()
     {
        this.innerView.display.value += '8';
     }

    onclickbutton9()
     {
        this.innerView.display.value += '9';
     }
    
     onclickbutton0()
     {
        this.innerView.display.value += '0';
     }

    onclickbuttonSum()
     {
        this.innerView.display.value += '+';
     }

    onclickbuttonSubtract()
     {
        this.innerView.display.value += '-';
     }
    
     onclickbuttonDivide()
     {
        this.innerView.display.value += '/';
     }

    onclickbuttonMultiply()
     {
        this.innerView.display.value += '*';
     }

    onclickbuttonDecimal()
     {
        this.innerView.display.value += '.';
     }
    
     onclickbuttonClear()
     {
        this.innerView.display.value = '';
    }
 
    onclickbuttonCalculate()
     {
        //this.innerView.display.value = this.innerModel.calculate(this.innerView.display.value); //delegacion del calculo en la instancia view
     
        this.innerModel.calculate(this.innerView.display.value).then( response => this.innerView.display.value=response );

      }
   
} 

export {CalcController};