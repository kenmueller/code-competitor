import { useRouter } from 'next/router'

import Article from 'components/Article'

import styles from 'styles/components/Level/Session.module.scss'

export interface LevelSessionProps {
	id: number
}

const LevelSession = ({ id }: LevelSessionProps) => {
	const slug = useRouter().query.slug as string
	const Description = require(`articles/levels/${slug}/sessions/${id}.mdx`).default
	
	return (
		<div className={styles.root}>
			<h4 className={styles.title}>{id}</h4>
			<Article className={styles.description}>
				<Description />
			</Article>
		</div>
	)
}

export default LevelSession
