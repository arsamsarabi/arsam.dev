'use client'

import {
	DEFAULT_THEME,
	THEME_NAMES,
	ThemeManager,
	type ThemeNames,
} from '#/utils/theme-manager'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'

export const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false)
	const [theme, setTheme] = useState<ThemeNames>(DEFAULT_THEME)
	const manager = new ThemeManager()

	useEffect(() => {
		const savedTheme = manager.getTheme()
		setTheme(savedTheme)
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const handleChange = (themeName: ThemeNames) => {
		setTheme(themeName)
		manager.setTheme(themeName)
	}

	return (
		<div>
			{THEME_NAMES.map((t, index) => {
				return (
					<Button key={`${t}-${index}`} onClick={() => handleChange(t)}>
						{t}
					</Button>
				)
			})}
		</div>
	)
}
