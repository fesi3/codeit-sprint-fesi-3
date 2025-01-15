import React from 'react';

interface HeartRatingProps {
  rating: number; // 현재 평점
  maxRating?: number; // 최대 평점
  onRate?: (newRating: number) => void; // 평점 변경 핸들러
}

const HeartRating: React.FC<HeartRatingProps> = ({
  rating,
  maxRating = 5,
  onRate,
}) => {
  const handleClick = (index: number) => {
    if (onRate) {
      onRate(index + 1); // 클릭한 하트의 평점을 부모로 전달
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: maxRating }, (_, index) => (
        <img
          key={index}
          src={
            index < rating
              ? '/assets/icons/heart.svg'
              : '/assets/icons/emptyHeart.svg'
          }
          alt={`Heart ${index + 1}`}
          className="// 태블릿 // PC h-6 w-6 cursor-pointer md:h-8 md:w-8 xl:h-9 xl:w-9"
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default HeartRating;