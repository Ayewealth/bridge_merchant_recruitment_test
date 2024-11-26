import { StyleSheet, Text } from 'react-native';

import { Container } from '~/components/global/Container';

type Props = object;

const trend = (props: Props) => {
  return (
    <Container>
      <Text style={{ fontFamily: 'gilroyBold' }} className="text-2xl capitalize">
        trend
      </Text>
    </Container>
  );
};

export default trend;

const styles = StyleSheet.create({});
