import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 80,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 50,
    color: colors.white,
  },
  content: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  classesTitle: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.white,
  },
  p: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.orange,
    marginTop: 15,
  },
  input: {
    fontFamily: fonts.regular,
    backgroundColor: colors.gray,
    marginVertical: 15,
    height: 50,
    padding: 10,
    color: '#fff'
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  searchClassButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
    height: 52,
    borderRadius: 2,
    marginTop: 40,
    width: '100%',
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.white,
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
    marginTop: 25,
  }
});

export default styles;
