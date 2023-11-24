const container = document.querySelector(".container"),
bigPlayBtn = document.querySelector(".big-play"),
mainVideo = container.querySelector("video"),
videoTimeline = container.querySelector(".video-timeline"),
progressBar = container.querySelector(".progress-bar"),
volumeBtn = container.querySelector(".volume i"),
volumeSlider = container.querySelector(".left input"),
volumeMsg = container.querySelector(".text-volume"),
currentVidTime = container.querySelector(".current-time");
videoDuration = container.querySelector(".video-duration"),
skipBackward = container.querySelector(".skip-backward i"),
skipForward = container.querySelector(".skip-forward i"),
playPauseBtn = container.querySelector(".play-pause i"),
speedBtn = container.querySelector(".playback-speed span"),
speedOptions = container.querySelector(".speed-options"),
pipBtn = container.querySelector(".pic-in-pic span"),
fullScreenBtn = container.querySelector(".fullscreen i");
let timer, lastVolume = 0.5;

const hideControls = () => {
    if (mainVideo.paused) return;
    timer = setTimeout(() => {
        container.classList.remove("show-controls");
        if (volumeMsg.classList.contains("show")) {
            volumeMsg.classList.remove("show");
        }
    }, 3000);
}

hideControls();

container.addEventListener("mousemove", () => {
    container.classList.add("show-controls");
    clearTimeout(timer);
    hideControls();   
});

const formatTime = time => {
    let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

    // Добавление нуля в начало, если число меньше 10
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours == 0) {
        return `${minutes}:${seconds}`
    }
    return `${hours}:${minutes}:${seconds}`;
}

videoTimeline.addEventListener("mousemove", e => {
    let timelineWidth = videoTimeline.clientWidth;
    let offsetX = e.offsetX;
    let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
    const progressTime = videoTimeline.querySelector("span");
    offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;
    progressTime.style.left = `${offsetX}px`; // Тут задаем позицию по иксу такую же, как и у курсора
    progressTime.innerText = formatTime(percent);
});

videoTimeline.addEventListener("click", e => {
    let timelineWidth = videoTimeline.clientWidth;
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
});

mainVideo.addEventListener("timeupdate", e => {
    let {currentTime, duration} = e.target;
    let percent = (currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`; // Обновить прогресс-бар
    currentVidTime.innerText = formatTime(currentTime); // Обновить текущее время слева снизу
});

mainVideo.addEventListener("loadeddata", () => { // Установка продолжительности видео слева снизу
    videoDuration.innerText = formatTime(mainVideo.duration);
    mainVideo.volume = lastVolume;
});

const draggableProgressBar = e => {
    let timelineWidth = videoTimeline.clientWidth;
    progressBar.style.width = `${e.offsetX}px`;
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
    currentVidTime.innerText = formatTime(mainVideo.currentTime);
}

volumeBtn.addEventListener("click", () => volumeHandler());

volumeSlider.addEventListener("input", e => {
    mainVideo.volume = e.target.value;
    changeVolumeButton();
});

speedOptions.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => {
        mainVideo.playbackRate = option.dataset.speed;
        speedOptions.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

document.addEventListener("click", e => {
    if (e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
        speedOptions.classList.remove("show");
    }
});

function changeVolumeButton() {
    if (volumeBtn.classList.contains("fa-volume-high") && mainVideo.volume <= 0.5) {
        return volumeBtn.classList.replace("fa-volume-high", "fa-volume-low");
    } else if (volumeBtn.classList.contains("fa-volume-low") && mainVideo.volume > 0.5) {
        return volumeBtn.classList.replace("fa-volume-low", "fa-volume-high");
    } else if (volumeBtn.classList.contains("fa-volume-low") && mainVideo.volume <= 0) {
        return volumeBtn.classList.replace("fa-volume-low", "fa-volume-xmark");
    } else if (volumeBtn.classList.contains("fa-volume-xmark") && mainVideo.volume > 0) {
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-low");
    }
}

function volumeHandler() {
    if (volumeBtn.classList.contains("fa-volume-xmark")) {
        mainVideo.volume = lastVolume;
        if (lastVolume > 0.5) {
            volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
        } else {
            volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-low");
        }
    } else {
        lastVolume = mainVideo.volume;
        mainVideo.volume = 0.0;
        if (lastVolume > 0.5) {
            volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
        } else {
            volumeBtn.classList.replace("fa-volume-low", "fa-volume-xmark");
        }
    }
    volumeSlider.value = mainVideo.volume;
}

function fullScreenHandler() {
    container.classList.toggle("fullscreen");
    if (document.fullscreenElement) { // Если видео уже в полноэкранном режиме
        fullScreenBtn.classList.replace("fa-compress", "fa-expand");
        return document.exitFullscreen();
    }
    fullScreenBtn.classList.replace("fa-expand", "fa-compress");
    container.requestFullscreen();
}

function playOrPause() {
    if (mainVideo.paused) {
        mainVideo.play();
        bigPlayBtn.style.opacity = "0";
        // container.style.cursor = "auto";
    } else {
        mainVideo.pause();
        bigPlayBtn.style.opacity = "1";
        // container.style.cursor = "pointer";
    }
}

fullScreenBtn.addEventListener("click", () => fullScreenHandler());
speedBtn.addEventListener("click", () => speedOptions.classList.toggle("show"));
pipBtn.addEventListener("click", () => mainVideo.requestPictureInPicture());
skipBackward.addEventListener("click", () => mainVideo.currentTime -= 5);
skipForward.addEventListener("click", () => mainVideo.currentTime += 5);
mainVideo.addEventListener("play", () => playPauseBtn.classList.replace("fa-play", "fa-pause"));
mainVideo.addEventListener("pause", () => playPauseBtn.classList.replace("fa-pause", "fa-play"));
videoTimeline.addEventListener("mousedown", () => videoTimeline.addEventListener("mousemove", draggableProgressBar));
document.addEventListener("mouseup", () => videoTimeline.removeEventListener("mousemove", draggableProgressBar));

document.addEventListener('keydown', function(event) {
    const target = event.target;
    if (event.code == 'Space') {
        playOrPause();
    } else if (event.code == "ArrowRight") {
        mainVideo.currentTime += 5;
    } else if (event.code == "ArrowLeft") {
        mainVideo.currentTime -= 5;
    } else if (event.code == "KeyF") {
        fullScreenHandler();
    } else if (event.code == "KeyM") {
        volumeHandler();
    } else if (event.code == "ArrowUp" && mainVideo.volume < 1) {
        if (mainVideo.volume + 0.05 > 1) {
            mainVideo.volume = 1;
        }
        else {
            mainVideo.volume += 0.05;
            changeVolumeButton();
        }
        volumeSlider.value = mainVideo.volume;
        volumeMsg.innerHTML = Math.floor(mainVideo.volume * 100) + "%";
        volumeMsg.classList.add("show");
    } else if (event.code == "ArrowDown" && mainVideo.volume > 0) {
        if (mainVideo.volume - 0.05 <= 0) {
            volumeHandler();
        } else {
            mainVideo.volume -= 0.05;
            changeVolumeButton();
        }
        volumeSlider.value = mainVideo.volume;
        volumeMsg.innerHTML = Math.floor(mainVideo.volume * 100) + "%";
        volumeMsg.classList.add("show");
    }
    container.classList.add("show-controls");
    clearTimeout(timer);
    hideControls();
});

container.addEventListener("click", el => { // Для того, чтобы остановить видео нажав на экран
    const target = el.target;
    if (target.closest(".play-pause")) {
        playOrPause();
    } else if (!target.closest(".wrapper")) {
        playOrPause();
    }
});