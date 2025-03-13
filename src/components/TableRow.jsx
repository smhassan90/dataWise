"use client"

import { Edit, Eye, Trash2 } from "lucide-react"

export default function TableRow({ item, selectedRows, handleSelectRow }) {
  return (
    <tr key={item.id} className="hover:bg-gray-50">
      <td className="px-normal py-normal">
        <input
          type="checkbox"
          checked={selectedRows.includes(item.id)}
          onChange={() => handleSelectRow(item.id)}
          className="h-4 w-4 rounded-large text-secondary focus:ring-secondary"
        />
      </td>
      <td className="px-normal py-normal text-sm text-gray-900">{item.id}</td>
      <td className="px-normal py-normal text-sm text-gray-900">{item.storyName}</td>
      <td className="px-normal py-normal text-sm text-gray-900">{item.storyInfo}</td>
      <td className="px-normal py-normal text-sm text-gray-900">{item.connectedDeployment}</td>
      <td className="px-normal py-normal text-sm text-gray-500">
        <div className="flex space-x-3">
          <button className="text-gray-600"><Edit size={16} /></button>
          <button className="text-gray-600"><Eye size={16} /></button>
          <button className="text-gray-600"><Trash2 size={16} /></button>
        </div>
      </td>
    </tr>
  )
}
