import React from 'react';

interface VideoEmbedProps {
  videoId: string;
}

export function VideoEmbed({ videoId }: VideoEmbedProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&origin=${window.location.origin}`;

  return (
    <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={embedUrl}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin"
      />
    </div>
  );
}