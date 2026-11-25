import { skillGroups } from "../data"
import Icon from "./Icon"

export default function Marquee() {
  const items = skillGroups.flatMap((g) => g.items)
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map(([img, name], i) => (
          <span key={i}><Icon src={img} />{name}</span>
        ))}
      </div>
    </div>
  )
}
