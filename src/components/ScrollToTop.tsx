'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
  const pathname = usePathname()

  // Rola a página para o topo sempre que a rota mudar
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
