import React from 'react'
import { useState } from 'react';

const Calc = () => {
    const [value, setValue] = useState('');

    const handleClick = (number) => {
      setValue(prevValue => prevValue + number);
    };
    const clearInput=()=>{
        setValue('')
    }
    const calculateResult=()=>{
        let result
        try {
            const operators=['+','-','/','*']
           let operator = null
            for (let i = 0; i < operators.length; i++) {
                if (operators.includes(value[i])) {
                    operator = value[i]
                    break
                }
                
            }
            if (!operators) {
                setValue(parseFloat(value).toString())
                return
            }
            const [operand1,operand2]=value.split(operator)
            .map(parseFloat)
            switch (operator) {
                case '+':
                    result=operand1+operand2;
                    break;
                    case '-':
                        result=operand1-operand2;
                        break;
                        case '*':
                            result=operand1*operand2;
                           break;
                            case '/':
                                result=operand1/operand2;
                                 break;    
            
                default:
                    throw new Error('Invalid Operator')
                    
            }

            
        } catch (error) {
            setValue('Error')
        }
        setValue(result.toString());

    }
    const handleSymbolClick = (symbol) => {
        setValue(prevValue => prevValue + symbol);
      };

      const handleDelete = () => {
        setValue((prevValue) => prevValue.slice(0, -1));
    };
    const handleClickDoubleZero = () => {
        setValue(prevValue => prevValue + '00');
    };
    const handlePercentage = () => {
        const number = parseFloat(value);
        const result = number / 100;
        setValue(result.toString());
    };
  
  return (
    
       
    <div className='container'>
        <div>
        <h2 style={{color:'#FFD460'}}>Calculator made with React</h2>
        <div className='Calculator'>
            <input type='text'
            value={value} style={{marginBottom:'16px'}}  ></input>
        <div>
        <button  onClick={()=>clearInput()}>C</button>
        <button onClick={()=>handleDelete()} 
        >DEL</button>
        <button onClick={()=>handlePercentage('%')} 
        >%</button>
        <button onClick={()=>handleSymbolClick('/')} 
        >/</button>
        </div>
        <div >
        <button onClick={()=>handleClick(7)}
        >7</button>
        <button onClick={()=>handleClick(8)}
        >8</button>
        <button onClick={()=>handleClick(9)}
        >9</button>
        <button onClick={()=>handleSymbolClick('*')} 
        >*</button>
        </div>
        <div >
        <button onClick={()=>handleClick(4)}
        >4</button>
        <button onClick={()=>handleClick(5)}
        >5</button>
        <button onClick={()=>handleClick(6)}
        >6</button>
        <button onClick={()=>handleSymbolClick('-')} 
        >-</button>
        </div>
        <div >
        <button onClick={()=>handleClick(1)}
        >1</button>
        <button onClick={()=>handleClick(2)}
        >2</button>
        <button onClick={()=>handleClick(3)}
        >3</button>
        <button onClick={()=>handleSymbolClick('+')} 
        >+</button>
        </div>
        <div >
        <button  onClick={()=>handleClickDoubleZero()} >00</button>
        <button onClick={()=>handleClick(0)}
        >0</button>
        <button onClick={()=>handleSymbolClick('.')} 
        >.</button>
        <button onClick={calculateResult}>=</button>
        </div>
        </div>
    </div>
    </div>

  )
}

export default Calc