import { toast } from 'react-toastify'

const handleError = (error: Error) => {
	toast.error(error.message)
	console.error(error)
}

export default handleError
