import { KeyboardAvoidingView, Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string;
};

export const Container = ({ children, style, className }: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]} className={className}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});
