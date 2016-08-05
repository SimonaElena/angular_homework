helloApp.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      data: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
      console.log(scope.data);

      scope.addRow = function(){
        scope.data.push({ 'bullet':scope.bullet, 'name':scope.name, 'company': scope.company, 'customreferece':scope.custom,'email':scope.email,'added':scope.added });
        scope.bullet='';
        scope.name='';
        scope.company='';
        scope.custom='';
        scope.email='';
        scope.added='';
      };

    },
    template: `
               <div class='ng-modal' ng-show='show'>
                 <div class='ng-modal-overlay' ng-click='hideModal()'>
                 </div>
               <div class='ng-modal-dialog' ng-style='dialogStyle'>
                 <div class='ng-modal-close' ng-click='hideModal()'>X
                 </div>
                 <div class='ng-modal-dialog-content' ng-transclude>
                 </div>
                 <p>
          <h3> Add a customer</h3>
          <hr>
          <form ng-submit="addRow()">
            <input type="text" name="name" placeholder="Name" ng-model="name">

            <input type="text" name="company" placeholder="Company" ng-model="company">

            <input type="text" name="reference" placeholder="Custom Reference" ng-model="custom">

            <input type="email" name="email" placeholder="Email" ng-model="email">

            <input type="date" name="date" placeholder="Date" ng-model="added">

            <input type="submit" value="Submit" class="button">
          </form>
          <hr>
         <p>
               </div>
             </div>`
  };
});
helloApp.controller('MyCtrl', ['$scope', function($scope) {
  var vm = this;
 $scope.modalShown = false;
 $scope.toggleModal = function() {
     $scope.modalShown = !$scope.modalShown;
 };
}]);
