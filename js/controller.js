//Regras do JS.
var calc = angular.module('calc',[]);

calc.controller('ctrl',['$scope',function($scope){
$scope.display ="";

			$scope.onClick0 = function() {
			$scope.display += "0";
		};
			$scope.onClick1 = function() {
			$scope.display += "1";
		};
			$scope.onClick2 = function() {
			$scope.display += "2";
		};
			$scope.onClick3 = function() {
			$scope.display += "3";
		};
			$scope.onClick4 = function() {
			$scope.display += "4";
		};
			$scope.onClick5 = function() {
			$scope.display += "5";
		};
			$scope.onClick6 = function() {
			$scope.display += "6";
		};
			$scope.onClick7 = function() {
			$scope.display += "7";
		};
			$scope.onClick8 = function() {
			$scope.display += "8";
		};
			$scope.onClick9 = function() {
			$scope.display +="9";
		};
		
		// Funções para as operações
		
		$scope.onClickD = function() {
			$scope.display +="/";
		};
		$scope.onClickM = function() {
			$scope.display +="*";
		};
		$scope.onClickS = function() {
			$scope.display +="+";
		};
		$scope.onClickSub = function() {
			$scope.display +="-";
		};
		$scope.onClickL = function() {
		    
			$scope.display ="";
	       
		};
		
//Função Eval/Botão Igual
		$scope.onClickC = function() {
			
		$scope.display = eval($scope.display);	
		};
		
}]);
