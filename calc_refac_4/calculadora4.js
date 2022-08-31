
function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
    /*Acceso a una posición específica de la tabla (fila,columna)
    tabla.childNodes[0].childNodes[nroFila]
    tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

    //Añade el elemento recibido
    tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}







