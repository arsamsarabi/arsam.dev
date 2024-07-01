import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react'

export const Header = () => {
  return (
    <header className="wrapper flex flex-col justify-between items-center gap-8">
      <h1 className="text-5xl text-primary">
        arsam<span className="text-text text-[20px] opacity-65">.dev</span>
      </h1>
      <nav className="flex gap-6 items-center w-full">
        <a className="text-2xl" href="/">
          Home
        </a>
        <a className="text-2xl" href="/blog">
          Blog
        </a>
        <span className="flex-1" />
        <a href="" target="_blank">
          <IconBrandInstagram size={32} />
        </a>
        <a href="" target="_blank">
          <IconBrandLinkedin size={32} />
        </a>
        <a href="" target="_blank">
          <IconBrandGithub size={32} />
        </a>
      </nav>
    </header>
  )
}
