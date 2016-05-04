
var app = angular.module('exampleApp', []);

app.controller('WelcomeCtrl', function ($scope) {
  var wctrl = this;

  var batmanDetector = function () {
    return wctrl.firstName === 'Batman';
  }

  $scope.$watch(batmanDetector, function (newValue) {
    if (newValue) {
      wctrl.prefix = 'Don'
    }
    else {
      wctrl.prefix = ''
    }
  })

});
