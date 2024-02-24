console.log("welcome to spotify");

let songIndex=0
let audioElement=new Audio('songs/1.mp3')
let mastrplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar')
let mastersongname=document.getElementById('mastersongname')
let gif=document.getElementById('gif')
let songitems= Array.from(document.getElementsByClassName('songItem'))


let songs=[
    {
    songName:"first song",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"
},
    {
    songName:"second song",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"
},
    {
    songName:"third song",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"
},
    {
    songName:"fourth song",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"
},
    {
    songName:"fifth song",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"
},
    {
    songName:"sixth song",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"
},
    {
    songName:"seventh song",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"
},
    {
    songName:"eigth song",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"
},
    {
    songName:"night song",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"
},
    {
    songName:"tenth song",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"
}
]
songitems.forEach((ele,i)=>{
    console.log(ele,i);
    ele.getElementsByTagName("img")[0].src=songs[i].coverPath;
    ele.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})


//audioElement.play()

// Handle play/pause click
mastrplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       mastrplay.classList.remove('fa-play-circle')
       mastrplay.classList.add('fa-pause-circle')
       gif.style.opacity=3;
    }
    else{
        audioElement.pause();
       mastrplay.classList.remove('fa-pause-circle')
       mastrplay.classList.add('fa-play-circle')
       gif.style.opacity=0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    // Update Seekbar
    let progress =parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
})

const makeAllplay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle') 
        element.classList.add('fa-play-circle') 
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        songIndex=parseInt(e.target.id)
       e.target.classList.remove('fa-play-circle') 
       e.target.classList.add('fa-pause-circle') 
       audioElement.src=`songs/${songIndex+1}.mp3`;
       mastersongname.innerHTML=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=3;
       mastrplay.classList.remove('fa-play-circle');
       mastrplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex>9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    mastrplay.classList.remove('fa-play-circle');
    mastrplay.classList.add('fa-pause-circle');
    
})
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    mastrplay.classList.remove('fa-play-circle');
    mastrplay.classList.add('fa-pause-circle');
    
})