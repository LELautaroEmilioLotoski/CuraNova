'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}