import React, { useState } from 'react';
import { MainNav } from './components/navigation/MainNav';
import { Footer } from './components/footer/Footer';
import { VideoInput } from './components/VideoInput';
import { VideoPlayer } from './components/video/VideoPlayer';
import { VideoGrid } from './components/VideoGrid';
import { useVideoFetch } from './hooks/useVideoFetch';
import { useRandomVideo } from './hooks/useRandomVideo';
import { VideoMetadata } from './types/video';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { extractVideoId } from './utils/youtube';

export function App() {
  const [videos, setVideos] = useState<VideoMetadata[]>([]);
  const { fetchVideo, loading: fetchLoading } = useVideoFetch();
  const { video: randomVideo, loading: randomLoading } = useRandomVideo();

  const handleVideoSubmit = async (url: string) => {
    const videoId = extractVideoId(url);
    if (!videoId) {
      toast.error('Invalid YouTube URL');
      return;
    }

    try {
      const video = await fetchVideo(url);
      if (video) {
        setVideos(prev => [video, ...prev]);
      }
    } catch (error) {
      toast.error('Failed to fetch video');
    }
  };

  if (randomLoading && videos.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainNav />
      
      <main className="container mx-auto px-4 py-6 space-y-8 flex-1">
        <div className="flex justify-center">
          <VideoInput onSubmit={handleVideoSubmit} loading={fetchLoading} />
        </div>
        
        {videos.length > 0 && videos[0].info ? (
          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              videoId={videos[0].info.id}
              title={videos[0].info.title}
            />
          </div>
        ) : randomVideo ? (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Video</h2>
            <VideoPlayer
              videoId={randomVideo.id}
              title={randomVideo.title}
            />
          </div>
        ) : null}
        
        <VideoGrid videos={videos} />
      </main>

      <Footer />
    </div>
  );
}

export default App;