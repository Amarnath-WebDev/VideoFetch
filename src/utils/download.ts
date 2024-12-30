import { saveAs } from 'file-saver';

export async function downloadThumbnail(url: string, quality: 'default' | 'medium' | 'high') {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const filename = `thumbnail-${quality}.jpg`;
    saveAs(blob, filename);
  } catch (error) {
    console.error('Error downloading thumbnail:', error);
    throw new Error('Failed to download thumbnail');
  }
}

export function getVideoDownloadUrl(videoId: string, quality: '1080p' | '720p' | '480p' | '360p'): string {
  // Since we can't actually download YouTube videos directly, return the watch URL
  return `https://www.youtube.com/watch?v=${videoId}`;
}