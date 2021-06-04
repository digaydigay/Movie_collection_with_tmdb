import React, { useState } from 'react'
import "./header.css"
export default function Header() {
  const [header, setHeader] = useState(false)

  window.addEventListener("scroll", () => {
    window.scrollY > 80 ? setHeader(true) : setHeader(false)
  })

  return (
    <div className={header ? "header headershow" : "header"}>
      <h3>Dgy Movie</h3>

      <h4>About</h4>
    </div>
  )
}
