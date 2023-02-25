import './Button.css'


export function Button({comFundo,children,icone, onClick }){
  return(
   <button onClick={onClick} className={`generico ${comFundo?'com-fundo':'sem-fundo'}`}>
    {icone && <img src={icone} alt="" style={{width:'25px', height:'25px'}}/>}
    {children}

   </button>
  )
}