//span1=ron
//span2=ora
//b-tag=noo
Webcam.set({

    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="id_1" src="'+data_uri+'"/>';
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AqQQVFG1G/model.json",modelLoaded);

function check()
{
    img = document.getElementById("id_1");
    classifier.classify(img, gotResult);
}

function gotResult(error, result)
{
    if(error)
    {
        console.error(error)

    }
    else
    {
        console.log(result);
        document.getElementById("ron").innerHTML = result[0].label;
        document.getElementById("ora").innerHTML = result[0].confidence.toFixed(2);
    }
}

function modelLoaded()
{
    console.log("modelLoaded")
}