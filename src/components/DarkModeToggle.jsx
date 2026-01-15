import React from 'react'

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button onClick={onToggle}>
      Toggle {darkMode ? 'Light' : 'Dark'}
    </button>
  )
}

export default DarkModeToggle

