/**
 * You must include the dependency on 'ngMaterial' 
 */
angular.module('MyApp', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
	var imagePath = '../img/logo.png';
	$scope.todos = [
      {
        face : imagePath,
        what: 'javaShow',
        who: 'javaShow',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'javaShowJs',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'jsShowJava',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'jsShowJs',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'openVideo',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'openActivity',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'batteryStatus',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];

	$scope.app = {
	    // Application Constructor
	    initialize: function() {
	        this.bindEvents();
	    },
	    // Bind Event Listeners
	    //
	    // Bind any events that are required on startup. Common events are:
	    // 'load', 'deviceready', 'offline', and 'online'.
	    bindEvents: function() {
	        document.addEventListener('deviceready', this.onDeviceReady, false);
	    },
	    // deviceready Event Handler
	    //
	    // The scope of 'this' is the event. In order to call the 'receivedEvent'
	    // function, we must explicitly call 'app.receivedEvent(...);'
	    onDeviceReady: function() {
          console.log("---->ready!");
	        ready();
	    },
	};

	$scope.app.initialize();

	function ready() {
      $scope.click=function(index){
          console.log("---->index:"+ index);
          switch(index){
            case 0:
              console.log("---->todo: javaShow");

              break;
            case 1:
              console.log("---->todo: javaShowJs");

              break;
            case 2:
              console.log("---->todo: jsShowJava");

              break;
            case 3:
              console.log("---->todo: jsShowJs");

              break;
            case 4:
              console.log("---->todo: openVideo");

              break;
            case 5:
              console.log("---->todo: openActivity");

              break;
            case 6:
              console.log("---->todo: batteryStatus");

              break;
          }
      };
	}

});


