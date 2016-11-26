angular.module("pdApp")
    .controller('CadastroBairroController',CadastroBairroController)

CadastroBairroController.$inject = ['$scope','AlertService','$state','$rootScope'];

function CadastroBairroController($scope, AlertService, $state, $rootScope){
    $scope.entidade;
    $rootScope.listaBairros;

    if($rootScope.listaBairros == null){
        $rootScope.listaBairros=[];
    }

    $scope.novo = true;

    $scope.limpar = limpar;
    $scope.salvar = salvar;
    $scope.excluir = excluir;
    $scope.editar = editar;
    $scope.abrirPagina = abrirPagina;

    $scope.defaultGridOptions = {
        columnDefs: [
            {name: 'Bairro', field: 'bairro'},
            {name: 'Cidade', field: 'cidade'},
            {name: 'Estado', field: 'estado',width: 130},
            {
                name: '', field: 'excluir',

                cellTemplate:'app/template/grid/cell-template-bairro.html',width: 80
            }

        ],
        data: 'listaBairros',
        enableColumnMenus: false
    };


    function salvar(){

        if($scope.myForm.bairro.$invalid || $scope.myForm.cidade.$invalid || $scope.myForm.estado.$invalid) {
            AlertService.error("Formulario inválido");
            $scope.myForm.bairro.$setTouched();
            $scope.myForm.cidade.$setTouched();
            $scope.myForm.estado.$setTouched();
            return;
        }
        if($scope.novo){
            $rootScope.listaBairros.push(angular.copy($scope.entidade));
            sucesso("Inserido com sucesso!");
        }else {

            sucesso("Editado com sucesso!");
        }

        limpar();

    }

    //limpar os inputs vinculados no ng-model
    function limpar(){
        $scope.entidade = {};
        $scope.myForm.$setUntouched();
        angular.element('#itNome').focus();//pega pelo id precisa do jquery
    }


    function excluir(linha){
        $rootScope.listaBairros.splice($rootScope.listaBairros.indexOf(linha),1);
        sucesso("Excluido com sucesso!");
        limpar();
    }

    function editar(linha){
        $scope.entidade = (linha);
        $scope.novo = false;
    }

    function sucesso(msg) {
        AlertService.success(msg);
    }

    function abrirPagina(pagina,entidade) {
        //$scope.$emit('visualizarBairro',{valor:angular.copy(entidade)});


        $scope.$root.valor = angular.copy(entidade);

        $state.go(pagina);

    }

    // $rootScope.$on('visualizarBairro',onTesteEnvioEvento);
    //
    // $scope.abrirBairro = abrirBairro;
    //
    // function onTesteEnvioEvento(event,data){
    //     event.targetScope.entidade = data.valor;
    //     console.log(event.targetScope.entidade);
    // }
    //
    // function abrirBairro(){
    //     $state.go('cadastroBairro');
    // }
}