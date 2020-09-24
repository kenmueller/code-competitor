const normalize = (string: string) =>
	string
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9\-]/ig, '')
		.toLowerCase()

export default normalize
