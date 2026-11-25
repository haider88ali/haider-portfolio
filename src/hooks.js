import { useEffect, useState } from "react"

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 }
    )
    document.querySelectorAll(".rv").forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 80}ms`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
}

export function useSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const c = e.target.closest?.(".card")
      if (!c) return
      const r = c.getBoundingClientRect()
      c.style.setProperty("--mx", `${e.clientX - r.left}px`)
      c.style.setProperty("--my", `${e.clientY - r.top}px`)
    }
    document.addEventListener("mousemove", onMove)
    return () => document.removeEventListener("mousemove", onMove)
  }, [])
}

export function useTyping(words) {
  const [text, setText] = useState("")
  useEffect(() => {
    let w = 0, i = 0, del = false, t
    const tick = () => {
      const word = words[w]
      i += del ? -1 : 1
      setText(word.slice(0, i))
      let d = del ? 40 : 90
      if (!del && i === word.length) { del = true; d = 1400 }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; d = 350 }
      t = setTimeout(tick, d)
    }
    t = setTimeout(tick, 400)
    return () => clearTimeout(t)
  }, [])
  return text
}
