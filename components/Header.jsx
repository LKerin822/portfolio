import Link from "next/link"

const Header = () => {
  return (
    <header className="header">
        <div className="links">
        <Link href="/">Louise Kerin Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Galleries</Link>
        <Link href="/">Appointments</Link>
      </div>       
    </header>
  )
}

export default Header 