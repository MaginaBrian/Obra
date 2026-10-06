import { useEffect, useState } from "react"
import { NavLink, Outlet, Link, useLocation } from "react-router-dom"

function navClass({ isActive }) {
  return isActive ? "is-active" : undefined
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    if (/^#[A-Za-z][\w-]*$/.test(location.hash)) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header className="site-header">
        <a className="skip" href="#main">Skip to content</a>
        <Link className="logo" to="/" aria-label="Obra International home">
          <img src="/images/logo.png" alt="Obra International — Quantity Surveying, Project Management, Arbitration" />
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
        <ul className={open ? "nav is-open" : "nav"} id="site-nav">
          <li><NavLink to="/" end className={navClass}>Home</NavLink></li>
          <li><NavLink to="/services" className={navClass}>Services</NavLink></li>
          <li><NavLink to="/portfolio" className={navClass}>Portfolio</NavLink></li>
          <li><NavLink to="/quality" className={navClass}>Quality Policy</NavLink></li>
          <li><NavLink to="/gallery" className={navClass}>Gallery</NavLink></li>
          <li><NavLink to="/projects" className={navClass}>Obra Projects</NavLink></li>
          <li className="has-sub">
            <NavLink to="/about" className={navClass}>
              About Us
              <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
            </NavLink>
            <ul className="sub">
              <li><Link to="/about">The Firm</Link></li>
              <li><Link to="/about#approach">Our Approach</Link></li>
            </ul>
          </li>
          <li><NavLink to="/contact" className={navClass}>Contact Us</NavLink></li>
        </ul>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Obra International Ltd. All rights reserved.</p>
      </footer>
      <button
        className={showTop ? "to-top is-on" : "to-top"}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  )
}
