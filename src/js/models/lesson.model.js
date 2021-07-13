

define(['ojs/ojModel'], 
function() {
    class LessonModel{
        constructor(){
            this.serverUrl = "http://127.0.0.1:2480/";
        }//end constructor
        initializeModelCollection(endpoint){
            this.lessonModelDef = oj.Model.extend({
                url : endpoint,
                idAttributes : "@rid"
            });
            this.lessonCollDef = oj.Collection.extend({
                url : endpoint,
                comparator : "@rid",
                model : new this.lessonModelDef
            });
            this.lessons = new this.lessonCollDef;

        }//end initializeModelCollection
        getLessonsList(notify){
            //api url for all courses
            let api_url = this.serverUrl + "query/ehabcourses/sql/SELECT FROM lesson";
            this.initializeModelCollection(api_url);
            
            //Make Row Definition and connect it with its Collection
            this.lessonRow = new this.lessonModelDef({},this.lessons);

            //operation on the database
            this.lessonRow.fetch({
                success : (coll,data)=>{
                    /*
                    let navData = [
                        { path: '', redirect: 'lessons' },
                        { path: 'lessons', detail: { label: 'Course Lessons', iconClass: 'oj-ux-ico-bar-chart' }},
                        //{ path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' }}
                        
                        
                    ];

                    // Reformating the Result
                    Object.entries(data).map(val=>{
                        //In Result Array (Row)
                        if(val[1].length != undefined){
                            val[1].forEach(row => {
                                navData.push({  path: 'lessons/'+row.courseid, 
                                                detail: { label: row.title , iconClass: 'oj-ux-ico-bar-chart' },
                                                params : {id : row.courseid, title: row.title, description: row.description}});
                            });     
                        }
                    });
                    notify(true,navData);
                    */
                    notify(true,data.result);
                    //console.log("Success")
                    //console.log(data);
                    //console.log(data.result);
                    //console.log(navData);
                },
                error : (model, xhr, options)=> {
                    notify(false,"Error : " + xhr.textStatus);
                    // console.log("Error");
                    // console.log(options);
                },
                headers : {
                    'Authorization' : 'Basic cm9vdDpyb290cHdk',
                    //'Authorization' : 'Basic' + btoa('root:rootpwd'),
                    'Content-Type' : 'application/json'
                }
                
            });//end fetch

            // let navData = [
            //     { path: '', redirect: 'dashboard' },
            //     { path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } }
            // ];
            //notify(navData);
            
        }//getCoursesMenu
        

    }//end Class
    return new LessonModel;

});