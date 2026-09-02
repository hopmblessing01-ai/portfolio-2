import { FiMoon, FiSun } from 'react-icons/fi'

function SiteHeader({ theme, onToggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <header className="site-header" id="top">
      <div className="rainbow-bar" aria-hidden="true">
        <div className="rainbow-strip">
          <div className="rainbow-segment rainbow-segment-1" />
          <div className="rainbow-segment rainbow-segment-2" />
          <div className="rainbow-segment rainbow-segment-3" />
          <div className="rainbow-segment rainbow-segment-4" />
          <div className="rainbow-segment rainbow-segment-5" />
        </div>
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        title={isDark ? 'Light mode' : 'Dark mode'}
      >
        {isDark ? <FiMoon /> : <FiSun />}
      </button>
    </header>
  )
}

export default SiteHeader
