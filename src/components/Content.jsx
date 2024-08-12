import React from 'react'

export default function Content({name, text, children}) {
    const test = "ridnra"
  return (
    <div>
        Hello {name}
        <p>{text}</p>

        <div>
            {children}
        </div>
    </div>
  )
}
