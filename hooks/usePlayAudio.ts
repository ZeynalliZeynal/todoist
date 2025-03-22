import React from 'react';

export function usePlayAudio({ src }: { src: string }) {
  const [isPlayingAudio, setIsPlayingAudio] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  function initializeAudio() {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.onended = () => setIsPlayingAudio(false);
    }
  }

  function playAudio() {
    initializeAudio();

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlayingAudio(true);
    }
  }

  return { isPlayingAudio, playAudio };
}
