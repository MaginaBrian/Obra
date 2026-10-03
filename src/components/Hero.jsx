import { useEffect, useState } from "react"
import { slides } from "../data"

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined
    const timer = setInterval(() => setIndex((value) => (value + 1) % slides.length), 7000)
    return () => clearInterval(timer)
  }, [paused])

  const show = (next) => setIndex((next + slides.length) % slides.length)

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Introduction"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={i === index ? "slide is-active" : "slide"}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-inner">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
      <button className="hero-nav prev" type="button" aria-label="Previous slide" onClick={() => show(index - 1)}>‹</button>
      <button className="hero-nav next" type="button" aria-label="Next slide" onClick={() => show(index + 1)}>›</button>
      <div className="dots" role="tablist">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            className={i === index ? "is-active" : undefined}
            aria-label={`Slide ${i + 1}`}
            aria-selected={i === index}
            onClick={() => show(i)}
          />
        ))}
      </div>
    </section>
  )
}
