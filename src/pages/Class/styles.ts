import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    paddingHorizontal: 30,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  teacherName: {
    marginTop: 10,
    maxWidth: '68%',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    fontFamily: fonts.bold,
    color: colors.orange,
    marginLeft: 10,
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
  scrollContainer: {
    height: '62%',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.white,
    marginBottom: 8,
  },
  classDescription: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.white,
    backgroundColor: colors.gray,
    padding: 14,
  },
  footer: {
    marginTop: 8,
    width: '100%',
  },
  getInContactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.orange,
    height: 74,
    borderRadius: 2,
  },
  whatsAppIconContainer: {
    paddingHorizontal: 24,
    paddingVertical: 17,
    backgroundColor: '#FF8400',
  },
  buttonTextContainer: {
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.white,
    maxWidth: '80%',
  },
});

export default styles;
