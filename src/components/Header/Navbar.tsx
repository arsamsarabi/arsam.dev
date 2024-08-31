import { NavLink } from './NavLink'

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-4">
      <NavLink text="Home" link="/" icon="home" />
      <NavLink text="Blog" link="/blog" icon="blog" />
    </nav>
  )
}
