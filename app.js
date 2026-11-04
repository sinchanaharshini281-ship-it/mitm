var app = angular.module('studentApp', []);


app.controller('CollegeController', function($scope) {
    $scope.collegeName = "Maharaja Institute of Technology";
});


app.controller('StudentController', function($scope) {

    $scope.students = ["Sinchana", "Janya", "Parinitha"]
    $scope.studentName = "";
    $scope.department = "";
    $scope.semester = "";
    $scope.marks = null;

    $scope.showDetails = false;

    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };

    
    $scope.addStudent = function() {
        if ($scope.studentName.trim() !== "") {
            $scope.students.push($scope.studentName);
            $scope.studentName = ""; 
        }
    };
});