import angular from 'angular';
import LoginView from './LoginView.html';
import {LoginController} from './LoginController';
import {ModelModule} from '../model';

export let loginModule = 
	angular.module('app.login', [
		ModelModule
	])
		.config(/* @ngInject */ function($stateProvider) {
			$stateProvider.state('loginState', {
				url: '/login',
				template: LoginView,
				controller: LoginController,
				controllerAs: 'vm'
			});
		})
	.name;
