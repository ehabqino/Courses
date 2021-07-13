/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore','knockout','jquery','accUtils','utils/messageBroker',
'ojs/ojarraydataprovider','models/lesson.model','ojs/ojlistview','ojs/ojlistitemlayout','ojs/ojactioncard'],
 function(oj,ko,$,accUtils,MsgBroker,ArrayDataProvider,lessonModel) {
    function LessonsViewModel () {
      self = this;
      self.allData = ko.observableArray([]);
      self.selectedLessons = ko.observableArray([]);
      self.lessonsDataProvider = new ArrayDataProvider(self.selectedLessons,{keyAttributes: '@rid'});

      lessonModel.getLessonsList((success,data)=>{
       // console.log(data.result);
        if(success)
            self.allData(data);
            self.selectedLessons(self.allData());
            self.selectedLessons.valueHasMutated();
        
      });

      MsgBroker.subscribe('Nav-URL-Changed',data => {
        console.log("Lesson Page filter by : " + data);
      });

      
    
      this.connected = () => {
        accUtils.announce('Customers page loaded.', 'assertive');
        document.title = "Customers";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return LessonsViewModel;
  }
);
