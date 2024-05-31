import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Box = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <>
      <div className="boxContainer" style={{background: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black"}}>
        <h1>Button component</h1>
        <button type='button' onClick={toggleTheme}>Change Theme</button>
      </div>
    </>
  )
}

export default Box
