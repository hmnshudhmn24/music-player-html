const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playlistItems = document.querySelectorAll("#playlist li");

let currentSongIndex = 0;
const songs = Array.from(playlistItems).map(item => item.getAttribute("data-src"));

function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    playPauseBtn.textContent = "⏸ Pause";
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "⏸ Pause";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "▶️ Play";
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

playPauseBtn.addEventListener("click", togglePlayPause);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

playlistItems.forEach((item, index) => {
    item.addEventListener("click", () => playSong(index));
});