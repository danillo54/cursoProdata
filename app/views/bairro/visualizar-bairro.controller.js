angular.module("pdApp")
    .controller('VisualizarBairroController',VisualizarBairroController)

VisualizarBairroController.$inject = ['$scope','$rootScope','$state'];

function VisualizarBairroController($scope, $rootScope, $state){
    $scope.entidade = $rootScope.valor;

    $scope.abrirBairro = abrirBairro;

    function abrirBairro(){
        $state.go('cadastroBairro');
    }

}