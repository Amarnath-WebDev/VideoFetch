import React from 'react';
import { Clock, Eye, Share2 } from 'lucide-react';
import { VideoInfo } from '../types/video';
import { formatDuration, formatViewCount } from '../utils/youtube';
import { DownloadOptions } from './DownloadOptions';

interface VideoCardProps {
  video: VideoInfo;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={video.thumbnails.high}
          alt={video.title}
          className="w-full aspect-video object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-sm rounded">
          <Clock className="inline-block w-4 h-4 mr-1" />
          {formatDuration(video.duration)}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {formatViewCount(video.viewCount)} views
          </span>
          <span className="mx-2">•</span>
          <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">{video.channelTitle}</span>
          <button
            onClick={() => navigator.share({ url: `https://youtube.com/watch?v=${video.id}` })}
            className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <Share2 size={18} />
          </button>
        </div>

        <DownloadOptions videoId={video.id} thumbnails={video.thumbnails} />
      </div>
    </div>
  );
}