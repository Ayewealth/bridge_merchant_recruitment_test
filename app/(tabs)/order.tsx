import React from 'react';
import { Text } from 'react-native';

import { Container } from '~/components/global/Container';

type Props = {};

const order = (props: Props) => {
  return (
    <Container>
      <Text style={{ fontFamily: 'gilroyBold' }} className="text-2xl capitalize">
        order
      </Text>
    </Container>
  );
};

export default order;
