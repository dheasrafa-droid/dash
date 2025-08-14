// app/editor/page.tsx
"use client";

import { useState } from "react";

export default function EditorPage() {
  const [videoFile, setVideoFile] = useState<string | null>(null);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoFile(url);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-3 border-b border-gray-700">
        <div className="flex gap-2">
          <button
            className="bg-gray-700 px-3 py-1 rounded"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            Upload
          </button>
          <input
            id="fileInput"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileSelect}
          />
        </div>
        <div className="text-lg font-bold">🎬 DSRT Web Editor</div>
        <button className="bg-gray-700 px-3 py-1 rounded">Export</button>
      </div>

      {/* Main Area */}
      <div className="flex flex-1">
        {/* Tool Panel */}
        <div className="w-16 bg-gray-800 flex flex-col items-center py-4 gap-6 border-r border-gray-700">
          ✂️ 🎵 🅰️ ⚙️
        </div>

        {/* Preview */}
        <div className="flex-1 flex items-center justify-center bg-black">
          {videoFile ? (
            <video src={videoFile} className="max-h-full max-w-full" controls />
          ) : (
            <div className="text-gray-500">Import video to start editing</div>
          )}
        </div>

        {/* Property Panel */}
        <div className="w-64 bg-gray-800 border-l border-gray-700 p-4">
          <h2 className="font-semibold mb-2">Properties</h2>
          <p className="text-sm text-gray-400">Select a clip to see settings</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="h-28 bg-gray-800 border-t border-gray-700 p-3">
        <div className="text-gray-400">Timeline Area</div>
      </div>
    </div>
  );
}
