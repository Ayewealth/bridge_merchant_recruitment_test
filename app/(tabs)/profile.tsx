import { StyleSheet, Text, View } from 'react-native';

import { Container } from '~/components/global/Container';

type Props = {};

const profile = (props: Props) => {
  return (
    <Container>
      <Text style={{ fontFamily: 'gilroyBold' }} className="text-2xl capitalize">
        profile
      </Text>
    </Container>
  );
};

export default profile;

const styles = StyleSheet.create({});
