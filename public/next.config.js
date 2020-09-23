module.exports = require('next-compose-plugins')([
	[require('next-optimized-images')],
	[require('@next/mdx')()]
])
