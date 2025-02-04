import { memo, PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { Row } from "../elements/row.tsx";
import { Bullet } from "../elements/bullet.tsx";
import { COLOR } from "../constants.ts";
import { getDateRange } from "../utils/date/date.utils.ts";

interface ExperienceProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  isLast?: boolean;
  hasDivider?: boolean;
  hasDuration?: boolean;
  hasEndDate?: boolean;
}

const styles = StyleSheet.create({
  experience: {
    width: "100%",
    display: "flex",
    marginBottom: 8,
  },
  lastExperience: {
    marginBottom: 0,
  },
  title: {
    fontStyle: "bold",
    fontSize: 11,
  },
  subtitle: {
    marginBottom: 5,
    fontSize: 11,
  },
  content: {
    display: "flex",
    gap: 5,
  },
  divider: {
    marginTop: 8,
    width: "100%",
    height: 0.6,
    backgroundColor: COLOR.PRIMARY,
    opacity: 0.15,
  },
});

export const Experience = memo<ExperienceProps>(
  ({
    title,
    subtitle,
    startDate,
    endDate,
    children,
    isLast = false,
    hasDivider = false,
    hasDuration = true,
    hasEndDate = true,
  }) => (
    <View style={[styles.experience, isLast ? styles.lastExperience : {}]}>
      <Row justifyContent="space-between">
        <Text style={styles.title}>{title}</Text>
        {startDate && (
          <Row>
            <Text>
              {startDate}
              {hasEndDate ? ` – ${endDate || "present"}` : ""}
            </Text>
            {hasDuration && (
              <>
                <Bullet />
                <Text>{getDateRange(startDate, endDate)}</Text>
              </>
            )}
          </Row>
        )}
      </Row>

      {subtitle && (
        <Row justifyContent="space-between">
          <View style={[styles.subtitle, !children ? { marginBottom: 0 } : {}]}>
            <Text>{subtitle}</Text>
          </View>
        </Row>
      )}

      {children && (
        <View style={styles.content} wrap>
          {children}
        </View>
      )}

      {!isLast && hasDivider && <View style={styles.divider} />}
    </View>
  )
);
