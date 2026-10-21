import type { District } from '../types/transitwise';
import { additionalDistricts } from './additionalDistricts';

export const tamilNaduDistricts: District[] = [
  {
    "id": "chennai",
    "name": "Chennai",
    "nameInTamil": "சென்னை",
    "region": "north",
    "description": "Capital of Tamil Nadu, 400-year-old metropolis on the Coromandel Coast renowned for Marina Beach, Dravidian temples, and colonial heritage.",
    "population": "7.1 Million",
    "famousFor": [
      "Marina Beach",
      "Kapaleeshwarar Temple",
      "San Thome Basilica",
      "South Indian Filter Coffee"
    ],
    "districtHQ": "Chennai",
    "spots": [
      {
        "id": "marina-beach",
        "name": "Marina Beach",
        "nameInTamil": "மெரினா கடற்கரை",
        "type": "beach",
        "description": "The world's second-longest natural urban beach stretching 13 km along the Bay of Bengal, famous for vibrant evening breezes, iconic statues, lighthouse, and local sundal snacks.",
        "translations": {
          "fr": "Deuxième plus longue plage urbaine naturelle au monde s'étendant sur 13 km le long du golfe du Bengale.",
          "de": "Zweitlängster natürlicher Stadtstrand der Welt mit 13 km Länge am Golf von Bengalen.",
          "ja": "ベンガル湾に沿って13km続く世界第2の長さを誇る都市自然海岸。",
          "zh": "沿孟加拉湾延伸13公里的世界第二长天然城市海滩。",
          "ar": "ثاني أطول شاطئ حضري طبيعي في العالم يمتد 13 كم على طول خليج البنغال.",
          "hi": "बंगाल की खाड़ी के किनारे 13 किमी लंबा दुनिया का दूसरा सबसे बड़ा प्राकृतिक शहरी समुद्र तट।",
          "es": "La segunda playa urbana natural más larga del mundo que se extiende 13 km."
        },
        "timings": "Open 24 hours | Lighthouse: 10:00 AM – 1:00 PM & 3:00 PM – 5:00 PM (Monday closed)",
        "entryFee": "Free (Lighthouse elevator: ₹20)",
        "bestTimeToVisit": "October to March (Early mornings 6:00 AM – 8:30 AM or sunsets)",
        "crowdLevel": "high",
        "rating": 4.5,
        "reviewCount": 98400,
        "aiTip": "Swimming is strictly banned due to dangerous underwater undercurrents. Take the elevator to the top of Chennai Lighthouse for an aerial view of the coastline.",
        "nearbyHotels": [
          {
            "id": "taj-coromandel",
            "name": "Taj Coromandel Chennai",
            "stars": 5,
            "pricePerNight": "₹8,500 – ₹18,000",
            "distanceFromSpot": "4.5 km",
            "transitScore": 92,
            "amenities": [
              "Luxury Pool",
              "Signature Spas",
              "Fine Dining",
              "WiFi"
            ],
            "address": "Mahatma Gandhi Road, Nungambakkam",
            "phone": "+91 44 6600 2827"
          },
          {
            "id": "radisson-blu-grt-chennai",
            "name": "Radisson Blu Hotel GRT Chennai",
            "stars": 5,
            "pricePerNight": "₹7,200 – ₹14,000",
            "distanceFromSpot": "11 km",
            "transitScore": 94,
            "amenities": [
              "Airport Shuttle",
              "Pool",
              "Spa",
              "Restaurant"
            ],
            "address": "GST Road, Chennai",
            "phone": "+91 44 2231 0101"
          },
          {
            "id": "la-woods-marina",
            "name": "La Woods Hotel",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "2.1 km",
            "transitScore": 89,
            "amenities": [
              "AC Rooms",
              "Multi-Cuisine Restaurant",
              "WiFi",
              "Travel Desk"
            ],
            "address": "Woods Road, Mount Road, Chennai",
            "phone": "+91 44 4297 7777"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "MRTS Elevated Railway to Light House / Thiruvallikeni Station",
            "duration": "5 min walk to beach",
            "fare": "₹5",
            "frequency": "Every 15 min",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "MTC Bus Route 21G, 102, 19B from Central / Broadway",
            "duration": "20 min",
            "fare": "₹15",
            "frequency": "Every 5 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Ola / Uber / Rapido Auto from Central Station",
            "duration": "15 min",
            "fare": "₹80 – ₹110",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 13.0499,
          "lng": 80.2824
        }
      },
      {
        "id": "kapaleeshwarar-temple",
        "name": "Arulmigu Kapaleeshwarar Temple",
        "nameInTamil": "கபாலீஸ்வரர் கோவில் (மயிலாப்பூர்)",
        "type": "temple",
        "description": "Iconic 7th-century Dravidian architectural temple dedicated to Lord Shiva in Mylapore. Celebrated for its 37-meter rainbow-hued Gopuram adorned with hundreds of mythological stucco sculptures and a sacred temple tank.",
        "translations": {
          "fr": "Joyau architectural dravidien du VIIe siècle avec son gopuram multicolore de 37m et bassin sacré.",
          "de": "Dravidisches Meisterwerk aus dem 7. Jahrhundert mit 37m hohem farbenfrohem Torturm.",
          "ja": "無数の色彩彫刻で飾られた高さ37mの塔門を持つ7世紀ドラヴィダ様式のシヴァ寺院。",
          "zh": "7世纪德拉威建筑的杰出代表，拥有37米高五彩雕像密布的宏伟塔门和圣水池。",
          "ar": "تحفة العمارة الدرافيدية من القرن السابع مع برج ملون بارتفاع 37 متراً وبحيرة مقدسة.",
          "hi": "7वीं सदी का भव्य द्रविड़ शैली का शिव मंदिर, 37 मीटर ऊंचा रंग-बिरंगा गोपुरम और पवित्र सरोवर।",
          "es": "Joya de la arquitectura dravídica del siglo VII con su gopuram multicolor de 37m."
        },
        "timings": "5:30 AM – 12:30 PM & 4:00 PM – 9:00 PM (Monday evening special pujas)",
        "entryFee": "Free (Special Darshan: ₹50)",
        "bestTimeToVisit": "October to March (Panguni Peruvizha in March/April features the grand 63 Nayanmars Arupathimoovar procession)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 64200,
        "aiTip": "Take a clockwise walk around the temple tank. Try the fresh ghee filter coffee and crispy ghee roast dosa at Rayar's Mess nearby.",
        "dresscode": "Traditional Indian temple attire: Dhoti or formal trousers for men; Saree, Churidar with dupatta for women. Shoes must be deposited at footwear counters outside.",
        "nearbyHotels": [
          {
            "id": "the-park-chennai",
            "name": "The Park Chennai",
            "stars": 5,
            "pricePerNight": "₹6,500 – ₹12,000",
            "distanceFromSpot": "3.2 km",
            "transitScore": 94,
            "amenities": [
              "Pool",
              "Rooftop Bar",
              "Fine Dining",
              "Spa"
            ],
            "address": "Anna Salai, Chennai",
            "phone": "+91 44 4267 6000"
          },
          {
            "id": "footprint-mylapore",
            "name": "Hotel Savera Chennai",
            "stars": 4,
            "pricePerNight": "₹4,500 – ₹7,800",
            "distanceFromSpot": "1.4 km",
            "transitScore": 92,
            "amenities": [
              "Pool",
              "Malgudi South Indian Restaurant",
              "Bar",
              "Gym"
            ],
            "address": "Dr. Radhakrishnan Salai, Mylapore",
            "phone": "+91 44 2811 4700"
          },
          {
            "id": "hotel-comfort-mylapore",
            "name": "New Woodlands Hotel",
            "stars": 3,
            "pricePerNight": "₹2,500 – ₹4,200",
            "distanceFromSpot": "1.2 km",
            "transitScore": 91,
            "amenities": [
              "Iconic Pure Veg Dining",
              "AC Rooms",
              "WiFi"
            ],
            "address": "Dr. Radhakrishnan Road, Mylapore",
            "phone": "+91 44 2811 3111"
          }
        ],
        "transport": [
          {
            "mode": "metro",
            "label": "Chennai Metro Blue Line to AG-DMS Station + 7 min auto",
            "duration": "15 min",
            "fare": "₹20",
            "frequency": "Every 5 min",
            "icon": "🚇"
          },
          {
            "mode": "train",
            "label": "MRTS Train to Thirumayilai (Mylapore) Station",
            "duration": "5 min walk to temple",
            "fare": "₹5",
            "frequency": "Every 15 min",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "MTC Bus Route 12G, 29C, 27D directly to Mylapore Tank",
            "duration": "20 min",
            "fare": "₹12",
            "frequency": "Every 5 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 13.0336,
          "lng": 80.2697
        }
      },
      {
        "id": "san-thome-basilica",
        "name": "San Thome Cathedral Basilica",
        "nameInTamil": "சாந்தோம் பேராலயம்",
        "type": "pilgrimage",
        "description": "Neo-Gothic Roman Catholic minor basilica built over the authentic tomb of St. Thomas the Apostle, who brought Christianity to India in 52 AD. One of only three basilicas in the entire world built over an apostle's tomb (along with St. Peter's in Rome and Santiago de Compostela in Spain).",
        "translations": {
          "fr": "L'une des trois seules basiliques au monde construites sur le tombeau d'un apôtre du Christ.",
          "de": "Eine von nur drei Basiliken weltweit, die über dem Grab eines Apostels Jesu Christi erbaut wurden.",
          "ja": "イエスの使徒トマスの墓の上に建つ世界に3つしかない大聖堂の一つ。",
          "zh": "世界上仅有的三座建在耶稣十二宗徒墓穴之上的大圣殿之一。",
          "ar": "واحدة من ثلاث كنائس فقط في العالم مبنية فوق قبر أحد رسل المسيح.",
          "hi": "ईसा मसीह के प्रेरित सेंट थॉमस के पवित्र मकबरे पर निर्मित विश्व की तीन बेसिलिकाओं में से एक।",
          "es": "Una de las tres únicas basílicas del mundo construidas sobre la tumba de un apóstol."
        },
        "timings": "6:00 AM – 9:00 PM (Tomb chapel open all day)",
        "entryFee": "Free (Museum: Free)",
        "bestTimeToVisit": "Year-round (Feast of St. Thomas in July and Christmas)",
        "crowdLevel": "moderate",
        "rating": 4.7,
        "reviewCount": 38500,
        "aiTip": "Visit the underground crypt chapel containing the relic bone of St. Thomas and the historic museum displaying 1st-century artifacts and the lance that pierced the saint.",
        "nearbyHotels": [
          {
            "id": "leela-palace-chennai",
            "name": "The Leela Palace Chennai",
            "stars": 5,
            "pricePerNight": "₹12,000 – ₹24,000",
            "distanceFromSpot": "1.8 km",
            "transitScore": 95,
            "amenities": [
              "Seafront Palace",
              "Infinity Pool",
              "Luxury Spa",
              "Fine Dining"
            ],
            "address": "Adyar Seaface, MRC Nagar, Chennai",
            "phone": "+91 44 3366 1234"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "MTC Bus Route 6D, 21G directly to San Thome Church",
            "duration": "15 min from Central",
            "fare": "₹12",
            "frequency": "Every 5 min",
            "icon": "🚌"
          },
          {
            "mode": "walk",
            "label": "Walk along South Marina Beach Promenade",
            "duration": "10 min walk from Light House",
            "fare": "Free",
            "icon": "🚶"
          }
        ],
        "coordinates": {
          "lat": 13.0333,
          "lng": 80.2783
        }
      }
    ]
  },
  {
    "id": "madurai",
    "name": "Madurai",
    "nameInTamil": "மதுரை",
    "region": "south",
    "description": "The Soul of Tamil Nadu and one of the world's oldest continuously inhabited cities (over 2,500 years), famous for Meenakshi Amman Temple, jasmine flowers, and non-stop street food culture.",
    "population": "1.5 Million",
    "famousFor": [
      "Meenakshi Amman Temple",
      "Madurai Malli (Jasmine)",
      "Thirumalai Nayakkar Palace",
      "Jigarthanda Drink"
    ],
    "districtHQ": "Madurai",
    "spots": [
      {
        "id": "meenakshi-temple",
        "name": "Arulmigu Meenakshi Sundareswarar Temple",
        "nameInTamil": "மீனாட்சி அம்மன் கோவில்",
        "type": "temple",
        "description": "Crown jewel of Dravidian architecture spanning 14 acres with 14 towering gopurams (tallest southern tower 52m), covered with 33,000 brightly painted mythological sculptures, the Hall of Thousand Pillars, and Golden Lotus sacred tank.",
        "translations": {
          "fr": "Joyau de l'art dravidien avec 14 gopurams colossaux ornés de 33 000 sculptures et salle des 1000 piliers.",
          "de": "Kronjuwel dravidischer Baukunst mit 14 gewaltigen Tortürmen und 33.000 Statuen.",
          "ja": "3万3000体もの極彩色彫刻で覆われた14の巨大塔門と千柱堂を誇る世界屈指の寺院。",
          "zh": "德拉威建筑的最高杰作，占地14英亩，拥有14座塔门和33000尊彩色神像雕塑。",
          "ar": "جوهرة العمارة الدرافيدية مع 14 برجاً شاهقاً مزينة بـ 33 ألف تمثال وقاعة الألف عمود.",
          "hi": "द्रविड़ स्थापत्य का विश्व प्रसिद्ध शिरोमणि, 14 विशाल गोपुरम, 33,000 मूर्तियाँ और सहस्र स्तंभ मंडप।",
          "es": "Joya de la arquitectura dravídica con 14 torres monumentales y 33.000 esculturas."
        },
        "timings": "5:00 AM – 12:30 PM & 4:00 PM – 10:00 PM",
        "entryFee": "Free (Thousand Pillar Hall Museum: ₹50)",
        "bestTimeToVisit": "October to March (Chithirai Festival in April draws over 1 million devotees)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 92400,
        "aiTip": "Don't miss the night closing ceremony (Palliarai Puja at 9:00 PM) when Lord Shiva is carried on a silver palanquin with musical horns to Goddess Meenakshi's chamber.",
        "dresscode": "Strict Hindu temple dress code: Dhoti/Kurta for men, Saree or Salwar with Dupatta for women. Mobile phones are banned inside (deposit counters at East Gate).",
        "nearbyHotels": [
          {
            "id": "heritage-madurai",
            "name": "Heritage Madurai",
            "stars": 5,
            "pricePerNight": "₹7,500 – ₹14,000",
            "distanceFromSpot": "4.5 km",
            "transitScore": 90,
            "amenities": [
              "Temple Architecture Pool",
              "Ayurveda Spa",
              "Fine Dining",
              "Gardens"
            ],
            "address": "Kochadai, Madurai",
            "phone": "+91 452 238 5455"
          },
          {
            "id": "gateway-hotel-madurai",
            "name": "The Gateway Hotel Pasumalai (IHCL)",
            "stars": 5,
            "pricePerNight": "₹6,500 – ₹13,000",
            "distanceFromSpot": "5.2 km",
            "transitScore": 89,
            "amenities": [
              "Hilltop View",
              "Peacocks in Garden",
              "Pool",
              "Fine Dining"
            ],
            "address": "Pasumalai, Madurai",
            "phone": "+91 452 663 3000"
          },
          {
            "id": "hotel-supreme-madurai",
            "name": "Hotel Supreme Madurai",
            "stars": 3,
            "pricePerNight": "₹2,000 – ₹3,500",
            "distanceFromSpot": "0.8 km",
            "walkTime": "10 min walk",
            "transitScore": 95,
            "amenities": [
              "Rooftop Temple View Dining",
              "AC",
              "WiFi"
            ],
            "address": "West Perumal Maistry Street, Madurai",
            "phone": "+91 452 234 3151"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Madurai Junction Railway Station",
            "duration": "7 min",
            "fare": "₹50 – ₹80",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "Direct Bus from Periyar Bus Stand to Temple East Gate",
            "duration": "8 min",
            "fare": "₹10",
            "frequency": "Every 3 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 9.9195,
          "lng": 78.1193
        }
      },
      {
        "id": "thirumalai-nayakkar-palace",
        "name": "Thirumalai Nayakkar Mahal",
        "nameInTamil": "திருமலை நாயக்கர் மகால்",
        "type": "heritage",
        "description": "17th-century royal palace built in 1636 AD by King Thirumalai Nayak, fusing classical Italian architectural grandeur with Dravidian stone craft. Famous for giant 20m stucco pillars and nightly sound-and-light shows.",
        "translations": {
          "fr": "Palais royal du XVIIe siècle mêlant styles dravidien et italien avec dôme de 25m.",
          "de": "Königspalast aus dem 17. Jahrhundert, Mischung aus dravidischer und italienischer Kunst.",
          "ja": "17世紀に建てられたイタリアとドラヴィダ様式が融合した壮大な王宮。巨大な列柱。",
          "zh": "建于1636年的皇家宫殿，融合了意大利文艺复兴风格与德拉威传统石雕艺术。",
          "ar": "قصر ملكي من القرن السابع عشر يمزج بين العمارة الإيطالية والدرافيدية مع أعمدة عملاقة.",
          "hi": "17वीं सदी का भव्य महल, जिसमें द्रविड़ और इतालवी वास्तुकला का अनुपम संगम दिखता है।",
          "es": "Palacio real del siglo XVII que fusiona los estilos dravídico e italiano con pilares de 20m."
        },
        "timings": "9:00 AM – 5:00 PM | Light & Sound Show: English 6:45 PM, Tamil 8:00 PM",
        "entryFee": "₹10 for Indians, ₹100 for Foreigners (Show: ₹50)",
        "bestTimeToVisit": "Year-round (Evenings for Light & Sound show)",
        "crowdLevel": "moderate",
        "rating": 4.6,
        "reviewCount": 38200,
        "aiTip": "Sample the legendary Famous Jigarthanda (chilled milk beverage with almond gum, nannari syrup, and ice cream) right opposite the palace gate.",
        "nearbyHotels": [
          {
            "id": "hotel-germanus-madurai",
            "name": "Hotel Germanus",
            "stars": 4,
            "pricePerNight": "₹3,500 – ₹5,800",
            "distanceFromSpot": "2.5 km",
            "transitScore": 91,
            "amenities": [
              "Multi-cuisine Restaurant",
              "AC",
              "Bar",
              "Travel Desk"
            ],
            "address": "Bypass Road, Madurai",
            "phone": "+91 452 439 8888"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Meenakshi Temple South Gate",
            "duration": "5 min",
            "fare": "₹40 – ₹60",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 9.915,
          "lng": 78.1239
        }
      },
      {
        "id": "alagar-kovil-pazhamudhircholai",
        "name": "Alagar Kovil & Pazhamudhircholai Murugan Temple",
        "nameInTamil": "அழகர் கோவில் & பழமுதிர்ச்சோலை",
        "type": "pilgrimage",
        "description": "Sacred hilltop dual pilgrimage in Alagar hills 21 km from Madurai. Features Kallazhagar (Vishnu) temple with exquisite golden ornaments and Pazhamudhircholai Murugan temple (the sixth sacred Arupadaiveedu) amidst lush natural springs.",
        "translations": {
          "fr": "Double sanctuaire sacré perché dans les collines d'Alagar abritant le 6e Arupadaiveedu.",
          "de": "Heiliges Bergheiligtum in den Alagar-Bergen mit dem 6. Murugan-Arupadaiveedu-Tempel.",
          "ja": "緑豊かなアラガル丘陵にあるヴィシュヌ寺院とムルガン神第6聖殿の巡礼地。",
          "zh": "坐落在阿拉加尔山丘上的双重神圣圣殿，包含穆鲁干神第六大圣所和毗湿奴古庙。",
          "ar": "ملاذ جبلي مقدس يضم المعبد السادس للإله موروغان ومعبد فيشنو وسط ينابيع طبيعية.",
          "hi": "अलगर पहाड़ियों में स्थित भगवान विष्णु का मंदिर और मुरुगन का छठा अरुपदैवीडु तीर्थ।",
          "es": "Doble santuario sagrado en las colinas de Alagar que alberga el sexto Arupadaiveedu."
        },
        "timings": "6:00 AM – 12:30 PM & 4:00 PM – 8:00 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "October to March (Chithirai festival when Kallazhagar enters the Vaigai river)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 36200,
        "aiTip": "Take the scenic green bus ride from the base temple up the hill to Pazhamudhircholai. Drink the sweet mineral water at the sacred mountain spring Noopura Gangai.",
        "dresscode": "Traditional temple dress code.",
        "nearbyHotels": [
          {
            "id": "hotel-madurai-residency",
            "name": "The Madurai Residency",
            "stars": 3,
            "pricePerNight": "₹2,500 – ₹4,000",
            "distanceFromSpot": "18 km",
            "transitScore": 90,
            "amenities": [
              "Pure Veg Dining",
              "Rooftop Lounge",
              "AC"
            ],
            "address": "West Marret Street, Madurai",
            "phone": "+91 452 234 3140"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Direct Bus Route 44 from Madurai Periyar Bus Stand to Alagar Kovil",
            "duration": "45 min",
            "fare": "₹25",
            "frequency": "Every 15 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Cab from Madurai City Center",
            "duration": "35 min",
            "fare": "₹500 – ₹700",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 10.0767,
          "lng": 78.2167
        }
      }
    ]
  },
  {
    "id": "thanjavur",
    "name": "Thanjavur",
    "nameInTamil": "தஞ்சாவூர்",
    "region": "central",
    "description": "The Rice Bowl of Tamil Nadu and golden capital of the Chola Empire, home to the UNESCO World Heritage Brihadeeswarar Big Temple, Saraswathi Mahal Library, and Thanjavur art plates.",
    "population": "0.22 Million",
    "famousFor": [
      "Brihadeeswarar Temple (UNESCO)",
      "Thanjavur Paintings",
      "Saraswathi Mahal Library",
      "Thanjavur Art Plates",
      "Dancing Dolls (Thalayanatti Bommai)"
    ],
    "districtHQ": "Thanjavur",
    "spots": [
      {
        "id": "brihadeeswarar-temple",
        "name": "Brihadeeswarar Temple (The Big Temple)",
        "nameInTamil": "பெருவுடையார் கோவில் (தஞ்சை பெரிய கோவில்)",
        "type": "heritage",
        "description": "UNESCO World Heritage Masterpiece constructed in 1010 AD by Emperor Rajaraja Chola I entirely from granite. Features a 66-meter monolithic pyramidal tower (Vimana) capped with an 80-tonne single granite cupola and a 20-tonne Nandi.",
        "translations": {
          "fr": "Chef-d'œuvre Chola classé à l'UNESCO construit en 1010 avec une coupole de granit de 80 tonnes.",
          "de": "UNESCO-Weltkulturerbe aus dem Jahr 1010 n. Chr. mit 80-Tonnen-Granitkuppel.",
          "ja": "西暦1010年に完全花崗岩で築かれたユネスコ世界遺産の壮麗な大寺院。80トンの頂上巨石。",
          "zh": "联合国教科文组织世界遗产，公元1010年全由花岗岩建造，顶峰重达80吨整块巨石。",
          "ar": "تحفة التراث العالمي لليونسكو بنيت عام 1010م مع قبة جرانيتية تزن 80 طناً.",
          "hi": "1010 ई. में सम्राट राजराज चोल द्वारा निर्मित यूनेस्को विश्व धरोहर \"बड़ा मंदिर\", 80 टन का अखंड ग्रेनाइट गुंबद।",
          "es": "Obra maestra del Patrimonio de la Humanidad construida en 1010 con cúpula de 80 toneladas."
        },
        "timings": "6:00 AM – 12:30 PM & 4:00 PM – 8:30 PM",
        "entryFee": "Free (ASI Protected Monument)",
        "bestTimeToVisit": "October to March (Evening lighting at 6:30 PM makes the golden granite glow)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 88400,
        "aiTip": "The shadow of the temple spire never falls outside the base at noon. Inspect the 11th-century fresco murals hidden in the inner circumambulatory corridor.",
        "dresscode": "Respectful attire for temple entry. Footwear must be removed before entering the vast stone courtyard.",
        "nearbyHotels": [
          {
            "id": "ideal-river-view",
            "name": "Ideal River View Resort",
            "stars": 4,
            "pricePerNight": "₹4,800 – ₹8,500",
            "distanceFromSpot": "5.2 km",
            "transitScore": 88,
            "amenities": [
              "Riverfront Cottages",
              "Pool",
              "Ayurveda Spa",
              "Restaurant"
            ],
            "address": "Vennar Bank, Palli Agraharam, Thanjavur",
            "phone": "+91 4362 250 533"
          },
          {
            "id": "hotel-parisutham",
            "name": "Hotel Parisutham",
            "stars": 4,
            "pricePerNight": "₹3,500 – ₹6,200",
            "distanceFromSpot": "1.4 km",
            "transitScore": 92,
            "amenities": [
              "Pool",
              "Bar",
              "Multi-Cuisine Dining",
              "Travel Desk"
            ],
            "address": "Grand Anicut Canal Road, Thanjavur",
            "phone": "+91 4362 231 801"
          },
          {
            "id": "hotel-orient-thanjavur",
            "name": "Hotel Gnanam",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "1.8 km",
            "transitScore": 90,
            "amenities": [
              "Pure Veg Restaurant",
              "AC",
              "WiFi"
            ],
            "address": "Market Road, Thanjavur",
            "phone": "+91 4362 278 505"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Thanjavur Junction Railway Station",
            "duration": "8 min",
            "fare": "₹60 – ₹80",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "Town Bus from New Bus Stand to Big Temple Gate",
            "duration": "12 min",
            "fare": "₹10",
            "frequency": "Every 5 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 10.7828,
          "lng": 79.1318
        }
      },
      {
        "id": "thanjavur-royal-palace",
        "name": "Thanjavur Maratha Palace & Saraswathi Mahal Library",
        "nameInTamil": "தஞ்சாவூர் மராட்டிய அரண்மனை & சரஸ்வதி மஹால்",
        "type": "heritage",
        "description": "16th-century royal palace complex built by Nayak and Maratha rulers. Houses the world-renowned Saraswathi Mahal Library (one of the oldest libraries in Asia with 60,000 ancient palm-leaf manuscripts), royal art gallery, and 7-story bell tower.",
        "translations": {
          "fr": "Complexe palatial royal abritant l'une des plus anciennes bibliothèques de manuscrits d'Asie.",
          "de": "Königlicher Palastkomplex mit einer der ältesten Manuskriptbibliotheken Asiens.",
          "ja": "アジア最古の写本図書館サララスヴァティ・マハルを擁する16世紀の王宮群。",
          "zh": "16世纪王宫建筑群，内藏亚洲最古老的萨拉斯瓦蒂·马哈尔古籍手稿图书馆。",
          "ar": "مجمع قصر ملكي يضم واحدة من أقدم مكتبات المخطوطات القديمة في آسيا.",
          "hi": "16वीं सदी का मराठा राजमहल और एशिया के सबसे पुराने सरस्वती महल पांडुलिपि पुस्तकालय का घर।",
          "es": "Palacio real del siglo XVI que alberga una de las bibliotecas de manuscritos más antiguas de Asia."
        },
        "timings": "10:00 AM – 1:00 PM & 1:30 PM – 5:30 PM (Wednesday closed)",
        "entryFee": "₹50 for Indian Tourists, ₹200 for Foreigners",
        "bestTimeToVisit": "Year-round",
        "crowdLevel": "moderate",
        "rating": 4.6,
        "reviewCount": 32100,
        "aiTip": "See the rare Chola bronze sculptures of dancing Nataraja in the Art Gallery. Buy authentic handcrafted Thanjavur Dancing Dolls from the artisan shops in the courtyard.",
        "nearbyHotels": [
          {
            "id": "hotel-tanjore-inn",
            "name": "Svatma Heritage Luxury Hotel",
            "stars": 5,
            "pricePerNight": "₹11,000 – ₹22,000",
            "distanceFromSpot": "2.5 km",
            "transitScore": 94,
            "amenities": [
              "Luxury Heritage Resort",
              "Carnatic Concerts",
              "Vegetarian Gourmet",
              "Spa"
            ],
            "address": "Blake High School Road, Thanjavur",
            "phone": "+91 4362 273 222"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Big Temple to Palace",
            "duration": "6 min",
            "fare": "₹50 – ₹60",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 10.7933,
          "lng": 79.1367
        }
      }
    ]
  },
  {
    "id": "ooty-nilgiris",
    "name": "The Nilgiris (Ooty)",
    "nameInTamil": "நீலகிரி (ஊட்டி)",
    "region": "nilgiris",
    "description": "The \"Queen of Hill Stations\" in the Blue Mountains at 2,240m altitude, famous for UNESCO Nilgiri Mountain Railway, aromatic tea estates, and eucalyptus mist.",
    "population": "0.73 Million",
    "famousFor": [
      "Toy Train (UNESCO)",
      "Ooty Botanical Garden",
      "Doddabetta Peak",
      "Nilgiri Tea & Homemade Chocolates"
    ],
    "districtHQ": "Udhagamandalam (Ooty)",
    "spots": [
      {
        "id": "ooty-botanical-garden",
        "name": "Government Botanical Garden & Ooty Lake",
        "nameInTamil": "அரசு தாவரவியல் பூங்கா & ஊட்டி ஏரி",
        "type": "nature",
        "description": "Established in 1848 over 55 sprawling terraced acres on the lower Doddabetta peak, featuring over 1,000 exotic species of flora, a 20-million-year-old fossilized tree trunk, Italian floral terraces, and nearby boating lake.",
        "translations": {
          "fr": "Jardin botanique fondé en 1848 sur 22 hectares avec un arbre fossilisé de 20 millions d'années.",
          "de": "Botanischer Garten von 1848 mit über 1000 seltenen Pflanzenarten und 20 Mio. Jahre altem Baumfossil.",
          "ja": "1848年設立の広大な植物園。樹齢2000万年の化石樹木と湖のボート遊び。",
          "zh": "始建于1848年的高山植物园，拥有珍稀植物和拥有2000万年历史的树木化石。",
          "ar": "حديقة نباتية تأسست عام 1848 تضم شجرة متحجرة عمرها 20 مليون عام.",
          "hi": "1848 में स्थापित 55 एकड़ का बॉटनिकल गार्डन और 2 करोड़ वर्ष पुराना जीवाश्म वृक्ष।",
          "es": "Jardín botánico fundado en 1848 con más de 1000 especies exóticas y árbol fosilizado."
        },
        "timings": "7:00 AM – 6:30 PM",
        "entryFee": "₹40 for Adults, ₹20 for Children (Camera: ₹50)",
        "bestTimeToVisit": "April to June (Annual Flower Show in May) and September to November",
        "crowdLevel": "high",
        "rating": 4.6,
        "reviewCount": 68500,
        "aiTip": "Walk to the upper Toda tribal hillock inside the garden for a glimpse of an authentic Toda tribal hut. Carry a light jacket as evening temperatures drop quickly.",
        "nearbyHotels": [
          {
            "id": "savoy-ooty",
            "name": "Savoy – IHCL SeleQtions Ooty",
            "stars": 5,
            "pricePerNight": "₹9,500 – ₹18,500",
            "distanceFromSpot": "2.5 km",
            "transitScore": 92,
            "amenities": [
              "Heritage Cottages",
              "Fireplace in Rooms",
              "Spa",
              "Fine Dining"
            ],
            "address": "Sylks Road, Ooty",
            "phone": "+91 423 222 5500"
          },
          {
            "id": "sinclairs-retreat",
            "name": "Sinclairs Retreat Ooty",
            "stars": 4,
            "pricePerNight": "₹5,200 – ₹9,000",
            "distanceFromSpot": "5.5 km",
            "transitScore": 86,
            "amenities": [
              "Panoramic Valley View",
              "Gym",
              "Restaurant",
              "Gardens"
            ],
            "address": "Gorishola Road, Ooty",
            "phone": "+91 423 244 1378"
          },
          {
            "id": "reflections-guest-house",
            "name": "Hotel Willow Hill Ooty",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "1.2 km",
            "transitScore": 90,
            "amenities": [
              "Lake View",
              "Cozy Rooms",
              "Restaurant",
              "WiFi"
            ],
            "address": "Upper Hill Road, Ooty",
            "phone": "+91 423 244 4037"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "UNESCO Nilgiri Mountain Toy Train from Mettupalayam to Ooty (UAM)",
            "duration": "4.5 hrs scenic ride",
            "fare": "₹200 – ₹600",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "TNSTC Ghat Bus from Coimbatore / Mettupalayam",
            "duration": "3 hrs",
            "fare": "₹85",
            "frequency": "Every 15 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Ooty Central Bus Stand / Railway Station",
            "duration": "6 min",
            "fare": "₹70 – ₹90",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 11.4178,
          "lng": 76.7118
        }
      },
      {
        "id": "nilgiri-mountain-railway",
        "name": "Nilgiri Mountain Railway (UNESCO Toy Train) & Doddabetta",
        "nameInTamil": "நீலகிரி மலை ரயில் (யுனெஸ்கோ) & தொட்டபெட்டா",
        "type": "heritage",
        "description": "UNESCO World Heritage mountain railway built in 1908 using the Abt rack-and-pinion system. The charming blue-and-yellow steam toy train traverses 16 tunnels, 250 stone bridges, and 208 curves up into the misty Nilgiri tea hills.",
        "translations": {
          "fr": "Train à vapeur historique classé à l'UNESCO grimpant à travers 16 tunnels et 250 ponts.",
          "de": "UNESCO-Weltkulturerbe der historischen Schmalspur-Dampfeisenbahn über 250 Brücken.",
          "ja": "ユネスコ世界遺産の青い蒸気山岳鉄道（トイトレイン）。16のトンネルと250の橋を越える。",
          "zh": "联合国教科文组织世界遗产高山蒸汽小火车，穿越16座隧道和250座古桥。",
          "ar": "قطار الجبل البخاري المصنف ضمن التراث العالمي لليونسكو يعبر 16 نفقاً و250 جسراً.",
          "hi": "यूनेस्को विश्व धरोहर नीलगिरि माउंटेन टॉय ट्रेन, 16 सुरंगों और 250 पुलों से गुजरती भाप ट्रेन।",
          "es": "Tren de vapor de montaña declarado Patrimonio de la Humanidad por la UNESCO."
        },
        "timings": "Daily departures: Mettupalayam to Ooty (7:10 AM) | Ooty to Coonoor trips run 4 times daily",
        "entryFee": "₹30 – ₹205 (First Class: ₹470 – ₹600, advance booking via IRCTC recommended)",
        "bestTimeToVisit": "Year-round (Crystal clear views from October to March)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 72100,
        "aiTip": "Book tickets 120 days in advance on IRCTC as seats sell out instantly. If unreserved, stand in the early morning counter queue at Ooty or Coonoor station.",
        "nearbyHotels": [
          {
            "id": "gateway-coonoor",
            "name": "Gateway Coonoor – IHCL SeleQtions",
            "stars": 5,
            "pricePerNight": "₹8,500 – ₹16,000",
            "distanceFromSpot": "18 km",
            "transitScore": 92,
            "amenities": [
              "Heritage British Estate",
              "Fine Dining",
              "Spa",
              "Tea Walks"
            ],
            "address": "Upper Coonoor",
            "phone": "+91 423 222 5400"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Board train directly at Ooty, Coonoor, or Mettupalayam stations",
            "duration": "Scenic experience",
            "fare": "₹30 – ₹600",
            "icon": "🚆"
          }
        ],
        "coordinates": {
          "lat": 11.4056,
          "lng": 76.7028
        }
      }
    ]
  },
  {
    "id": "kanyakumari",
    "name": "Kanyakumari",
    "nameInTamil": "கன்னியாகுமரி",
    "region": "south",
    "description": "Lands End at the southernmost tip of mainland India where the Indian Ocean, Arabian Sea, and Bay of Bengal unite. Renowned for Vivekananda Rock Memorial, Thiruvalluvar Statue, and simultaneous sunset & moonrise.",
    "population": "0.23 Million",
    "famousFor": [
      "Vivekananda Rock Memorial",
      "133-ft Thiruvalluvar Statue",
      "Triveni Sangam Sunset",
      "Bhagavathy Amman Temple",
      "Multi-colored Sand"
    ],
    "districtHQ": "Nagercoil",
    "spots": [
      {
        "id": "vivekananda-rock",
        "name": "Vivekananda Rock Memorial & Thiruvalluvar Statue",
        "nameInTamil": "விவேகானந்தர் பாறை & திருவள்ளுவர் சிலை",
        "type": "pilgrimage",
        "description": "Iconic monument built in 1970 on a rocky offshore island where Swami Vivekananda meditated for three days in 1892 to attain spiritual enlightenment. Directly alongside stands the colossal 133-foot granite statue of Tamil poet-philosopher Thiruvalluvar.",
        "translations": {
          "fr": "Mémorial insulaire où Vivekananda a médité, à côté de la statue géante de 40m de Thiruvalluvar.",
          "de": "Inseldenkmal auf den Felsen im Meer mit 40m hoher Granitstatue von Thiruvalluvar.",
          "ja": "ヴィヴェーカーナンダが瞑想した海上の岩礁記念堂と高さ40mのティルヴァッルヴァル巨像。",
          "zh": "建在印度洋海中礁石上的维韦卡南达纪念堂，旁立40米高泰米尔圣哲石像。",
          "ar": "نصب تذكاري على صخرة في البحر بجانب تمثال ثيروفالوفار الضخم بارتفاع 40 متراً.",
          "hi": "समुद्र के बीच चट्टान पर स्थित स्वामी विवेकानंद स्मारक और 133 फीट ऊंची तिरुवल्लुवर प्रतिमा।",
          "es": "Monumento insular donde meditó Vivekananda junto a la colosal estatua de 40m de Thiruvalluvar."
        },
        "timings": "8:00 AM – 4:30 PM (Ferry operates subject to sea tide conditions)",
        "entryFee": "₹20 Entry + ₹50 Round-trip Poompuhar Ferry Ticket",
        "bestTimeToVisit": "October to March (Chitra Pournami full moon in April for simultaneous sunset and moonrise)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 84200,
        "aiTip": "Take the ferry before 9:00 AM to beat long queues. Sit inside the Dhyana Mandapam meditation hall for profound oceanic peace.",
        "nearbyHotels": [
          {
            "id": "sparsa-resort",
            "name": "Sparsa Resort Kanyakumari",
            "stars": 4,
            "pricePerNight": "₹5,500 – ₹9,200",
            "distanceFromSpot": "1.2 km",
            "transitScore": 90,
            "amenities": [
              "Ocean View",
              "Pool",
              "Ayurveda Spa",
              "Restaurant"
            ],
            "address": "Beach Road, Kanyakumari",
            "phone": "+91 4652 247 005"
          },
          {
            "id": "hotel-sea-view",
            "name": "Hotel Sea View Kanyakumari",
            "stars": 3,
            "pricePerNight": "₹2,500 – ₹4,500",
            "distanceFromSpot": "0.4 km",
            "walkTime": "5 min walk",
            "transitScore": 94,
            "amenities": [
              "Direct Sea View",
              "Multi-cuisine Dining",
              "AC Rooms",
              "WiFi"
            ],
            "address": "East Car Street, Kanyakumari",
            "phone": "+91 4652 247 841"
          },
          {
            "id": "tri-sea-hotel",
            "name": "Hotel Tri Sea Kanyakumari",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "0.5 km",
            "transitScore": 92,
            "amenities": [
              "Rooftop Pool",
              "Sea View",
              "Restaurant"
            ],
            "address": "Kovalam Road, Kanyakumari",
            "phone": "+91 4652 246 001"
          }
        ],
        "transport": [
          {
            "mode": "ferry",
            "label": "Poompuhar Shipping Ferry from Coast Jetty to Rock Island",
            "duration": "7 min",
            "fare": "₹50",
            "frequency": "Continuous shuttle",
            "icon": "⛴️"
          },
          {
            "mode": "train",
            "label": "Trains to Kanyakumari Terminal (CAPE)",
            "duration": "10 min walk to shore",
            "fare": "₹10",
            "icon": "🚆"
          }
        ],
        "coordinates": {
          "lat": 8.0781,
          "lng": 77.5556
        }
      },
      {
        "id": "bhagavathy-amman-temple",
        "name": "Arulmigu Bhagavathy Amman Temple & Triveni Sangam",
        "nameInTamil": "கன்னியாகுமரி பகவதி அம்மன் கோவில் & முக்கடல் சங்கமம்",
        "type": "temple",
        "description": "3,000-year-old sea-shore temple dedicated to Goddess Kanya Kumari (the virgin goddess). Famous for her diamond nose ring that sparkles so brilliantly across the waters that ships historically mistook it for a lighthouse beacon.",
        "translations": {
          "fr": "Temple côtier de 3000 ans avec l'anneau de nez en diamant légendaire de la déesse.",
          "de": "3000 Jahre alter Tempel der jungfräulichen Göttin mit funkelndem Diamant-Nasenring.",
          "ja": "ダイヤモンドの鼻飾りが灯台のように海を照らす伝説を持つ3000年の歴史を誇る海岸寺院。",
          "zh": "拥有3000年历史的海滨女神庙，以传说中闪烁如灯塔的钻石鼻环闻名。",
          "ar": "معبد ساحلي عمره 3000 عام تشتهر إلهته بحلقة أنف ماسية تتلألأ في البحر.",
          "hi": "3,000 वर्ष पुराना समुद्र तटीय भगवती देवी मंदिर, हीरे की नथ की चमक के लिए विख्यात।",
          "es": "Templo costero de 3000 años con el legendario aro nasal de diamantes de la diosa."
        },
        "timings": "4:30 AM – 12:30 PM & 4:00 PM – 8:30 PM",
        "entryFee": "Free (Special Darshan: ₹20 – ₹50)",
        "bestTimeToVisit": "October to March (Navratri in Oct features grand golden car procession)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 46100,
        "aiTip": "Take a holy dip at Triveni Sangam (where Indian Ocean, Bay of Bengal, and Arabian Sea converge) at sunrise before entering the temple.",
        "dresscode": "Strict temple rules: Men must remove upper shirts. Dhoti for men, Saree/Salwar for women.",
        "nearbyHotels": [
          {
            "id": "annai-resorts-kanyakumari",
            "name": "Annai Resorts & Spa",
            "stars": 4,
            "pricePerNight": "₹4,500 – ₹7,800",
            "distanceFromSpot": "1.0 km",
            "transitScore": 91,
            "amenities": [
              "Pool",
              "Spa",
              "Restaurant",
              "WiFi"
            ],
            "address": "Main Road, Kanyakumari",
            "phone": "+91 4652 248 111"
          }
        ],
        "transport": [
          {
            "mode": "walk",
            "label": "Walk from Kanyakumari Beach or Ferry Jetty",
            "duration": "3 min walk",
            "fare": "Free",
            "icon": "🚶"
          }
        ],
        "coordinates": {
          "lat": 8.0811,
          "lng": 77.5539
        }
      }
    ]
  },
  {
    "id": "trichy",
    "name": "Tiruchirappalli (Trichy)",
    "nameInTamil": "திருச்சிராப்பள்ளி",
    "region": "central",
    "description": "Ancient Chola heartland on the Cauvery River, renowned for the world's largest functioning Hindu temple complex at Srirangam, the 83m Rockfort Temple, and Samayapuram Mariamman.",
    "population": "1.02 Million",
    "famousFor": [
      "Srirangam Temple (World's Largest)",
      "Rockfort Ucchi Pillayar Temple",
      "Samayapuram Temple",
      "Trichy Cigars & Sweets"
    ],
    "districtHQ": "Tiruchirappalli",
    "spots": [
      {
        "id": "srirangam-temple",
        "name": "Sri Ranganathaswamy Temple, Srirangam",
        "nameInTamil": "ஸ்ரீரங்கம் ரங்கநாதர் கோவில் (பூலோக வைகுண்டம்)",
        "type": "pilgrimage",
        "description": "The largest functioning Hindu temple complex in the world and the foremost of the 108 Divya Desams, spanning 156 acres on a river island. Surrounded by 7 concentric rectangular enclosures (prakarams) with 21 magnificent gopurams, including the monumental 73-meter Rajagopuram.",
        "translations": {
          "fr": "Le plus grand temple hindou en activité au monde sur 63 hectares avec 21 gopurams.",
          "de": "Größter funktionierender Hindu-Tempelkomplex der Welt auf 63 Hektar mit 21 Tortürmen.",
          "ja": "世界最大の現役ヒンドゥー寺院複合体（63ヘクタール、21の巨大塔門）。",
          "zh": "世界上仍在使用的最大印度教寺庙建筑群，占地156英亩，建有21座高耸塔门。",
          "ar": "أكبر مجمع معابد هندوسية نشط في العالم يمتد على 156 فداناً مع 21 برجاً.",
          "hi": "विश्व का सबसे बड़ा क्रियाशील हिंदू मंदिर परिसर (156 एकड़), 21 भव्य गोपुरम और 108 दिव्य देशम में प्रथम।",
          "es": "El complejo de templos hindúes en funcionamiento más grande del mundo con 21 gopurams."
        },
        "timings": "6:00 AM – 1:00 PM & 3:30 PM – 9:00 PM",
        "entryFee": "Free (Quick Darshan: ₹100 – ₹250, Viewpoint rooftop: ₹30)",
        "bestTimeToVisit": "October to March (21-day Vaikunta Ekadasi in Dec/Jan opens the heavenly Paramapada Vasal gate to 500,000 devotees)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 96800,
        "aiTip": "Buy a rooftop ticket to climb up for a breathtaking view of all 21 towering gopurams and the golden dome of the inner sanctum.",
        "dresscode": "Strict traditional Hindu attire required: Dhoti for men, Saree or Salwar with Dupatta for women.",
        "nearbyHotels": [
          {
            "id": "sangam-hotel-trichy",
            "name": "Sangam Hotel Trichy",
            "stars": 4,
            "pricePerNight": "₹4,500 – ₹7,800",
            "distanceFromSpot": "7.5 km",
            "transitScore": 92,
            "amenities": [
              "Pool",
              "Multi-Cuisine Dining",
              "Bar",
              "Travel Desk"
            ],
            "address": "Collectorate Road, Cantonment, Trichy",
            "phone": "+91 431 241 4700"
          },
          {
            "id": "breeze-residency",
            "name": "Breeze Residency",
            "stars": 3,
            "pricePerNight": "₹2,500 – ₹4,200",
            "distanceFromSpot": "8.0 km",
            "transitScore": 90,
            "amenities": [
              "Pool",
              "Restaurant",
              "Gym",
              "WiFi"
            ],
            "address": "McDonald's Road, Cantonment, Trichy",
            "phone": "+91 431 241 2412"
          },
          {
            "id": "hotel-pl-a-residency-srirangam",
            "name": "Hotel Ramyas Trichy",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "8.2 km",
            "transitScore": 91,
            "amenities": [
              "AC",
              "Pure Veg Dining",
              "WiFi"
            ],
            "address": "Williams Road, Cantonment",
            "phone": "+91 431 400 0400"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Passenger train from Trichy Junction to Srirangam Station (SRGM)",
            "duration": "12 min",
            "fare": "₹10",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "City Bus Route 1 from Trichy Central Bus Stand to Srirangam",
            "duration": "25 min",
            "fare": "₹15",
            "frequency": "Every 3 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Trichy Junction",
            "duration": "20 min",
            "fare": "₹150 – ₹180",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 10.8622,
          "lng": 78.6903
        }
      },
      {
        "id": "rockfort-temple",
        "name": "Rockfort Ucchi Pillayar Temple",
        "nameInTamil": "மலைக்கோட்டை உச்சிப் பிள்ளையார் கோவில்",
        "type": "temple",
        "description": "Spectacular 83-meter monolithic rock fortress jutting out of the flat plains, dated at over 3.8 billion years old (older than the Himalayas). Pilgrims ascend 437 stone steps cut into the rock to visit the hilltop Ganesha temple and Thayumanaswamy Shiva shrine.",
        "translations": {
          "fr": "Forteresse sur un rocher de 83m vieux de 3,8 milliards d'années avec temple au sommet.",
          "de": "Spektakuläre Felsenfestung auf einem 3,8 Milliarden Jahre alten Monolithen mit 437 Steinstufen.",
          "ja": "ヒマラヤより古い38億年前の花崗岩の巨岩（高さ83m）。437段の階段を登る山頂寺院。",
          "zh": "耸立在平原上83米高的巨石要塞，岩龄达38亿年，需攀登437级石阶登顶参拜。",
          "ar": "قلعة صخرية شاهقة بارتفاع 83 متراً عمرها 3.8 مليار سنة مع 437 درجة حجرية.",
          "hi": "हिमालय से भी पुरानी 3.8 अरब वर्ष प्राचीन 83 मीटर ऊंची चट्टान पर बना 437 सीढ़ियों वाला गणेश मंदिर।",
          "es": "Espectacular fortaleza sobre una roca de 83m de 3800 millones de años con 437 escalones."
        },
        "timings": "6:00 AM – 8:30 PM",
        "entryFee": "Free (Camera: ₹20)",
        "bestTimeToVisit": "October to March (Climb early morning or before sunset for cooler temperatures)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 54100,
        "aiTip": "The 360-degree sunset view from the peak looking over the Cauvery river, Srirangam gopurams, and Trichy city is extraordinary.",
        "dresscode": "Respectful attire for temple entry. Footwear must be deposited at the rock entrance.",
        "nearbyHotels": [
          {
            "id": "femina-hotel-trichy",
            "name": "Femina Hotel Trichy",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "3.5 km",
            "transitScore": 92,
            "amenities": [
              "Pure Veg Restaurant",
              "AC",
              "WiFi"
            ],
            "address": "Williams Road, Trichy",
            "phone": "+91 431 241 4501"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Main Guard Gate / Chatram Bus Stand",
            "duration": "5 min",
            "fare": "₹40 – ₹60",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "City Bus from Trichy Central to Chatram Bus Stand",
            "duration": "15 min",
            "fare": "₹12",
            "frequency": "Every 2 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 10.8286,
          "lng": 78.6967
        }
      }
    ]
  },
  {
    "id": "coimbatore",
    "name": "Coimbatore",
    "nameInTamil": "கோயம்புத்தூர்",
    "region": "west",
    "description": "Manchester of South India at the foot of the Western Ghats, famed for Isha Yoga Center (Adiyogi Shiva), Marudhamalai Murugan temple, sweet Siruvani water, and wet grinders.",
    "population": "2.1 Million",
    "famousFor": [
      "Isha Yoga & Adiyogi",
      "Marudhamalai Temple",
      "Siruvani Water",
      "Textiles & Engineering"
    ],
    "districtHQ": "Coimbatore",
    "spots": [
      {
        "id": "isha-yoga-center",
        "name": "Isha Yoga Center & Adiyogi Shiva",
        "nameInTamil": "ஈஷா யோகா மையம் & ஆதியோகி",
        "type": "pilgrimage",
        "description": "World-renowned spiritual center nestled at the base of Velliangiri Mountains. Features the iconic 112-foot Adiyogi Shiva bust (Guinness World Record for the largest bust sculpture), the consecrated Dhyanalinga dome, and energizing Surya Kund and Chandra Kund subterranean pools.",
        "translations": {
          "fr": "Centre spirituel mondial avec le buste d'Adiyogi de 34m (record Guinness) et le dôme Dhyanalinga.",
          "de": "Weltberühmtes spirituelles Zentrum mit der 34m hohen Adiyogi-Büste und dem Dhyanalinga.",
          "ja": "高さ34mの巨大アディヨーギ像（ギネス記録）と瞑想ドームを擁する世界的なヨガセンター。",
          "zh": "世界知名的灵修中心，矗立着34米高的湿婆巨幅半身雕像（吉尼斯世界纪录）和冥想穹顶。",
          "ar": "مركز روحي عالمي يضم تمثال أديوغي بارتفاع 34 متراً وقبة التأمل ديانالينغا.",
          "hi": "112 फीट ऊंची विशाल आदियोगी शिव प्रतिमा (गिनीज रिकॉर्ड) और ध्यानलिंग मेडिटेशन गुंबद।",
          "es": "Centro espiritual de renombre mundial con el busto de Adiyogi de 34m y el domo Dhyanalinga."
        },
        "timings": "6:00 AM – 8:00 PM | Adiyogi Light Show (Divya Darshanam): 7:00 PM daily",
        "entryFee": "Free (Kund holy dip: ₹20)",
        "bestTimeToVisit": "Year-round (Maha Shivaratri night festival attracts millions of live viewers worldwide)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 94500,
        "aiTip": "Don't miss the stunning 3D laser projection and sound show (Divya Darshanam) projected directly onto the face of the 112-ft Adiyogi every evening at 7:00 PM.",
        "dresscode": "Modest clothing covering shoulders and knees.",
        "nearbyHotels": [
          {
            "id": "radisson-coimbatore",
            "name": "Radisson Blu Hotel Coimbatore",
            "stars": 5,
            "pricePerNight": "₹6,500 – ₹12,500",
            "distanceFromSpot": "28 km",
            "transitScore": 92,
            "amenities": [
              "Pool",
              "Spa",
              "Fine Dining",
              "WiFi",
              "Airport Desk"
            ],
            "address": "Avinashi Road, Peelamedu, Coimbatore",
            "phone": "+91 422 222 6000"
          },
          {
            "id": "gokulam-park-cbe",
            "name": "Gokulam Park Coimbatore",
            "stars": 4,
            "pricePerNight": "₹4,000 – ₹7,000",
            "distanceFromSpot": "32 km",
            "transitScore": 90,
            "amenities": [
              "Pool",
              "Restaurant",
              "Gym",
              "Bar"
            ],
            "address": "Avinashi Road, Coimbatore",
            "phone": "+91 422 452 3000"
          },
          {
            "id": "poppys-tower-cbe",
            "name": "Poppys Tower Coimbatore",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "29 km",
            "transitScore": 89,
            "amenities": [
              "AC Rooms",
              "Restaurant",
              "WiFi"
            ],
            "address": "Race Course, Coimbatore",
            "phone": "+91 422 434 6666"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "City Bus Route 14D from Gandhipuram Bus Stand directly to Isha Gate",
            "duration": "1 hr 15 min",
            "fare": "₹35",
            "frequency": "Every 20 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Ola / Uber / Pre-paid Taxi from Coimbatore Airport / Junction",
            "duration": "50 min",
            "fare": "₹700 – ₹950",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 10.9725,
          "lng": 76.7408
        }
      },
      {
        "id": "marudhamalai-temple",
        "name": "Arulmigu Marudhamalai Murugan Temple",
        "nameInTamil": "மருதமலை முருகன் கோவில்",
        "type": "temple",
        "description": "12th-century hill shrine dedicated to Lord Dandayuthapani Murugan located 12 km from Coimbatore in the Western Ghats. Surrounded by medicinal herbs, sacred springs, and the cave dwelling of Siddhar Pambatti.",
        "translations": {
          "fr": "Temple perché sur une colline du XIIe siècle entouré de plantes médicinales des Ghats.",
          "de": "Bergtempel aus dem 12. Jahrhundert in den Westghats, umgeben von Heilkräutern.",
          "ja": "薬草の香る西ガーツ山脈の丘に建つ12世紀のムルガン寺院。",
          "zh": "建于12世纪的穆鲁干山地古刹，被西高止山脉珍稀药草所环绕。",
          "ar": "معبد تل من القرن الثاني عشر مخصص للإله موروغان محاط بالأعشاب الطبية.",
          "hi": "12वीं सदी का पावन मुरुगन पहाड़ी मंदिर, औषधीय जड़ी-बूटियों और सिद्ध गुफा से संपन्न।",
          "es": "Santuario en la colina del siglo XII rodeado de hierbas medicinales en los Ghats."
        },
        "timings": "6:00 AM – 1:00 PM & 2:00 PM – 8:30 PM",
        "entryFee": "Free (Special Darshan: ₹20 – ₹50)",
        "bestTimeToVisit": "October to March (Thai Poosam in Jan/Feb brings thousands carrying milk pots)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 48000,
        "aiTip": "Special hill minibuses run frequently from the foot of the hill right to the temple steps. Don't miss visiting the Pambatti Siddhar cave just below the temple.",
        "dresscode": "Traditional temple dress code required.",
        "nearbyHotels": [
          {
            "id": "hotel-le-meridien-cbe",
            "name": "Le Méridien Coimbatore",
            "stars": 5,
            "pricePerNight": "₹7,500 – ₹15,000",
            "distanceFromSpot": "22 km",
            "transitScore": 90,
            "amenities": [
              "Pool",
              "Spa",
              "Fine Dining",
              "Gym"
            ],
            "address": "Neelambur, Coimbatore",
            "phone": "+91 422 236 4300"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "City Bus Route 1C, 70 from Gandhipuram / Railway Station to Marudhamalai foot",
            "duration": "35 min",
            "fare": "₹18",
            "frequency": "Every 5 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 11.0456,
          "lng": 76.8528
        }
      }
    ]
  },
  {
    "id": "rameshwaram",
    "name": "Ramanathapuram (Rameswaram)",
    "nameInTamil": "இராமநாதபுரம் (ராமேஸ்வரம்)",
    "region": "south",
    "description": "Holy island sanctuary in the Gulf of Mannar, one of the four sacred Char Dham pilgrimage sites of India, famous for the Ramanathaswamy Jyotirlinga, 22 sacred theerthams, Pamban Sea Bridge, and Dhanushkodi ghost town.",
    "population": "0.15 Million",
    "famousFor": [
      "Ramanathaswamy Temple (Char Dham)",
      "22 Sacred Theerthams",
      "Pamban Sea Bridge",
      "Dhanushkodi Ram Setu",
      "Dr. APJ Abdul Kalam Memorial"
    ],
    "districtHQ": "Ramanathapuram",
    "spots": [
      {
        "id": "ramanathaswamy-temple",
        "name": "Arulmigu Ramanathaswamy Temple",
        "nameInTamil": "ராமேஸ்வரம் ராமநாதசுவாமி கோவில்",
        "type": "pilgrimage",
        "description": "One of the 12 sacred Jyotirlinga temples and a pinnacle of the all-India Char Dham pilgrimage. Built where Lord Rama worshipped Shiva after the Lanka war. Renowned for the longest pillared corridor in the world (1.2 km long with 1,212 intricately carved granite pillars) and 22 sacred holy theertham wells.",
        "translations": {
          "fr": "L'un des 12 Jyotirlingas avec le plus long couloir de piliers au monde (1,2 km) et 22 puits sacrés.",
          "de": "Einer der 12 heiligen Jyotirlingas mit dem längsten Säulenkorridor der Welt (1,2 km) und 22 heiligen Brunnen.",
          "ja": "12大ジョーティルリンガの一つ。世界最長の石柱回廊（1.2km）と22の聖なる井戸。",
          "zh": "印度十二大光辉林伽之一，拥有世界最长的1.2公里雕刻石柱回廊和22处圣井。",
          "ar": "واحد من 12 معبداً مقدساً لجيوتيرلينغا مع أطول ممر أعمدة في العالم (1.2 كم) و22 بئراً مقدسة.",
          "hi": "12 ज्योतिर्लिंगों और चार धाम में से एक पावन तीर्थ, विश्व का सबसे लंबा 1.2 किमी गलियारा और 22 पवित्र कुंड।",
          "es": "Uno de los 12 Jyotirlingas con el corredor de pilares más largo del mundo (1,2 km) y 22 pozos sagrados."
        },
        "timings": "5:00 AM – 1:00 PM & 3:00 PM – 9:00 PM",
        "entryFee": "Free (22 Theertham Bath Ticket: ₹25 – ₹50)",
        "bestTimeToVisit": "October to March (Maha Shivaratri and Rama Navami)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 91500,
        "aiTip": "Complete the sacred ritual: bathe first in the ocean at Agni Theertham, then walk inside the temple to be bathed by temple staff with water from all 22 sacred theertham wells in sequence.",
        "dresscode": "Strict Hindu traditional dress code: Men must wear dhoti (no shirts permitted inside the inner sanctum). Saree or salwar for women.",
        "nearbyHotels": [
          {
            "id": "hyatt-rameswaram",
            "name": "Daiwik Hotels Rameswaram",
            "stars": 4,
            "pricePerNight": "₹4,500 – ₹8,000",
            "distanceFromSpot": "1.8 km",
            "transitScore": 92,
            "amenities": [
              "Pilgrim Activity Desk",
              "Pure Veg Dining",
              "Spa",
              "WiFi"
            ],
            "address": "NH-49 Madurai-Rameswaram Highway",
            "phone": "+91 4573 221 777"
          },
          {
            "id": "tamilnadu-hotel-rameswaram",
            "name": "Hotel Tamil Nadu TTDC Rameswaram",
            "stars": 3,
            "pricePerNight": "₹2,000 – ₹3,500",
            "distanceFromSpot": "0.3 km",
            "walkTime": "4 min walk",
            "transitScore": 96,
            "amenities": [
              "Close to Temple & Sea",
              "Restaurant",
              "AC Rooms"
            ],
            "address": "Agni Theertham Beach, Rameswaram",
            "phone": "+91 4573 221 066"
          },
          {
            "id": "hotel-vinayaga-rameswaram",
            "name": "Hotel Vinayaga Rameswaram",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "0.5 km",
            "transitScore": 94,
            "amenities": [
              "AC",
              "Pure Veg Restaurant",
              "WiFi"
            ],
            "address": "Railway Feeder Road, Rameswaram",
            "phone": "+91 4573 222 345"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Express Trains to Rameswaram (RMM) crossing Pamban Sea Bridge",
            "duration": "Direct from Chennai/Madurai",
            "fare": "₹240 – ₹950",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "TNSTC Bus from Madurai to Rameswaram Bus Stand",
            "duration": "3.5 hrs",
            "fare": "₹110",
            "frequency": "Every 15 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Rameswaram Railway Station to Temple East Gate",
            "duration": "6 min",
            "fare": "₹50 – ₹70",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 9.2881,
          "lng": 79.3172
        }
      },
      {
        "id": "dhanushkodi-beach",
        "name": "Dhanushkodi Ghost Town & Ram Setu Point (Arichal Munai)",
        "nameInTamil": "தனுஷ்கோடி & அரிச்சல் முனை (ராமர் பாலம்)",
        "type": "nature",
        "description": "Atmospheric ghost town abandoned after the catastrophic 1964 cyclone, situated on a slender strip of land at the tip of the island where the calm emerald Bay of Bengal meets the roaring dark blue Indian Ocean. The legendary starting point of Ram Setu (Adam's Bridge) connecting to Sri Lanka just 28 km away.",
        "translations": {
          "fr": "Ville fantôme engloutie lors du cyclone de 1964 au bout de la bande de sable où commence le Ram Setu.",
          "de": "Geisterstadt am Rande des Meeres, wo das Ram-Setu (Adamsbrücke) nach Sri Lanka beginnt.",
          "ja": "1964年のサイクロンで廃墟となった幻の街。スリランカを望む「ラーマの橋」の起点。",
          "zh": "1964年特大飓风后废弃的海角幽灵之城，传说中通往斯里兰卡的罗摩桥起点。",
          "ar": "مدينة أشباح على طرف شريط رملي حيث تلتقي مياه المحيط الهندي وخليج البنغال ويبدأ جسر راما.",
          "hi": "1964 के चक्रवात में नष्ट हुई ऐतिहासिक वीरान नगरी धनुषकोडी और श्रीलंका की ओर जाने वाला राम सेतु स्थल।",
          "es": "Pueblo fantasma abandonado tras el ciclón de 1964 en la punta donde comienza el Ram Setu."
        },
        "timings": "6:00 AM – 5:00 PM (Strictly closed after sunset for national border security)",
        "entryFee": "Free",
        "bestTimeToVisit": "October to March (Crisp breeze and clear blue waters)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 58200,
        "aiTip": "Visit Arichal Munai (the very tip of India) where the Indian tricolor flag flies proudly. Look at the two oceans: one is completely placid while the other has pounding surf.",
        "nearbyHotels": [
          {
            "id": "rameswaram-grand-residency",
            "name": "The Residency Towers Rameswaram",
            "stars": 4,
            "pricePerNight": "₹5,500 – ₹10,000",
            "distanceFromSpot": "18 km",
            "transitScore": 90,
            "amenities": [
              "Pool",
              "Fine Dining",
              "Spa",
              "WiFi"
            ],
            "address": "Padithurai, Rameswaram",
            "phone": "+91 4573 223 333"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Government Town Bus Route 3 from Rameswaram Temple to Dhanushkodi / Arichal Munai",
            "duration": "40 min",
            "fare": "₹30",
            "frequency": "Every 30 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto / Jeep hire from Rameswaram to Dhanushkodi and back",
            "duration": "35 min each way",
            "fare": "₹600 – ₹800",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 9.1764,
          "lng": 79.4189
        }
      }
    ]
  },
  {
    "id": "mahabalipuram",
    "name": "Chengalpattu (Mahabalipuram)",
    "nameInTamil": "செங்கல்பட்டு (மாமல்லபுரம்)",
    "region": "north",
    "description": "Coastal UNESCO World Heritage sanctuary along the scenic East Coast Road (ECR), celebrated for 7th-century Pallava rock-cut cave temples, monolithic monolithic Pancha Rathas, and the majestic Shore Temple overlooking the waves.",
    "population": "0.18 Million",
    "famousFor": [
      "Shore Temple (UNESCO)",
      "Pancha Rathas",
      "Arjuna's Penance",
      "Krishna's Butterball",
      "Stone Carving Workshops"
    ],
    "districtHQ": "Chengalpattu",
    "spots": [
      {
        "id": "shore-temple",
        "name": "Shore Temple (UNESCO World Heritage)",
        "nameInTamil": "கடற்கரை கோவில் (யுனெஸ்கோ)",
        "type": "heritage",
        "description": "8th-century structural stone temple standing directly on the shores of the Bay of Bengal, built by Pallava King Narasimhavarman II. Features two Shiva shrines and a reclining Vishnu sanctum, surrounded by stone monolithic Nandi sculptures weathered by salt spray for over 1,300 years.",
        "translations": {
          "fr": "Temple côtier classé au patrimoine mondial de l'UNESCO battu par les vagues depuis 1300 ans.",
          "de": "UNESCO-Weltkulturerbe aus dem 8. Jahrhundert direkt an der Brandung des Golfs von Bengalen.",
          "ja": "1300年間ベンガル湾の波風に耐え抜いてきたユネスコ世界遺産の海岸寺院。",
          "zh": "联合国教科文组织世界遗产，伫立在孟加拉湾海浪边缘长达1300余年的海岸神庙。",
          "ar": "معبد شاطئي مصنف ضمن التراث العالمي لليونسكو يواجه أمواج خليج البنغال منذ 1300 عام.",
          "hi": "बंगाल की खाड़ी की लहरों के किनारे 1,300 वर्षों से खड़ा यूनेस्को विश्व धरोहर शोर मंदिर।",
          "es": "Templo costero Patrimonio de la Humanidad por la UNESCO azotado por las olas desde hace 1300 años."
        },
        "timings": "6:00 AM – 6:00 PM",
        "entryFee": "₹40 for Indians, ₹600 for Foreign Tourists (Combined ticket covers Pancha Rathas)",
        "bestTimeToVisit": "October to March (Mamallapuram Dance Festival in Jan/Feb)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 74200,
        "aiTip": "The sunrise here is magical as the first golden rays illuminate the ancient granite towers. One combined entry ticket covers both Shore Temple and the Pancha Rathas monuments.",
        "nearbyHotels": [
          {
            "id": "taj-fishermens-cove",
            "name": "Taj Fisherman's Cove Resort & Spa",
            "stars": 5,
            "pricePerNight": "₹14,000 – ₹28,000",
            "distanceFromSpot": "18 km",
            "transitScore": 94,
            "amenities": [
              "Private Beachfront",
              "Luxury Villas",
              "Multiple Pools",
              "Fine Dining"
            ],
            "address": "East Coast Road, Covelong Beach",
            "phone": "+91 44 6741 3333"
          },
          {
            "id": "radha-beach-resort",
            "name": "Radisson Blu Resort Temple Bay",
            "stars": 5,
            "pricePerNight": "₹9,500 – ₹18,000",
            "distanceFromSpot": "0.8 km",
            "transitScore": 95,
            "amenities": [
              "27,000 sq ft Meandering Pool",
              "Seafront Chalets",
              "Ayurveda Spa"
            ],
            "address": "Covelong Road, Mahabalipuram",
            "phone": "+91 44 2744 3636"
          },
          {
            "id": "hotel-mamalla-heritage",
            "name": "Hotel Mamalla Heritage",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "0.6 km",
            "walkTime": "8 min walk",
            "transitScore": 92,
            "amenities": [
              "Pool",
              "Multi-Cuisine Seafood Restaurant",
              "WiFi"
            ],
            "address": "East Raja Street, Mahabalipuram",
            "phone": "+91 44 2744 2260"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "AC / Deluxe Bus Route 588, 599, 102 from Chennai CMBT / Broadway",
            "duration": "1 hr 30 min",
            "fare": "₹55",
            "frequency": "Every 15 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Scenic Cab Drive along East Coast Road (ECR) from Chennai Airport",
            "duration": "1 hr",
            "fare": "₹800 – ₹1,200",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 12.6172,
          "lng": 80.1928
        }
      },
      {
        "id": "pancha-rathas-arjuna-penance",
        "name": "Pancha Rathas & Arjuna's Penance",
        "nameInTamil": "பஞ்ச ரதங்கள் & அர்ஜுனன் தபசு",
        "type": "heritage",
        "description": "Astounding 7th-century monolithic rock-cut shrines carved out of single pink granite boulders in the shape of ceremonial temple chariots, named after the Pandavas. Nearby stands the world's largest open-air rock relief (Arjuna's Penance / Descent of the Ganges) and the precariously balanced Krishna's Butterball.",
        "translations": {
          "fr": "Monolithes spectaculaires taillés dans un seul rocher et le plus grand bas-relief à ciel ouvert du monde.",
          "de": "Spektakuläre Felsenmonolithen in Form von Tempelwagen und das größte Freiluft-Flachrelief der Welt.",
          "ja": "一枚の花崗岩から丸ごと彫り出された5つの寺院山車と、世界最大の野外岩面浮彫。",
          "zh": "由单块巨型花岗岩雕刻而成的五座石战车神庙，以及世界上最大的露天岩石浮雕。",
          "ar": "صخور متجانسة مذهلة منحوتة على شكل عربات معبد مع أكبر نحت صخري مفتوح في العالم.",
          "hi": "एक ही चट्टान से तराशे गए पांच रथ (पंच रथ) और विश्व की सबसे बड़ी खुली चट्टान पर उकेरी गई नक्काशी।",
          "es": "Espectaculares monolitos tallados en una sola roca y el bajorrelieve al aire libre más grande del mundo."
        },
        "timings": "6:00 AM – 6:00 PM",
        "entryFee": "Included in Shore Temple Combined Ticket",
        "bestTimeToVisit": "October to March",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 62400,
        "aiTip": "Try giving a gentle push to Krishna's Butterball — an enormous 250-tonne boulder balancing precariously on a 45-degree smooth rock slope that even seven elephants could not move.",
        "nearbyHotels": [
          {
            "id": "chariot-beach-resort",
            "name": "Chariot Beach Resort",
            "stars": 4,
            "pricePerNight": "₹5,500 – ₹9,500",
            "distanceFromSpot": "1.2 km",
            "transitScore": 90,
            "amenities": [
              "Private Beach",
              "Olympic Pool",
              "Activity Lawn",
              "Seafood Dining"
            ],
            "address": "Five Rathas Road, Mahabalipuram",
            "phone": "+91 44 2742 5000"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto within Mahabalipuram to Five Rathas",
            "duration": "5 min",
            "fare": "₹50 – ₹60",
            "icon": "🛺"
          },
          {
            "mode": "walk",
            "label": "Walk from Arjuna's Penance to Krishna's Butterball",
            "duration": "2 min walk",
            "fare": "Free",
            "icon": "🚶"
          }
        ],
        "coordinates": {
          "lat": 12.61,
          "lng": 80.1917
        }
      }
    ]
  }
];

export const languageNames: Record<string, string> = {
  en: '🇬🇧 English',
  ta: '🇮🇳 தமிழ்',
  fr: '🇫🇷 Français',
  de: '🇩🇪 Deutsch',
  ja: '🇯🇵 日本語',
  zh: '🇨🇳 中文',
  ar: '🇸🇦 العربية',
  hi: '🇮🇳 हिन्दी',
  es: '🇪🇸 Español',
};

export const allTamilNaduDistricts: District[] = [
  ...tamilNaduDistricts,
  ...additionalDistricts,
];

export const allDistricts: string[] = allTamilNaduDistricts.map(d => d.name);
