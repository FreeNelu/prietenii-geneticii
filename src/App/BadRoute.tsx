import React from 'react'
import { Link } from 'react-router-dom'

function BadRoute () {
  return (
      <div>
        <h2>Nimic de văzut aici!</h2>
        <p>
          <Link to="/">Mergi la pagina principală</Link>
        </p>
      </div>
  )
}

export default BadRoute
