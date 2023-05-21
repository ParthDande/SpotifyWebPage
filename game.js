var buttonColors=["red","blue","green","yellow"];
var gamepattern=[];
var userClickedPattern=[];
var gamestartcounter=1;
var level=0;
var index=0;
/*starting the game */
$(document).keypress(function abc(){
    if(gamestartcounter>0){
    nextSequence();
    gamestartcounter--;
    $("h1").text("level  "+level);
}
})

function nextSequence(){
    level++;
    $("h1").text("level  "+level);
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosencolor=buttonColors[randomNumber];   
    gamepattern.push(randomChosencolor);
    let temp="#"+randomChosencolor;
    $(temp).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosencolor);
    console.log(gamepattern);
}
for(var i=0;i<4;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        {
            userchosencolor=this.id;
            aniamtePress(this.id);
            checkanswer(this.id);
        }
    });
    }


function playsound(name)
{
    var audio=new Audio("./sounds/"+name+".mp3");
    audio.play();
}
function aniamtePress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function(){
        $(".btn").removeClass("pressed");
    },100);
}


function checkanswer(useranswer)
{
    var length=gamepattern.length;
    var character=gamepattern.at(index);
        if(useranswer==character)
        {
            playsound(useranswer);

        if(index==length-1){
            setTimeout(function(){
            nextSequence();
            index=0;
        },1000);
    }
        else
        {
            index++;
        }
        }
        else{
            var audio=new Audio("./sounds/wrong.mp3")
            audio.play();
            $("h1").text("game over").css("color","red");
            level=0;
            gamestartcounter=1;
            gamepattern=[];
            index=0;   
            setTimeout(function()
            {
                window.location.reload();
                
            },1000
                );
        }
}