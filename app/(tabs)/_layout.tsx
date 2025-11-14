import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const COLORS = {
  background: "#020617",
  active: "#22d3ee",
  inactive: "#64748b",
  border: "#1f2937",
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.active,
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
        },
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="skills"
        options={{
          title: "Skills",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sparkles-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: "Projetos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: "Contato",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
