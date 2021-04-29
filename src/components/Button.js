const Button = ({content , btnStyle}) => {
    return (
        <div>
            <button className={btnStyle}>{content}</button>
        </div>
    )
}

export default Button
