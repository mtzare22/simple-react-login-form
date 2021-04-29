import './assets/resources/css/index.css'
import './assets/resources/css/style.css'
import './assets/resources/css/button.css'
import './assets/resources/css/input.css'
import './assets/resources/css/logo.css'
import Logo from './components/Logo'
import Input from './components/Input'
import Button from './components/Button'


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="form-control">
        <div className="Logo">
          <Logo type="small" text="React JS Login Form" />
        </div>
        </div>
        <div className="form-control">
          <Input inputType="text" lableText="Username" />
        </div>
        <div className="form-control">
        <Input inputType="password" lableText="Password" />
        </div>
        <div className="form-control">
        <Button content="Login" btnStyle="green" />        
        </div>
      </div>
    </div>
  );
}

export default App;
