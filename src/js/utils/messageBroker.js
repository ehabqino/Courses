define([], 
    function() {
        class MsgBroker {
            constructor(){
                this.subscribers = {};
            }//end constructor
            
            publish(groupName, data){

            }//end publish

            subscribe(groupName,callbackNotify){

            }//end subscribe

        }//end Class
        return new MsgBroker;
    
});