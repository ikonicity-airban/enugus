import { StyleSheet, View } from "react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { TabButton } from "../components/tab-button";

const Layout = () => {
  return (
    <>
      <Tabs>
        <TabSlot />
        <TabList style={styles.tabList}>
          <TabTrigger tabIndex={0} name="home" href="/home" asChild>
            <TabButton icon="home-outline">Home</TabButton>
          </TabTrigger>
          <TabTrigger name="blogs" href="/blogs" asChild>
            <TabButton icon="newspaper-outline">Blogs</TabButton>
          </TabTrigger>
          <TabTrigger name="services" href="/services" asChild>
            <TabButton icon="planet-outline">Services</TabButton>
          </TabTrigger>
          <TabTrigger name="properties" href="/properties" asChild>
            <TabButton icon="business-outline">Properties</TabButton>
          </TabTrigger>
          <TabTrigger name="agents" href="/agents" asChild>
            <TabButton icon="people-outline">Agents</TabButton>
          </TabTrigger>
        </TabList>
      </Tabs>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabList: {
    backgroundColor: "#eee",
    elevation: 10,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 9999,
    overflowX: "scroll",
  },
});
