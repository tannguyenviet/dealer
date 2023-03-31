export type ILoginRequest = {
	username: string;
	password: string;
};

export type IGetMeResponse = {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
};
