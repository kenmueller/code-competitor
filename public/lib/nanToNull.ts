const nanToNull = (number: number) =>
	Number.isNaN(number) ? null : number

export default nanToNull
