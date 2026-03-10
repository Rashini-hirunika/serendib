import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { useState, useMemo } from "react";
import { Link } from "expo-router";
import { Search, MapPin, ChevronRight, Heart } from "lucide-react-native";
import { districts, provinces } from "@/data/districts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { colors } from "@/constants/colors";

const FEATURED_DISTRICTS = ["colombo", "kandy", "galle", "sigiriya", "nuwara-eliya"];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const { t } = useLanguage();
  const { toggleFavorite, isFavorite } = useFavorites();

  const featuredDistricts = useMemo(() => 
    districts.filter((d) => FEATURED_DISTRICTS.includes(d.id)),
    []
  );

  const filteredDistricts = useMemo(() => {
    let result = districts;
    if (selectedProvince) {
      result = result.filter((d) => d.province === selectedProvince);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(query) ||
          d.nameSinhala.includes(query) ||
          d.nameTamil.includes(query) ||
          d.description.toLowerCase().includes(query)
      );
    }
    return result;
  }, [searchQuery, selectedProvince]);

  const renderDistrictCard = ({ item }: { item: typeof districts[0] }) => (
    <View style={styles.card}>
      <Link href={`/district/${item.id}`} asChild>
        <TouchableOpacity activeOpacity={0.9}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.overlay} />
          <View style={styles.cardContent}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.localName}>
                {item.nameSinhala} · {item.nameTamil}
              </Text>
            </View>
            <View style={styles.locationRow}>
              <MapPin size={14} color="#fff" />
              <Text style={styles.province}>{item.province}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
        style={styles.heartButton}
        onPress={() => toggleFavorite(item.id)}
      >
        <Heart
          size={24}
          color={isFavorite(item.id) ? "#ff4757" : "#fff"}
          fill={isFavorite(item.id) ? "#ff4757" : "transparent"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>{t("appName")}</Text>
        <Text style={styles.subtitle}>Discover all 25 districts of Sri Lanka</Text>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder={t("search")}
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.provincesSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.provincesScroll}
        >
          <TouchableOpacity
            style={[styles.provinceChip, !selectedProvince && styles.provinceChipActive]}
            onPress={() => setSelectedProvince(null)}
          >
            <Text style={[styles.provinceChipText, !selectedProvince && styles.provinceChipTextActive]}>
              All
            </Text>
          </TouchableOpacity>
          {provinces.map((province) => (
            <TouchableOpacity
              key={province}
              style={[styles.provinceChip, selectedProvince === province && styles.provinceChipActive]}
              onPress={() => setSelectedProvince(province === selectedProvince ? null : province)}
            >
              <Text style={[styles.provinceChipText, selectedProvince === province && styles.provinceChipTextActive]}>
                {province}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {!searchQuery && !selectedProvince && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{t("featured")}</Text>
            <ChevronRight size={20} color={colors.primary} />
          </View>
          <FlatList
            data={featuredDistricts}
            renderItem={renderDistrictCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredList}
          />
        </View>
      )}

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {searchQuery || selectedProvince ? "Search Results" : t("explore")}
          </Text>
          <Text style={styles.count}>{filteredDistricts.length} districts</Text>
        </View>
        
        {filteredDistricts.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>{t("noResults")}</Text>
          </View>
        ) : (
          <View style={styles.grid}>
            {filteredDistricts.map((district) => (
              <View key={district.id} style={styles.gridCard}>
                {renderDistrictCard({ item: district })}
              </View>
            ))}
          </View>
        )}
      </View>

      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.white,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: -16,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  provincesSection: {
    marginTop: 16,
    marginBottom: 8,
  },
  provincesScroll: {
    paddingHorizontal: 16,
    gap: 8,
  },
  provinceChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  provinceChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  provinceChipText: {
    fontSize: 14,
    color: colors.text,
  },
  provinceChipTextActive: {
    color: colors.white,
    fontWeight: "600",
  },
  section: {
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  count: {
    fontSize: 14,
    color: colors.textMuted,
  },
  featuredList: {
    paddingHorizontal: 16,
    gap: 16,
  },
  card: {
    width: 280,
    height: 200,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors.white,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  grid: {
    paddingHorizontal: 16,
    gap: 16,
  },
  gridCard: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  nameContainer: {
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  localName: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    marginTop: 2,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  province: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
  },
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
    padding: 8,
  },
  emptyState: {
    padding: 40,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: colors.textMuted,
  },
  footer: {
    height: 32,
  },
});
