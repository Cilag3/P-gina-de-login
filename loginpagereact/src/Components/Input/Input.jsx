import './Input.css'


export function Input({titulo,tipo, valor, onChange}) {

  return(
    <div className='input-container'>
    <label htmlFor={titulo} className='input-label'>{titulo}</label>
    <input onChange={onChange} value={valor} type={tipo} name="" id={titulo} className='input-input' />
    </div>
  )
}