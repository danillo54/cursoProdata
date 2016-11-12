angular.module('pdApp')
    .controller('CadastroCarroController',CadastroCarroController)

function CadastroCarroController($scope,AlertService) {
    $scope.entidade = [];
    $scope.listaCarros=[];

    //registrando no escopo
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.limparLista = limparLista;
    $scope.excluir = excluir;

    function salvar(){

        if($scope.myForm.nome.$invalid || $scope.myForm.cor.$invalid) {
            AlertService.error("Formulario inválido");
            $scope.myForm.nome.$setTouched();
            $scope.myForm.cor.$setTouched();
            return;
        }
            $scope.listaCarros.push($scope.entidade);
            sucesso();
            limpar();

    }

    //limpar os inputs vinculados no ng-model
    function limpar(){
        $scope.entidade = {};
        $scope.myForm.$setUntouched();
        angular.element('#itNome').focus();//pega pelo id precisa do jquery
    }

    function limparLista() {
        $scope.listaCarros.removeAll();
        $scope.myForm.$setUntouched();
    }

    function excluir(linha){
        $scope.listaCarros.splice($scope.listaCarros.indexOf(linha),1);
        sucesso();
    }

    function sucesso() {
        AlertService.success("Inserido com sucesso!");
    }
}