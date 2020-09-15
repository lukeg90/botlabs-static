import React from "react"
import Hero from "./image/hero"
import Botlabs from "./image/botlabs"

export default function Header() {
  return (
    <header>
      <Hero>
        <div className="hero-inner">
          <Botlabs />
        </div>
      </Hero>
    </header>
  )
}
