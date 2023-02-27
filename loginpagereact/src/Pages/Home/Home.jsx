import imagelogin from '../../assets/image-login.svg'
import iconeGoogle from '../../assets/icone-google.svg'
import './Home.css'
import { Button } from '../../Components/Button/Button'
import { Input } from '../../Components/Input/Input'
import { TextButton } from '../../Components/TextButton/TextButton'
import { useEffect, useState } from 'react'
import { user } from '../../constants/user'

export function Home() {
  const formInitialState = {
    email: '',
    senha: '',
    lembreMe: false
  }
  const [form, setForm] = useState(formInitialState)

  function formSubmit() {
    
    const { email, senha } = form
    if (email === '' || form.senha === '') {
      alert('Formulário inválido')
      return
    }
    const firstAtSign = email.indexOf('@')
    const lastAtSign = email.lastIndexOf('@')
    const emailParts = email.split('@')

    if (firstAtSign === -1 || email.length < 5 || lastAtSign !== firstAtSign || firstAtSign === 0 ||  lastAtSign === email.length -1 || email[0] === '.' || email[email.length -1] === '.' || email.indexOf('..') !== -1 ||emailParts[0][emailParts[0].length -1] === '.' || emailParts[1][0] === '.' ) {
      alert('E-mail inválido')
      return
    }

    if (senha.length < 6){
      alert('Senha inválida')
      return
    }
    alert('Você entrou')
  }

  function updateForm(keyName, keyValue) {
    setForm({ ...form, [keyName]: keyValue })
  }

  return (
    <div className="geral">
      <div className="container-imagem">
        <img src={imagelogin} alt="" />
      </div>
      <div className="container-formulario">
        <div className="formulario">
          <div className="formulario-titulo">
            <h1 className="home-titulo">Entre com a sua conta</h1>
            <h3 className="home-subtitulo">
              Veja o que está acontecendo com o seu negócio
            </h3>

            <Button
              onClick={() => alert('Entre com o google')}
              comFundo={false}
              icone={iconeGoogle}
            >
              Entre com o google
            </Button>
            <p style={{ margin: '8px' }} className="home-separador">
              {' '}
              ------------- ou Entre com seu e-mail -------------{' '}
            </p>
            <div className="home-input-container">
              <Input
                onChange={event => updateForm('email', event.target.value)}
                valor={form.email}
                titulo="Email"
                tipo="text"
              />
              <Input
                onChange={event => updateForm('senha', event.target.value)}
                valor={form.senha}
                titulo="Senha"
                tipo="password"
              />
            </div>
            <div className="home-lembrar-senha-container">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  id="check"
                  className="home-checkbox"
                  checked={form.lembreMe}
                  onChange={() =>
                    updateForm('lembreMe', form.lembreMe ? false : true)
                  }
                />
                <label htmlFor="check" className="home-checkbox-label">
                  Lembre-me
                </label>
              </div>
              <TextButton onClick={() => alert('Recupere sua senha')}>
                Esqueceu sua senha?
              </TextButton>
            </div>
            <Button onClick={formSubmit} comFundo={true}>
              Login
            </Button>
          </div>
        </div>
        <div className="home-crie-sua-conta">
          <p>Não é cadastrado?</p>
          <TextButton onClick={() => alert('Crie sua conta')}>
            Crie sua conta
          </TextButton>
        </div>
      </div>
    </div>
  )
}
