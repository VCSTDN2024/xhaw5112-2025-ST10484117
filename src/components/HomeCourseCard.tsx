//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated
import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

// Local imports
import { CourseItem } from "../types";
import { cardStyles } from "../theme/Styles";
import {allCourses} from "../data/index";

interface HomeCourseCardProps {
  course: CourseItem;
  onPress: (course: CourseItem) => void;
}

const HomeCourseCard: React.FC<HomeCourseCardProps> = ({ course, onPress }) => {
  return (
    <TouchableOpacity style={cardStyles.card} onPress={() => onPress(course)}>
      <Image source={course.image} style={cardStyles.cardImage} />
      <View style={cardStyles.cardContent}>
        <Text style={cardStyles.cardTitle}>{course.title}</Text>
        <Text style={cardStyles.cardPrice}>R{course.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCourseCard;