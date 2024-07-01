;(function () {
	const localStorageTheme = localStorage.getItem('app-theme')

	if (localStorageTheme !== null) {
		const theme = JSON.parse(localStorageTheme)
		document.querySelector('html').setAttribute('data-theme', theme)
	}
})()
