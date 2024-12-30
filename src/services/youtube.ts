import { YOUTUBE_API_KEY, YOUTUBE_API_BASE_URL } from '../config/youtube';
import { VideoInfo } from '../types/video';

export async function fetchVideoInfo(videoId: string): Promise<VideoInfo> {
  try {
    const response = await fetch(
      `${YOUTUBE_API_BASE_URL}/videos?` +
      `part=snippet,contentDetails,statistics` +
      `&id=${videoId}` +
      `&key=${YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.items?.[0]) {
      throw new Error('Video not found');
    }

    const video = data.items[0];
    return {
      id: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnails: {
        default: video.snippet.thumbnails.default.url,
        medium: video.snippet.thumbnails.medium.url,
        high: video.snippet.thumbnails.high.url,
      },
      channelTitle: video.snippet.channelTitle,
      publishedAt: video.snippet.publishedAt,
      viewCount: video.statistics.viewCount,
      duration: video.contentDetails.duration,
    };
  } catch (error) {
    console.error('Error fetching video:', error);
    throw new Error('Failed to fetch video information');
  }
}