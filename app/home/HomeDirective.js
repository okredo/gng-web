import {HomeController} from './HomeController';
import HomeTemplate from './HomeView.html'

export function homeDirective() {
	return {
		controller: HomeController,
		controllerAs: 'vm',
		template: HomeTemplate
	}
}