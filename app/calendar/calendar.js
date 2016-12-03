'use strict';

angular.module('myApp.calendar', ['ngRoute', 'mwl.calendar' , 'ui.bootstrap'  ,'ngAnimate' , 'colorpicker.module'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calendar', {
    templateUrl: 'calendar/calendar.html',
    controller: 'CalendarCtrl'
  });
}])

.controller('CalendarCtrl', [function() {

    var vm = this;
    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    var actions = [{
        label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
        onClick: function(args) {
            alert.show('Edited', args.calendarEvent);
        }
    }, {
        label: '<i class=\'glyphicon glyphicon-remove\'></i>',
        onClick: function(args) {
            alert.show('Deleted', args.calendarEvent);
        }
    }];

    vm.events = [
        {
            title: 'An event',
            color: {
              primary: '#e3bc08',
              secondary: '#fdf1ba'
            },
            startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
            endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
            draggable: true,
            resizable: true,
            actions: actions
        }, {
            title: 'Title',
            color: {
              primary: '#e3bc08',
              secondary: '#fdf1ba'
            },
            startsAt: moment().subtract(1, 'day').toDate(),
            endsAt: moment().add(5, 'days').toDate(),
            draggable: true,
            resizable: true,
            actions: actions
        }, {
            title: 'This is a really long event title that occurs on every year',
            color: {
              primary: '#e3bc08',
              secondary: '#fdf1ba'
            },
            startsAt: moment().startOf('day').add(7, 'hours').toDate(),
            endsAt: moment().startOf('day').add(19, 'hours').toDate(),
            recursOn: 'year',
            draggable: true,
            resizable: true,
            actions: actions
        }
    ];

    vm.isCellOpen = true;

    vm.addEvent = function() {
        vm.events.push({
            title: 'New event',
            startsAt: moment().startOf('day').toDate(),
            endsAt: moment().endOf('day').toDate(),
            color: {
              primary: '#e3bc08',
              secondary: '#fdf1ba'
            },
            draggable: true,
            resizable: true
        });
    };

    vm.eventClicked = function(event) {
        alert.show('Clicked', event);
    };

    vm.eventEdited = function(event) {
        alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
        alert.show('Deleted', event);
    };

    vm.eventTimesChanged = function(event) {
        alert.show('Dropped or resized', event);
    };

    vm.toggle = function($event, field, event) {
        $event.preventDefault();
        $event.stopPropagation();
        event[field] = !event[field];
    };

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
