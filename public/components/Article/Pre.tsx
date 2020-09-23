import Highlight, { defaultProps, Language } from 'prism-react-renderer'

import styles from 'styles/components/Article/Pre.module.scss'

export interface PreProps {
	className?: string
	children: string
}

const Pre = ({ className, children }: PreProps) =>
	className
		? (
			<Highlight
				{...defaultProps}
				code={children}
				language={className?.replace(/^language\-/, '') as Language}
			>
				{({ className, tokens, getLineProps, getTokenProps }) => (
					<pre className={className}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		)
		: <pre className={styles.plain}>{children}</pre>

export default Pre
