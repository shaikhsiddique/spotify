let time;
let myprogressbar =document.getElementById("timespan");
let mainplay=document.getElementById("mainplay");
let previous=document.getElementById("back");
let forward=document.getElementById("forward");
let audio=new Audio(" song 1.mp3");
let audio2=new Audio(" song 2.mp3");
let audio3=new Audio(" song 3.mp3");
let audio4=new Audio(" song 4.mp3");
let audio5=new Audio(" song 5.mp3");
let audio6=new Audio(" song 6.mp3");
let audio7=new Audio(" song 7.mp3");
let gif=document.getElementById("giff")
let progress;
let songnumber=0;
let song1=document.getElementById("song1");
let song2=document.getElementById("song2");
let song3=document.getElementById("song3");
let song4=document.getElementById("song4");
let song5=document.getElementById("song5");
let song6=document.getElementById("song6");
let song7=document.getElementById("song7");


function songpause(){
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio.pause();
    song1.classList.remove("fa-pause-circle");
    song1.classList.add("fa-play-circle");
    song2.classList.remove("fa-pause-circle");
    song2.classList.add("fa-play-circle");
    song3.classList.remove("fa-pause-circle");
    song3.classList.add("fa-play-circle");
    song4.classList.remove("fa-pause-circle");
    song4.classList.add("fa-play-circle");
    song5.classList.remove("fa-pause-circle");
    song5.classList.add("fa-play-circle");
    song6.classList.remove("fa-pause-circle");
    song6.classList.add("fa-play-circle");
    song7.classList.remove("fa-pause-circle");
    song7.classList.add("fa-play-circle");

}
function changeicon(){
    song1.classList.remove("fa-pause-circle");
    song1.classList.add("fa-play-circle");
    song2.classList.remove("fa-pause-circle");
    song2.classList.add("fa-play-circle");
    song3.classList.remove("fa-pause-circle");
    song3.classList.add("fa-play-circle");
    song4.classList.remove("fa-pause-circle");
    song4.classList.add("fa-play-circle");
    song5.classList.remove("fa-pause-circle");
    song5.classList.add("fa-play-circle");
    song6.classList.remove("fa-pause-circle");
    song6.classList.add("fa-play-circle");
    song7.classList.remove("fa-pause-circle");
    song7.classList.add("fa-play-circle");
}
function songchnage(){
    
    if(songnumber===1){
        console.log('song1')
    songa();}
    else if(songnumber===2){
        console.log('songb')
        songb();
    }
    else if(songnumber===3){
        songc();
    }
    
    else if(songnumber===4){
         
    songd();
    }
    else if(songnumber===5){
        songe();
    }
    else if(songnumber===6){
        songf();
    }
    else if(songnumber===7){
        songg();
    }
}
//  play-pause    
// function songa   
function songa(){
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();

    if(audio.paused || audio.currenttime>=0)
    {   
        audio.play();
        song1.classList.remove("fa-play-circle");
        song1.classList.add("fa-pause-circle");
        mainplay.classList.remove("fa-play-circle");
        mainplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.querySelector(".songname").innerHTML=`<p class="songname"> DESPACTIO</p>`

        
    }
    else if(audio.play || audio.currentTime<0){
        songnumber=0;
        songpause();
        audio.pause();
        song1.classList.remove("fa-pause-circle");
        song1.classList.add("fa-play-circle");
        mainplay.classList.remove("fa-pause-circle");
        mainplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        document.querySelector(".songname").innerHTML=`<p class="songname"> </p>`
    }


mainplay.addEventListener('click',()=>{

if(audio.paused || audio.currenttime>=0)
{   
    audio.play();
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    if(songnumber===1){
        document.querySelector(".songname").innerHTML=`<p class="songname"> DESPACTIO</p>`
    }
    
}
else if(audio.play || audio.currentTime<0){
    songpause();
    audio.pause();
    mainplay.classList.remove("fa-pause-circle");
    mainplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    document.querySelector(".songname").innerHTML=`<p class="songname"></p>`
}
})
//timespan
audio.addEventListener('timeupdate',()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100)
    myprogressbar.value=progress;
    time=parseInt( myprogressbar.value*audio.duration/100);
    console.log(time);
})        
       
// timespanchange
myprogressbar.addEventListener('change',()=>{

    audio.currentTime=myprogressbar.value*audio.duration/100;
    
   
})
}
// song2 function
function songb(){
    audio.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();

    if(audio2.paused || audio2.currenttime>=0)
    {   
        audio2.play();
        song2.classList.remove("fa-play-circle");
        song2.classList.add("fa-pause-circle");
        mainplay.classList.remove("fa-play-circle");
        mainplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.querySelector(".songname").innerHTML=`<p class="songname">LET ME LOVE YOU</p>`

        
    }
    else if(audio2.play || audio2.currentTime<0){
        songnumber=1;
        songpause();
        audio2.pause();
        song2.classList.remove("fa-pause-circle");
        song2.classList.add("fa-play-circle");
        mainplay.classList.remove("fa-pause-circle");
        mainplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        document.querySelector(".songname").innerHTML=`<p class="songname"> </p>`
    }


mainplay.addEventListener('click',()=>{

if(audio2.paused || audio2.currenttime>=0)
{   
    audio2.play();
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    if(songnumber===1){
        document.querySelector(".songname").innerHTML=`<p class="songname">LET ME LOVE YOU</p>`
    }
    
}
else if(audio2.play || audio2.currentTime<0){
    songpause();
    audio2.pause();
    mainplay.classList.remove("fa-pause-circle");
    mainplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    document.querySelector(".songname").innerHTML=`<p class="songname"></p>`
}
})
//timespan
audio2.addEventListener('timeupdate',()=>{
    progress=parseInt((audio2.currentTime/audio2.duration)*100)
    myprogressbar.value=progress;
})        
       
// timespanchange
myprogressbar.addEventListener('change',()=>{

    audio2.currentTime=myprogressbar.value*audio2.duration/100;
})}
// songc function
function songc(){
    audio.pause();
    audio2.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();

    if(audio3.paused || audio3.currenttime>=0)
    {   
        audio3.play();
        song3.classList.remove("fa-play-circle");
        song3.classList.add("fa-pause-circle");
        mainplay.classList.remove("fa-play-circle");
        mainplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.querySelector(".songname").innerHTML=`<p class="songname">SHAPE OF YOU</p>`

        
    }
    else if(audio3.play || audio3.currentTime<0){
        songnumber=3;
        songpause();
        audio3.pause();
        song3.classList.remove("fa-pause-circle");
        song3.classList.add("fa-play-circle");
        mainplay.classList.remove("fa-pause-circle");
        mainplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        document.querySelector(".songname").innerHTML=`<p class="songname"></p>`
    }


mainplay.addEventListener('click',()=>{

if(audio3.paused || audio3.currenttime>=0)
{   
    audio3.play();
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    if(songnumber===3){
        document.querySelector(".songname").innerHTML=`<p class="songname"> SHAPE OF YOU</p>`
    }
    
}
else if(audio3.play || audio3.currentTime<0){
    audio3.pause();
    songpause();
    mainplay.classList.remove("fa-pause-circle");
    mainplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    document.querySelector(".songname").innerHTML=`<p class="songname"></p>`
}
})
//timespan
audio3.addEventListener('timeupdate',()=>{
    progress=parseInt((audio3.currentTime/audio3.duration)*100)
    myprogressbar.value=progress;
})        
       
// timespanchange
myprogressbar.addEventListener('change',()=>{

    audio3.currentTime=myprogressbar.value*audio3.duration/100;
})
}
// function song 4
function songd(){
    
    audio.pause();
    audio3.pause();
    audio2.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();

    if(audio4.paused || audio4.currenttime>=0)
    {   
        audio4.play();
        song4.classList.remove("fa-play-circle");
        song4.classList.add("fa-pause-circle");
        mainplay.classList.remove("fa-play-circle");
        mainplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.querySelector(".songname").innerHTML=`<p class="songname"> WARIYYO</p>`
        
    }
    else if(audio4.play || audio4.currentTime<0){
        songpause();
        audio4.pause();
        song4.classList.remove("fa-pause-circle");
        song4.classList.add("fa-play-circle");
        mainplay.classList.remove("fa-pause-circle");
        mainplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        document.querySelector(".songname").innerHTML=`<p class="songname"></p>`
    }


mainplay.addEventListener('click',()=>{

if(audio4.paused || audio4.currenttime>=0)
{   
    audio4.play();
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    if(songnumber===4){
        document.querySelector(".songname").innerHTML=`<p class="songname"> WARIYYO</p>`
    }
    
}
else if(audio4.play || audio4.currentTime<0){
    songpause();
    audio4.pause();
    mainplay.classList.remove("fa-pause-circle");
    mainplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    document.querySelector(".songname").innerHTML=`<p class="songname"></p>`
}
})
//timespan
audio4.addEventListener('timeupdate',()=>{
    progress=parseInt((audio4.currentTime/audio4.duration)*100)
    myprogressbar.value=progress;
})        
       
// timespanchange
myprogressbar.addEventListener('change',()=>{

    audio4.currentTime=myprogressbar.value*audio4.duration/100;
})}

// songe function
function songe(){
    audio.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio6.pause();
    audio7.pause();

    if(audio5.paused || audio5.currenttime>=0)
    {   
        audio5.play();
        song5.classList.remove("fa-play-circle");
        song5.classList.add("fa-pause-circle");
        mainplay.classList.remove("fa-play-circle");
        mainplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.querySelector(".songname").innerHTML=`<p class="songname">Cheap Thrills</p>`

        
    }
    else if(audio5.play || audio5.currentTime<0){
        
        songpause();
        audio5.pause();
        song5.classList.remove("fa-pause-circle");
        song5.classList.add("fa-play-circle");
        mainplay.classList.remove("fa-pause-circle");
        mainplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        document.querySelector(".songname").innerHTML=`<p class="songname"> </p>`
    }


mainplay.addEventListener('click',()=>{

if(audio5.paused || audio5.currenttime>=0)
{   
    audio5.play();
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    if(songnumber===5){
        document.querySelector(".songname").innerHTML=`<p class="songname">Cheap thrils</p>`
    }
    
}
else if(audio5.play || audio5.currentTime<0){
    songpause();
    audio5.pause();
    mainplay.classList.remove("fa-pause-circle");
    mainplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    document.querySelector(".songname").innerHTML=`<p class="songname"></p>`
}
})
//timespan
audio5.addEventListener('timeupdate',()=>{
    progress=parseInt((audio5.currentTime/audio5.duration)*100)
    myprogressbar.value=progress;
})        
       
// timespanchange
myprogressbar.addEventListener('change',()=>{

    audio5.currentTime=myprogressbar.value*audio5.duration/100;
})}

// songf
function songf(){
    audio.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio7.pause();

    if(audio6.paused || audio6.currenttime>=0)
    {   
        audio6.play();
        song6.classList.remove("fa-play-circle");
        song6.classList.add("fa-pause-circle");
        mainplay.classList.remove("fa-play-circle");
        mainplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.querySelector(".songname").innerHTML=`<p class="songname">SENORITA</p>`

        
    }
    else if(audio6.play || audio6.currentTime<0){
        
        songpause();
        audio6.pause();
        song6.classList.remove("fa-pause-circle");
        song6.classList.add("fa-play-circle");
        mainplay.classList.remove("fa-pause-circle");
        mainplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        document.querySelector(".songname").innerHTML=`<p class="songname"> </p>`
    }


mainplay.addEventListener('click',()=>{

if(audio6.paused || audio6.currenttime>=0)
{   
    audio6.play();
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    if(songnumber===6){
        document.querySelector(".songname").innerHTML=`<p class="songname">Senorita..</p>`
    }
    
}
else if(audio6.play || audio6.currentTime<0){
    songpause();
    audio6.pause();
    mainplay.classList.remove("fa-pause-circle");
    mainplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    document.querySelector(".songname").innerHTML=`<p class="songname"></p>`
}
})
//timespan
audio6.addEventListener('timeupdate',()=>{
    progress=parseInt((audio6.currentTime/audio6.duration)*100)
    myprogressbar.value=progress;
})        
       
// timespanchange
myprogressbar.addEventListener('change',()=>{

    audio6.currentTime=myprogressbar.value*audio6.duration/100;
})}
// songg function

function songg(){
    audio.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();

    if(audio7.paused || audio7.currenttime>=0)
    {   
        audio7.play();
        song7.classList.remove("fa-play-circle");
        song7.classList.add("fa-pause-circle");
        mainplay.classList.remove("fa-play-circle");
        mainplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        document.querySelector(".songname").innerHTML=`<p class="songname">Love me like you do </p>`

        
    }
    else if(audio7.play || audio7.currentTime<0){
        
        songpause();
        audio7.pause();
        song7.classList.remove("fa-pause-circle");
        song7.classList.add("fa-play-circle");
        mainplay.classList.remove("fa-pause-circle");
        mainplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        document.querySelector(".songname").innerHTML=`<p class="songname"> </p>`
    }


mainplay.addEventListener('click',()=>{

if(audio7.paused || audio7.currenttime>=0)
{   
    audio7.play();
    mainplay.classList.remove("fa-play-circle");
    mainplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    if(songnumber===7){
        document.querySelector(".songname").innerHTML=`<p class="songname">Love me like you do!</p>`
    }
    
}
else if(audio7.play || audio7.currentTime<0){
    songpause();
    audio7.pause();
    mainplay.classList.remove("fa-pause-circle");
    mainplay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    document.querySelector(".songname").innerHTML=`<p class="songname"></p>`
}
})
//timespan
audio7.addEventListener('timeupdate',()=>{
    progress=parseInt((audio7.currentTime/audio7.duration)*100)
    myprogressbar.value=progress;
})        
       
// timespanchange
myprogressbar.addEventListener('change',()=>{

    audio7.currentTime=myprogressbar.value*audio7.duration/100;
})}
// actual main play

mainplay.addEventListener('click',()=>{
    songchnage();

    })  
    // previous button
    previous.addEventListener('click',()=>{
        songnumber--;
        songpause();
       songchnage();
       if(songnumber===0){
        songnumber=7;
        songchnage();
        
       }
    })

    // forward button
    forward.addEventListener('click',()=>{
        songnumber++;
        songpause();
        songchnage();
        if(songnumber===8){
            songnumber=1
            songchnage();
        }
    })

    // songlist play pause 
        song1.addEventListener('click',()=>{
            changeicon();
             songnumber=1
            songa();
            

        })
        song2.addEventListener('click',()=>{
            changeicon();
            songnumber=2;
            songb();
        })
        song3.addEventListener('click',()=>{
            changeicon();
            songnumber=3;
            console.log(songnumber,'song3')
            songc();
        })

        song4.addEventListener('click',()=>{
            changeicon();
            songnumber=4;
            songd();
        })
        song5.addEventListener('click',()=>{
            changeicon();
            songnumber=5;
            songe();
        })
        song6.addEventListener('click',()=>{
            changeicon();
            songnumber=6;
            songf();
        })
        song7.addEventListener('click',()=>{
            changeicon();
            songnumber=7;
            songg();
        })





