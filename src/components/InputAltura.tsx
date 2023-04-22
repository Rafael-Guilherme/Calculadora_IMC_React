type InputAlturaProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

const InputAltura = ({ value, onChange}: InputAlturaProps) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="altura">
                Altura (m)
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="altura"
                type="number"
                value={value}
                placeholder="Ex.: 1,70"
                onChange={onChange}
            />
        </div>
    )
}

export default InputAltura