import { useContext } from "react"
import { createTheme } from "../../Contexts/context"

function Form({children}) {
    console.log(children)
    return(
        <Panel title="Welcome">
        <Button>Sign up</Button>
       <Button>Log in</Button>
       </Panel>
    )
}

function Panel({title,children}){
    const theme = useContext(createTheme)
    const className='panel-' + theme;
    return(
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({children,onClick}) {
    const theme=useContext(createTheme) ;
    const className='button-' + theme
    return(
        <button className={className}>
            {children}
        </button>
    )
}
export default Form;