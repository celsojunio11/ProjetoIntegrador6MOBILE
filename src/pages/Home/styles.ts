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
  },
  cardsContainer: {
    marginTop: 20,
    height: '74%',
  },
  card: {
    backgroundColor: colors.gray,
    height: 110,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  classTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.orange,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  infoContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    fontFamily: fonts.regular,
    color: colors.orange,
    marginLeft: 4,
  },
  modalityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
    width: 80,
    height: 26,
  },
  modality: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.black,
  },
  footer: {
    position: 'relative',
    bottom: 8,
    width: '100%',
    elevation: 2,
  },
  searchClassButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
    height: 52,
    borderRadius: 2,
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.white,
  },
});

export default styles;
