import React, { useState } from 'react'
import "./header.css"
export default function Header({ dark, setDark }) {
  const [header, setHeader] = useState(false)
  const [black, setBlack] = useState()

  window.addEventListener("scroll", () => {
    window.scrollY > 80 ? setHeader(true) && setBlack("black") : setHeader(false) && setBlack("")
  })
  return (
    <div className={header ? "header headershow" : "header"}>
      <h5 className={black}>Digay Movie Collection</h5>
      <button className={`${!dark ? "sun" : "moon"}`} style={{ padding: "5px 15px", borderRadius: "50px", outline: "none", border: "none" }} onClick={() => !dark ? setDark(true) : setDark(false)}> <i className={`fas fa-${!dark ? "sun" : "moon"}`}></i> </button>
    </div >
  )
}
