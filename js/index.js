haloThemeAudio = document.getElementById('Halo-theme-audio');
halo2ThemeAudio = document.getElementById('Halo2-theme-audio');
halo3ThemeAudio = document.getElementById('Halo3-theme-audio');

haloImage = document.getElementById('Halo-theme');
halo2Image = document.getElementById('Halo2-theme');
halo3Image = document.getElementById('Halo3-theme');

haloImage.addEventListener('click', () => {
    playSong(haloThemeAudio)
});

halo2Image.addEventListener('click', () => {
playSong(halo2ThemeAudio)
});

halo3Image.addEventListener('click', () => {
    playSong(halo3ThemeAudio)
});

function playSong(audioElement) {
    songs = document.querySelectorAll('audio');
    songs.forEach(audio => {
        audio.pause()
        audio.currentTime = 0
    });
    audioElement.play();
}