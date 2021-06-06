import React from 'react'
import Loader from "react-loading"

const LoaderStyle = {
  position: "fixed",
  zIndex: 3000,
  top: "50%",
  left: '50%',
  transform: "translate(-50%,-50%)",
  height: "50px",
  width: "50px",
  color: "blue",
}

export default function Loading() {
  return (
    <Loader style={LoaderStyle} type="spin" />
  )

}