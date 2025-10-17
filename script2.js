
const videoPlayer = new Plyr('#video-player', {
controls: [
    'rewind',        
    'play',          
    'fast-forward',  
    'progress',      
    'current-time',  
    'duration',      
    'mute',          
    'volume',
    'fullscreen',
    'settings'   
],
seekTime: 10,
speed: { selected: 1, options: [0.75, 1, 1.25, 1.5, 2] },
ratio: null
});

const videos = document.querySelectorAll('.video');
videos.forEach(video => {
    video.addEventListener('click', () => {
      const src = video.getAttribute('data-src');
      videoPlayer.source = {
        type: 'video',
        sources: [{ src, type: 'video/mp4' }]
      };
      videoPlayer.play();
      videos.forEach(v => v.classList.remove('active'));
      video.classList.add('active');
    });
  });