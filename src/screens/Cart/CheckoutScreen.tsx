//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// --- Required Types (Pulled from original app.tsx) ---
export type CourseItem = {
  id: string;
  title: string;
  price: number;
  duration: "6 months" | "6 weeks";
  purpose?: string;
  content?: string[];
  image?: any;
};

export type CoursesStackParamList = {
  CoursesList: undefined;
  CourseDetail: { course: CourseItem };
  CourseSelection: { fromDetail?: boolean };
  QuoteGeneration: undefined;
  QuoteSummary: { name: string; email: string; phone: string; subtotal: number; discount: number; vat: number; total: number; selectedCourses: CourseItem[] };
  PaymentSummary: { name: string; email: string; phone: string; subtotal: number; discount: number; vat: number; total: number; selectedCourses: CourseItem[] };
  Checkout: undefined;
};

export type CheckoutProps = NativeStackScreenProps<CoursesStackParamList, "Checkout">;


const Colors = {
  primary: "#006600", // Green
  background: "#FFFFFF", // White
};



const CheckoutScreen: React.FC<CheckoutProps> = () => (
  <View style={localStyles.center}>
    <View style={localStyles.textContainer}>
      <Ionicons name="checkmark-circle-outline" size={80} color={Colors.background} />
      <Text style={{ color: Colors.background, fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
        Order Confirmed!
      </Text>
      <Text style={{ color: Colors.background, fontSize: 18, marginTop: 10 }}>
        Final Checkout Step (Redirecting to bank/Payment Gateway...)
      </Text>
      <Text style={{ color: Colors.background, fontSize: 16, marginTop: 5 }}>
        A summary will be sent to your email.
      </Text>
    </View>
  </View>
);
const localStyles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  textContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.2)', 
    alignItems: 'center',
  }
});
export default CheckoutScreen;