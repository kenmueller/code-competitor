import { PropsWithChildren } from 'react'

import CustomMDXProvider from './CustomMDXProvider'

import styles from 'styles/components/Article.module.scss'

const Article = ({ children }: PropsWithChildren<{}>) => (
	<article className={styles.root}>
		<CustomMDXProvider>{children}</CustomMDXProvider>
	</article>
)

export default Article
