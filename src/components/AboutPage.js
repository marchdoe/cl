import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        This example app is part of the <a href='#'>CL</a>.
      </p>
      <p>
        <Link to='/badlink'>Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  )
}

export default AboutPage
