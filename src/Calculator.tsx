import { useState } from "react";
import Button from './Button';

function Calculator(){
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState < string | null > (null);
    const [firstOpererand, setOperand] = useState < number | null > (null);

    function handleNumerClick(value: string){
        setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }

    function handleNuberClick(newOperator: string){
        if (firstOpererand == null){
            setOperand(parseFloat(displayValue));
        setOperator(newOperator);
        setDisplayValue('0');
        }
        else{
            calculate();
            setOperator(newOperator);
        }
    }

    function calculate(){
        if (firstOpererand !== null && operator !== null){
            const secondOperator = parseFloat(displayValue);
            switch(operator){
                case '+':
                setDisplayValue((firstOpererand + secondOperator).toFixed());
                break;
                case '-':
                setDisplayValue((firstOpererand + secondOperator).toFixed());
                break;
                case '*':
                setDisplayValue((firstOpererand + secondOperator).toFixed());
                break;
                case '/':
                if (secondOperator === 0){
                    setDisplayValue('Error');
                }
                else{
                    setDisplayValue((firstOpererand / secondOperator).toFixed());
                }
            } 
        }
    }

    setOperand(null);
    setOperator(null);

    return(
        <div>
            <div>{displayValue}</div>
            {/*aqui iran los botones de la calculadora*/}
            <Button value="1" onClick={() => handleNuberClick('1')}/>{''}
            <button value="+" onClick={() => handleNumerClick('+')}/>{''}
        </div>

    );
}

export default Calculator;
