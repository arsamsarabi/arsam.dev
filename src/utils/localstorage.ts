interface LocalStorageService {
	getItem(key: string): string
	setItem(key: string, value: unknown): void
}

export class LocalStorage implements LocalStorageService {
	getItem(key: string): string {
		const value = localStorage.getItem(key)

		if (!value) {
			console.error(`No value found for: ${key}`)
			return ''
		}

		return JSON.parse(value)
	}

	setItem(key: string, value: unknown): void {
		localStorage.setItem(key, JSON.stringify(value))
	}
}
