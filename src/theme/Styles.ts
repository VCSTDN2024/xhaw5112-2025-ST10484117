//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated
//Purpose: the stylesheet for the all the pages 
import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Colors";

const { width } = Dimensions.get("window");

export const CommonStyles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.headings,
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.headings,
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.secondaryText,
    lineHeight: 24,
    marginBottom: 10,
  },

  input: {
    backgroundColor: Colors.background,
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginBottom: 15,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.accent, 
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: Colors.titleText,
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  addressSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 0, 
    color: Colors.secondaryText,
  },
  contactIcon: {
    alignSelf: 'center',
    marginBottom: 20,
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonIcon: {
    marginRight: 10,
  },
  
  helperText: {
    fontSize: 16,
    color: Colors.secondaryText,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },

  infoText: {
    fontSize: 16,
    color: Colors.secondaryText,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  faqButton: {
    backgroundColor: Colors.primary, 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  faqText: {
    color: Colors.background,
    fontWeight: "bold",
    fontSize: 16,
  },
  hoursTitle: {
    fontSize: 20, 
    fontWeight: '600',
    color: Colors.secondaryText,
    marginTop: 20,
    marginBottom: 5,
    
  },
  hoursText: {
    fontSize: 16,
    color: Colors.secondaryText, 
    marginVertical: 2,
  },
  socialSection: {
    marginTop: 30,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: Colors.aboutBackground,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: Colors.secondaryText,
    marginBottom: 10,
    fontWeight: '600',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  socialButton: {
    backgroundColor: Colors.primary, // Social buttons now PRIMARY
    borderRadius: 50,
    padding: 10,
    width: 44, 
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  }
});

export const rootStyles = StyleSheet.create({
  appBackground: {
    flex: 1,
  },
});

export const homeStyles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    paddingBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.headings,
  },
  viewMoreText: {
    color: Colors.secondaryText,
    fontSize: 16,
  },
  cardsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export const cardStyles = StyleSheet.create({
  card: {
    width: width / 2 - 25,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: Colors.background,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 5,
    height: 40,
  },
  cardPrice: {
    fontSize: 14,
    color: Colors.accent,
    fontWeight: "600",
  },
});

export const accordionStyles = StyleSheet.create({
  accordionContainer: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
  },
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.secondary,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.primary,
    flexShrink: 1,
    paddingRight: 10,
  },
  content: {
    padding: 15,
    backgroundColor: Colors.background,
  },
  contentText: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
});

export const detailStyles = StyleSheet.create({
  detailImage: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 8,
  },
  contentPoint: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  pointText: {
    marginLeft: 8,
    fontSize: 16,
    color: Colors.secondaryText,
    flex: 1,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondaryText,
    marginTop: 10,
    marginBottom: 15,
    textAlign: "center",
  },
});

export const cartStyles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.secondaryText,
    flex: 1,
  },
  cartItemPrice: {
    fontSize: 16,
    color: Colors.accent,
    fontWeight: "600",
    marginLeft: 10,
  },
  removeButton: {
    padding: 5,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.titleText,
    marginTop: 20,
    marginBottom: 15,
  },
subheadingTitle:{
fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondaryText,
    marginTop: 20,
    marginBottom: 15,
textDecorationLine: "underline",
},
  summaryCard: {
    backgroundColor: Colors.aboutBackground,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
borderColor:Colors.headings,
borderWidth:2,
  },
  costRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  costLabel: {
    fontSize: 16,
    color: Colors.text,
  },
  costValue: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "500",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.secondary,
  },
  totalLabel: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 20,
    color: Colors.accent,
    fontWeight: "bold",
  },
});

export const faqStyles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.aboutBackground,
    paddingBottom: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primary,
    marginLeft: 8,
  },
  cardText: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
});

export const dashboardStyles = StyleSheet.create({
  dashboardSection: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.aboutBackground,
    width: '100%',
  },
  
  progressBarContainer: {
    width: '100%',
    marginBottom: 10,
  },
  progressLabel: {
    fontSize: 16,
    color: Colors.secondaryText,
    marginBottom: 5,
    fontWeight: '500',
  },
  progressBarTrack: {
    height: 12,
    width: '100%',
    backgroundColor: Colors.aboutBackground,
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.secondary,
    borderRadius: 6,
  },
  calendarContainer: {
        backgroundColor: Colors.background,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
  courseCard: {
    backgroundColor: Colors.background,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.aboutBackground,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
  },
  courseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  courseText: {
    fontSize: 14,
    color: Colors.text,
  },
  emptyState: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.aboutBackground,
    borderRadius: 8,
  },
  enrollButton: {
    marginTop: 15,
    backgroundColor: Colors.accent,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  enrollButtonText: {
    color: Colors.background,
    fontWeight: 'bold',
  },
  dashboardText:{
    color:Colors.text
  },
});
export const QuoteSummarystyles = StyleSheet.create({
contactinfoText:{
  color: Colors.primary,
  fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
},
});

export const localStyles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.text,
    marginVertical: 12,
    textAlign: "center",
  }, 
  courseButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    width: "100%",
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: Colors.primary,
  },
   filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    marginHorizontal: 15,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
  },
  pickerWrapper: {
    width: '45%',
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  pickerStyle: {
    height: 40,
    width: '100%',
    color: Colors.primary,
  },
  pickerItemStyle: {
    fontSize: 10,
    color:Colors.text,
  },
  pickerStyleAndroid: {
  color:Colors.text,
  height: 45,
  width: "100%",
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  justifyContent: "center",
  paddingHorizontal: 10,
  backgroundColor: "#fff",
},
});

export const authStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.primary,
    lineHeight: 24,
    marginBottom: 10,
  },

  input: {
    backgroundColor: Colors.background,
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginBottom: 15,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.accent, 
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: Colors.titleText,
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
    
 

});
