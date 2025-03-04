import { useContext } from 'react';
import { themDesign } from '../../App';
import './Panel.css';
function Panel(){
    const them=useContext(themDesign)
    console.log(themDesign)
    console.log(them)
    const className='pannel-' + them
    return(
        <div className={className}>
            <h1>Welcome</h1>
            <button>log in</button>
            <button>log out</button>
        </div>
    )

}

export default Panel;