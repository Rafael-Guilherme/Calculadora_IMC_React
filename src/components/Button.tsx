interface Props {
    onClick: () => void;
}

const Button = ({ onClick }: Props) => {
    return (
        <button className='bg-slate-950 text-white rounded-lg h-8' onClick={onClick}>
            Calcular IMC
        </button>
    );
}

export default Button;
