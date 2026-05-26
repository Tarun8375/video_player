const video = document.querySelector(".video");
const progressBar = document.querySelector(".progress");
const playBtn = document.querySelector(".play-btn");
const currentTime = document.querySelector(".current-time");
const duration = document.querySelector(".duration");
const muteVolume = document.querySelector(".mute-btn");
const volumeSlider = document.querySelector(".volume-slider");
const fullscreenButton = document.querySelector(".fullscreen-btn");
const timeline = document.querySelector(".timeline");
const Player = document.querySelector(".player")

function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = "Pause";
  } else {
    video.pause();
    playBtn.innerHTML = "Play";
  }
}

video.addEventListener("loadedmetadata", function () {
  duration.innerHTML = formatTime(video.duration);
});

video.addEventListener("timeupdate", function () {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentTime.innerHTML = formatTime(video.currentTime);
});

timeline.addEventListener("click", function (e) {
  const width = timeline.clientWidth;
  const position = e.offsetX;
  const percentage = position / width;
  const seekTime = percentage * video.duration;
  video.currentTime = seekTime;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const min = String(minutes);
  let fMin = min.padStart(2, "0");
  const sec = String(seconds);
  let fSec = sec.padStart(2, "0");
  return `${fMin}:${fSec}`;
}

playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

//function for making full screen mode ---

const toggleFullscreen = (e = Player) => {
  if (!document.fullscreenElement) {
    if (e.requestFullscreen) {
      e.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};


fullscreenButton.addEventListener("click",function() {
 toggleFullscreen()
});

video.addEventListener("dblclick", function(){
  toggleFullscreen()
})
