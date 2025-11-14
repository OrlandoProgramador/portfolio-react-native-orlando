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

// TROCAR PELO LINK REAL DO SEU PDF
const CV_URL = "https://exemplo.com/cv-orlando.pdf";

export default function AboutScreen() {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(14)).current;

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
        <Animated.View
          style={[
            styles.card,
            {
              opacity,
              transform: [{ translateY }],
            },
          ]}
        >
          <View style={styles.glow} />
          <View style={styles.iconRow}>
            <View style={styles.iconCircle}>
              <Ionicons name="person-circle-outline" size={30} color={COLORS.secondary} />
            </View>
            <View>
              <Text style={styles.title}>Sobre mim</Text>
              <Text style={styles.subtitle}>
                Dev, suporte técnico e estudante de Sistemas de Informação.
              </Text>
            </View>
          </View>

          <Text style={styles.text}>
            Sou <Text style={styles.highlight}>Orlando Livio</Text>, desenvolvedor de
            software em Manaus–AM, com foco em{" "}
            <Text style={styles.highlight}>Suporte Técnico</Text>,{" "}
            <Text style={styles.highlight}>Desenvolvimento</Text> e{" "}
            <Text style={styles.highlight}>Análise de Sistemas</Text>.
          </Text>

          <Text style={styles.text}>
            Estudo <Text style={styles.highlight}>Sistemas de Informação</Text> na
            FAMETRO e também curso <Text style={styles.highlight}>Análise e
            Desenvolvimento de Sistemas</Text>. Tenho experiência com web, mobile,
            back-end e design.
          </Text>

          <Text style={styles.text}>
            Curto criar soluções que misturam{" "}
            <Text style={styles.highlight}>código limpo</Text>,{" "}
            <Text style={styles.highlight}>interface moderna</Text> e{" "}
            <Text style={styles.highlight}>boa experiência de uso</Text>, tanto para
            projetos profissionais quanto pessoais.
          </Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.85}
            onPress={() => Linking.openURL(CV_URL)}
          >
            <Ionicons
              name="download-outline"
              size={16}
              color="#020617"
              style={{ marginRight: 6 }}
            />
            <Text style={styles.buttonText}>Baixar currículo (PDF)</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.timeline}>
          <Text style={styles.timelineTitle}>Formação resumida</Text>

          <TimelineItem
            title="Sistemas de Informação – FAMETRO"
            subtitle="7º período"
          />
          <TimelineItem
            title="Análise e Desenvolvimento de Sistemas – UniDomBosco"
            subtitle="Formado"
          />
          <TimelineItem title="Administração – UniDomBosco"
          subtitle="Formado"
           />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function TimelineItem({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={styles.timelineRow}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineContent}>
        <Text style={styles.timelineItemTitle}>{title}</Text>
        {subtitle ? <Text style={styles.timelineItemSubtitle}>{subtitle}</Text> : null}
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
  card: {
    borderRadius: 22,
    padding: 20,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginBottom: 24,
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    top: -70,
    right: -70,
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
    opacity: 0.18,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.muted,
  },
  text: {
    fontSize: 13,
    color: COLORS.text,
    lineHeight: 20,
    marginBottom: 8,
  },
  highlight: {
    color: COLORS.secondary,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 14,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 999,
    backgroundColor: COLORS.secondary,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#020617",
  },

  timeline: {
    borderRadius: 18,
    padding: 18,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  timelineTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 10,
  },
  timelineRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: COLORS.secondary,
    marginTop: 4,
    marginRight: 10,
  },
  timelineContent: {
    flex: 1,
  },
  timelineItemTitle: {
    fontSize: 13,
    color: COLORS.text,
  },
  timelineItemSubtitle: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 2,
  },
});
