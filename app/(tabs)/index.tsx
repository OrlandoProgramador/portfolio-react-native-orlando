import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
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

const GITHUB_URL = "https://github.com/OrlandoProgramador";

export default function HomeScreen() {
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
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <Animated.View
          style={[
            styles.hero,
            {
              opacity,
              transform: [{ translateY }],
            },
          ]}
        >
          <View style={styles.heroGlow} />
          <View style={styles.heroIconCircle}>
            <Ionicons name="terminal-outline" size={24} color={COLORS.secondary} />
          </View>
          <Text style={styles.heroTitle}>Orlando Livio</Text>
          <Text style={styles.heroSubtitle}>
            Desenvolvedor de Software · Suporte Técnico
          </Text>
          <Text style={styles.heroLocation}>Manaus · AM · Brasil</Text>

          <Text style={styles.heroPhrase}>
            Construindo soluções simples, rápidas e modernas.
          </Text>

          <View style={styles.chipRow}>
            <Chip label="Suporte Técnico" />
            <Chip label="Dev Fullstack" />
            <Chip label="Estágio / Júnior" />
          </View>

          <View style={styles.heroButtons}>
            <TouchableOpacity
              style={styles.heroBtnPrimary}
              activeOpacity={0.85}
              onPress={() => Linking.openURL(GITHUB_URL)}
            >
              <Ionicons
                name="logo-github"
                size={16}
                color="#020617"
                style={{ marginRight: 6 }}
              />
              <Text style={styles.heroBtnPrimaryText}>Ver GitHub</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* OBJETIVO */}
        <SectionTitle label="Objetivo" />
        <Card>
          <Text style={styles.text}>
            Busco oportunidade como estagiário ou posição júnior em{" "}
            <Text style={styles.highlight}>Suporte Técnico</Text>,{" "}
            <Text style={styles.highlight}>Desenvolvimento</Text> ou{" "}
            <Text style={styles.highlight}>Análise de Sistemas</Text>, aplicando
            conhecimentos práticos e oferecendo atendimento de qualidade.
          </Text>
        </Card>

        {/* DESTAQUE SUPORTE */}
        <SectionTitle label="Destaque em Suporte Técnico" />
        <Card>
          <Bullet>Montagem, manutenção e configuração de computadores.</Bullet>
          <Bullet>Conserto e configuração de impressoras.</Bullet>
          <Bullet>Diagnóstico de falhas de hardware e upgrades.</Bullet>
          <Bullet>Instalação de sistemas, softwares e drivers.</Bullet>
          <Bullet>Suporte presencial e remoto.</Bullet>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{label}</Text>
    </View>
  );
}

function SectionTitle({ label }: { label: string }) {
  return <Text style={styles.sectionTitle}>{label}</Text>;
}

function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <Text style={styles.bullet}>• {children}</Text>;
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
  hero: {
    marginBottom: 24,
    padding: 20,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.primary,
    overflow: "hidden",
  },
  heroGlow: {
    position: "absolute",
    top: -60,
    right: -60,
    width: 160,
    height: 160,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
    opacity: 0.2,
  },
  heroIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
  },
  heroSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: COLORS.muted,
  },
  heroLocation: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.secondary,
  },
  heroPhrase: {
    marginTop: 10,
    fontSize: 13,
    color: COLORS.text,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    backgroundColor: "rgba(15,23,42,0.9)",
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    fontSize: 11,
    color: COLORS.secondary,
  },
  heroButtons: {
    flexDirection: "row",
    marginTop: 14,
  },
  heroBtnPrimary: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: COLORS.secondary,
  },
  heroBtnPrimaryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#020617",
  },
  sectionTitle: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: COLORS.muted,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#0b1120",
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
  },
  text: {
    fontSize: 13,
    color: COLORS.text,
    lineHeight: 20,
  },
  highlight: {
    color: COLORS.secondary,
  },
  bullet: {
    fontSize: 13,
    color: COLORS.text,
    marginBottom: 4,
    lineHeight: 20,
  },
});
