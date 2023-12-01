import { View } from "react-native";
import styles from "./header.style";
import RightHeader from "../RightHeader/RightHeader";
import LeftHeader from "./leftHeader/LeftHeader";
import { images } from "../../../constants";

function Header({ user }) {
	return (
		<View style={styles.container}>
			{user ? (
				<>
					<LeftHeader
						userName={`${user.profile.firstName} ${user.profile.lastName}`}
					/>
					<RightHeader
						iconUrl={user.avatar ? user.avatar : images.avatar1}
						dimensions='100%'
					/>
				</>
			) : (
				<>
					<LeftHeader userName='Guest' />
					<RightHeader iconUrl={images.avatar1} dimensions='100%' />
				</>
			)}
		</View>
	);
}

export default Header;
