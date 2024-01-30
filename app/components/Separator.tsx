import React from 'react'

const Separator = (props: any) => {
  return (
    <div 
    className={`h-[1px] w-4/5 bg-egg-white m-auto`}
    style={{marginTop: props.horizontal, marginBottom: props.horizontal}}
    >
    </div>
  )
}

export default Separator