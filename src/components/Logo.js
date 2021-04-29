import logo from '../assets/resources/img/1280px-React-icon.svg.png'
const Logo = ({type , text}) => {
    return (
        <div>
            <img src={logo} className={type} alt="Application Name"></img>
            <p> {text}</p>
        </div>
    )
}

export default Logo
