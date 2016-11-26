angular.module('pdApp')
    .controller('PesquisaCarroController', PesquisaCarroController);

function PesquisaCarroController($scope) {
    $scope.texto = 'Pesquisa de carro';
}