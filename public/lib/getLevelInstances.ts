import LevelInstance from 'models/LevelInstance'
import firebase from './firebase'

import 'firebase/firestore'

const firestore = firebase.firestore()

const getLevelInstances = async (slug: string) => {
	const { docs } = await firestore
		.collection(`levels/${slug}/instances`)
		.get()
	
	return docs.map(snapshot => {
		const data = snapshot.data()
		
		return {
			...data,
			id: snapshot.id,
			start: data.start.toDate()
		} as LevelInstance
	})
}

export default getLevelInstances
