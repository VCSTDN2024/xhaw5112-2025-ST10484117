// ContactUsScreen.tsx
//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated
import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Linking, ImageBackground, Alert } from "react-native";
import { Ionicons, FontAwesome, FontAwesome5,AntDesign } from "@expo/vector-icons";

// Local imports
import images from "../../assets/images";
import { CommonStyles } from "../../theme/Styles";
import { Colors } from "../../theme/Colors";
// Import addresses from your  data file
import { addresses } from "../../data"; 




const ContactUsScreen: React.FC = () => {
  const emailAddress = "info@empoweringthenation.com";
  const phoneNumber = "08001234567";
  
 
  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${emailAddress}`);
  };

  const handleMap = (address: string) => {
    
    const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    Linking.openURL(mapUrl).catch(err => {
      Alert.alert("Error", "Could not open map application.");
      console.error('An error occurred opening the map URL:', err);
    });
  };

  const handleFAQ = () => {
    Alert.alert("FAQ Navigation", "Navigate to the FAQ screen.");
   
  }

  const handleSocial = (platform: string) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = "https://www.facebook.com/profile.php?id=61580403430808";
        break;
      case "tiktok":
        url = "https://www.tiktok.com/@empowering.the.na5?_t=ZM-8zd8EptIa2i&_r=1";
        break;
      case "instagram":
        url = "https://www.instagram.com/empow.eringthenation?igsh=ZDRmMzRrdDMwNnV6&utm_source=qr";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/empowering-the-nation-1521bb384/";
        break;
      default:
        return;
    }
    Linking.openURL(url).catch(err => console.error("Failed to open social link:", err));
  };
  


  
  const AddressBlock: React.FC<{ address: string; label: string }> = ({ address, label }) => (
    <View style={CommonStyles.addressSection}>
      <TouchableOpacity
        
        style={[CommonStyles.button, { backgroundColor: Colors.primary }]}
        onPress={() => handleMap(address)}
      >
        
        <View style={CommonStyles.buttonContent}>
          <Ionicons name="location-outline" size={24} color={Colors.background} style={CommonStyles.buttonIcon} />
          <Text style={CommonStyles.buttonText}>
            View {label} on Map
          </Text>
        </View>
      </TouchableOpacity>
      
      <Text style={[CommonStyles.helperText, { marginTop: 5}]}>
        {label} Address: {address}
      </Text>
    </View>
  );
 


  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <View style={CommonStyles.overlay}> 
        <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
          <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>Get In Touch</Text>
            
            
            <Ionicons name="person-circle-outline" size={80} color={Colors.primary} style={CommonStyles.contactIcon} />
            
            <Text style={[CommonStyles.subtitle, { marginBottom: 20, color:Colors.secondaryText }]}>
              We're here to answer your questions. Reach out to us through any of the options below.
            </Text>

            {/* FAQ Section */}
            <Text style={CommonStyles.infoText}>Feeling a bit lost? Check out our FAQ’s</Text>
            
            <TouchableOpacity style={CommonStyles.faqButton} onPress={handleFAQ} accessibilityRole="button" accessibilityLabel="Open FAQs" >
            <AntDesign 
    name="info-circle" 
    size={24} 
    color={Colors.background} 
    style={CommonStyles.buttonIcon}/>
           
            
              <Text style={CommonStyles.faqText}>FAQ’s</Text>
              
            </TouchableOpacity>

            {/* Phone Section */}
            <TouchableOpacity
              style={[CommonStyles.button, { backgroundColor: Colors.primary }]} // Main action button
              onPress={handleCall}
            >
              <View style={CommonStyles.buttonContent}>
                <Ionicons name="call-outline" size={24} color={Colors.background} style={CommonStyles.buttonIcon} />
                <Text style={CommonStyles.buttonText}>Call Us</Text>
              </View>
            </TouchableOpacity>
            <Text style={CommonStyles.helperText}>
              Freephone: {phoneNumber.replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3")}
            </Text>

            {/* Email Section */}
            <TouchableOpacity
              style={[CommonStyles.button, { backgroundColor: Colors.primary }]}
              onPress={handleEmail}
            >
              <View style={CommonStyles.buttonContent}>
                <Ionicons name="mail-outline" size={24} color={Colors.background} style={CommonStyles.buttonIcon} />
                <Text style={CommonStyles.buttonText}>Email Us</Text>
              </View>
            </TouchableOpacity>
            <Text style={CommonStyles.helperText}>Email: {emailAddress}</Text>
            
            <Text style={[CommonStyles.subtitle, { marginTop: 10, marginBottom: 15 }]}>
              Our Locations
            </Text>
            
            <AddressBlock 
              address={addresses[0]} 
              label="johannesburg Central Office" 
            />
            <AddressBlock 
              address={addresses[1]} 
              label="johannesburg Main Training Center" 
            />
            <AddressBlock 
              address={addresses[2]} 
              label="johannesburg Library Garden"
              
            />

            <Text style={CommonStyles.hoursTitle}>Operating Hours</Text>
            <Text style={CommonStyles.hoursText}>Mon – Fri: 08:00 – 18:00</Text>
            <Text style={[CommonStyles.hoursText, { marginBottom: 20 }]}>Sat – Sun: 09:00 – 14:00</Text>
            
            {/* Social Section */}
            <View style={CommonStyles.socialSection}>
              <Text style={CommonStyles.footerText}>Connect with us</Text>
              <View style={CommonStyles.socialRow}>
                 {/* No changes to social buttons, they are well-styled */}
                <TouchableOpacity
                 onPress={() => handleSocial("facebook")}
                  accessibilityLabel="Facebook" 
                  accessibilityRole="link" style={CommonStyles.socialButton}>
                  <FontAwesome name="facebook" size={22} color="#fff" />
                </TouchableOpacity>
      
                <TouchableOpacity 
                onPress={() => handleSocial("tiktok")}
                 accessibilityLabel="TikTok"
                  accessibilityRole="link" style={CommonStyles.socialButton}>
                  <FontAwesome5 name="tiktok" size={22} color="#fff" />
                </TouchableOpacity>
      
                <TouchableOpacity onPress={() => handleSocial("instagram")} accessibilityLabel="Instagram" accessibilityRole="link" style={CommonStyles.socialButton}>
                  <FontAwesome name="instagram" size={22} color="#fff" />
                </TouchableOpacity>
      
                <TouchableOpacity onPress={() => handleSocial("linkedin")} accessibilityLabel="LinkedIn" accessibilityRole="link" style={CommonStyles.socialButton}>
                  <FontAwesome name="linkedin" size={22} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ContactUsScreen;