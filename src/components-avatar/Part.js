import React from 'react'


function Part({index,zIndex,path}) {
  return (
    <img alt='' src={`/character/${path}/${index}.png`} width="260" style={{position: 'absolute',zIndex :zIndex}}/>
  )
}

export default Part
