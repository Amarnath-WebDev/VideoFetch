import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface VideoInputProps {
  onSubmit: (url: string) => void;
  loading?: boolean;
}

export function VideoInput({ onSubmit, loading }: VideoInputProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error('Please enter a YouTube URL');
      return;
    }
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube video URL here (e.g., https://www.youtube.com/watch?v=...)"
          disabled={loading}
          className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-blue-500 transition-colors disabled:cursor-not-allowed disabled:hover:text-gray-400"
        >
          {loading ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Search size={20} />
          )}
        </button>
      </div>
    </form>
  );
}