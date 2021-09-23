import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

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
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 40,
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
    marginTop: 40,
  },
  cardsContainer: {
    marginTop: 20,
    height: '74%',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  searchClassButton: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.gray,
    height: 130,
    width: 150,
    padding: 10,
    borderRadius: 2,
  },
  buttonText: {
    fontFamily: fonts.regular,
    fontSize: 18,
    color: colors.orange,
    marginBottom: -7
  },
  buttonText2: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.orange,
  },
  whiteText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    width: 170,
    alignSelf: 'flex-end',
    textAlign: 'right',
    color: colors.white,
  },
  landing: {
    height: 300,
    width: 300,
    marginLeft: -30,
  },
  menuButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly'
  },
  iconButton: {
    marginBottom: 20
  }
});

export default styles;
