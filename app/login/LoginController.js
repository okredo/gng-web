export class LoginController {
	/* @ngInject */
	constructor(userService, $state) {
		this.$state = $state;
		this._userService = userService;
	}
	
	login() {
		this._loginPromise = this._userService.login(this.user, this.password);
		this.loggingIn = true;
		this._loginPromise.then(() => {
			this.$state.go('homeState');
		});
	}
}