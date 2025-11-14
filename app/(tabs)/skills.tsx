import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const COLORS = {
  background: "#030712",
  card: "#020617",
  cardSoft: "#020617",
  primary: "#7c3aed",
  secondary: "#22d3ee",
  text: "#e5e7eb",
  muted: "#9ca3af",
  border: "#1f2937",
};

const stackPrincipal = ["React", "React Native", "TypeScript", "Python"];

const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Tailwind",
  "Photoshop",
  "Illustrator",
  "Django",
];

const backend = ["Python", "Java", "PHP", "Kotlin", "SQL", "Django"];

const ferramentas = [
  "Linux",
  "Git & GitHub",
  "Scrum",
  "Kanban",
  "VS Code",
  "Figma (UI/UX básico)",
];

export default function SkillsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerGlow} />
          <View style={styles.bannerIconCircle}>
            <Ionicons name="code-slash" size={26} color={COLORS.secondary} />
          </View>
          <Text style={styles.bannerTitle}>Meu stack atual</Text>
          <Text style={styles.bannerSubtitle}>
            Tecnologias que uso no dia a dia para criar interfaces, APIs e soluções
            completas.
          </Text>
          <View style={styles.bannerPillsRow}>
            {stackPrincipal.map((item) => (
              <Pill key={item} label={item} />
            ))}
          </View>
        </View>

        {/* Front-end */}
        <SkillBlock
          icon="phone-portrait-outline"
          title="Front-end & Mobile"
          description="Criação de interfaces modernas e responsivas, com foco em experiência do usuário."
          items={frontend}
        />

        {/* Back-end */}
        <SkillBlock
          icon="server-outline"
          title="Back-end & Banco de Dados"
          description="APIs, regras de negócio e persistência de dados."
          items={backend}
          accent="secondary"
        />

        {/* Ferramentas */}
        <SkillBlock
          icon="construct-outline"
          title="Ferramentas & Workflow"
          description="Ambiente, versionamento e organização para entregar projetos de forma profissional."
          items={ferramentas}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <View style={styles.pill}>
      <Text style={styles.pillText}>{label}</Text>
    </View>
  );
}

function SkillBlock({
  icon,
  title,
  description,
  items,
  accent = "primary",
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  items: string[];
  accent?: "primary" | "secondary";
}) {
  const borderColor = accent === "primary" ? COLORS.primary : COLORS.secondary;
  const glowColor = accent === "primary" ? COLORS.primary : COLORS.secondary;

  return (
    <View style={[styles.block, { borderColor }]}>
      <View style={[styles.blockGlow, { backgroundColor: glowColor }]} />
      <View style={styles.blockHeader}>
        <View style={[styles.blockIconCircle, { borderColor }]}>
          <Ionicons name={icon} size={22} color={borderColor} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.blockTitle}>{title}</Text>
          <Text style={styles.blockDescription}>{description}</Text>
        </View>
      </View>

      <View style={styles.blockPillsContainer}>
        {items.map((item) => (
          <View key={item} style={styles.blockPill}>
            <Text style={styles.blockPillText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
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

  /* Banner principal */
  banner: {
    borderRadius: 22,
    padding: 20,
    marginBottom: 24,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.primary,
    overflow: "hidden",
  },
  bannerGlow: {
    position: "absolute",
    top: -60,
    right: -60,
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
    opacity: 0.18,
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
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },
  bannerSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: COLORS.muted,
  },
  bannerPillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14,
  },

  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(15,23,42,0.9)",
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginRight: 8,
    marginBottom: 8,
  },
  pillText: {
    fontSize: 11,
    color: COLORS.secondary,
  },

  /* Blocos de skills */
  block: {
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    backgroundColor: COLORS.cardSoft,
    borderWidth: 1,
    overflow: "hidden",
  },
  blockGlow: {
    position: "absolute",
    top: -50,
    left: -40,
    width: 140,
    height: 140,
    borderRadius: 999,
    opacity: 0.08,
  },
  blockHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  blockIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 999,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  blockTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },
  blockDescription: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
  },
  blockPillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  blockPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: 6,
    marginBottom: 6,
  },
  blockPillText: {
    fontSize: 11,
    color: COLORS.text,
  },
});
