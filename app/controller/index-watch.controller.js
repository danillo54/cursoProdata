angular.module('pdApp')
    .controller('IndexWatchController',IndexWatchController)

IndexWatchController.$inject = ['$scope'];

function IndexWatchController($scope) {
    $scope.nome ='Danillo';
    $scope.cor ='';
    $scope.disparar = disparar;

    $scope.styleDiv = {
        width: '150px',
        height: '150px'
    };

    $scope.$watch('cor', onWatchCor);

    function onWatchCor(valorNovo, valorAntigo) {
        if(valorNovo === valorAntigo){
            return;
        }

        $scope.styleDiv.backgroundColor = valorNovo;
    }

    function disparar() {
        $scope.$emit('testeEnvioEvento',{valor:'Enviando Evento!'})
    }

}