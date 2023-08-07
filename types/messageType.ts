export interface MessageType{
	username: string,
	text: string, 
	date: string,
	type: 'admin' | 'user'
}