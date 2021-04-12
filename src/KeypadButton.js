const KeypadButton = (props) => {
    return (
        <div className={["keypad-button", props.class].join(" ")} id={props.id}>
            {props.symbol}
        </div>
    );
}
 
export default KeypadButton;