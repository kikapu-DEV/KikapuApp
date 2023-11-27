import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./AddProduct.style.";
import { useNavigation } from "@react-navigation/native";
import { Button3, Counter } from "../../../components";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { COLORS } from "../../../constants";

const data = [
  { label: "Fruits", value: "Fruits" },
  { label: "Vegetables", value: "Vegetables" },
  { label: "Dairy", value: "Dairy" },
  { label: "Meat", value: "Meat" },
];
function AddProduct() {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.txt1}>Add new product</Text>

      {/* body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.txt2}>Title</Text>
        <TextInput style={styles.textInput} />

        <Text style={styles.txt2}>Description</Text>
        <TextInput style={styles.textInput2} />

        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.txt2}>Price</Text>
            <TextInput style={styles.textInput3} />
          </View>

          <View style={styles.left}>
            <Text style={styles.txt2}>Quantity</Text>
            <Counter />
          </View>
        </View>

        {/* dropdown */}
        <Dropdown
          style={styles.dropdown}
          placeholder="Product category"
          data={data}
          value={value}
          labelField="label"
          valueField="value"
          onChange={(item) => setValue(item.value)}
        />

        {/* upload image */}
        <View style={styles.row2}>
          <TouchableOpacity onPress={()=>{}}>
            <View style={styles.left2}>
              <Ionicons name="image-outline" size={50} color={COLORS.grey} />
              <Text>Upload image</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}}>
            <View style={styles.left2}>
              <MaterialCommunityIcons
                name="camera-outline"
                size={50}
                color={COLORS.grey}
              />
              <Text>Take image</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* button */}
      <Button3
        title="Checkout"
        color={COLORS.secondary}
        screenName="studentPayment"
      />
    </View>
  );
}

export default AddProduct;
