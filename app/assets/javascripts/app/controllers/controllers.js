function ControllerOne($scope, eventAggregator) {
  $scope.fileName = 'cat.mov';

  $scope.handleFileUploadClick = function(msg) {
    eventAggregator.publish("FileUploaded", [msg]);
  };

  $scope.handleFileDeletedClick = function(msg) {
    eventAggregator.publish("FileDeleted", [msg]);
  };
}

function ControllerTwo($scope, eventAggregator) {
  eventAggregator.subscribe("FileUploaded", function(msg) {
    $scope.message = 'Uploaded: ' + msg;
  });

  eventAggregator.subscribe("FileDeleted", function(msg) {
    $scope.message = 'Deleted: ' + msg;
  });
}

function ControllerThree($scope, eventAggregator) {
  eventAggregator.subscribe("FileDeleted", function(msg) {
    $scope.message = 'Deleted: ' + msg;
  });
}
