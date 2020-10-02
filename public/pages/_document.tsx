import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
	render = () => (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<script id="hs-script-loader" src="https://js.hs-scripts.com/8575779.js" async />
			</body>
		</Html>
	)
}
