import { useState, useEffect } from 'react'

import LevelInstance from 'models/LevelInstance'
import firebase from 'lib/firebase'
import handleError from 'lib/handleError'

import 'firebase/firestore'

const firestore = firebase.firestore()

const snapshotToLevelInstance = (snapshot: firebase.firestore.DocumentSnapshot) => {
	const data = snapshot.data()
	
	return {
		...data,
		id: snapshot.id,
		start: data.start.toDate()
	} as LevelInstance
}

const useLevelInstances = (slug: string | undefined) => {
	const [levels, setLevels] = useState<LevelInstance[] | null>(null)
	
	useEffect(() => {
		if (!slug)
			return
		
		return firestore.collection(`levels/${slug}/instances`).onSnapshot(snapshot => {
			setLevels(levels => levels ?? [])
			
			for (const { type, doc } of snapshot.docChanges())
				switch (type) {
					case 'added':
						setLevels(levels => [...levels, snapshotToLevelInstance(doc)])
						break
					case 'modified':
						setLevels(levels => levels.map(level =>
							level.id === doc.id
								? snapshotToLevelInstance(doc)
								: level
						))
						break
					case 'removed':
						setLevels(levels => levels.filter(({ id }) => id !== doc.id))
						break
				}
		}, handleError)
	}, [slug, setLevels])
	
	return levels
}

export default useLevelInstances
