import './Button.css'


export function Button({comFundo,children,icone }){
  return(
   <button className={`generico ${comFundo?'com-fundo':'sem-fundo'}`}>
    <img src={icone} alt="" style={{width:'25px', height:'25px'}} />
    {children} 
    

   </button>
  )
}