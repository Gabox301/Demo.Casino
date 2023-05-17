const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
	chromeWebSecurity: false,
	e2e: {
		env: {
			url: "https://demo.casino/",
			allure: true,
			credentials: {
				user: 'Gabotest',
				password: 'Gabo1234',
			},
		},
		setupNodeEvents(on, config) {
			{
				allureWriter(on, config)
				return config
			}
		},
	},
})
