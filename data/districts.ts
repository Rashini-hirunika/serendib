export interface Place {
  name: string;
  description: string;
  imageUrl: string;
}

export interface Hotel {
  name: string;
  type: 'luxury' | 'budget';
  description: string;
  priceRange: string;
}

export interface District {
  id: string;
  name: string;
  nameSinhala: string;
  nameTamil: string;
  province: string;
  description: string;
  topPlaces: Place[];
  hotels: Hotel[];
  historicalSignificance: string;
  mustTryFood: string[];
  travelRoute: string;
  imageUrl: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export const districts: District[] = [
  {
    id: "colombo",
    name: "Colombo",
    nameSinhala: "කොළඹ",
    nameTamil: "கொழும்பு",
    province: "Western",
    description: "The vibrant capital city of Sri Lanka, blending colonial charm with modern urban life.",
    topPlaces: [
      { name: "Galle Face Green", description: "Urban park along the ocean with stunning sunsets", imageUrl: "https://images.unsplash.com/photo-1588252303782-cb80119abd6c?w=400" },
      { name: "Gangaramaya Temple", description: "Eclectic Buddhist temple with diverse architecture", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Viharamahadevi Park", description: "Largest park in Colombo with beautiful landscapes", imageUrl: "https://images.unsplash.com/photo-1590615370581-265ae1d21c43?w=400" }
    ],
    hotels: [
      { name: "Shangri-La Colombo", type: "luxury", description: "5-star waterfront hotel with ocean views", priceRange: "$200-400" },
      { name: "CityRest Fort", type: "budget", description: "Clean hostel in the heart of the city", priceRange: "$15-30" }
    ],
    historicalSignificance: "Colombo has been a strategic trading port for over 2,000 years, influenced by Portuguese, Dutch, and British colonial powers. It became the capital under British rule in 1815.",
    mustTryFood: ["Kottu Roti", "Hoppers", "String Hoppers with Curry", "Seafood at Galle Face"],
    travelRoute: "From Bandaranaike International Airport (35km north), take the expressway (30 mins) or train from Katunayake to Colombo Fort Station (1 hour).",
    imageUrl: "https://images.unsplash.com/photo-1588252303782-cb80119abd6c?w=600",
    coordinates: { latitude: 6.9271, longitude: 79.8612 }
  },
  {
    id: "galle",
    name: "Galle",
    nameSinhala: "ගාල්ල",
    nameTamil: "காலி",
    province: "Southern",
    description: "A UNESCO World Heritage site famous for its 17th-century Dutch colonial fort.",
    topPlaces: [
      { name: "Galle Fort", description: "UNESCO heritage site with Dutch colonial architecture", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" },
      { name: "Jungle Beach", description: "Secluded beach with clear waters and coral reefs", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Koggala Lake", description: "Serene lake with mangroves and wildlife", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" }
    ],
    hotels: [
      { name: "Amangalla", type: "luxury", description: "Historic luxury hotel inside the Fort", priceRange: "$400-800" },
      { name: "Fort Inn Guest House", type: "budget", description: "Charming guesthouse within the Fort walls", priceRange: "$25-50" }
    ],
    historicalSignificance: "Galle was the main port of Sri Lanka for over 200 years under Dutch rule. The Fort, built in 1663, is the largest remaining European-built fortress in Asia.",
    mustTryFood: ["Galle Fort Curries", "Egg Hoppers", "Seafood Platter", "Coconut Sambol"],
    travelRoute: "From Colombo: Take the Southern Expressway (1.5 hours by car) or scenic coastal train (2.5 hours) to Galle Station.",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600",
    coordinates: { latitude: 6.0329, longitude: 80.2168 }
  },
  {
    id: "kandy",
    name: "Kandy",
    nameSinhala: "මහනුවර",
    nameTamil: "கண்டி",
    province: "Central",
    description: "The hill capital and spiritual heart of Sri Lanka, home to the Sacred Tooth Relic.",
    topPlaces: [
      { name: "Temple of the Sacred Tooth Relic", description: "Buddhism's most sacred temple", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Kandy Lake", description: "Artificial lake built in 1807 with scenic walks", imageUrl: "https://images.unsplash.com/photo-1590615370581-265ae1d21c43?w=400" },
      { name: "Peradeniya Botanical Gardens", description: "147-acre garden with 4,000+ plant species", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" }
    ],
    hotels: [
      { name: "The Kandy House", type: "luxury", description: "Boutique heritage hotel in colonial mansion", priceRange: "$250-500" },
      { name: "Kandy City Hostel", type: "budget", description: "Social hostel near the lake", priceRange: "$12-25" }
    ],
    historicalSignificance: "Kandy was the last capital of the Sinhalese kings and resisted European colonization for centuries. It remained an independent kingdom until 1815.",
    mustTryFood: ["Kandyan Curries", "Milk Rice (Kiribath)", "Watalappan", "Jackfruit Curry"],
    travelRoute: "From Colombo: Take the A1 highway (3 hours) or scenic train through the hills (2.5-3 hours) to Kandy Station.",
    imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=600",
    coordinates: { latitude: 7.2906, longitude: 80.6337 }
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    nameSinhala: "නුවරඑළිය",
    nameTamil: "நுவரெலியா",
    province: "Central",
    description: "Little England of Sri Lanka, known for tea plantations and cool climate.",
    topPlaces: [
      { name: "Horton Plains National Park", description: "Cloud forest with World's End cliff viewpoint", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Gregory Lake", description: "Scenic lake surrounded by hills and tea estates", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Pedro Tea Estate", description: "Working tea factory with tours and tastings", imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400" }
    ],
    hotels: [
      { name: "The Hill Club", type: "luxury", description: "Colonial-era club with old-world charm", priceRange: "$150-300" },
      { name: "Heaven Seven Hotel", type: "budget", description: "Modern hotel with lake views", priceRange: "$40-80" }
    ],
    historicalSignificance: "Established by British colonialists in the 19th century as a hill station retreat, Nuwara Eliya retains much of its colonial architecture and cool climate.",
    mustTryFood: ["Afternoon Tea with Scones", "Fresh Strawberry Desserts", "Warm Hoppers", "Vegetable Hot Pot"],
    travelRoute: "From Kandy: Take the A5 highway through Ramboda Pass (2.5 hours). Scenic train also available via Nanu Oya station.",
    imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=600",
    coordinates: { latitude: 6.9497, longitude: 80.7891 }
  },
  {
    id: "sigiriya",
    name: "Sigiriya",
    nameSinhala: "සීගිරිය",
    nameTamil: "சிகிரியா",
    province: "Central",
    description: "Ancient rock fortress and palace ruins, a UNESCO World Heritage masterpiece.",
    topPlaces: [
      { name: "Sigiriya Rock Fortress", description: "Ancient palace ruins atop 200m rock", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" },
      { name: "Pidurangala Rock", description: "Best viewpoint for Sigiriya at sunrise", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Minneriya National Park", description: "Famous for the elephant gathering", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" }
    ],
    hotels: [
      { name: "Water Garden Sigiriya", type: "luxury", description: "Luxury villas with views of the rock", priceRange: "$300-600" },
      { name: "Sigiriya Hostel", type: "budget", description: "Backpacker hostel with sunset views", priceRange: "$10-20" }
    ],
    historicalSignificance: "Built by King Kashyapa in the 5th century AD, this ancient capital features sophisticated hydraulic engineering, frescoes, and mirror walls.",
    mustTryFood: ["Village Style Rice & Curry", "Fresh Fruits", "Buffalo Curd with Treacle", "Local Arrack Cocktails"],
    travelRoute: "From Colombo: Take the A6 highway via Kurunegala and Dambulla (4 hours). From Kandy, it's 2.5 hours via Matale.",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600",
    coordinates: { latitude: 7.9570, longitude: 80.7603 }
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    nameSinhala: "අනුරාධපුර",
    nameTamil: "அனுராதபுரம்",
    province: "North Central",
    description: "The first ancient capital of Sri Lanka, sacred city with massive dagobas.",
    topPlaces: [
      { name: "Ruwanwelisaya Stupa", description: "Massive white stupa built in 140 BC", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Sri Maha Bodhi", description: "Oldest documented tree in the world (2,300 years)", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" },
      { name: "Jetavanaramaya", description: "Tallest stupa in the ancient world", imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400" }
    ],
    hotels: [
      { name: "Ulagalla Resort", type: "luxury", description: "Eco-luxury resort with private pools", priceRange: "$300-500" },
      { name: "Milano Tourist Rest", type: "budget", description: "Family-run guesthouse near ruins", priceRange: "$15-30" }
    ],
    historicalSignificance: "Founded in the 4th century BC, Anuradhapura was the political and religious capital for 1,300 years. It showcases the earliest Sinhalese Buddhist civilization.",
    mustTryFood: ["Pittu with Coconut", "Traditional Jaggery", "Rice and Eight Curries", "Fresh Toddy"],
    travelRoute: "From Colombo: Take the A6 Puttalam Road (5 hours) or train to Anuradhapura station (5-6 hours). From Sigiriya: 1.5 hours via Habarana.",
    imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=600",
    coordinates: { latitude: 8.3114, longitude: 80.4037 }
  },
  {
    id: "polonnaruwa",
    name: "Polonnaruwa",
    nameSinhala: "පොළොන්නරුව",
    nameTamil: "பொலன்னறுவை",
    province: "North Central",
    description: "The second ancient capital with well-preserved ruins and the Gal Viharaya.",
    topPlaces: [
      { name: "Gal Viharaya", description: "Rock temple with stunning Buddha statues", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Parakrama Samudra", description: "Massive ancient reservoir and lake", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Royal Palace Complex", description: "Ruins of the ancient royal court", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" }
    ],
    hotels: [
      { name: "The Lake Hotel", type: "luxury", description: "Boutique hotel overlooking Parakrama Samudra", priceRange: "$180-350" },
      { name: "Sudu Araliya Hotel", type: "budget", description: "Comfortable hotel near the lake", priceRange: "$40-80" }
    ],
    historicalSignificance: "The second capital of Sri Lanka (11th-13th centuries), Polonnaruwa represents the island's golden age of irrigation, architecture, and art under Parakramabahu I.",
    mustTryFood: ["Traditional Rice and Curry", "Kokis (New Year sweet)", "Milk Toffee", "Wood Apple Juice"],
    travelRoute: "From Colombo: Take the A6 highway (5 hours). From Sigiriya: 1.5 hours. Combine with Anuradhapura for a cultural triangle tour.",
    imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=600",
    coordinates: { latitude: 7.9403, longitude: 81.0188 }
  },
  {
    id: "trincomalee",
    name: "Trincomalee",
    nameSinhala: "ත්‍රිකුණාමලය",
    nameTamil: "திருகோணமலை",
    province: "Eastern",
    description: "Natural deep-water harbor with pristine beaches and Hindu temples.",
    topPlaces: [
      { name: "Nilaveli Beach", description: "Pristine beach with crystal clear waters", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Koneswaram Temple", description: "Ancient Hindu temple on Swami Rock", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Pigeon Island", description: "National park with coral reefs for snorkeling", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" }
    ],
    hotels: [
      { name: "Anantamaa Hotel", type: "luxury", description: "Beachfront luxury with spa", priceRange: "$200-400" },
      { name: "Nilaveli Beach Hotel", type: "budget", description: "Direct beach access, great value", priceRange: "$30-60" }
    ],
    historicalSignificance: "One of the oldest cities in Asia, Trincomalee's natural harbor attracted traders from Greece, Rome, and China. It has been significant in maritime history for 2,500 years.",
    mustTryFood: ["Fresh Seafood Grill", "Crab Curry", "Kottu Roti (Eastern Style)", "Lamprais"],
    travelRoute: "From Colombo: Take the A6 highway (6 hours). Domestic flights also available to China Bay Airport (45 mins). From Sigiriya: 2 hours via Habarana.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 8.5874, longitude: 81.2152 }
  },
  {
    id: "jaffna",
    name: "Jaffna",
    nameSinhala: "යාපනය",
    nameTamil: "யாழ்ப்பாணம்",
    province: "Northern",
    description: "Cultural capital of Tamil Sri Lanka with unique cuisine and historic sites.",
    topPlaces: [
      { name: "Nallur Kandaswamy Temple", description: "Magnificent Hindu temple with golden gopuram", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Jaffna Fort", description: "Dutch colonial fort, second largest in Sri Lanka", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" },
      { name: "Delft Island", description: "Remote island with wild horses and coral walls", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" }
    ],
    hotels: [
      { name: "Jetwing Jaffna", type: "luxury", description: "Modern luxury hotel in city center", priceRange: "$150-280" },
      { name: "Green Grass Hotel", type: "budget", description: "Clean hotel with traditional hospitality", priceRange: "$25-50" }
    ],
    historicalSignificance: "Jaffna was the capital of a Tamil kingdom from the 13th-17th centuries. The region has a distinct culture, language, and traditions separate from the rest of Sri Lanka.",
    mustTryFood: ["Jaffna Crab Curry", "Odiyal Kool (Seafood Soup)", "Palmyrah Toffee", "Mango Curry"],
    travelRoute: "From Colombo: Take the A9 highway (8-9 hours) or fly to Jaffna Airport (1 hour). Train service also available (6-8 hours).",
    imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=600",
    coordinates: { latitude: 9.6615, longitude: 80.0255 }
  },
  {
    id: "batticaloa",
    name: "Batticaloa",
    nameSinhala: "මඩකලපුව",
    nameTamil: "மட்டக்களப்பு",
    province: "Eastern",
    description: "Lagoon city known for singing fish and unspoiled beaches.",
    topPlaces: [
      { name: "Batticaloa Lagoon", description: "Large estuarine lagoon perfect for boating", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Kalkudah Beach", description: "Crescent-shaped pristine beach", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Dutch Fort", description: "Small colonial fort by the lagoon", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" }
    ],
    hotels: [
      { name: "Uga Bay Resort", type: "luxury", description: "Beachfront villas on Pasikudah Beach", priceRange: "$250-500" },
      { name: "Palm Beach Hotel", type: "budget", description: "Simple hotel near the beach", priceRange: "$20-40" }
    ],
    historicalSignificance: "Batticaloa was a strategic trading post for the Portuguese and Dutch. Its name comes from 'Matted-sails' referring to the local fishing boats.",
    mustTryFood: ["Batticaloa Crab Curry", "Seafood Kottu", "Rice and Fish Curry", "Coconut Toddy"],
    travelRoute: "From Colombo: Take the A4 highway (7 hours). From Trincomalee: 3 hours via Chenkalady. Also accessible by train.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 7.7300, longitude: 81.7000 }
  },
  {
    id: "matara",
    name: "Matara",
    nameSinhala: "මාතර",
    nameTamil: "மாத்தறை",
    province: "Southern",
    description: "Coastal district with Dutch forts and some of Sri Lanka's best surfing beaches.",
    topPlaces: [
      { name: "Weligama Bay", description: "Famous for stilt fishermen and beginner surfing", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Mirissa Beach", description: "Stunning beach for whale watching", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Dondra Head Lighthouse", description: "Sri Lanka's tallest lighthouse at southern tip", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" }
    ],
    hotels: [
      { name: "Cape Weligama", type: "luxury", description: "Clifftop resort with infinity pools", priceRange: "$400-800" },
      { name: "Hangtime Hostel", type: "budget", description: "Surf hostel popular with backpackers", priceRange: "$15-30" }
    ],
    historicalSignificance: "Matara was an important Dutch trading center. The Star Fort and Matara Fort remain as reminders of colonial rule along this strategic coastline.",
    mustTryFood: ["Weligama Fish Curry", "Coconut Roti", "Pol Sambol", "Fresh Seafood BBQ"],
    travelRoute: "From Galle: 30 minutes by train or bus along the coast. From Colombo: Take the Southern Expressway (2 hours) or coastal train (3 hours).",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 5.9549, longitude: 80.5550 }
  },
  {
    id: "hambantota",
    name: "Hambantota",
    nameSinhala: "හම්බන්තොට",
    nameTamil: "அம்பாந்தோட்டை",
    province: "Southern",
    description: "Emerging tourism hub with national parks and bird sanctuaries.",
    topPlaces: [
      { name: "Yala National Park", description: "Famous for leopard sightings and wildlife", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Bundala National Park", description: "UNESCO biosphere reserve for birdwatching", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" },
      { name: "Kalametiya Sanctuary", description: "Wetland sanctuary with diverse birdlife", imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400" }
    ],
    hotels: [
      { name: "Cinnamon Wild Yala", type: "luxury", description: "Safari lodge on the edge of Yala", priceRange: "$300-600" },
      { name: "Tithira Guest House", type: "budget", description: "Family guesthouse near Tissamaharama", priceRange: "$20-40" }
    ],
    historicalSignificance: "Hambantota has ancient trading roots and was a key port in the maritime Silk Road. The area has seen rapid development with a new port and airport.",
    mustTryFood: ["Wild Game Curry", "Seafood Platter", "Tissa Wewa Fish", "Local Rice Varieties"],
    travelRoute: "From Colombo: Take the Southern Expressway to Hambantota (2.5 hours). Mattala Airport also offers flights from Colombo (30 mins).",
    imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=600",
    coordinates: { latitude: 6.1246, longitude: 81.1186 }
  },
  {
    id: "kalutara",
    name: "Kalutara",
    nameSinhala: "කළුතර",
    nameTamil: "களுத்துறை",
    province: "Western",
    description: "Coastal district south of Colombo with temples and beach resorts.",
    topPlaces: [
      { name: "Kalutara Bodhiya", description: "Giant white stupa on the beach road", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Bentota Beach", description: "Golden sandy beach with water sports", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Brief Garden", description: "Landscape garden created by Bevis Bawa", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" }
    ],
    hotels: [
      { name: "Cinnamon Bentota Beach", type: "luxury", description: "Iconic beach resort by Geoffrey Bawa", priceRange: "$250-500" },
      { name: "Horizon Kite Center", type: "budget", description: "Kitesurfing hostel in Kalpitiya area", priceRange: "$25-50" }
    ],
    historicalSignificance: "Kalutara was an important spice trading center. The Kalutara Bodhiya marks the place where the sacred Bodhi tree first arrived in Sri Lanka.",
    mustTryFood: ["Kalutara Fish Curry", "Rambutan (seasonal)", "Mangosteen", "Fresh Toddy"],
    travelRoute: "From Colombo: Just 45 minutes south via the Galle Road (A2) or Southern Expressway. Regular trains also available.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 6.5854, longitude: 79.9607 }
  },
  {
    id: "gampaha",
    name: "Gampaha",
    nameSinhala: "ගම්පහ",
    nameTamil: "கம்பஹா",
    province: "Western",
    description: "Suburban district surrounding Colombo with beaches and wetlands.",
    topPlaces: [
      { name: "Negombo Beach", description: "Wide sandy beach close to the airport", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Muthurajawela Marsh", description: "Wetland sanctuary for bird watching", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Dutch Canal", description: "Historic waterway for boat rides", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" }
    ],
    hotels: [
      { name: "Jetwing Lagoon", type: "luxury", description: "Geoffrey Bawa-designed lagoon resort", priceRange: "$200-400" },
      { name: "Sevonrich Holiday Resort", type: "budget", description: "Beachfront budget accommodation", priceRange: "$20-40" }
    ],
    historicalSignificance: "Gampaha has been settled since ancient times, with the Kelaniya Temple dating back to the 3rd century BC. The Dutch left their mark with canals.",
    mustTryFood: ["Negombo Crab Curry", "Lamprais", "Dutch Burgher Dishes", "Fresh Lagoon Fish"],
    travelRoute: "From Colombo: 30 minutes north via the Colombo-Katunayake Expressway. From the airport: Just 20 minutes to Negombo.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 7.0840, longitude: 80.0098 }
  },
  {
    id: "ratnapura",
    name: "Ratnapura",
    nameSinhala: "රත්නපුර",
    nameTamil: "இரத்தினபுரி",
    province: "Sabaragamuwa",
    description: "The City of Gems, famous for sapphire and ruby mining.",
    topPlaces: [
      { name: "Sinharaja Forest Reserve", description: "UNESCO rainforest with unique biodiversity", imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400" },
      { name: "Bopath Ella Falls", description: "Beautiful waterfall shaped like a Bo leaf", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Gem Mines", description: "Visit working sapphire and ruby mines", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" }
    ],
    hotels: [
      { name: "Gem Land Hotel", type: "luxury", description: "Boutique hotel with gem museum", priceRange: "$100-200" },
      { name: "Palm Garden Guest House", type: "budget", description: "Family-run guesthouse near waterfalls", priceRange: "$15-30" }
    ],
    historicalSignificance: "Ratnapura has been the center of Sri Lanka's gem trade for over 2,000 years. Ancient Greek and Roman texts mention Ratnapura gems.",
    mustTryFood: ["Ratnapura Red Rice", "Fresh Water Fish Curry", "Jackfruit Dishes", "Tropical Fruits"],
    travelRoute: "From Colombo: Take the A4 highway through Avissawella (2 hours). From Kandy: 2.5 hours via Gelioya.",
    imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=600",
    coordinates: { latitude: 6.6828, longitude: 80.3990 }
  },
  {
    id: "kegalle",
    name: "Kegalle",
    nameSinhala: "කෑගල්ල",
    nameTamil: "கேகாலை",
    province: "Sabaragamuwa",
    description: "Hill country gateway with rubber plantations and elephant orphanage.",
    topPlaces: [
      { name: "Pinnawala Elephant Orphanage", description: "World-famous elephant sanctuary", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Alagalla Mountain", description: "Hiking destination with panoramic views", imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400" },
      { name: "Belilena Cave", description: "Prehistoric cave with ancient remains", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" }
    ],
    hotels: [
      { name: "Hotel Elephant Park", type: "luxury", description: "Upscale hotel near Pinnawala", priceRange: "$120-250" },
      { name: "Pinnawala Guest House", type: "budget", description: "Simple accommodation near elephants", priceRange: "$15-30" }
    ],
    historicalSignificance: "Kegalle was part of the ancient Maya Rata kingdom. The area is known for its prehistoric caves and colonial-era rubber plantations.",
    mustTryFood: ["Rubber Estate Rice and Curry", "Pineapple Dishes", "Fresh Buffalo Milk", "Traditional Sweets"],
    travelRoute: "From Colombo: Take the A1 highway toward Kandy, turn at Ambepussa (1.5 hours). From Kandy: 1 hour west.",
    imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=600",
    coordinates: { latitude: 7.2513, longitude: 80.3464 }
  },
  {
    id: "kurunegala",
    name: "Kurunegala",
    nameSinhala: "කුරුණෑගල",
    nameTamil: "குருணாகல்",
    province: "North Western",
    description: "Ancient capital with the iconic Elephant Rock.",
    topPlaces: [
      { name: "Ethagala (Elephant Rock)", description: "Iconic rock formation above the city", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" },
      { name: "Ridi Viharaya", description: "Silver temple with Kandyan-era paintings", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Aththanagalla Temple", description: "Ancient temple with meditation caves", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" }
    ],
    hotels: [
      { name: "The Lake House", type: "luxury", description: "Boutique hotel overlooking Kurunegala Lake", priceRange: "$100-200" },
      { name: "City Resort", type: "budget", description: "Clean central hotel", priceRange: "$25-50" }
    ],
    historicalSignificance: "Kurunegala served as the capital of Sri Lanka in the 13th-14th centuries after Polonnaruwa fell. The name comes from the giant rock that resembles an elephant.",
    mustTryFood: ["Kurunegala Kevum", "Mung Ata", "Fresh Water Fish", "Traditional Sweets"],
    travelRoute: "From Colombo: Take the A6 highway (1.5 hours). From Kandy: 1.5 hours via Ambepussa. Accessible by train and bus.",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600",
    coordinates: { latitude: 7.4870, longitude: 80.3649 }
  },
  {
    id: "puttalam",
    name: "Puttalam",
    nameSinhala: "පුත්තලම",
    nameTamil: "புத்தளம்",
    province: "North Western",
    description: "Coastal district with lagoons, salt flats, and the unique Wilpattu park.",
    topPlaces: [
      { name: "Wilpattu National Park", description: "Largest national park with natural lakes", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Kalpitiya", description: "Kitesurfing paradise and dolphin watching", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "St. Anne's Church", description: "Historic Catholic shrine by the lagoon", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" }
    ],
    hotels: [
      { name: "Bar Reef Resort", type: "luxury", description: "Eco-luxury on Kalpitiya peninsula", priceRange: "$200-400" },
      { name: "Dolphin Beach Resort", type: "budget", description: "Kitesurfing camp and accommodation", priceRange: "$30-60" }
    ],
    historicalSignificance: "Puttalam was an important port during the colonial era. The area has a unique mix of Sinhalese, Tamil, and Muslim communities.",
    mustTryFood: ["Lagoon Crab Curry", "Salt Fish", "Puttalam Shrimp", "Palmyrah Products"],
    travelRoute: "From Colombo: Take the A3 highway north (3 hours). From Anuradhapura: 1.5 hours west. Kalpitiya is accessible via a causeway.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 8.0392, longitude: 79.8283 }
  },
  {
    id: "mannar",
    name: "Mannar",
    nameSinhala: "මන්නාරම",
    nameTamil: "மன்னார்",
    province: "Northern",
    description: "Historic island district with unique geography and ancient baobab trees.",
    topPlaces: [
      { name: "Adam's Bridge", description: "Chain of limestone shoals to India", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Giant Baobab Tree", description: "700-year-old African tree", imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400" },
      { name: "Mannar Fort", description: "Portuguese-Dutch colonial fort ruins", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" }
    ],
    hotels: [
      { name: "Mannar Guest House", type: "budget", description: "Simple accommodation in town", priceRange: "$15-30" }
    ],
    historicalSignificance: "Mannar was a key trading post for pearls and horses. The baobab trees were planted by Arab traders. Adam's Bridge is linked to the Ramayana epic.",
    mustTryFood: ["Mannar Crab", "Palmyrah Dishes", "Dried Fish", "Unique Local Curries"],
    travelRoute: "From Colombo: Take the A3 and A14 highways (6 hours). From Anuradhapura: 2 hours via Medawachchiya. The causeway connects Mannar Island to the mainland.",
    imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=600",
    coordinates: { latitude: 8.9810, longitude: 79.9044 }
  },
  {
    id: "vavuniya",
    name: "Vavuniya",
    nameSinhala: "වවුනියාව",
    nameTamil: "வவுனியா",
    province: "Northern",
    description: "Transportation hub and gateway to the Northern Province.",
    topPlaces: [
      { name: "Vavuniya Tank", description: "Ancient irrigation reservoir", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Mamaduwa Temple", description: "Ancient Buddhist temple", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Kandaswamy Kovil", description: "Hindu temple in the town center", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" }
    ],
    hotels: [
      { name: "Cargills Square Hotel", type: "budget", description: "Modern hotel in town center", priceRange: "$25-50" }
    ],
    historicalSignificance: "Vavuniya has been a crossroads for northern Sri Lanka for centuries. It serves as the main entry point to the Jaffna Peninsula.",
    mustTryFood: ["Northern Style Crab", "Jaffna Curry", "Local Rice Dishes", "Fresh Fruits"],
    travelRoute: "From Colombo: Take the A9 highway (5 hours). From Anuradhapura: 1.5 hours. Train service connects Vavuniya to Colombo and Jaffna.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 8.7542, longitude: 80.4982 }
  },
  {
    id: "mullaitivu",
    name: "Mullaitivu",
    nameSinhala: "මුලතිව්",
    nameTamil: "முல்லைத்தீவு",
    province: "Northern",
    description: "Coastal district with pristine beaches and fishing communities.",
    topPlaces: [
      { name: "Mullaitivu Beach", description: "Uncrowded pristine beach", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Vedda Rock Caves", description: "Ancient indigenous cave dwellings", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" },
      { name: "Nandikadal Lagoon", description: "Serene lagoon with birdlife", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" }
    ],
    hotels: [
      { name: "Mullaitivu Rest House", type: "budget", description: "Basic government accommodation", priceRange: "$10-25" }
    ],
    historicalSignificance: "Mullaitivu has a long history as a fishing settlement. The area has seen recent development after the end of the civil conflict.",
    mustTryFood: ["Fresh Seafood", "Northern Crab Curry", "Local Fish Varieties", "Palmyrah Sweets"],
    travelRoute: "From Vavuniya: 2.5 hours via Oddusuddan. From Trincomalee: 4 hours via the coast road. Limited public transport available.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 9.2671, longitude: 80.8142 }
  },
  {
    id: "kilinochchi",
    name: "Kilinochchi",
    nameSinhala: "කිලිනොච්චි",
    nameTamil: "கிளிநொச்சி",
    province: "Northern",
    description: "Agricultural district transitioning from conflict recovery.",
    topPlaces: [
      { name: "Iranamadu Tank", description: "Massive reservoir for irrigation", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Kilinochchi Water Tower", description: "Iconic reconstructed landmark", imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" },
      { name: "Murukandy Temple", description: "Ancient shrine on the A9 highway", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" }
    ],
    hotels: [
      { name: "Kilinochchi Inn", type: "budget", description: "Basic accommodation for travelers", priceRange: "$10-25" }
    ],
    historicalSignificance: "Kilinochchi was historically an agricultural center based on massive ancient tank systems. The area is rebuilding after decades of conflict.",
    mustTryFood: ["Traditional Northern Rice", "Red Rice Dishes", "Local Vegetables", "Palmyrah Products"],
    travelRoute: "From Vavuniya: 1.5 hours north on the A9. From Jaffna: 1.5 hours south on the A9. Located midway on the main highway.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 9.3803, longitude: 80.3770 }
  },
  {
    id: "badulla",
    name: "Badulla",
    nameSinhala: "බදුල්ල",
    nameTamil: "பதுளை",
    province: "Uva",
    description: "Uva province capital with waterfalls, tea estates, and colonial history.",
    topPlaces: [
      { name: "Dunhinda Falls", description: "Spectacular waterfall with mist spray", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Muthiyangana Temple", description: "Ancient Buddhist temple", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Ella Gap", description: "Stunning views of southern plains", imageUrl: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400" }
    ],
    hotels: [
      { name: "Heritance Kandalama", type: "luxury", description: "Geoffrey Bawa masterpiece nearby", priceRange: "$300-600" },
      { name: "Badulla Rest House", type: "budget", description: "Government rest house in town", priceRange: "$15-30" }
    ],
    historicalSignificance: "Badulla was a regional capital under the Kandyan kingdom. The area is famous for the 1818 Uva Rebellion against British rule.",
    mustTryFood: ["Uva Highland Tea", "Upcountry Vegetable Curry", "Fresh Dairy Products", "Pittu"],
    travelRoute: "From Colombo: Take the A4 via Ratnapura and Balangoda (6 hours). From Kandy: 3 hours via Mahiyangana. Scenic train also available.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 6.9934, longitude: 81.0550 }
  },
  {
    id: "monaragala",
    name: "Monaragala",
    nameSinhala: "මොණරාගල",
    nameTamil: "மொணராகலை",
    province: "Uva",
    description: "Rural district with ancient temples and Udawalawe National Park.",
    topPlaces: [
      { name: "Udawalawe National Park", description: "Best elephant viewing in Sri Lanka", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" },
      { name: "Maligawila Buddha", description: "Giant standing Buddha statue", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Buduruwagala Temple", description: "Seven massive rock carvings", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" }
    ],
    hotels: [
      { name: "Grand Udawalawe Safari Resort", type: "luxury", description: "Safari lodge with pool", priceRange: "$150-300" },
      { name: "Elephant Trail Hotel", type: "budget", description: "Near Udawalawe entrance", priceRange: "$30-60" }
    ],
    historicalSignificance: "Monaragala has been inhabited since ancient times with many ruins from the Anuradhapura and Polonnaruwa periods. The giant Buddha statues are unique.",
    mustTryFood: ["Village Style Rice and Curry", "Fresh River Fish", "Wild Game (legal varieties)", "Local Fruits"],
    travelRoute: "From Colombo: Take the A4 highway (5 hours). From Ella: 1.5 hours. From Hambantota: 2 hours via Wellawaya.",
    imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=600",
    coordinates: { latitude: 6.8715, longitude: 81.3487 }
  },
  {
    id: "ampara",
    name: "Ampara",
    nameSinhala: "අම්පාර",
    nameTamil: "அம்பாறை",
    province: "Eastern",
    description: "Eastern district with ancient temples and unspoiled beaches.",
    topPlaces: [
      { name: "Arugam Bay", description: "World-class surfing destination", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" },
      { name: "Deegavapi Stupa", description: "Ancient Buddhist shrine", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Gal Oya National Park", description: "Unique boat safaris on Senanayake Samudra", imageUrl: "https://images.unsplash.com/photo-1540206395-688085723adb?w=400" }
    ],
    hotels: [
      { name: "Gal Oya Lodge", type: "luxury", description: "Eco-luxury in the national park", priceRange: "$300-500" },
      { name: "Arugam Bay Surf Resort", type: "budget", description: "Popular surf camp", priceRange: "$20-50" }
    ],
    historicalSignificance: "Ampara was the site of the ancient Digamadulla kingdom. The Deegavapi stupa is mentioned in Buddhist chronicles as being visited by Buddha.",
    mustTryFood: ["Fresh Lagoon Crab", "Eastern Style Seafood", "Tropical Fruits", "Local Arrack"],
    travelRoute: "From Colombo: Take the A4 highway via Ratnapura and Monaragala (6 hours). From Batticaloa: 2 hours. Accessible via Wellawaya from the hill country.",
    imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600",
    coordinates: { latitude: 7.3018, longitude: 81.6747 }
  },
  {
    id: "matale",
    name: "Matale",
    nameSinhala: "මාතලේ",
    nameTamil: "மாத்தளை",
    province: "Central",
    description: "Spice garden district connecting Kandy and the Cultural Triangle.",
    topPlaces: [
      { name: "Aluvihara Temple", description: "Where Pali Canon was first written", imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=400" },
      { name: "Sri Muthumariamman Temple", description: "Colorful Hindu temple in Matale town", imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" },
      { name: "Sembuwatta Lake", description: "Beautiful lake in the hills", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=400" }
    ],
    hotels: [
      { name: "Taj Kandy", type: "luxury", description: "Nearby luxury option in Kandy", priceRange: "$200-400" },
      { name: "Matale Green View", type: "budget", description: "Guesthouse near spice gardens", priceRange: "$15-30" }
    ],
    historicalSignificance: "Matale was the site of the 1848 Matale Rebellion against British rule. The Aluvihara temple is one of the most important sites in Buddhist history.",
    mustTryFood: ["Fresh Spices and Curry", "Matale Kokis", "Traditional Sweets", "Spice-infused Tea"],
    travelRoute: "From Kandy: 30 minutes north on the A9. From Colombo: 3 hours via Kurunegala. From Sigiriya: 1.5 hours south.",
    imageUrl: "https://images.unsplash.com/photo-1562696271-05800309c6e7?w=600",
    coordinates: { latitude: 7.4675, longitude: 80.6234 }
  }
];

export const provinces = [
  "Western", "Southern", "Central", "North Central", "Eastern", 
  "Northern", "North Western", "Uva", "Sabaragamuwa"
];

export const getDistrictById = (id: string): District | undefined => {
  return districts.find(d => d.id === id);
};

export const getDistrictsByProvince = (province: string): District[] => {
  return districts.filter(d => d.province === province);
};

export const searchDistricts = (query: string): District[] => {
  const lowerQuery = query.toLowerCase();
  return districts.filter(d => 
    d.name.toLowerCase().includes(lowerQuery) ||
    d.nameSinhala.includes(query) ||
    d.nameTamil.includes(query) ||
    d.description.toLowerCase().includes(lowerQuery)
  );
};
