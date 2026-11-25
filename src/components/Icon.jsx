export default function Icon({ src, alt = "" }) {
  return src.startsWith("fa-")
    ? <i className={`fa-solid ${src} ai-ico`} aria-hidden="true" />
    : <img src={`/assets/${src}`} alt={alt} />
}
