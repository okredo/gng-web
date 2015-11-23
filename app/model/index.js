import {UserService} from './UserService.js';

export let ModelModule = 
	angular.module('app.model', [])
		.service('userService', UserService)
		.name;
