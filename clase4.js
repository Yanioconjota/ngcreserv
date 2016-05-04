
var app = angular.module('exampleApp', [])

app.filter('countryAbbreviator', function () {
  return function (array, count) {
    if (!angular.isArray(array)) return array

    return array.map(function (item) {
      item.country = item.country.substr(0, count)
      return item
    })
  }
})

app.controller('TestCtrl', function ($filter) {
  this.sortCriteria = 'name'
  this.sortReverse = false
  this.numberOfResults = 4

  this.rows = [
    {
      name: 'Ezequel Kaplan',
      country: 'Argentina'
    },
    {
      name: 'Alejandro Grinberg',
      country: 'Polonia'
    },
    {
      name: 'Mauricio Roth',
      country: 'Bolivia'
    },
    {
      name: 'Mauricio Roth',
      country: 'Argentina'
    },
    {
      name: 'Christian Ferraro',
      country: 'Inglaterra'
    },
    {
      name: 'Jesus Colavita',
      country: 'Italia'
    },
    {
      name: 'Dario Pepper',
      country: 'Uruguay'
    },
    {
      name: 'Luis Farzati',
      country: 'Chile'
    }
  ]

  // ejemplo si lo quiero aplicar los filtros programaticamente
  // | filter:ctrl.searchCriteria
  // $scope.$watch('ctrl.searchCriteria', function () {
  //   this.computedRows = $filter('filter')(this.rows, ctrl.searchCriteria)
  //   // | countryAbbreviator:4
  //   this.computedRows = $filter('countryAbbreviator')(this.computedRows, 4)
  // })

})


app.constant('API_BASE_PATH', '/api')

app.service('TurnoService', function () {
  this.$get = function ($http, API_BASE_PATH) {
    var instancia = {}
    instancia.findAll = function () {
      return $http.get(API_BASE_PATH + '/turnos')
    }
    instancia.update = function(turno) {
      turno.timestamp = new Date()
      // return $http.post(...)
    }
    return instancia
  }
})

app.controller('TurnoCtrl', function (TurnoService) {
  TurnoService.findAll()
})
