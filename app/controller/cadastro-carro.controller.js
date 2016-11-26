angular.module('pdApp')
    .controller('CadastroCarroController',CadastroCarroController)

CadastroCarroController.$inject = ['$scope','AlertService'];

function CadastroCarroController($scope,AlertService) {
    $scope.entidade = [];
    $scope.listaCarros=[];
    $scope.texto = "Cadastro de Carro";
    //registrando no escopo
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.limparLista = limparLista;
    $scope.excluir = excluir;
    $scope.defaultGridOptions = {
        columnDefs: [
            {name: 'Nome do carro', field: 'carroNome', minWidth: 230},
            {name: 'Cor do carro', field: 'carroCor', width: 130},
            {
                name: 'Data de lancamento', field: 'dataLancamento',
                cellTemplate: 'app/template/grid/cell-template-date.html', width: 130
            },
            {
                name: '', field: 'excluir',
                cellTemplate: 'app/template/grid/cell-template-excluir.html', width: 40
            }
        ],
        data: 'listaCarros',
        enableColumnMenus: false
    };

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