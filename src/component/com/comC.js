import { firstname, LastName } from "../../App";
function ComC() {
    return (
        <>
            <firstname.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (<h1>My name is {fname}{ lname} </h1>)
                            }}
                        </LastName.Consumer>
                    )
                }}
            </firstname.Consumer>
        </>
    )
}
export default ComC;