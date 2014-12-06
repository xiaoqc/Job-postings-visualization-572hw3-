(function(){
  var app = angular.module('hw3', []);

  //   app.directive("navBar", function() {
  //   return {
  //     restrict: "E",
  //     templateUrl: "nav-bar.html",
  //     controller: function() {
  //       this.current = 1;

  //       //Set current
  //       this.setTask = function(task){
  //         this.current = task;
  //       };

  //       //Check selected
  //       this.isSelected = function(checkTask){
  //         return this.current === checkTask;
  //       };

  //     },
  //     controllerAs: "nav"
  //   };
  // });

  app.controller('TaskCtrl', function(){
    this.current = 1;
    //Set current
    this.setTask = function(task){
      this.current = task;
      console.log(this.current);
    };

    //Check selected
    this.isSelected = function(checkTask){
      return this.current === checkTask;
    };

    this.getCurrent = function(){
      switch(this.current){
        case 1:
          return 'A';
        case 2:
          return 'B';
        case 3:
          return 'C';
        case 4:
          return 'D';
        default:
          return ' ';
      }
    };

    this.doVis = function(field, company){
      console.log("field: ");
      console.log("company: ");
    };

  });

})();