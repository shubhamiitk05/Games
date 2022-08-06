//Chaleenger 1:Your age in days
function ageindays()
{
    var birthyear= prompt("What year were you born my friend?");
    var ageindayss=(2022-birthyear)*365;
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode('You are '+ ageindayss + ' days old');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);


}
function reset()
{
    document.getElementById('ageindays').remove();
}
function generatecat()
{
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="cute-kitty-best-kitty.gif";
    div.appendChild(image);
}
function rpsthis(yourchoice)
{
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice=numbertochoice(randombotchoice())
    results=decidewinner(humanchoice,botchoice);//[0,1] human lost
    message=finalmessage(results);//{'message': 'you won', color:green}
    rpsfrontend(yourchoice.id,botchoice,message);
    
}
function randombotchoice()
{
    return Math.floor(Math.random()*3);
}
function numbertochoice(number)
{
    return ['rock','paper','scissors'][number];
}
function decidewinner(yourchoice,computerchoice)
{
    var rpsdatabase={
        'rock':{'scissors':1 ,'rock':0.5,'paper':0} ,
        'paper':{'scissors':0 ,'rock':1,'paper':0.5} ,
        'scissors':{'scissors':0.5 ,'rock':0,'paper':1} 
}
var yourscore=rpsdatabase[yourchoice][computerchoice];
var computerscore=rpsdatabase[computerchoice][yourchoice];
return [yourscore,computerscore];

}
function finalmessage([yourscore,computerscore])
{
    if(yourscore===0)
    {
        return{'message':'You Lost','color':'red'}
    }
    else if(yourscore===0.5)
    {
        return{'message':'Tied','color':'yellow'}
    }
    else
    {
        return{'message':'You Won','color':'green'}
    }
}
function rpsfrontend(humanimagechoice,botimagechoice,finalmessage)
{
    var imagesdatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv=document.createElement('div');
    var botdiv=document.createElement('div');
    var messagediv=document.createElement('div');
    humandiv.innerHTML="<img src='"+ imagesdatabase[humanimagechoice] + "' style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>"
    messagediv.innerHTML="<h1 style='color:  " + finalmessage['color'] + "; font-size:60px; padding:30px; '>"+finalmessage['message']+ "<\h1>"
    botdiv.innerHTML="<img src='"+ imagesdatabase[botimagechoice] + "' style='box-shadow:0px 10px 50px rgba(243,38,24,1)'>"
    document.getElementById('flex-box-container-3-game').appendChild(humandiv);
    document.getElementById('flex-box-container-3-game').appendChild(messagediv);
    document.getElementById('flex-box-container-3-game').appendChild(botdiv);
}

    var allbuttons=document.getElementsByTagName('button');
    var copyallbuttons=[];
    for(let i=0;i<allbuttons.length;i++)
    {
        copyallbuttons.push(allbuttons[i].classList[1]);
    }
    console.log(copyallbuttons);

    function buttoncolourchange(buttonthingy)
    {
        if(buttonthingy.value==='red')
        {
            buttonsred();
        }
        else if(buttonthingy.value==='green')
        {
            buttonsgreen();
        }
        else if(buttonthingy.value==='random')
        {
            randomcolours();
        }
        else if(buttonthingy.value==='reset')
        {
            buttoncolourreset();
        }
    }

    function buttonsred(){
        for(let i=0;i<allbuttons.length;i++)
        {
            allbuttons[i].classList.remove(allbuttons[i].classList[1]);
            allbuttons[i].classList.add('btn-danger');
        }
    }
    function buttonsgreen(){
        for(let i=0;i<allbuttons.length;i++)
        {
            allbuttons[i].classList.remove(allbuttons[i].classList[1]);
            allbuttons[i].classList.add('btn-success');
        }
    }
    function buttoncolourreset()
    {
        for(let i=0;i<allbuttons.length;i++)
        {
            allbuttons[i].classList.remove(allbuttons[i].classList[1]);
            allbuttons[i].classList.add(copyallbuttons[i]);

        }
    }
    function randomcolours()
    {
        var choices=['btn-primary','btn-danger','btn-success','btn-warning'];
        for(let i=0;i<allbuttons.length;i++)
        {
            var randomno=Math.floor(Math.random()*4);
            allbuttons[i].classList.remove(allbuttons[i].classList[1]);
            allbuttons[i].classList.add(choices[randomno]);
        }
    }

   
