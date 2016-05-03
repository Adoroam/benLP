/* CONTROLLER FOR INDEX */
app.controller('homeCtrl', ['$scope',/* 'serv', */ function($scope/*, serv*/) {
    home = this;
    home.fileclass = function() {
        if (home.file) {
            return "success";
        }   else {return "default";}
    };
 /* uncomment for blank variable and function */
 /*
    $scope.thing = "value";
    $scope.stuff = function() {
        return "whatever";
    };
*/
/* uncomment to get data from db (remove comments in controller and service) */
    /*
    serv.get().then(function(d) {
        if (d.data) {
            $scope.dbinfo = d.data;
            console.log("dbinfo retrieved");
        }   else {console.log("nodata");}
    });
*/
}]);//end mainCtrl
