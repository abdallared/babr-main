import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'babbr-theme'

/**
 * Manages dark / light theme.
 * - Reads initial value from localStorage (falls back to 'dark').
 * - Sets `data-theme` on `<html>` so CSS can react.
 * - Persists choice.
 */
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem(STORAGE_KEY) || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggle = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const isDark = theme === 'dark'

  return { theme, toggle, isDark }
}
