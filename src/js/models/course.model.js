define(['ojs/ojModel'], 
    function() {
        class CourseModel{
            constructor(){

            }//end constructor
            initializeModelCollection(endpoint){

            }//end initializeModelCollection
            getCoursesMenu(notify){
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