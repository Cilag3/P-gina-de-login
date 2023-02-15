import imagelogin from '../../assets/image-login.svg'
import iconeGoogle from '../../assets/icone-google.svg'
import './Home.css'
import { Button } from '../../Components/Button/Button'

export function Home() {
  return (
    <div className="geral">
      <div className="container-imagem">
        <img src={imagelogin} alt="" />
      </div>
      <div className="container-formulario">
        <div className="formulario">
          <div className="formulario-titulo">
            <h1>Entre com a sua conta</h1>
            <h3>Veja o que está acontecendo com o seu negócio</h3>

            <Button comFundo={false} icone={iconeGoogle} >Entre com o google</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
