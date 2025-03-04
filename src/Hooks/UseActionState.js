import { useActionState } from "react"

export const UseActionState = () => {

  const submitHandler = async(previousState, formData) => {
    // const name = formData.get("name")
    // const password = formData.get("password")
    // await new Promise(res => setTimeout(res, 2000))
    // console.log('submit handler ', name, password)
    // if (name && password) {
    //   return {message:"submited successfully"}
    // }
    // else {
    //   return {error:"not successfully submit"}
    // }
    console.log(previousState)
  }
  const [state, formAction, isPending] = useActionState(submitHandler,{name:"jack"});
  // console.log(useActionState(submitHandler,{name:"jack"}))
  return (
    <form action={formAction} style={{display:"flex",flexFlow:'column' ,gap:'8px'}}>
      <h1>Use Action State demo</h1>
      <input type={"text"} name={"name"} placeholder="Enter you name"/>
      <input type={'password'} name={'password'} placeholder="Enter password"/>
      <button disabled={isPending} type="submit">Submit</button>
    </form>
  )
}