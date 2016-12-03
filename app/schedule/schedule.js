'use strict';

angular.module('myApp.schedule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'schedule/schedule.html',
    controller: 'ScheduleCtrl'
  });
}])

.controller('ScheduleCtrl', [function() {

  var vm = this;
  vm.showTab = "readingTopics";


  vm.juneReadingTopics = [
    {
      "name": "Even-Mindedness is Yoga – No. 25",
      "date": new Date("06/05/2016")
    },
    {
      "name": "The Science of Kriya Yoga – No. 27",
      "date": new Date("06/12/2016")
    },
    {
      "name": "God’s Nature in the Father – No. 24",
      "date": new Date("06/19/2016")
    },
    {
      "name": "Whence Comes Happiness – No. 28",
      "date": new Date("06/26/2016")
    }
  ];
  vm.julyReadingTopics = [
    {
      "name": "Patriotism That Will Endure – No. 26 ",
      "date": "03072016"
    },
    {
      "name": "Laws of Truth and Love – No. 29	",
      "date": "10072016"
    },
    {
      "name": "What Is the Soul? – No. 30",
      "date": "17072016"
    },
    {
      "name": "BABAJI COMMEMORATION",
      "date": "24072016"
    },
    {
      "name": "Devotion That Touches God – No. 31",
      "date": "31072016"
    }
  ];
  vm.augustReadingTopics = [
    {
      "name": "Surmounting Life’s Troubles – No. 32 ",
      "date": "07082016"
    },
    {
      "name": "Proof of the Existence of God – No. 33",
      "date": "14082016"
    },
    {
      "name": "Health Through Union with Cosmic Life – No. 34",
      "date": "21082016"
    },
    {
      "name": "JANMASHTAMI ",
      "date": "28082016"
    }
  ];
  vm.septemberReadingTopics = [
    {
      "name": "What is Salvation? – No. 36",
      "date": "04092016"
    },
    {
      "name": "Life-A Cosmic Motion Picture – No. 37 ",
      "date": "11092016"
    },
    {
      "name": "Hastening Human Evolution – No. 38",
      "date": "18092016"
    },
    {
      "name": "LAHIRI MAHASAYA’S BIRTHDAY SERVICE ",
      "date": "25092016"
    }
  ];

}]);