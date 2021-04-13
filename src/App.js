import { useState, useEffect } from 'react';
import Button from "./Button.js";

function App() {

  const [value, setValue] = useState(0);
  const [memory, setMemory] = useState([]);

  const handleButtonClick = (symbol) => () =>
  {
    switch(symbol){
      case 'AC':
        {
          setValue(0);
          setMemory([]);
          break;
        }
      case '=':
        {
          setValue(99);
          break;
        }
      default:
        break;
    }
  }

  return (
    <div className="App">
          <div className="calculator">
            <div className="display">{ value }</div>
            <div className="keypad">
                <Button onButtonClick={handleButtonClick} id="clear" symbol="AC"/>
                <Button onButtonClick={handleButtonClick} id="divide" symbol="/" buttonType="operand"/>
                <Button onButtonClick={handleButtonClick} id="multiply" symbol="*" buttonType="operand"/>

                <Button onButtonClick={handleButtonClick} id="seven" symbol="7" />
                <Button onButtonClick={handleButtonClick} id="eight" symbol="8" />
                <Button onButtonClick={handleButtonClick} id="nine" symbol="9" />    
                <Button onButtonClick={handleButtonClick} id="minus" symbol="-" buttonType="operand"/>

                <Button onButtonClick={handleButtonClick} id="four" symbol="4" />
                <Button onButtonClick={handleButtonClick} id="five" symbol="5" />
                <Button onButtonClick={handleButtonClick} id="six" symbol="6" />
                <Button onButtonClick={handleButtonClick} id="plus" symbol="+" buttonType="operand"/>

                <Button onButtonClick={handleButtonClick} id="one" symbol="1" />
                <Button onButtonClick={handleButtonClick} id="two" symbol="2" />
                <Button onButtonClick={handleButtonClick} id="three" symbol="3" />            

                <Button onButtonClick={handleButtonClick} id="zero" symbol="0" />
                <Button onButtonClick={handleButtonClick} id="decimal" symbol="." />

                <Button onButtonClick={handleButtonClick} id="equals" symbol="=" buttonType="operand"/>
            </div>
        </div>
    </div>
  );
}

export default App;
