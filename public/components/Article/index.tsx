import { PropsWithChildren } from 'react'
import cx from 'classnames'

import CustomMDXProvider from './CustomMDXProvider'

import styles from 'styles/components/Article/index.module.scss'

export interface ArticleProps extends PropsWithChildren<{}> {
	className?: string
}

const Article = ({ className, children }: ArticleProps) => (
	<article className={cx(styles.root, className)}>
		<CustomMDXProvider>{children}</CustomMDXProvider>
	</article>
)

export default Article
