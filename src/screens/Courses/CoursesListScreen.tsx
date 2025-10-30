//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list';

import { CoursesStackProps, CourseItem } from '../../types';
import { allCourses } from '../../data';
import images from '../../assets/images';
import { CommonStyles, localStyles } from '../../theme/Styles';
import { Colors } from '../../theme/Colors';
import HomeCourseCard from '../../components/HomeCourseCard';

type CoursesListScreenProps = CoursesStackProps<'CoursesList'>;
type CourseDuration = 'All' | '6 weeks' | '6 months';

const durationOptions: CourseDuration[] = ['All', '6 weeks', '6 months'];

const CoursesListScreen: React.FC<CoursesListScreenProps> = ({
  navigation,
  route,
}) => {
  const initialDuration = route.params?.courseType || 'All';
  const [selectedDuration, setSelectedDuration] = useState<string>(initialDuration);

  // Purpose: Filter courses dynamically
  const filteredCourses = allCourses.filter(
    (c) => selectedDuration === 'All' || c.duration === selectedDuration
  );

  const handleCoursePress = (course: CourseItem) => {
    navigation.navigate('CourseDetail', { course });
  };

  const handleGoToCart = () => {
    navigation.navigate('CourseSelection');
  };

  const renderCourseItem = ({ item }: { item: CourseItem }) => (
    <View style={{ flex: 1, margin: 5 }}>
      <HomeCourseCard course={item} onPress={() => handleCoursePress(item)} />
    </View>
  );

  const ListHeader = () => (
    <View>
      <Text
        style={[
          CommonStyles.title,
          { marginBottom: 10, color: Colors.primary },
        ]}>
        Explore All Our Accredited Courses
      </Text>
      <Text style={[CommonStyles.subtitle, { fontSize: 16, marginBottom: 20 }]}>
        Select any course for detailed content and enrollment options.
      </Text>
    </View>
  );

  const [selected, setSelected] = React.useState('');

  const durationData: {
    key: CourseDuration;
    value: string;
    disabled?: boolean;
  }[] = [
    { key: 'All', value: 'All'},
    { key: '6 weeks', value: '6 Weeks' },
    { key: '6 months', value: '6 Months' },
  ];

  const handleSetIsSelected = (value: any): void => {
    
    setSelectedDuration(value);
  };

  return (
    <ImageBackground
      source={images.background}
      resizeMode="cover"
      style={CommonStyles.imageBackgroundContainer}>
      <View style={CommonStyles.overlay}>
        <ListHeader />

        {/* Filter Section */}
        <View>
          <Text style={localStyles.filterLabel}>Filter by Duration :</Text>

          <SelectList
            setSelected={handleSetIsSelected}
            data={durationData}
            save="key"
            defaultOption={durationData[0]}
          />
        </View>

        <Text style={localStyles.sectionTitle}>
          {selectedDuration === 'All'
            ? 'All Available Courses'
            : `${selectedDuration} Courses`}
        </Text>

        {/* Courses List */}
        <FlatList
          data={filteredCourses}
          renderItem={renderCourseItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        {/* Bottom Button */}
        <TouchableOpacity style={CommonStyles.button} onPress={handleGoToCart}>
          <Text style={CommonStyles.buttonText}>View Cart & Checkout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CoursesListScreen;
