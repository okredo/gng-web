import {homeDirective} from './HomeDirective';

export let homeModule = 
	angular.module('app.home', [])
		.directive('home', homeDirective)
		.name;
