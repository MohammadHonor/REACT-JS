function Login(){
    var submit=()=>{
        const info=document.querySelector(".info").value
        const email=document.querySelector(".email").value
        console.log("name is"+info)
        alert("name is "+info+"and email is"+email)
    }
    return(
        <div>
            <spane>Enter name</spane>
            <input type="text"  class="info"/>
            <spane>Enter emial</spane>
            <input type="email" class="email"/>
            <button  onClick={submit} type="submit">submit</button>
        </div>
    )
}
export default Login;