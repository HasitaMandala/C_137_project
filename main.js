status = "";
array = "";
speechSynthesis ="";

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
   
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
    user_name = document.getElementById("user_name").value;

    if(objects[i].label== object.name){

        user_name_holds_webcamLiveView.stop()
        objectDetctor.detct(gotResult);
        document.getElementById("object_status").innerHTML = object_name +"found";
    }
    else(objects[i].label!= object.name)
    {
        speak()
        document.getElementById("object_status").innerHTML = object_name +"Not found";
    }
}

function draw(){
    image(video, 0, 0, 380, 380);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for(i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;

            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x , object[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded(){
    console.log("modelLoaded");
    status = true;
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}