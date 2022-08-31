import { CalcView } from './view.js';
//import { CalcModel } from './model.js';

function saGUI()
{
      let mycalc = new CalcView();
     // let calcm = new CalcModel();

      document.body.appendChild(mycalc);
}

window.addEventListener( 'load', saGUI);

