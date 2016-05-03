app.directive('postItem', function() {
    return {
        restrict: 'A',
        transclude: true,
        scope:{
            title: '='
        },
        templateUrl: function(ele, attr){
            return 'templates/posts/'+attr.title+'.html';
        }
    };
});
