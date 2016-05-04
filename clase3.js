
var app = angular.module('exampleApp', [])

app.controller('WelcomeCtrl', function () {
  var wctrl = this

  wctrl.array = [
    {
      id: 2,
      firstName: 'Luis',
      lastName: 'Farzati',
      age: 36,
    },
    {
      id: 4,
      firstName: 'Ezequiel',
      lastName: 'Kaplan',
      age: 24,
    },
    {
      id: 5,
      firstName: 'Christian',
      lastName: 'Ferraro',
      age: 27
    }
  ]

  wctrl.add = function (item) {
    wctrl.array.push(item)
  }

})
  
