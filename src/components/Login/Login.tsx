import { FaUser,FaLock } from "react-icons/fa";
import "./Login.scss";

export default function Login() {

    function handleSubmit(){
        // Axios
    }

  return (
    <div className='Container'>
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div>
                <input type="email" placeholder='E-mail' />
                <FaUser />
            </div>
            <div>
                <input type="password" placeholder='Senha'/>
                <FaLock />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar-se.</a></p>
            </div>
        </form>
    </div>
  )
}

