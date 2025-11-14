import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const COLORS = {
  background: "#030712",
  text: "#e5e7eb",
  muted: "#9ca3af",
  card: "#020617",
  border: "#1f2937",
  primary: "#7c3aed",
  secondary: "#22d3ee",
};

const GITHUB_URL = "https://github.com/OrlandoProgramador";

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Contato</Text>

        <View style={styles.card}>
          <View style={styles.glow} />
          <Text style={styles.cardTitle}>Vamos conversar?</Text>
          <Text style={styles.cardSubtitle}>
            Aberto para estágios, vagas júnior e projetos freelance.
          </Text>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={16} color={COLORS.secondary} />
            <Text style={styles.rowLabel}>Telefone</Text>
          </View>
          <Text style={styles.value}>(44) 99114-4576</Text>

          <View style={styles.row}>
            <Ionicons name="mail-outline" size={16} color={COLORS.secondary} />
            <Text style={styles.rowLabel}>E-mail</Text>
          </View>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("mailto:livioboliveira12@gmail.com")}
          >
            livioboliveira12@gmail.com
          </Text>

          <View style={styles.row}>
            <Ionicons name="logo-linkedin" size={16} color={COLORS.secondary} />
            <Text style={styles.rowLabel}>LinkedIn</Text>
          </View>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/orlando-livio-bertollo-de-oliveira-a836b1271/"
              )
            }
          >
            /orlando-livio-bertollo-de-oliveira-a836b1271
          </Text>

          <View style={styles.row}>
            <Ionicons name="logo-github" size={16} color={COLORS.secondary} />
            <Text style={styles.rowLabel}>GitHub</Text>
          </View>
          <Text style={styles.link} onPress={() => Linking.openURL(GITHUB_URL)}>
            github.com/OrlandoProgramador
          </Text>
        </View>
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
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 16,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    bottom: -80,
    right: -60,
    width: 200,
    height: 200,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
    opacity: 0.18,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },
  cardSubtitle: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 4,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  rowLabel: {
    fontSize: 12,
    color: COLORS.muted,
    marginLeft: 6,
  },
  value: {
    fontSize: 14,
    color: COLORS.text,
  },
  link: {
    fontSize: 14,
    color: COLORS.secondary,
    textDecorationLine: "underline",
  },
});
