import { useEffect, useState } from "react"
import { slides } from "../data"

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [seen, setSeen] = useState([0])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined
    const timer = setInterval(() => setIndex((value) => (value + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const next = (index + 1) % slides.length
    const add = () => {
      setSeen((current) => {
        if (current.includes(index) && current.includes(next)) return current
        return [...new Set([...current, index, next])]
      })
    }
    if (window.requestIdleCallback) {
      const idle = window.requestIdleCallback(add, { timeout: 1500 })
      return () => window.cancelIdleCallback(idle)
    }
    const timer = window.setTimeout(add, 800)
    return () => window.clearTimeout(timer)
  }, [index])

  const show = (next) => {
    const normalized = (next + slides.length) % slides.length
    setIndex(normalized)
    setSeen((current) => (current.includes(normalized) ? current : [...current, normalized]))
  }

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Introduction">
      <div className="hero-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={i === index ? "slide is-active" : "slide"}
            style={seen.includes(i) ? { backgroundImage: `url(${slide.image})` } : undefined}
            aria-hidden={i !== index}
          >
            <div className="slide-inner">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
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
