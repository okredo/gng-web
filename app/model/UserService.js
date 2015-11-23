import rx from 'rx';

export class UserService {
	/* @ngInject */
	constructor($q) {
		this.$q = $q;
		this.currentUser = null;
		this.password = null;
	}
	
	login(username, password) {
		return this.$q(resolve => {
			setTimeout(() => {
				resolve(true);
			}, 1000);
		}).then(() => {
			this.currentUser = username;
			this.password = password;
		});
	}
	
	getUser() {
		return {
			currentUser: this.currentUser,
			password: this.password
		};
	}
	
	isLoggedIn() {
		return this.currentUser !== null;
	}
	
	getUserFeed() {
		return Rx.Observable.timer(1000, 1000)
			.map(number => ({
				user: this.currentUser,
				actionId: number
			}));
	}
}