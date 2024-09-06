'use client'

import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { Icon } from '#/components/Icon'
import { Button } from '#/components/ui/button'
import { copyToClipboard } from '#/utils/copyToClipboard'

export const Pre = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  >
) => {
  const preRef = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const handleClickCopy = async () => {
    if (preRef.current?.innerText) {
      copyToClipboard(preRef.current.innerText)
      setCopied(true)
      toast.success('Success!', {
        description: 'Code block copied to clipboard!',
      })
    }
  }

  return (
    <div className="group relative">
      <pre {...props} ref={preRef}>
        <Button
          type="button"
          variant="ghost"
          colour="light"
          disabled={copied}
          onClick={handleClickCopy}
          aria-label="Copy to Clipboard"
          className="absolute right-2 top-2 hidden transition fade-in focus:outline-none disabled:flex group-hover:flex"
        >
          <Icon name="copy" />
        </Button>

        {props.children}
      </pre>
    </div>
  )
}
