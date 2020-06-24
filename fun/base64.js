function base64encode(value) {
	if (typeof window === 'undefined') {
		return (Buffer.from(value).toString('base64'));	
	}
	return btoa(value);
}

function base64decode(value) {
	if (typeof window === 'undefined') {
		return (Buffer.from(value, 'base64').toString());	
	}
	return atob(value);
}