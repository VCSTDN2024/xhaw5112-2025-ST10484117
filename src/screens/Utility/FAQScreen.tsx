//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated
import React, { useState } from "react";
import { ScrollView, View, Text, ImageBackground} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import{faqData} from "../../data/index"
import images from "../../assets/images";
import { CommonStyles, faqStyles } from "../../theme/Styles";
import { Colors } from "../../theme/Colors";
import AccordionItem from "../../components/ui/AccordionItem";

const FAQScreen: React.FC = () => {
  const [language, setLanguage] = useState("en");

  const currentFaq = faqData[language];
  

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <View style={CommonStyles.overlay}> 
        <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
          <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>
              {language === "en" ? "Frequently Asked Questions" : "Imibuzo Evame Ukubuzwa"}
            </Text>

            <Picker
              selectedValue={language}
              style={{ color: Colors.primary, marginBottom: 20 }}
              onValueChange={(itemValue) => setLanguage(itemValue)}
            >
              <Picker.Item label="English" value="en" />
              <Picker.Item label="isiZulu" value="zu" />
              <Picker.Item label="isiXhosa" value="xh" />
                <Picker.Item label="Sesotho" value="st" />
                <Picker.Item label="Setswana" value="tn" />
            </Picker>

            <Text style={[CommonStyles.text, { textAlign: "center", marginBottom: 20 }]}>
              {language === "en"
                ? "Find quick answers to the most common questions about our courses, payment, and accreditation."
                : "Thola izimpendulo ezisheshayo zemibuzo ejwayelekile mayelana nezifundo, izinkokhelo, kanye nezitifiketi."}
            </Text>

            {currentFaq.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} />
            ))}

            <View style={{ marginTop: 20, padding: 15, backgroundColor: Colors.aboutBackground, borderRadius: 8 }}>
              <View style={faqStyles.cardHeader}>
                <Ionicons name="help-circle-outline" size={24} color={Colors.primary} />
                <Text style={faqStyles.cardTitle}>
                  {language === "en" ? "Need More Help?" : "Udinga Usizo Oluthe Xaxa?"}
                </Text>
              </View>
              <Text style={faqStyles.cardText}>
                {language === "en"
                  ? "If you can't find the answer you're looking for, please contact our support team via the Contact Us page."
                  : "Uma ungayitholi impendulo oyifunayo, sicela uxhumane nethimba lethu lokusekela ngekhasi elithi 'Contact Us'."}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default FAQScreen;
