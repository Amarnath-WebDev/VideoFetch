import React from 'react';

interface VideoTitleProps {
  title: string;
}

export function VideoTitle({ title }: VideoTitleProps) {
  return (
    <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
      {title}
    </h2>
  );
}