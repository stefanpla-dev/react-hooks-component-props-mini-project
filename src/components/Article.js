import React from 'react'

function Article({ title, date, minutes, preview }) {
  const numCups = Math.ceil(minutes/5)
  const coffeeCupEmoji = "☕️"
  const coffeeCups = coffeeCupEmoji.repeat(numCups)

  const numBoxes = Math.ceil(minutes/10)
  const bentoBoxEmoji = "🍱"
  const bentoBoxes = bentoBoxEmoji.repeat(numBoxes)

  // console.log(post)
    return (
    <article>
        <h3>{title}</h3>
        <small>{date ? date : "January 1, 1970"} {minutes<30 ? coffeeCups : bentoBoxes}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article