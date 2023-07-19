import React from "react";
import {Tabs, Link} from "expo-router";
import { View } from "react-native";

const MenuLink = props => <Link {...props} style={{ padding: 10 }} />

const Sidebar = () => (
  <View style={{ width: 250 }}>
    <MenuLink href='/'>Home</MenuLink>
    <MenuLink href='/apps'>Apps</MenuLink>
    <MenuLink href='/create_deployment'>Create deployment</MenuLink>
    <MenuLink href='/deployments'>Deployments</MenuLink>
    <MenuLink href='/instances'>Instances</MenuLink>
  </View>
)

export default function Layout() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Sidebar />
      <Tabs screenOptions={{ headerShown: false }} />
    </View>
  );
}
