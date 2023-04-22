interface Props {
    onClick: () => void;
}

const Button = ({ onClick }: Props) => {
    return (
        <button className="
                    bg-blue-500 
                    hover:bg-blue-700 
                    text-white font-bold 
                    py-2 px-4 rounded 
                    focus:outline-none 
                    focus:shadow-outline
                    " 
                onClick={onClick}>
            Calcular IMC
        </button>
    );
}

export default Button;
