"use client"

import { useState } from "react"

export default function StoryBoard() {
  // This is mock data - replace with your actual state and handlers
  const [selectedStory, setSelectedStory] = useState("")
  const [storiesList, setStoriesList] = useState(["User Journey", "Product Launch"])
  const stories = ["User Journey", "Product Launch", "Feature Release", "Marketing Campaign", "Customer Feedback"]

  const handleAddStory = () => {
    if (selectedStory && !storiesList.includes(selectedStory)) {
      setStoriesList([...storiesList, selectedStory])
      setSelectedStory("")
    }
  }

  const handleRemoveStory = (story) => {
    setStoriesList(storiesList.filter((s) => s !== story))
  }

  return (
    <div className="w-full border rounded-lg shadow-sm bg-white">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Story Board</h2>
      </div>
      <div className="p-4">
        {/* Quota Section */}
        <div className="mb-6 space-y-1.5 border-b pb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Quota:</span>
            <span className="text-sm font-medium">10 stories</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Utilized Quota:</span>
            <span className="text-sm font-medium">{storiesList.length} stories</span>
          </div>
        </div>

        {/* Story Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <select
              className="flex-1 p-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={selectedStory}
              onChange={(e) => setSelectedStory(e.target.value)}
            >
              <option value="" disabled>
                Select a Story
              </option>
              {stories.map((story, index) => (
                <option key={index} value={story}>
                  {story}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddStory}
              disabled={!selectedStory}
              className={`px-4 py-2 rounded-md text-white ${
                !selectedStory ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Add Story
            </button>
          </div>

          {/* Selected Stories List */}
          {storiesList.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Selected Stories:</h3>
              <div className="flex flex-wrap gap-2">
                {storiesList.map((story, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 py-1.5 px-3 bg-gray-100 text-gray-800 rounded-full"
                  >
                    {story}
                    <button
                      onClick={() => handleRemoveStory(story)}
                      className="ml-1 rounded-full hover:bg-gray-200 p-0.5 w-5 h-5 flex items-center justify-center"
                      aria-label={`Remove ${story}`}
                    >
                      <span className="text-gray-500">×</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

