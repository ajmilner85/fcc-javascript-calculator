const KeypadButton = ({onButtonClick, id, symbol, buttonType}) => {
    return (
        <div onClick={onButtonClick(symbol)} className={["keypad-button", buttonType].join(" ")} id={ id }>
            { symbol }
        </div>
    );
}
 
export default KeypadButton;