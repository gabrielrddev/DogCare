import  {Footer}  from '../../components/Footer/index.jsx';
import  {Header}  from '../../components/Header/index.jsx';
import { Link } from "react-router-dom";
import './styles.css'

export function Form() {

    return (
      <>
  
      <Header />

      <h1>Caso deseje fazer parte da nossa equipe de profissionais preencha as opcoes a baixo</h1>
      
      <form  >
        <div className='containerForm'>   
                <label for="name">Usuáriao:</label>
                <input type="text" name="name" id="" />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" />
                <label htmlFor="numero">numero:</label>
                <input type="number" name="numero" id="" />
                
            <button> <Link to='/'> Enviar</Link></button>
        </div>
      </form>
      
  
      <Footer />
      
      </>
    )
  }