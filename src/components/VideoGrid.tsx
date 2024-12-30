import React from 'react';
import { VideoCard } from './VideoCard';
import { VideoMetadata } from '../types/video';

interface VideoGridProps {
  videos: VideoMetadata[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  const validVideos = videos.filter(v => v.info !== null);
  
  if (validVideos.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
      {validVideos.map(video => (
        video.info && <VideoCard key={video.info.id} video={video.info} />
      ))}
    </div>
  );
}