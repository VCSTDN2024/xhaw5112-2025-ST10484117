//Authors: Yenziwe , Azania, Luke and Asanda
// Student Numbers : ST10480778,ST10467891,ST10488658,ST10484117
// Project Name : Empowering the nation mobile application.
// Module Code: XHAW5112
// Module Name: Work Intergrated
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import { accordionStyles} from "../../theme/Styles";
import { Colors } from "../../theme/Colors";
interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => setExpanded(!expanded);

  return (
    <View style={accordionStyles.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion} style={accordionStyles.header}>
        <Text style={accordionStyles.headerText}>{title}</Text>
        <Ionicons name={expanded ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} size={20} color={Colors.primary} />
      </TouchableOpacity>
      {expanded && (
        <View style={accordionStyles.content}>
          <Text style={accordionStyles.contentText}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default AccordionItem;