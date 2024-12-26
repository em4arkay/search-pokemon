import React from "react";

interface CardDefaultProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
}

const CardDefault: React.FC<CardDefaultProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageSrc} alt={imageAlt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))} */}
        developer
      </div>
    </div>
  );
};

export default CardDefault;
