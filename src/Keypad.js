import KeypadButton from "./KeypadButton"

const Keypad = () => {
    return ( 
        <div className="keypad">
            <KeypadButton id="clear" symbol="AC"/>
            <KeypadButton id="divide" symbol="/" class="operand"/>
            <KeypadButton id="multiply" symbol="*" class="operand"/>

            <KeypadButton id="seven" symbol="7" />
            <KeypadButton id="eight" symbol="8" />
            <KeypadButton id="nine" symbol="9" />    
            <KeypadButton id="minus" symbol="-" class="operand"/>

            <KeypadButton id="four" symbol="4" />
            <KeypadButton id="five" symbol="5" />
            <KeypadButton id="six" symbol="6" />
            <KeypadButton id="plus" symbol="+" class="operand"/>

            <KeypadButton id="one" symbol="1" />
            <KeypadButton id="two" symbol="2" />
            <KeypadButton id="three" symbol="3" />            
            
            <KeypadButton id="zero" symbol="0" />
            <KeypadButton id="decimal" symbol="." />
            
            <KeypadButton id="equals" symbol="=" class="operand"/>
        </div>
     );
}
 
export default Keypad;