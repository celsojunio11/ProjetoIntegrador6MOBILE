import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 8,
    backgroundColor: colors.gray,
    width: 148,
    marginRight: 20,
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.orange,
    marginLeft: 8,
    maxWidth: '78%',
  },
});

export default styles;
