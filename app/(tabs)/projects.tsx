import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
    Animated,
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const COLORS = {
  background: "#030712",
  card: "#020617",
  primary: "#7c3aed",
  secondary: "#22d3ee",
  text: "#e5e7eb",
  muted: "#9ca3af",
  border: "#1f2937",
};

const projects = [
  {
    title: "Lancha e Jet",
    description:
      "Site para aluguel e serviços náuticos, com foco em experiência do usuário.",
    techs: "WordPress · Otimização · UI/UX",
    url: "https://lanchaejet.com.br/",
  },
  {
    title: "KL Freedom",
    description:
      "Plataforma digital para presença online da KL Freedom, com identidade moderna.",
    techs: "Front-end · Integração · Performance",
    url: "https://klfreedom.com.br/",
  },
];

export default function ProjectsScreen() {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, translateY]);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner */}
        <Animated.View
          style={[
            styles.banner,
            {
              opacity,
              transform: [{ translateY }],
            },
          ]}
        >
          <View style={styles.bannerGlow} />
          <View style={styles.bannerIconCircle}>
            <Ionicons name="rocket-outline" size={24} color={COLORS.secondary} />
          </View>
          <Text style={styles.bannerTitle}>Projetos em produção</Text>
          <Text style={styles.bannerSubtitle}>
            Alguns trabalhos que já estão publicados e podem ser acessados em produção.
          </Text>
        </Animated.View>

        {/* Cards */}
        {projects.map((project) => (
          <View key={project.title} style={styles.card}>
            <View style={styles.cardGlow} />
            <Text style={styles.cardTitle}>{project.title}</Text>
            <Text style={styles.cardDesc}>{project.description}</Text>
            <Text style={styles.cardTechs}>{project.techs}</Text>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.85}
              onPress={() => Linking.openURL(project.url)}
            >
              <Ionicons
                name="link-outline"
                size={14}
                color="#020617"
                style={{ marginRight: 6 }}
              />
              <Text style={styles.buttonText}>Visitar site</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    paddingBottom: 40,
  },

  banner: {
    borderRadius: 22,
    padding: 20,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginBottom: 22,
    overflow: "hidden",
  },
  bannerGlow: {
    position: "absolute",
    top: -60,
    left: -60,
    width: 170,
    height: 170,
    borderRadius: 999,
    backgroundColor: COLORS.secondary,
    opacity: 0.16,
  },
  bannerIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },
  bannerSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: COLORS.muted,
  },

  card: {
    borderRadius: 20,
    padding: 18,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
    overflow: "hidden",
  },
  cardGlow: {
    position: "absolute",
    bottom: -70,
    right: -50,
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: COLORS.secondary,
    opacity: 0.12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: COLORS.muted,
    marginBottom: 6,
  },
  cardTechs: {
    fontSize: 11,
    color: COLORS.secondary,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: COLORS.secondary,
  },
  buttonText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#020617",
  },
});
