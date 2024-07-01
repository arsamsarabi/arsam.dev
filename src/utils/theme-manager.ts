import { LocalStorage } from './localstorage'

export const THEME_NAMES = ['light', 'dark', 'ocean'] as const
export type ThemeNames = (typeof THEME_NAMES)[number]
export const DEFAULT_THEME: ThemeNames = 'light'

const THEME_LS_KEY = 'app-theme'

export class ThemeManager {
	private ls: LocalStorage
	constructor() {
		this.ls = new LocalStorage()
	}

	public setTheme(theme: ThemeNames) {
		this.ls.setItem(THEME_LS_KEY, theme)
		this.applyTheme(theme)
	}

	public getTheme(): ThemeNames {
		const savedTheme: string | null = this.ls.getItem(THEME_LS_KEY)
		const theme = (savedTheme ?? DEFAULT_THEME) as ThemeNames
		this.applyTheme(theme)
		return theme
	}

	private applyTheme = (themeName: ThemeNames) => {
		const HTML_THEME_ELEMENT = 'html'
		const THEME_ATTRIBUTE_NAME = 'data-theme'

		document
			.querySelector(HTML_THEME_ELEMENT)!
			.setAttribute(THEME_ATTRIBUTE_NAME, themeName)
	}
}
