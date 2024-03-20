function printStory() {
    var thing, action1, body, feeling, action2, action3, object, action4;

    thing1 = document.getElementById("thing1").value;
    action1 = document.getElementById("action1").value;
    action2 = document.getElementById("action2").value;
    action3 = document.getElementById("action3").value;
    action4 = document.getElementById("action4").value;
    body = document.getElementById("body").value;
    feeling = document.getElementById("feeling").value;
    object = document.getElementById("object").value;

    document.getElementById("ad").innerHTML = " Hi I'm <span>" + thing1 + "</span> in my eyes Johnson. Everything is black, I can't see anything. Also, I can't <span>"
        + action1 + "</span> anything either. Did I mention that? But that's not as catchy as having <span>"
        + thing1 + "</span> in my eyes. All my <span>" + body + "</span> don't allow for the sensation of <span>"
        + feeling + "</span> so I never know what's going on. Am I <span>"
        + action2 + "</span>? Or <span>" + action3 + "</span>? I have no Idea."
        + "<br>But hey are you tired of real <span>" + object
        + "</span> cluttering up your house? Well if so, get on down to real fake <span>" + object + "</span>, that's us."
        + " Fill a whole room with them. See watch this, it's <span>" + action4 + "</span>."
        + " www.fake<span>" + object + "</span>.com is our website so check it out for a lot of great deals on fake <span>" + object + "</span>.";
}

window.addEventListener("load", addListeners);

var images = new Array("resources/roseQuartz_opt.jpg", "resources/amethyst_opt.jpg",
    "resources/citrine_opt.jpg", "resources/sodalite_opt.jpg",
    "resources/carnelian_opt.jpg", "resources/greenCalcite_opt.jpg");
var captions = new Array("Rose Quartz: emotional healing & compassion",
    "Amethyst: intuition, balance & higher wisdom",
    "Citrine: brightness, positive energy and good luck",
    "Sodalite: awakener of the thrid eye & prepares mind",
    "Carnelian: enhances creativity, restores vitality and motivation",
    "Green Calcite: Encourages forgiveness and stimulates compassion")
var index = 0;
var timer;

function addListeners() {
    document.getElementById("previous").addEventListener("click", function () {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        document.getElementById("picture").src = images[index];
        document.getElementById("caption").innerHTML = captions[index];
    });

    document.getElementById("next").addEventListener("click", changeImage);
    document.getElementById("play").addEventListener("click", function () {
        clearInterval(timer);
        timer = setInterval("changeImage()", 1000);
    });
    document.getElementById("pause").addEventListener("click", pauseSlideShow);


}

function pauseSlideShow() {
    clearInterval(timer);
}

function changeImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    document.getElementById("picture").src = images[index];
    document.getElementById("caption").innerHTML = captions[index];
}

