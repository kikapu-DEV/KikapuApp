import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./transactionH.style";

function TransactionH() {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Last Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* transaction list */}
      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => (
          <View style={styles.ListContainer}>
            <View style={styles.ListSubContainer}>
              <View style={styles.restLogo}></View>
              <View>
                <Text style={styles.restName}>Kilimanjaro</Text>
                <Text style={styles.Time}>Today, 17:45 PM</Text>
              </View>
            </View>
            <View>
              <Text style={styles.amount}>Ksh. 1200</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default TransactionH;
