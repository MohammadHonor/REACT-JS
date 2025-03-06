import React, { useState } from 'react'
import { useId } from 'react';
export const UseId = () => {
  const id = useId();
  const [error, setError] = useState();
  const validation = (event) => {
    if (event.target.value.length < 5) {
      setError("name should contain more than 5 character");
    }
    else {
      setError("");
    }
  }
  return (
    <div>
      <h1>UseId demo</h1>

      <form>
        <div>
          <label htmlFor={id+'name'}> Name:</label>
          <input type='text' name="name" id={id + "name"} onChange={validation} ariaDescribedBy={ error?"erro-message":""} />
          <p id="error-message" style={{color:"red"}}> { error}</p>
        </div>
        <div>
          <label htmlFor={id+'email'}>Email:</label>
          <input type='email' name="email" id={ id+"email"} />
        </div>
        <div>
          <label >Password:
            <input type='password' name="password" aria-describedby={id + 'password'} />
            </label>
        </div>
      </form>
    </div>
  )
}

