
class CalcModel
{
    constructor()
    {
    
    }
    
    calculate( expression )
    {
        return fetch('./backend/calculate.php', { method:'post', body: JSON.stringify(expression) } ).then( response => response.json() );

    }
}

export { CalcModel };

