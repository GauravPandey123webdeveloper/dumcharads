import React from 'react'
import './Button.css';

export default function Button({name='',handler,defaultStyle={}}) {
  return (
    <div>
      <button className="button-50" onClick={handler}
      >{name||"submit"}</button>
    </div>
  )
}
