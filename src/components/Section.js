import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({path, classNameTitle, imageTitle, alt, imageSection}) => {
  return (
    <a href={path} className="link__imagen">
    <div className="link__titulo">
      <img
        src={imageTitle}
        className={classNameTitle}
        alt={alt}
      />
    </div>
    <img src={imageSection} className="imagen" alt={alt} />
  </a>
  )
}

export default Section