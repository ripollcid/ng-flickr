/**
 *
 * Created by RC on 1/20/15.
 */


(function () {
    "use strict";

    angular.module('ngFlicker', ["ngMaterial"])
        .controller('ListController', ['$scope', '$http', function ($scope, $http) {

            $scope.results = []; //empty array for
            $scope.isSearching = false; // set it to false so it hides when you are not doing anything
            $scope.search = function () {
                $scope.isSearching = true; //set it true so loading bar appears during typing
                $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest',
                    params: {
                        method: 'flickr.photos.search',
                        api_key: 'd953808193a7ac563b90f04cadc180f8',
                        text: $scope.searchTerm,
                        format: 'json',
                        nojsoncallback: 1
                    }
                }).success(function (data) {
                    $scope.results = data;
                    $scope.isSearching = false; // so it hides once gets data

                }).error(function (error) {
                    console.error(error);
                    $scope.isSearching = false; // so it hides even if there is an error
                });
            };
        }]);
})();
