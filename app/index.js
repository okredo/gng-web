import 'bootstrap/dist/css/bootstrap.css';

require('jquery')
import angular from 'angular';
import uiRouter from 'angular-ui-router';
var uibs = require('angular-ui-bootstrap');

import {appRoutes} from './routes';
import {homeModule} from './home';
import {loginModule} from './login';
require('bootstrap')
require('./index.css');

angular.module('HelloApp', [
	uibs,
	uiRouter,
	homeModule,
	loginModule
])
	.config(appRoutes);

