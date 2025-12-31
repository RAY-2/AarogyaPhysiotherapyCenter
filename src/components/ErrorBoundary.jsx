import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, showError: false }
    this.errorTimeout = null
  }

  static getDerivedStateFromError(error) {
    // Set hasError immediately but delay showing the error UI
    return { hasError: true, error, showError: false }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Delay showing the error UI to give the model time to load
    // This allows Suspense to show the loading state first
    this.errorTimeout = setTimeout(() => {
      this.setState({ showError: true })
      if (this.props.onError) {
        this.props.onError(error)
      }
    }, 3000) // Wait 3 seconds before showing error
  }

  componentDidUpdate(prevProps) {
    // Reset error state when key prop changes (new bone loaded)
    if (prevProps.key !== this.props.key) {
      if (this.errorTimeout) {
        clearTimeout(this.errorTimeout)
        this.errorTimeout = null
      }
      if (this.state.hasError) {
        this.setState({ hasError: false, error: null, showError: false })
      }
    }
  }

  componentWillUnmount() {
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout)
    }
  }

  render() {
    // Only show error UI after delay, otherwise show children (which will show Suspense loading)
    if (this.state.hasError && this.state.showError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: '#f44336' }}>
          <p>Something went wrong loading the 3D model.</p>
          <button onClick={() => {
            this.setState({ hasError: false, error: null, showError: false })
            if (this.errorTimeout) {
              clearTimeout(this.errorTimeout)
              this.errorTimeout = null
            }
          }}>
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

