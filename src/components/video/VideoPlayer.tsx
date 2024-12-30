import React from 'react';
import { VideoTitle } from './VideoTitle';
import { VideoEmbed } from './VideoEmbed';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

export function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  return (
    <div className="space-y-4">
      <VideoTitle title={title} />
      <VideoEmbed videoId={videoId} />
    </div>
  );
}