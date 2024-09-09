
const InputComp = ({value,onChange,placeholder,label,type})=>{
return(
    <div>
    {label && <label>{label}</label>}
    <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="input-field"
    />
    </div>
)
}

export default InputComp