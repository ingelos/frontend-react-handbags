
function Button({disabled, buttonText, type, onClick}) {


    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {buttonText}
        </button>
    );
}

export default Button;