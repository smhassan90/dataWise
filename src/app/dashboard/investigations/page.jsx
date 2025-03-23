"use client"

import { useState } from "react"
import { Edit, X } from "lucide-react"
import { Button } from "@/src/utils/button"
import Image from "@/src/app/images/images.png"
export default function CardEditLayout() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "SWAV Insight",
      description: "Unlock actionable insights with precision analytics for smarter decisions.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLv0rWGR0nbcpwHlhRVciARVGKd7BXA7JXDaw1-YQexG0KTuTtMD5gFg&s?height=100&width=100",
    },
    {
      id: 2,
      title: "DataWise Hub",
      description: "Empower your business with real-time data tracking and reporting.",
      imageUrl: "https://abovethefray.io/wp-content/uploads/2024/04/consulting-intro.jpg?height=50000&width=100",
    },
    {
      id: 3,
      title: "Acuity Pulse",
      description: "Monitor and optimize performance with a streamlined platform.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdNl23euJxppQoIGw2b7KrABazZul4VRwLueXa2FD4YWkn0an5kicMY8e2vqyN6eXzpY&usqp=CAU?height=700&width=100",
    },
    {
      id: 4,
      title: "VisionFlow Analytics",
      description: "Gain deep visibility into your operations with intuitive data visualization.",
      imageUrl: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      title: "IntelliTrack Suite",
      description: "Track key metrics effortlessly and make data-driven decisions with ease.",
      imageUrl: {Image},
    },
  ])

  const [editingCardId, setEditingCardId] = useState(null)
  const [editFormData, setEditFormData] = useState(null)

  const handleEditClick = (card) => {
    setEditingCardId(card.id)
    setEditFormData({ ...card })
  }

  const handleCloseEdit = () => {
    setEditingCardId(null)
    setEditFormData(null)
  }

  const handleSaveEdit = () => {
    if (editFormData) {
      setCards(cards.map((card) => (card.id === editFormData.id ? editFormData : card)))
      setEditingCardId(null)
      setEditFormData(null)
    }
  }

  const handleInputChange = (e) => {
    if (editFormData) {
      setEditFormData({
        ...editFormData,
        [e.target.name]: e.target.value,
      })
    }
  }

  return (
    <div className="container p-normal relative">
      {/* Main content area with cards */}
      <div className={`grid grid-cols-1 gap-4 ${editingCardId !== null ? "md:mr-[calc(50%+2rem)]" : "md:grid-cols-2"}`}>
        {cards.map((card) => (
          <div key={card.id} className="transition-all duration-300 ease-in-out">
            <div className="bg-gradient-to-r from-red-500 to-orange-400  rounded-large border border-gray-200 shadow-sm h-full">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={card.imageUrl || "/placeholder.svg"}
                    alt={card.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{card.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{card.description}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-end border-t border-gray-100">
                <button
                  onClick={() => handleEditClick(card)}
                  className="inline-flex items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-900 rounded-md px-3 py-1.5 transition-colors"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed position edit form - slides in from bottom */}
      {editingCardId !== null && editFormData && (
        <div className="fixed top-28 right-8 bottom-4 w-[calc(40%-2rem)] z-10 transition-all duration-300 ease-in-out animate-in slide-in-from-bottom">
          <div className="bg-white rounded-large border border-blue-500 shadow-md  overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium text-xl">Edit Card {editingCardId}</h3>
                <button
                  onClick={handleCloseEdit}
                  className="inline-flex items-center justify-center rounded-full p-1 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-base font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    value={editFormData.title}
                    onChange={handleInputChange}
                    className="w-full h-12 text-base mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-base font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    id="description"
                    name="description"
                    value={editFormData.description}
                    onChange={handleInputChange}
                    className="w-full h-12 text-base mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="imageUrl" className="block text-base font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    value={editFormData.imageUrl}
                    onChange={handleInputChange}
                    className="w-full h-12 text-base mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <Button
                  onClick={handleSaveEdit}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

