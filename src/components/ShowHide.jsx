import React, { useState } from 'react'

export const ShowHide = () => {

  const [show, setShow] = useState(true);

  const handleClick = (event) => {
    setShow(!show)
    console.log(event);
  }

  return (
    <div>{show ? <h2>Hide Me!!!</h2> : ""}
      <button onClick={handleClick}>{show ? 'hide ' : 'show '} Text</button>
    </div>
  )
}
