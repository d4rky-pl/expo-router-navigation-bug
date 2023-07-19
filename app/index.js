import {View, Text} from "react-native";

const Home = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <View>
        <Text style={{ fontSize: 16, padding: 10 }}>I will now trigger this error in two different ways:</Text>
        <Text style={{ fontSize: 16, padding: 10}}>- First I will click on every tab button at the bottom to mount the tab in the background. This will make the sidebar links completely broken.</Text>
        <Text style={{ fontSize: 16, padding: 10}}>- Next I will refresh the page and click on the sidebar links from top to bottom. This will also break them after every tab is mounted in the background.</Text>
      </View>
    </View>
  );
};

export default Home;
