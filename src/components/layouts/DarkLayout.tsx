import { FC } from "react"

interface Props {
  children : JSX.Element | JSX.Element[]
}

const DarkLayout : FC<Props> = ({children}) => {
  return (
    <div style={{
        background:'rgba(0,0,0,0.3)',
        borderRadius:'5px',
        padding:'10px',
        width:'100%',
        height:'auto'
    }}>
        <h3>Dark layout</h3>
        <div>
          {children}
        </div>
    </div>
  )
}

export default DarkLayout

