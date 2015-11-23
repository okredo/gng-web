import {HomeController} from './home/HomeController';
import HomeTemplate from './home/HomeView.html'

/* @ngInject */
export function appRoutes($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('homeState', {
			url: "/home",
			template: HomeTemplate,
			controller: HomeController,
			controllerAs: 'vm'
		});

	$urlRouterProvider.otherwise("/login");
}