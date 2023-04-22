type InputPesoProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

const InputPeso = ({ value, onChange }: InputPesoProps) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="peso">
                Peso (kg)
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="peso"
                type="number"
                value={value}
                title="Por favor entre um valor válido em kilogramas (ex.: 85.6)"
                placeholder="Ex.: 85,6"
                onChange={onChange}
            />
        </div>
    );
}

export default InputPeso;
