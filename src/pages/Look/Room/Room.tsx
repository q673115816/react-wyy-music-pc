import React, {memo} from 'react'

export default memo(() => {

  return (
    <div className={`p-8`}>return <button onClick={methodDoesNotExist}>Break the world</button>;</div>
  )
})
