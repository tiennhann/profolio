
import {useEffect, useRef } from "react"

export default function Navbar({ sectionRefs }) {
  const navbar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  
  return (
    <header
      ref={navbar}
      className=""
    >
    </header>
  )
}

