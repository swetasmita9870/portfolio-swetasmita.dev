import React from 'react';
import videojs from 'video.js';
import 'videojs-contrib-hls';
import 'video.js/dist/video-js.min.css'

import { useMute } from './MuteContext';
import { useIsMobileView } from '../../hook/mobileview';
import { useRouter } from 'next/router';
import { mute, unmute } from '../../lib/config';
const ReelsPlayer = React.forwardRef((props, ref) => {
  const mobileView = useIsMobileView();
  const { playerId, poster } = props
  const playRef = React.useRef();
  const observer = React.useRef();
  const videoRef = React.useRef();
  const router = useRouter();
  const { globalMuted, toggleGlobalMute } = useMute();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const element = document.getElementById(`video-${playerId}`);
    var overrideNative = false;
    playRef.current = videojs(element, {
      html5: {
        hls: {
          enableLowInitialPlaylist: true,
          smoothQualityChange: true,
          overrideNative: true,
        },
        nativeVideoTracks: !overrideNative,
        nativeAudioTracks: !overrideNative,
        nativeTextTracks: !overrideNative
      },
      loop: true,
      muted: globalMuted,
      controls: false,
      playsInline: true,
      reponsive: true,
      seeking: true
    });
    videojs(`video-${playerId}`).ready(function () {
      this.on('timeupdate', function () {
        handleTimeUpdate(this)
      })
    });
    playRef.current.getChild('controlBar').addClass("vjs_controlbar")
  }, [playerId]);
  const handleTimeUpdate = (video) => {
    const value = (video.currentTime() / video.duration()) * 100;
    setProgress(value);
  };
  React.useEffect(() => {
    if (router.query.slug === playerId) {
      playRef.current.play();
      playRef.current.muted(globalMuted)
    } else {
      playRef.current.pause();
      playRef.current.muted(globalMuted)
    }
  }, [router.query.slug])

  const handleFullscreenClick = (e) => {
    e?.preventDefault();
    if (!playRef.current.paused()) {
      playRef.current.pause();
    } else {
      playRef.current.play();
    }
  };


  React.useEffect(() => {
    if (router.query.slug === playerId) {
      playRef.current.play();
      playRef.current.muted(globalMuted)
    } else {
      playRef.current.pause();
      playRef.current.muted(globalMuted)
    }
  }, [router.query.slug])

  React.useEffect(() => {
    const Component = videojs.getComponent('Component');
    class AutoPlayOverlay extends Component {
      constructor(player, options = {}) {
        super(player, options);
        if (options.text) {
          this.updateTextContent(options.text);
        }
      }
      createEl() {
        return videojs.dom.createEl('div', {
          className: 'vjs-autoPlay'
        });
      }
    }
    videojs.registerComponent('AutoPlayOverlay', AutoPlayOverlay);
    playRef.current.addChild('AutoPlayOverlay');
    playRef.current.getChild('AutoPlayOverlay').on("click", (e) => {
      handleFullscreenClick(e)
    })
  }, [])
  React.useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play()
        } else {
          videoRef.current.pause();
        }
      });
    };
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // 40% of the target visible
    });
    observer.current.observe(videoRef.current);
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  const handleMuteUnmute = () => {
    toggleGlobalMute();
    if (playRef?.current) {
      playRef.current.muted(!globalMuted);
    }
  };
  return (
    <div className="mainContainer">
      <div className='reels-container d-flex align-items-center justify-content-center position-relative'>
        <div
          style={{
            position: 'absolute',
            zIndex: 3,
            left: 0,
            height: '1px',
            bottom: mobileView ? '2%' : '0%',
            top: '0%',
            width: `${progress}%`,
            backgroundColor: 'var(--l_base)',
          }} />
        {router.query.slug === playerId ? <img
          src={`${(!globalMuted ? unmute : mute)}`}
          className="cursorPtr"
          width={30}
          height={30}
          style={{
            position: 'absolute',
            zIndex: 3,
            right: '3%',
            top: mobileView ? '4%' : '2%',
          }}
          onClick={handleMuteUnmute}
        /> : null}
        <div className='reelsInner ' >
          <div id={`vjs-${playerId}`} className='main-video' >
            <video
              autoplay={true}
              ref={videoRef}
              muted={globalMuted}
              onClick={(e) => handleFullscreenClick(e)}
              id={`video-${playerId}`}
              className="video-js vjs-default-skin vjs-big-play-centered vjs-show-big-play-button-on-pause dynamicHeightVideo"
              poster={poster}
              playsInline
            >
              <source src={props.publicId} />
            </video>
          </div>
        </div>
      </div>
      <style jsx>{`
        :global(.mainContainer) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        :global(.video-js .vjs-play-progress){
          background:var(--l_linear_btn_bg) !important;
        }
        :global(.vjs-time-tooltip){
          display:none !important;
        }
        :global(.video-js .vjs-load-progress div){
          background:none !important;
        }
        :global(.video-js .vjs-load-progress div){
          background:none !important;
        }
        :global(.reels-container::before) {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          background: ${router.query.slug === playerId ? "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 41.02%, rgba(0, 0, 0, 0.7) 100%)" : null} !important;
        }
        
        @keyframes heartBeat {
          0% {
            transform: scale(0.8) translateY(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) translateY(-20px);
            opacity: 1;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 0;
            top:0;
          }
        }
        :global(.vjs-control-bar){
          background:none !important;
        }
      :global(.vjs-control-bar .vjs-icon-placeholder::before){
        display:none !important;
      }
      :global(.video-js .vjs-control){
        width:unset;
      }
        :global(.main-video video) {
          object-fit: cover !important;
          width:100%;
          object-position: center;
          height:auto !important;
          height:${mobileView ? 'calc(var(--vhCustom, 1vh) * 100)' : 'calc(var(--vhCustom, 1vh) * 88)'} !important;
          transform: translateY(-50% );
          top: 50% !important;
        }
        :global(.dynamicHeightVideo){
          height:${mobileView ? 'calc(var(--vhCustom, 1vh) * 100)' : 'calc(var(--vhCustom, 1vh) * 88)'} !important;
        }
        :global(.reels-container) {
          width: ${mobileView ? '100vw' : '335px'};
        }
        .reelsInner {
          width: ${mobileView ? '100vw' : '335px'};
        }
        :global(.video-js) {
          width:100%!important;
      }
      :global(.video-js .vjs-mute-control){ 
          display: inline-block !important;
      }
      :global(.innerButton){
        visibility: hidden;
        position: absolute;
      }
      :global(.vjs-autoPlay){
          top: 0;
          height: 85%;
          width: 100%;
          position: absolute;
          left: 0;
          z-index: 2;
          background: transparent;
          border: none;
      }
      :global(.video-js .vjs-big-play-button){
        top:50%!important;
        left:50%!important;
        line-height: 2.1em;
        height: 2em;
        width: 2em;
        border-radius: 50%;
        border:none;
        transform-origin: center;
    }
      :global(.video-js .vjs-volume-panel){ 
          display: flex !important 
      }
      :global(.video-js .vjs-mute-control){ 
          display: inline-block !important;
      }
      :global(.vjs-remaining-time-display){
        display:none;
      }
      :global(.vjs-time-control){
        display:none !important;
      }
      :global(.video-js .vjs-volume-panel){
        display:none !important;
      }
      :global(.video-js .vjs-slider){
        margin:0 !important;
      }
      `}</style>
    </div>
  );
});

export default ReelsPlayer;
