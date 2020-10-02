const identifyHubSpotUser = (email: string): void =>
	((window as any)._hsq ??= []).push(['identify', { email }])

export default identifyHubSpotUser
