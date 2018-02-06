import React from 'react'

export default (props) => {
  return (
    <div>
      <img src={props.photo.url} alt={props.photo.title} />
      <p>{props.photo.explanation}</p>
    </div>
  )
}
