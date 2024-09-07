
const InputComp = ({value,onChange,placeholder})=>{
return(
    <input
    type="email"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    />
)
}

export default InputComp