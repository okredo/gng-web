export class HomeController {
	/* @ngInject */
	constructor(userService, $scope) {
		this.name = userService.getUser();
		
		//let subscription = userService.getUserFeed().subscribe(next => {
		//	console.log('next', next);
		//});

		console.log(this.name, 'this.name')
		
		//$scope.$on('$destroy', () => subscription.dispose());
	}
}
