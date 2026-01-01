import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top when route changes
    // Use setTimeout to ensure DOM is ready, especially for mobile
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Instant scroll for better mobile experience
      })
      // Also scroll documentElement for better browser compatibility
      if (document.documentElement) {
        document.documentElement.scrollTop = 0
      }
      if (document.body) {
        document.body.scrollTop = 0
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default ScrollToTop

