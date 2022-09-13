import "./Button.css";

type ButtonProps = {
    text: string;
    className?: string;
    onClick: () => void;
};
const Button = ({ text, onClick, className }: ButtonProps) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
