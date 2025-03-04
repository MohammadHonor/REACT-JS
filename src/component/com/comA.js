import { firstname } from "../../App";
import { useContext } from "react";
import ComB from "./comB";
function ComA(){
    const name=useContext(firstname);
    return(<>
        <h6>fist name is {name}</h6>
        <ComB/>
        </>
    )
}

export default ComA;