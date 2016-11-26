angular.module('pdApp')
    .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {

    var cadastroCarro = {
        name:'cadastroCarro',
        url:'/cadastro-carro',
        templateUrl:'app/views/carro/cadastro-carro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/carro/cadastro-carro.controller.js');
            }
        }
    };

    var pesquisaCarro = {
        name:'pesquisaCarro',
        url:'/pesquisa-carro',
        templateUrl:'app/views/carro/pesquisa-carro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/carro/pesquisa-carro.controller.js');
            }
        }
    };

    var cadastroBairro={
        name:'cadastroBairro',
        url: '/cadastro-bairro',
        templateUrl: 'app/views/bairro/cadastro-bairro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/bairro/cadastro-bairro.controller.js');
            }
        }
    };

    var visualizarBairro={
        name:'visualizarBairro',
        url: '/visualizar-bairro',
        templateUrl: 'app/views/bairro/visualizar-bairro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/bairro/visualizar-bairro.controller.js');
            }
        }
    };

    $stateProvider
        .state('cadastroCarro', cadastroCarro)
        .state('pesquisaCarro', pesquisaCarro)
        .state('cadastroBairro',cadastroBairro)
        .state('visualizarBairro',visualizarBairro)
}