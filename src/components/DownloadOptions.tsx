import React from 'react';
import { Download } from 'lucide-react';
import { downloadThumbnail, getVideoDownloadUrl } from '../utils/download';
import toast from 'react-hot-toast';

interface DownloadOptionsProps {
  videoId: string;
  thumbnails: {
    default: string;
    medium: string;
    high: string;
  };
}

export function DownloadOptions({ videoId, thumbnails }: DownloadOptionsProps) {
  const handleVideoDownload = (quality: '1080p' | '720p' | '480p' | '360p') => {
    const url = getVideoDownloadUrl(videoId, quality);
    toast.error('Video downloads require a backend service. Opening video page instead.');
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Download Thumbnails</h4>
        <div className="flex gap-2">
          {Object.entries(thumbnails).map(([quality, url]) => (
            <button
              key={quality}
              onClick={() => downloadThumbnail(url, quality as any)}
              className="px-3 py-1.5 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1"
            >
              <Download size={14} />
              {quality}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Video Quality</h4>
        <div className="flex gap-2">
          {(['1080p', '720p', '480p', '360p'] as const).map(quality => (
            <button
              key={quality}
              onClick={() => handleVideoDownload(quality)}
              className="px-3 py-1.5 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1"
            >
              <Download size={14} />
              {quality}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}