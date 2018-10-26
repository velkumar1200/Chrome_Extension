
$(document).ready(function(){
	var addProjectRename = $(".globalnav");
	var buttonStatus = document.createElement("button");
    buttonStatus.setAttribute("id", "statusButton");
	buttonStatus.setAttribute('style', 'margin: 4px 8px;background-color:dodgerblue;border-radius: 130px;-webkit-border-radius: 150px;-moz-border-radius: 150px;color: white;');
    var text = document.createTextNode("Project Status");
    buttonStatus.appendChild(text);
	
	    buttonStatus.addEventListener("click", function () {
        oldTitle = document.title;
        document.title = "Project Status";
        addProjectRename.append(inputProjectStatus).append(inputProjectId);
        addProjectRename.append(buttonSubmitStatus).append(buttonCancelStatus);
        buttonStatus.remove();
    }, false);

	addProjectRename.append(buttonStatus);
	
	
	var buttonCancelStatus = document.createElement("button");
    buttonCancelStatus.setAttribute("id", "cancelButton");
	buttonCancelStatus.setAttribute('style', 'margin: 4px 8px;background-color:dodgerblue;left:-80px;border-radius: 130px;-webkit-border-radius: 150px;-moz-border-radius: 150px;color: white;');
    text = document.createTextNode("Cancel Status");
    buttonCancelStatus.append(text);
    buttonCancelStatus.addEventListener("click", function () {
        document.title = oldTitle;
        inputProjectStatus.remove();
        inputProjectId.remove();
        buttonSubmitStatus.remove();
        buttonCancelStatus.remove();
        addProjectRename.append(buttonStatus);
    }, false);
	
	var buttonSubmitStatus = document.createElement("button");
    buttonSubmitStatus.setAttribute("id", "submitButton");
	buttonSubmitStatus.setAttribute('style', 'margin: 4px 6px;background-color:dodgerblue;left:-80px;border-radius: 130px;-webkit-border-radius: 150px;-moz-border-radius: 150px;color: white;');
    text = document.createTextNode("Submit Status");
    buttonSubmitStatus.append(text);
    buttonSubmitStatus.addEventListener("click", function () {
        if(inputProjectStatus.value.includes("\"")){
            alert("New Status contains the character: \" \nPlease remove all instance of this character or use the Swagger endpoint.");
        } else {
            inputProjectStatus.readOnly = true;
            inputProjectId.readOnly = true;
            inputProjectStatus.readOnly = false;
            inputProjectId.readOnly = false;
        }
    }, false);
});
var inputProjectStatus = document.createElement("INPUT"); 
inputProjectStatus.setAttribute("type","text");
inputProjectStatus.setAttribute("id", "newProjectStatus");
inputProjectStatus.setAttribute("maxLength", "50");
inputProjectStatus.setAttribute("placeholder", "Enter Project Status");
inputProjectStatus.setAttribute("style", "width:15%; border:1px solid dodgerblue;margin: 4px 6px;");
inputProjectStatus.setAttribute("value","true");

var inputProjectId = document.createElement("INPUT");
inputProjectId.setAttribute("type", "text");
inputProjectId.setAttribute("id", "newProjectId");
inputProjectId.setAttribute("maxLength", "50");
inputProjectId.setAttribute("placeholder", "Enter Project Id");
inputProjectId.setAttribute("style", "width:15%; border:1px solid dodgerblue;margin: 4px 6px;");

