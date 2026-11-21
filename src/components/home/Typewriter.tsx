'use client'

import { useEffect, useState } from 'react'

const COMMANDS = [
  'npx @arsams/grit commit',
  'homa sync --caldav --google --microsoft',
  'linkdean save --encrypted',
  'brew install curiosity',
  'git push --force-with-lease  # carefully',
  'echo "open to interesting problems"',
  'sudo make me-a-sandwich',
  'npx arsam --about',
  'grit rebase --interactive --calmly',
  'homa add "coffee with a friend" --tomorrow',
  'git blame --ignore-rev the-reformat',
  'cargo build --release  # worth the wait',
  'docker compose up --self-hosted',
  'rm -rf node_modules && pnpm install',
  'git commit -m "small, readable, shipped"',
  'curl -s arsam.dev | grep coffee',
  'tail -f ~/ideas.log',
  'cal --jalali',
  'npm publish --access public',
  'git checkout -b side-project-no-17',
  'whoami  # staff engineer, forever curious',
  'ssh home-lab "uptime"',
]

const TYPE_MS = 70
const DELETE_MS = 35
const HOLD_MS = 2200
const GAP_MS = 500

// Types a command, holds it, deletes it, then moves to the next one
export const Typewriter = () => {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const command = COMMANDS[index]

  useEffect(() => {
    if (reduced) return
    let delay = deleting ? DELETE_MS : TYPE_MS
    if (!deleting && length === command.length) delay = HOLD_MS
    if (deleting && length === 0) delay = GAP_MS

    const timer = setTimeout(() => {
      if (!deleting && length === command.length) setDeleting(true)
      else if (deleting && length === 0) {
        setDeleting(false)
        setIndex((i) => (i + 1) % COMMANDS.length)
      } else setLength((l) => l + (deleting ? -1 : 1))
    }, delay)
    return () => clearTimeout(timer)
  }, [command, deleting, length, reduced])

  const typing = !reduced && length > 0 && length < command.length

  return (
    <p className="text-site-muted" aria-hidden="true">
      <span className="text-site-live">$</span>{' '}
      <span className="text-site-text">
        {reduced ? command : command.slice(0, length)}
      </span>
      <span
        className={`ml-0.5 inline-block h-[18px] w-2.5 translate-y-[3px] bg-site-accent ${typing ? '' : 'motion-safe:animate-caret'}`}
      />
    </p>
  )
}
