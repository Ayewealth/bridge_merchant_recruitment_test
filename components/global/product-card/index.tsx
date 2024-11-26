import { AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { truncateString } from '../../../utils/truncate';

import { ratingStar } from '~/utils/rating-stars';
import { ProductType } from '~/utils/types';

type Props = {
  data: ProductType;
};

const ProductCard = ({ data }: Props) => {
  return (
    <View className="relative flex w-[153] flex-col items-center justify-center gap-4 rounded-2xl border-[1px] border-[#E2E2E2] px-2 py-4">
      <Image source={{ uri: data.image }} className="h-32 w-28" resizeMode="contain" />
      <View className="mb-4">
        <Text style={{ fontFamily: 'poppinsMedium', fontSize: 15 }}>
          {truncateString(data.title, 13)}
        </Text>
        <Text
          style={{ fontFamily: 'poppinsRegular', fontSize: 12, marginTop: -6 }}
          className="text-[##7C7C7C]">
          {truncateString(data.description, 20)}
        </Text>
        <Text
          style={{ fontFamily: 'poppinsRegular', alignSelf: 'flex-start' }}
          className="text-[#FD903E]">
          ${data.price}
        </Text>
        <View className="mt-1 flex-row">
          {ratingStar(data.rating.rate).map((star, index) => (
            <AntDesign
              key={index}
              name={star}
              size={12}
              color={star === 'star' ? '#FD903E' : '#CCCCCC'}
              style={{ marginHorizontal: 2 }}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity className="absolute bottom-1 right-2  rounded-xl bg-[#087319] p-[0.6rem]">
        <Entypo name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
