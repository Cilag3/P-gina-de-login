import './TextButton.css'


export function TextButton({children, onClick}) {
  return(
    <button className='textbutton-button' onClick={onClick}>{children}</button>
  )
}