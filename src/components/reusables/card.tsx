const EditIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="#ccc"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    className="edit-icon"
  >
    {/* This path draws the shaft of the pencil */}
    <path d="M11 4h6a2 2 0 0 1 2 2v6" />
    {/* This path draws the pencil tip and body */}
    <path d="M20.5 3.5L14 10l-7 7H3v-4l7-7z" />
  </svg>
);


import React, { useState } from 'react';
import TrashIcon from '../dashboard/deleteUser';

interface UserCardProps {
  user: {
    id: number;
    title: string;
    description?: string;
  };
  onDelete: (id: number) => void;
  onEdit?: (id: number, newTitle: string) => void;
}

 const UserCard = ({ user, onDelete, onEdit }: UserCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(user.title);
    console.log({user});
    
  const handleTitleSave = () => {
    setIsEditing(false);
    if (onEdit) onEdit(user.id, title);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 relative transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-gray-100 h-50">
      {isEditing ? (
        <input
          type="text"
          className="border p-1 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleTitleSave}
          autoFocus
        />
      ) : (
        <h2 className="text-xl font-bold mb-2">
          {user.title} 
          <span
            className="ml-2 cursor-pointer inline-block"
            onClick={() => setIsEditing(true)}
          >
            <EditIcon />
          </span>
        </h2>
      )}
      {user.title && (
        <p className="text-gray-700">{user.title}</p>
      )}
      <div className="flex justify-end">
        <TrashIcon
          className="absolute top-2 right-2 cursor-pointer text-red-500"
          onClick={() => onDelete(user.id)}
        />
      </div>
    </div>
  );
};
export default UserCard;