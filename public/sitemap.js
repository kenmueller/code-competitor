const writeFile = require('fs').writeFileSync
const { join } = require('path')
const glob = require('glob').sync
const createXml = require('xmlbuilder2').create

const BASE_URL = 'https://codecompetitor.com'
const OUT_PATH = join(__dirname, 'out')

writeFile(join(OUT_PATH, 'sitemap.xml'), createXml(
	{ version: '1.0', encoding: 'UTF-8' },
	{
		urlset: {
			'@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
			'@xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
			'@xsi:schemaLocation': 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
			url: glob(join(OUT_PATH, '**/*.html')).reduce((acc, path) => {
				const pathname = path
					.replace(OUT_PATH, '')
					.replace(/(?:\/index)?\.html$/, '')
					.replace(/&/g, '&amp;')
					.replace(/'/g, '&apos;')
					.replace(/"/g, '&quot;')
					.replace(/>/g, '&gt;')
					.replace(/</g, '&lt;')
				
				return pathname === '/404'
					? acc
					: [...acc, { loc: `${BASE_URL}${pathname}` }]
			}, [])
		}
	}
).end())
