import { useState } from 'react';
import Button from './Button';
import InputAltura from './InputAltura';
import InputPeso from './InputPeso';

const Calculadora = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState<number>(0);
    const [classificacao, setClassificacao] = useState<string>('');
    const [isVisible, setIsVisible] = useState(false);

    const calcularIMC = () => {
        const alturaNum = parseFloat(altura)
        const pesoNum = parseFloat(peso)

        const IMC = pesoNum / (alturaNum ** 2);
        setResultado(IMC)

        setAltura('')
        setPeso('')

        if (IMC < 16.9) {
            setClassificacao('Muito abaixo do peso');
        } else if (IMC < 18.4) {
            setClassificacao('Abaixo do peso');
        } else if (IMC < 24.9) {
            setClassificacao('Peso normal');
        } else if (IMC < 29.9) {
            setClassificacao('Acima do peso');
        } else if (IMC < 34.9) {
            setClassificacao('Obesidade grau 1');
        } else if (IMC < 40) {
            setClassificacao('Obesidade grau 2');
        } else if (IMC > 40) {
            setClassificacao('Obesidade grau 3');
        }
    }

    const handleAlturaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '0' && e.target.selectionStart === 1) {
            setAltura('');
        } else {
            setAltura(value);
        }
    };

    const handlePesoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '0' && e.target.selectionStart === 1) {
            setPeso('');
        } else {
            setPeso(value);
        }
    };

    const handleButtonClick = () => {
        calcularIMC()
        setIsVisible(true)
    }
    
    return (
        <div className="flex justify-center bg-slate-400  w-[100vw] h-[100vh] mx-auto px-4 py-8">
            <div className='flex flex-col justify-center'>
                <h1 className="text-2xl font-bold mb-4">Calculadora de IMC</h1>
                <InputAltura value={altura} onChange={handleAlturaChange} />
                <InputPeso value={peso} onChange={handlePesoChange} />
                <Button onClick={handleButtonClick} />
                {isVisible && (
                    <div className="mb-4">
                        <p className="font-bold">Seu IMC é: {resultado.toFixed(2)}</p>
                        <p className="font-bold">Sua classificação é: {classificacao}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Calculadora;
