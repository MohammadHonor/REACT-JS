import React, { useEffect, useState } from 'react'

export const UseOptimistic = () => {
  const [like, setLike] = useState(0);
  const [likeOpt, setLikeOpt] = useState(like);

  const fetchApicall = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        Math.random() > 0.2 ? res("success") : rej("rejected");
      }, 3000);
    })
  }
// console.log(fetchApicall())
  const handleLikes = async() => {
    try {
      console.log("before update ",like)
      setLikeOpt((prev) => prev + 1);
      const res = await fetchApicall();
      console.log(res);
      setLike(like+1);
    } catch (error) {
      console.log(error);
      setLikeOpt(like)
    }
  }


  // const handleLikes =() => {
  //   fetchApicall()
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err)=>console.log(err))
  // }

   
  useEffect(() => {
    console.log("After update ", like)
  },[like,likeOpt])
  return (
    <div>
      <p>UseOptimistic demonstration</p>
      <button onClick={handleLikes}>❤️ Likes: {likeOpt}</button>
    </div>
  )
}
