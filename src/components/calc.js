import React, { useState } from 'react';

export const Calculator = (props) => {
    const [editorVal, updateEditor] = useState('0');
    const [output, calcOuptut] = useState('0');
    const [currentVal, updateCurrent] = useState('0');
    const [currentOperation, updateOperation] = useState('');
    const calculate = (param) => {
        debugger;
        if (typeof param == 'string') {
            updateOperation(param);
        } else {
            if (editorVal == '0') {
                updateEditor(param);
                calcOuptut(param);
            } else {
                if (currentOperation !== '') {
                    let firstInput = parseFloat(output);
                    let result;
                    if (currentOperation == '+') result = firstInput + parseFloat(param);
                    if (currentOperation == '-') result = firstInput - parseFloat(param);
                    if (currentOperation == '*') result = firstInput * parseFloat(param);
                    if (currentOperation == '/') result = firstInput / parseFloat(param);
                    updateCurrent(result);
                    updateEditor(param);
                } else {
                    let result = output;
                    result += param.toString();
                    calcOuptut(result);
                    updateEditor(result);
                }

            }
        }
    }
    const updateOuptut = () => {
        updateEditor(currentVal);
    }
    return (
        <div className="calculator">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className=" row output">
                        <span className="outputText">{editorVal}</span></div>
                    <div className="input box">
                        <div className="row btnRowTop">
                            <button className="btn" onClick={(e) => calculate('AC')}>AC</button>
                            <button className="btn" onClick={(e) => calculate('+/-')}>+/-</button>
                            <button className="btn" onClick={(e) => calculate('%')}>%</button>
                            <button className="btn" onClick={(e) => calculate('/')}>/</button>
                        </div>
                        <div className="row btnRow">
                            <button className="btn" onClick={(e) => calculate(7)}>7</button>
                            <button className="btn" onClick={(e) => calculate(8)}>8</button>
                            <button className="btn" onClick={(e) => calculate(9)}>9</button>
                            <button className="btn" onClick={(e) => calculate('*')}>*</button>
                        </div>
                        <div className="row btnRow">
                            <button className="btn" onClick={(e) => calculate(4)}>4</button>
                            <button className="btn" onClick={(e) => calculate(5)}>5</button>
                            <button className="btn" onClick={(e) => calculate(6)}>6</button>
                            <button className="btn" onClick={(e) => calculate('-')}>-</button>
                        </div>
                        <div className="row btnRow">
                            <button className="btn" onClick={(e) => calculate(1)}>1</button>
                            <button className="btn" onClick={(e) => calculate(2)}>2</button>
                            <button className="btn" onClick={(e) => calculate(3)}>3</button>
                            <button className="btn" onClick={(e) => calculate('+')}>+</button>
                        </div>
                        <div className="row btnRow">
                            <button className="btn btnLarge">0</button>
                            <button className="btn">.</button>
                            <button className="btn" onClick={(e) => updateOuptut()}>=</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default Calculator;