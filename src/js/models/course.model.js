const { oj } = require("@oracle/oraclejet/dist/types");

define(['ojs/ojModel'], 
    function() {
        class CourseModel{
            constructor(){
                this.serverUrl = "http://localhost:2480/";
            }//end constructor
            initializeModelCollection(endpoint){
                this.courseModelDef = oj.Model.extend({
                    url : endpoint,
                    idAttributes : "@rid"
                });
                this.courseCollDef = oj.Collection.extend({
                    url : endpoint,
                    comparator : "@rid",
                    model : new this.courseModelDef
                });
                this.courses = new this.courseCollDef;

            }//end initializeModelCollection
            getCoursesMenu(notify){
                //api url for all courses
                let api_url = this.serverUrl + "query/ehabcourses/sql/SELECT FROM course";
                this.initializeModelCollection(api_url);

               
                let navData = [
                    { path: '', redirect: 'dashboard' },
                    { path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } }
                ];
                notify(navData);
                
            }//getCoursesMenu
            
            getCoursesList(notify){

            }//end getCoursesList
            addCourse(id,title,description,notify){

            }//end addCourse
            updateCourse(id,title,description,notify){

            }//end updateCourse
            deleteCourse(id,notify){

            }//end deleteCourse

        }//end Class
        return new CourseModel;
    
});