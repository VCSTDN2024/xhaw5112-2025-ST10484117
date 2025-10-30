//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated
import React, { useMemo, useState } from "react";
import { ScrollView, View, Text, ImageBackground, FlatList, TouchableOpacity, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Import the Calendar component and its types
import { Calendar, DateData, MarkingProps, LocaleConfig } from 'react-native-calendars';

// Local imports
import images from "../assets/images";
import { CommonStyles } from "../theme/Styles";
import { dashboardStyles } from "../theme/Styles";
import { Colors } from "../theme/Colors";

import { useUser } from "../context/UserContext"; 
import { useCart } from "../context/CartContext"; 
import { CourseItem } from "../types";


const handlebrowseCourses = () => {
    // Correct navigation function
    navigation.navigate("CoursesRoot" as any); 
};
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
    const percentage = `${progress}%`;
    return (
        <View style={dashboardStyles.progressBarContainer}>
            <Text style={dashboardStyles.progressLabel}>Progress: {percentage}</Text>
            <View style={dashboardStyles.progressBarTrack}>
                <View style={[
                    dashboardStyles.progressBarFill, 
                    { width: percentage } as ViewStyle 
                ]}  />
            </View>
        </View>
    );
};


const EnrolledCoursesList: React.FC = () => {
    const { cart } = useCart();
    
    if (cart.length === 0) {
        return (
            <View style={dashboardStyles.emptyState}>
                <Ionicons name="school-outline" size={30} color={Colors.placeholder} />
                <Text style={[dashboardStyles.dashboardText, { textAlign: 'center', marginTop: 10 }]}>
                    You are not currently enrolled in any courses.
                </Text>
                <TouchableOpacity style={dashboardStyles.enrollButton}>
                    <Text style={dashboardStyles.enrollButtonText} onPress={handlebrowseCourses}>Browse Courses</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const renderItem = ({ item }: { item: CourseItem }) => (
        <View style={dashboardStyles.courseCard}>
            <Text style={dashboardStyles.courseTitle}>{item.title}</Text>
            <View style={dashboardStyles.courseDetails}>
                <Text style={dashboardStyles.courseText}>Duration: {item.duration}</Text>
                <Text style={dashboardStyles.courseText}>Status: In Progress</Text>
                <Ionicons name="checkmark-circle" size={24} color={Colors.secondary} style={{ marginLeft: 'auto' }} />
            </View>
        </View>
    );

    return (
        <View>
            <Text style={[CommonStyles.subtitle, { marginBottom: 15 }]}>Your Enrolled Courses ({cart.length})</Text>
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                scrollEnabled={false} 
            />
        </View>
    );
};


const mockAssignments = [
    { date: '2025-10-28', title: 'Module 3 Quiz', color: Colors.primary },
    { date: '2025-11-05', title: 'Project Proposal Due', color: Colors.secondary },
    { date: '2025-10-31', title: 'Course Checkpoint', color: Colors.danger },
];

const CourseCalendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);

    // Use useMemo to generate the calendar markings once
    const markedDates: { [key: string]: MarkingProps } = useMemo(() => {
        const markings: { [key: string]: MarkingProps } = {};
        
        // 1. Mark assignments/deadlines
        mockAssignments.forEach(item => {
            markings[item.date] = {
                marked: true,
                dotColor: item.color,
                // Combine properties if the date is also selected
                ...(markings[item.date] || {})
            };
        });

        // 2. Mark the selected date
        if (selectedDate) {
             markings[selectedDate] = {
                ...markings[selectedDate],
                selected: true,
                selectedColor: Colors.info, // Use a distinguishing color for selection
                selectedTextColor: Colors.white,
            };
        }
        
        return markings;
    }, [selectedDate]);

    
    const onDayPress = (day: DateData) => {
        setSelectedDate(day.dateString);
        
        const assignment = mockAssignments.find(a => a.date === day.dateString);
        if (assignment) {
            alert(`Assignment: ${assignment.title} on ${day.dateString}`);
        }
    };

    return (
        <View style={dashboardStyles.calendarContainer}>
            <Text style={[CommonStyles.subtitle, { marginBottom: 15 }]}>🗓️ Calendar & Events</Text>
            <Calendar
                style={{ borderRadius: 8 }}
                theme={{
                    arrowColor: Colors.primary,
                    todayTextColor: Colors.danger, 
                    selectedDayBackgroundColor: Colors.info,
                    selectedDayTextColor: Colors.white,
                }}
                current={new Date().toISOString().split('T')[0]} // Start on current month
                onDayPress={onDayPress}
                markedDates={markedDates}
                
            />
            {selectedDate && (
                <Text style={{ marginTop: 10, textAlign: 'center', color: Colors.text }}>
                    Selected Date: {selectedDate}
                </Text>
            )}
        </View>
    );
};

const DashboardScreen: React.FC = () => {
    const { user } = useUser();
    const mockProgress = 75; 

    return (
        <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
            <View style={CommonStyles.overlay}> 
            <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
                <View style={CommonStyles.container}>
                    <Text style={CommonStyles.title}>My Student Dashboard</Text>
                    <Text style={CommonStyles.text}>
                        Welcome back, {user?.name || "Student"}! Here you can track your progress.
                    </Text>

                    {/* PROGRESS */}
                    <View style={dashboardStyles.dashboardSection}>
                        <ProgressBar progress={mockProgress} />
                    </View>
                    
                    {/* CALENDAR  */}
                    <View style={dashboardStyles.dashboardSection}>
                        <CourseCalendar />
                    </View>

                    {/* ENROLLED COURSES */}
                    <View style={dashboardStyles.dashboardSection}>
                        <EnrolledCoursesList />
                    </View>
                    
                    <Text style={CommonStyles.text}>
                        Here you will be able to track your course progress, view your assignments, and access your certificates upon completion.
                    </Text>
                </View>
            </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default DashboardScreen;