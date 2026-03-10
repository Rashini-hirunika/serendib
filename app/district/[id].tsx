import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, Linking, Platform } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Heart, MapPin, Clock, Download, Check, ExternalLink, Utensils, History, Car } from "lucide-react-native";
import { getDistrictById } from "@/data/districts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useOffline } from "@/contexts/OfflineContext";
import { colors } from "@/constants/colors";
import { useMemo } from "react";
import MapView, { Marker } from "react-native-maps";

const { width: _width } = Dimensions.get("window");

export default function DistrictDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { t } = useLanguage();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { downloadDistrict, removeDownload, isDownloaded } = useOffline();

  const district = useMemo(() => getDistrictById(id), [id]);

  if (!district) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>District not found</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.errorBackText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleOpenMaps = () => {
    const { latitude, longitude } = district.coordinates;
    const url = Platform.select({
      ios: `maps:0,0?q=${latitude},${longitude}`,
      android: `geo:0,0?q=${latitude},${longitude}`,
    });
    if (url) {
      void Linking.openURL(url);
    }
  };

  const handleBookHotel = (hotelName: string) => {
    const query = encodeURIComponent(`${hotelName} ${district.name} Sri Lanka`);
    const url = `https://www.google.com/search?q=${query}`;
    void Linking.openURL(url);
  };

  const handleDownloadToggle = () => {
    if (isDownloaded(district.id)) {
      removeDownload(district.id);
    } else {
      downloadDistrict(district.id);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerImageContainer}>
          <Image source={{ uri: district.imageUrl }} style={styles.headerImage} />
          <View style={styles.overlay} />
          
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.heartButton}
            onPress={() => toggleFavorite(district.id)}
          >
            <Heart
              size={24}
              color={isFavorite(district.id) ? "#ff4757" : "#fff"}
              fill={isFavorite(district.id) ? "#ff4757" : "transparent"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.downloadButton}
            onPress={handleDownloadToggle}
          >
            {isDownloaded(district.id) ? (
              <Check size={24} color="#2ecc71" />
            ) : (
              <Download size={24} color="#fff" />
            )}
          </TouchableOpacity>

          <View style={styles.headerContent}>
            <Text style={styles.name}>{district.name}</Text>
            <Text style={styles.localNames}>
              {district.nameSinhala} · {district.nameTamil}
            </Text>
            <View style={styles.locationRow}>
              <MapPin size={16} color="#fff" />
              <Text style={styles.province}>{district.province}</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.description}>{district.description}</Text>

          <TouchableOpacity style={styles.mapButton} onPress={handleOpenMaps}>
            <MapPin size={20} color="#fff" />
            <Text style={styles.mapButtonText}>{t("viewOnMap")}</Text>
          </TouchableOpacity>

          {district.coordinates && (
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: district.coordinates.latitude,
                  longitude: district.coordinates.longitude,
                  latitudeDelta: 0.5,
                  longitudeDelta: 0.5,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: district.coordinates.latitude,
                    longitude: district.coordinates.longitude,
                  }}
                  title={district.name}
                />
              </MapView>
            </View>
          )}

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MapPin size={20} color={colors.primary} />
              <Text style={styles.sectionTitle}>{t("topPlaces")}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {district.topPlaces.map((place, index) => (
                <View key={index} style={styles.placeCard}>
                  <Image source={{ uri: place.imageUrl }} style={styles.placeImage} />
                  <View style={styles.placeOverlay} />
                  <View style={styles.placeContent}>
                    <Text style={styles.placeName}>{place.name}</Text>
                    <Text style={styles.placeDescription} numberOfLines={2}>
                      {place.description}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Clock size={20} color={colors.primary} />
              <Text style={styles.sectionTitle}>{t("hotels")}</Text>
            </View>
            {district.hotels.map((hotel, index) => (
              <View key={index} style={styles.hotelCard}>
                <View style={styles.hotelInfo}>
                  <View style={styles.hotelHeader}>
                    <Text style={styles.hotelName}>{hotel.name}</Text>
                    <View
                      style={[
                        styles.typeBadge,
                        { backgroundColor: hotel.type === "luxury" ? colors.luxury : colors.budget },
                      ]}
                    >
                      <Text style={styles.typeText}>
                        {hotel.type === "luxury" ? t("luxury") : t("budget")}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.hotelDescription}>{hotel.description}</Text>
                  <Text style={styles.hotelPrice}>{hotel.priceRange}</Text>
                </View>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() => handleBookHotel(hotel.name)}
                >
                  <Text style={styles.bookButtonText}>{t("bookHotel")}</Text>
                  <ExternalLink size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <History size={20} color={colors.primary} />
              <Text style={styles.sectionTitle}>{t("history")}</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoText}>{district.historicalSignificance}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Utensils size={20} color={colors.primary} />
              <Text style={styles.sectionTitle}>{t("food")}</Text>
            </View>
            <View style={styles.foodContainer}>
              {district.mustTryFood.map((food, index) => (
                <View key={index} style={styles.foodChip}>
                  <Text style={styles.foodText}>{food}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Car size={20} color={colors.primary} />
              <Text style={styles.sectionTitle}>{t("route")}</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoText}>{district.travelRoute}</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: colors.error,
    marginBottom: 16,
  },
  errorBackText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  headerImageContainer: {
    height: 320,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 16,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 8,
    padding: 8,
  },
  heartButton: {
    position: "absolute",
    top: 60,
    right: 16,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 8,
    padding: 8,
  },
  downloadButton: {
    position: "absolute",
    top: 60,
    right: 64,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 8,
    padding: 8,
  },
  headerContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  localNames: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    marginTop: 4,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 6,
  },
  province: {
    fontSize: 16,
    color: "#fff",
  },
  content: {
    padding: 16,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 16,
  },
  mapButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
    marginBottom: 16,
  },
  mapButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  placeCard: {
    width: 220,
    height: 160,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 12,
  },
  placeImage: {
    width: "100%",
    height: "100%",
  },
  placeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  placeContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  placeDescription: {
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
    marginTop: 4,
  },
  hotelCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  hotelInfo: {
    marginBottom: 12,
  },
  hotelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    flex: 1,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  typeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  hotelDescription: {
    fontSize: 14,
    color: colors.textLight,
    lineHeight: 20,
  },
  hotelPrice: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
    marginTop: 8,
  },
  bookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accent,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  infoCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
  },
  foodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  foodChip: {
    backgroundColor: colors.accentLight,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  foodText: {
    color: colors.primaryDark,
    fontSize: 14,
    fontWeight: "500",
  },
  footer: {
    height: 32,
  },
});
