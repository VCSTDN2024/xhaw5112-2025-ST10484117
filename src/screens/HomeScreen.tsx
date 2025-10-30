//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated
import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, ImageBackground, Alert } from "react-native";

import { DrawerNavigationProps, CourseItem } from "../types";
import { homeScreenCourses } from "../data";
import images from "../assets/images";
import { homeStyles, CommonStyles } from "../theme/Styles";
import HomeCourseCard from "../components/HomeCourseCard";


const HomeScreen: React.FC<{ navigation: DrawerNavigationProps }> = ({ navigation }) => {
  const handleGoToAuth = () => {
    navigation.navigate("Profile");
  };

  const handleCoursePress = (course: CourseItem) => {
    // Purpose: Navigate to the CourseDetail screen within the CoursesStack
    // Purpose: The "as any" cast is a workaround for deep navigation typing in Drawer/Stack nested structure
    navigation.navigate("CoursesRoot" as any, {
      screen: "CourseDetail",
      params: { course },
    });
  };

  const handleViewMore = () => {
    //Purpose: Navigate to the Course Screen within the courseStack
    navigation.navigate("CoursesRoot" as any);
  };

  const handleContactPress = () => {
    //Purpose: give a pop up notification to show that contact details of the company
    Alert.alert("Contact Us", "Call us on 0800 123 4567 or email us at info@empoweringthenation.com");
  };
//Purpose: Background image of the screen
//Purpose: overlay over the background image
  return (
    
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
    
      <View style={CommonStyles.overlay}> 
      
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Image source={images.logo} style={CommonStyles.logo} />
          <Text style={CommonStyles.title}>Welcome To Empowering The Nation</Text>

          <Text style={CommonStyles.text}>
            We specialize in accredited training programs designed to empower individuals with essential skills for
            employment and personal growth. Our courses are structured to be flexible and accessible.
          </Text>

          <TouchableOpacity style={CommonStyles.button} onPress={handleGoToAuth}>
            <Text style={CommonStyles.buttonText}>Sign Up/Sign In</Text>
          </TouchableOpacity>

          {/* 6 Week Courses Section */}
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>6 Week Courses </Text>
            <TouchableOpacity onPress={handleViewMore}>
              <Text style={homeStyles.viewMoreText}>View All →</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyles.cardsRow}>
            {homeScreenCourses["6weeks"].map((course) => (
              <HomeCourseCard key={course.id} course={course} onPress={handleCoursePress} />
            ))}
          </View>

          {/* 6 Month Courses Section */}
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>6 Month Courses </Text>
            <TouchableOpacity onPress={handleViewMore}>
              <Text style={homeStyles.viewMoreText}>View All →</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyles.cardsRow}>
            {homeScreenCourses["6months"].map((course) => (
              <HomeCourseCard key={course.id} course={course} onPress={handleCoursePress} />
            ))}
          </View>

          <TouchableOpacity style={CommonStyles.button} onPress={handleContactPress}>
            <Text style={CommonStyles.buttonText}>Contact Us Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;