import React from 'react';
import { Image, Text, View } from 'react-native';

import { images } from '~/constants/images';
import { cn } from '~/utils/cn';

type Props = {
  category: string;
  index: number;
};

const CategoryCard = ({ category, index }: Props) => {
  const matchedImage = images.find((img) => img.id === index);

  return (
    <View
      className={cn(
        'flex  w-[160px] flex-col items-center justify-center gap-3 rounded-2xl border-[1px] p-2',
        matchedImage!.id === 0
          ? ' border-[#53B175B2] bg-[#53B1751A]'
          : matchedImage!.id === 1
            ? 'border-[#F7A593] bg-[#F7A59340]'
            : matchedImage!.id === 2
              ? 'border-[#F8A44CB2] bg-[#F8A44C1A]'
              : 'border-[#D3B0E0] bg-[#D3B0E040]'
      )}>
      {matchedImage && (
        <Image source={matchedImage.img} className="h-20 w-32" resizeMode="contain" />
      )}
      <Text
        className="text-center text-lg font-bold capitalize"
        style={{ fontFamily: 'gilroyBold' }}>
        {category}
      </Text>
    </View>
  );
};

export default CategoryCard;
