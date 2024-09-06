import { useEffect, useState } from 'react'
import { useNetworkState } from 'react-use'
import { toast } from 'sonner'
import { Icon } from '#/components/Icon'

export const useNetworkStatus = () => {
  const [status, setStatus] = useState(true)
  const { online } = useNetworkState()

  useEffect(() => {
    if (!online && online !== status) {
      toast.warning('Uh oh!', {
        description: "Looks like you're not connected to the internet!",
        icon: <Icon name="router" />,
      })
    }

    if (online && online !== status) {
      toast.success('Connection restored!', {
        description: 'Your internet connection is restored!',
        icon: <Icon name="router" />,
      })
    }

    if (typeof online === 'boolean') setStatus(online)
  }, [online])
}
