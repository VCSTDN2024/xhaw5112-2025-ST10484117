//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../theme/Colors";

interface CustomDrawerContentProps {
  navigation: any;
}
{/*React Navigation Drawer
🔗 https://reactnavigation.org/docs/drawer-navigator

Explains how to create a drawer, add screens, and use screenOptions.

Custom Drawer Content
🔗 https://reactnavigation.org/docs/drawer-navigator/#providing-a-custom-drawercontent

Official guide to replacing the default drawer layout with your own (used for the dropdown menu).

Nested Navigation (Stacks inside Drawers)
🔗 https://reactnavigation.org/docs/nesting-navigators

Shows how to embed a Stack.Navigator (like your CoursesStack) inside a Drawer.Navigator.

Passing Params to Nested Navigators
🔗 https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator */}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ navigation }) => {
  const [coursesExpanded, setCoursesExpanded] = useState(false);

  return (
    <DrawerContentScrollView>
      {/* Normal Drawer Items */}
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate("Home")}
        labelStyle={{ color: Colors.primary,
        fontWeight: "bold", }}
      />
      <DrawerItem
        label=" Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
        labelStyle={{ color: Colors.primary,
        fontWeight: "bold" }}
      />
      <DrawerItem
        label="Profile"
        onPress={() => navigation.navigate("Profile")}
        labelStyle={{ color: Colors.primary,
        fontWeight: "bold" }}
      />
      

      {/* 🔽 Expandable Dropdown for Courses */}
      <TouchableOpacity onPress={() => setCoursesExpanded(!coursesExpanded)}>
        <Text
          style={{
            color: Colors.primary,
            fontWeight: "bold",
            fontSize: 16,
            marginVertical: 10,
            marginLeft: 15,
          }}
        >
          {coursesExpanded ? "▼ Courses" : "⁘ Courses"}
        </Text>
      </TouchableOpacity>

      {coursesExpanded && (
        <View style={{ marginLeft: 25 }}>
          <DrawerItem
            label="⁘ All Courses"
            onPress={() => navigation.navigate("CoursesRoot", { screen: "CoursesList" })}
          />
          <DrawerItem
            label="⁘ Cart"
            onPress={() => navigation.navigate("CoursesRoot", { screen: "CourseSelection" })}
          />
          
        </View>
      )}

      {/* Other Static Drawer Items */}
      <DrawerItem
        label="Get Quote"
        onPress={() => navigation.navigate("Get Quote")}
        labelStyle={{ color: Colors.primary,
        fontWeight: "bold" }}
      />
      <DrawerItem
        label="About Us"
        onPress={() => navigation.navigate("About Us")}
        labelStyle={{ color: Colors.primary,
        fontWeight: "bold" }}
      />
      <DrawerItem
        label="Contact Us"
        onPress={() => navigation.navigate("Contact Us")}
        labelStyle={{ color: Colors.primary,
        fontWeight: "bold" }}
      />
      <DrawerItem
        label="FAQ"
        onPress={() => navigation.navigate("FAQ")}
        labelStyle={{ color: Colors.primary,
        fontWeight: "bold" }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
