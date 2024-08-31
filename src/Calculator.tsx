import { useState } from "react";
import Button from './Button';

function Calculator(){
    const [displayValue, setDisplayVlue] = useState('0');

    return(
        <div>
            <div>{displayValue}</div>
            {/*aqui iran los botones de la calculadora*/}
            <Button value="1" onClick={() => setDisplayVlue(displayValue +'1')}/>
            <button value="+" onClick={() => console.log('logica para ala sunma')}/>
        </div>

    );
}

export default Calculator;