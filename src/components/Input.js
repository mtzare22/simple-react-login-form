const Input = ({inputType , lableText}) => {
    return (
        <div>
            <label>{lableText}</label>
            <input type={inputType} autoComplete='off'></input>
        </div>
    )
}

export default Input
