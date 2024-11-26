import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectSearchHistory, clearSearchHistory } from '~/redux/slices/search';

const SearchHistory = () => {
  const dispatch = useDispatch();
  const histories = useSelector(selectSearchHistory);

  const clearHistories = () => {
    dispatch(clearSearchHistory());
  };

  return (
    <View className="mt-4 flex flex-col">
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'gilroyBold', flex: 1 }} className="text-2xl">
          Search History
        </Text>

        <TouchableOpacity onPress={clearHistories}>
          <Text style={{ fontFamily: 'poppinsRegular', color: '#5F9117' }}>Clear</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        key={3}
        numColumns={3}
        data={histories}
        keyExtractor={(index) => index.toString()}
        contentContainerClassName="gap-4"
        columnWrapperClassName="gap-4"
        renderItem={({ item }) => (
          <Text style={{ fontFamily: 'poppinsMedium' }} className="mt-2 text-sm text-[#8688897A]">
            {item}
          </Text>
        )}
        ListEmptyComponent={() => (
          <Text style={{ fontFamily: 'poppinsRegular', marginTop: 20, color: '#7C7C7C' }}>
            No search history found.
          </Text>
        )}
      />
    </View>
  );
};

export default SearchHistory;
