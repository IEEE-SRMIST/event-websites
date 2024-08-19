import React from 'react';

interface TabButtonProps {
    label: string;
    icon:  () => JSX.Element;
    description: string;
    isActive: boolean;
    onClick: () => void;
    scale: number;
}

const TabButton: React.FC<TabButtonProps> = ({ label, icon, description, isActive, onClick, scale }) => {
  return (
    <button
      type="button"
      className={`text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl ${
        isActive ? 'bg-white shadow-md text-black' : 'bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 text-gray-800 dark:text-neutral-200'
      } transition-transform duration-300 ease-in-out`}
      onClick={onClick}
      aria-selected={isActive}
      role="tab"
      style={{
        transform: isActive ? `scale(${scale})` : 'scale(1)',
      }}
    >
      <span className="flex gap-x-6">
        {icon()}
        <span className="grow">
          <span className="block text-lg font-semibold">
            {label}
          </span>
          {isActive && (
            <span className="block mt-1">
              {description}
            </span>
          )}
        </span>
      </span>
    </button>
  );
};

export default TabButton;