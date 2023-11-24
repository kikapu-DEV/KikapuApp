import { Alert, FlatList, Pressable, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import styles from "./CreditCardDetail.style";
import { CreditCard } from "../../../components";
import {useNavigation} from '@react-navigation/native'

function CreditCardDetail() {
    const navigation = useNavigation()
  const data = [
    { title: "Name", value: "kirui chepkorir" },
    { title: "Bank", value: "Standard chartered" },
    { title: "Account", value: ".... .... .... 4741" },
    { title: "Status", value: "Active" },
    { title: "Valid", value: "2020 - 2025" },
  ];
  const handleDelete = () =>{
    Alert.alert('Delete this card?', '', [
        {
            text: 'Yes',
            onPress: ()=>navigation.navigate('Home')
        },
        {
            text: 'No',
            onPress: ()=>{}
        }
    ])
  }
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={35}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
      </View>

      {/* body */}
      <View>
        <Text style={styles.txt1}>Detail card</Text>
        <CreditCard />

        <View style={styles.cardDetailList}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.txt2}>{item.title}</Text>
                <Text style={styles.txt3}>{item.value}</Text>
              </View>
            )}
          />
        </View>

        {/* DELETE CARD */}
        <Pressable onPress={handleDelete}>
            <Text style={styles.txt4}>Delete card</Text>
        </Pressable>
        
      </View>
    </View>
  );
}

export default CreditCardDetail;
