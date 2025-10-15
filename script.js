const player = new Plyr('.player', {
  controls: [
    'rewind',        
    'play',          
    'fast-forward',  
    'progress',      
    'current-time',  
    'duration',      
    'mute',          
    'volume',
    'settings'      
  ],
  i18n: { 
    play: 'Play', 
    pause: 'Pause', 
    rewind: 'Rewind 10s', 
    fastForward: 'Forward 10s' 
  },
  settings: ['speed']
});

const tracks = document.querySelectorAll('.track');
tracks.forEach(track => {
    track.addEventListener('click', () => {
      const src = track.getAttribute('data-src');
      player.source = {
        type: 'audio',
        sources: [{ src, type: 'audio/mp3' }]
      };
      player.play();
      tracks.forEach(t => t.classList.remove('active'));
      track.classList.add('active');
    });
  });

  const linkback = document.getElementsByTagName("h4")
  function handleClick(){
            window.location.href="index.html"
        }
  linkback.addEventListener('click',handleClick);