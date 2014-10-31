epartiApp
  .controller('subjectListController', function ($scope,$http) {
    $http.get('/ajax-test/subjects.json')
      .success(function (data) {
        $scope.subjects = data;
      })
    $scope.showCreateSubjectModal = function () {
      $('#create-subject-modal').modal('show');
    }
  })
  .controller('subjectController', function ($scope, $http,$routeParams) {
    $http.get('/ajax-test/subjects.json')
      .success(function (data) {
        for(var i=0;i<data.length;i++) {
          if(data[i].id == $routeParams.subjectId) {
            $scope.subject = data[i];
            break;
          }
        }
      });
    $http.get('/ajax-test/entries.json')
      .success(function (data) {
        $scope.entries = data;
      });

  })
  .controller('subjectCreateController', function ($scope) {
    $scope.resetFormSubject = function () {
      $scope.formSubject = {
        type:'content',
        choices:[],
        newChoice:''
      }
    }
    $scope.resetFormSubject();
    $scope.$watch("formSubject.type", function (val) {
    })
    $scope.addNewChoice = function () {
      if($scope.formSubject.newChoice.length > 0) {
        $scope.formSubject.choices.push($scope.formSubject.newChoice);
        $scope.formSubject.newChoice = '';
      }
    }
    $scope.createSubject = function () {
      $('#create-subject-button').button('loading');
      setTimeout(function () {
        $('#create-subject-button').button('reset');
      },3000);
    }
  })
  .controller('homeController', function ($scope) {

  })
  .controller('headerController', function ($scope) {

  })
  .controller('addContentController', function ($scope) {
  })
