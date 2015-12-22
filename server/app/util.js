var util = function util(){
    this.sucess = function(data,message){
    	return {
    	  "status": "success",
    	  "data": data,/* Application-specific data would go here. */
    	  "message": message /* Or optional success message */
    	}
    }
    this.error = function(message){
    	return {
      	  "status": "error",
    	  "data": null,/* or optional error payload */
    	  "message": message /*Error Description */
    	}
    }
 
    if(util.caller != util.getInstance){
        throw new Error("This object cannot be instanciated");
    }
}

util.instance = null;
util.getInstance = function(){
    if(this.instance === null){
        this.instance = new util();
    }
    return this.instance;
}
module.exports = util.getInstance();