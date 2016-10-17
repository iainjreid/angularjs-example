'use strict'

// Dependencies
import AppRootTpl from './app-root.tpl.html'

class AppRootComponent {
  constructor ($log) {
    this.$log = $log
  }

  $onInit () {
    this.$log.debug('Application root initialising')
  }

  static get $inject () {
    return ['$log']
  }
}

angular
  .module('app', ['ngComponentRouter'])
  .value('$routerRootComponent', 'appRoot')
  .component('appRoot', {
    template: AppRootTpl,
    controller: AppRootComponent,
    controllerAs: '$appCtrl'
  })
