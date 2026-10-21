import type { District } from '../types/transitwise';

export const additionalDistricts: District[] = [
  {
    "id": "salem",
    "name": "Salem",
    "nameInTamil": "சேலம்",
    "region": "west",
    "description": "Steel City nestled amidst hills, gateway to Yercaud Hill Station, Mettur Dam, and ancient mango orchards.",
    "population": "0.83 Million",
    "famousFor": [
      "Yercaud Hill Station",
      "Mettur Dam",
      "Salem Steel Plant",
      "Salem Mangoes"
    ],
    "districtHQ": "Salem",
    "spots": [
      {
        "id": "yercaud",
        "name": "Yercaud Hill Station",
        "nameInTamil": "ஏற்காடு",
        "type": "hill",
        "description": "A serene hill station at 1,515m altitude in Shevaroy Hills with coffee plantations, orange groves, scenic lake, and misty peaks.",
        "translations": {
          "fr": "Station de montagne à 1515m avec plantations de café et lac pittoresque.",
          "de": "Bergstation auf 1515m Höhe mit Kaffeeplantagen und malerischem See.",
          "ja": "標高1515mの高原保養地。コーヒー農園と湖。",
          "zh": "海拔1515米的高原度假胜地，拥有咖啡种植园和风景如画的湖泊。",
          "ar": "محطة جبلية على ارتفاع 1515م مع مزارع القهوة والبحيرة.",
          "hi": "1515 मीटर पर शांत हिल स्टेशन, कॉफी के बागान और सुंदर झील।",
          "es": "Estación de montaña a 1515m con plantaciones de café y lago."
        },
        "timings": "Open all day | Boating: 8:30 AM – 5:30 PM",
        "entryFee": "Free (Boating: ₹30 – ₹100)",
        "bestTimeToVisit": "October to June",
        "crowdLevel": "moderate",
        "rating": 4.5,
        "reviewCount": 31200,
        "aiTip": "Visit Yercaud Lake for boating, Pagoda Point for sunrise, and Killiyur Falls during post-monsoon months.",
        "nearbyHotels": [
          {
            "id": "sterling-yercaud",
            "name": "Sterling Yercaud",
            "stars": 4,
            "pricePerNight": "₹5,500 – ₹9,800",
            "distanceFromSpot": "1.0 km",
            "transitScore": 88,
            "amenities": [
              "Valley View",
              "Pool",
              "Restaurant",
              "WiFi"
            ],
            "address": "Killiyur Road, Yercaud",
            "phone": "+91 4281 222 555"
          },
          {
            "id": "grand-palace-yercaud",
            "name": "Grand Palace Hotel & Spa",
            "stars": 4,
            "pricePerNight": "₹4,800 – ₹8,200",
            "distanceFromSpot": "0.8 km",
            "transitScore": 89,
            "amenities": [
              "Lake View",
              "Spa",
              "Multi-Cuisine Dining"
            ],
            "address": "Main Road, Yercaud",
            "phone": "+91 4281 223 456"
          },
          {
            "id": "hotel-shenbaga",
            "name": "Hotel Shenbaga",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "0.5 km",
            "walkTime": "7 min walk",
            "transitScore": 92,
            "amenities": [
              "Lake View",
              "Restaurant",
              "AC Rooms",
              "WiFi"
            ],
            "address": "Lake Road, Yercaud",
            "phone": "+91 4281 222 334"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Salem Central Bus Stand",
            "duration": "1.5 hrs",
            "fare": "₹40",
            "frequency": "Every 20 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Cab from Salem Railway Station",
            "duration": "50 min",
            "fare": "₹450 – ₹650",
            "icon": "🚖"
          },
          {
            "mode": "auto",
            "label": "Local Auto within Yercaud",
            "duration": "10 min",
            "fare": "₹60 – ₹100",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 11.7745,
          "lng": 78.2095
        }
      },
      {
        "id": "mettur-dam",
        "name": "Mettur Dam & Stanley Reservoir",
        "nameInTamil": "மேட்டூர் அணை & பூங்கா",
        "type": "nature",
        "description": "One of the largest concrete gravity dams in India built across the Cauvery River, surrounded by hills and lush thermal parks.",
        "translations": {
          "fr": "L'un des plus grands barrages d'Inde sur le fleuve Cauvery entouré de collines.",
          "de": "Einer der größten Dämme Indiens über den Cauvery-Fluss mit herrlichen Parks.",
          "ja": "コーヴェリ川に建設されたインド最大級の重力ダムと美しい公園。",
          "zh": "跨越高韦里河建成的印度最大水坝之一，周围环绕着青山和公园。",
          "ar": "واحد من أكبر السدود الخرسانية في الهند على نهر كافيري.",
          "hi": "कावेरी नदी पर बना भारत का विशाल बांध और सुंदर पार्क।",
          "es": "Una de las presas de hormigón más grandes de la India sobre el río Cauvery."
        },
        "timings": "9:00 AM – 5:30 PM",
        "entryFee": "₹10 (Park entry)",
        "bestTimeToVisit": "August to December (When water discharge creates roaring sluice gates)",
        "crowdLevel": "moderate",
        "rating": 4.4,
        "reviewCount": 22400,
        "aiTip": "Visit when water is released for scenic photography. The adjacent park is ideal for families and picnics.",
        "nearbyHotels": [
          {
            "id": "hotel-green-park-mettur",
            "name": "Hotel Green Park Mettur",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,600",
            "distanceFromSpot": "1.2 km",
            "transitScore": 84,
            "amenities": [
              "AC Rooms",
              "Restaurant",
              "Parking"
            ],
            "address": "Square Market, Mettur Dam",
            "phone": "+91 4298 244 123"
          },
          {
            "id": "radisson-salem",
            "name": "Radisson Salem",
            "stars": 5,
            "pricePerNight": "₹6,500 – ₹11,000",
            "distanceFromSpot": "48 km",
            "transitScore": 80,
            "amenities": [
              "Pool",
              "Spa",
              "Fine Dining",
              "Gym"
            ],
            "address": "Mamangam, Salem City",
            "phone": "+91 427 277 7777"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Salem New Bus Stand to Mettur",
            "duration": "1 hr 15 min",
            "fare": "₹42",
            "frequency": "Every 15 min",
            "icon": "🚌"
          },
          {
            "mode": "train",
            "label": "Passenger train from Salem Jn to Mettur Dam",
            "duration": "1 hr",
            "fare": "₹20",
            "icon": "🚆"
          }
        ],
        "coordinates": {
          "lat": 11.7963,
          "lng": 77.8016
        }
      }
    ]
  },
  {
    "id": "tirunelveli",
    "name": "Tirunelveli",
    "nameInTamil": "திருநெல்வேலி",
    "region": "south",
    "description": "City of Temples on the Thamirabarani River, famed for Nellaiappar Temple, musical stone pillars, and mouth-watering Tirunelveli Halwa.",
    "population": "0.47 Million",
    "famousFor": [
      "Nellaiappar Temple",
      "Thamirabarani River",
      "Tirunelveli Halwa",
      "Manimuthar Falls"
    ],
    "districtHQ": "Tirunelveli",
    "spots": [
      {
        "id": "nellaiappar-temple",
        "name": "Nellaiappar Temple",
        "nameInTamil": "நெல்லையப்பர் கோவில்",
        "type": "temple",
        "description": "7th-century architectural marvel dedicated to Lord Shiva and Goddess Kanthimathi. Renowned for musical pillars that emit distinct notes when tapped.",
        "translations": {
          "fr": "Chef-d'œuvre du VIIe siècle dédié à Shiva avec de célèbres piliers musicaux en pierre.",
          "de": "Meisterwerk des 7. Jahrhunderts, gewidmet Shiva mit musikalischen Steinsäulen.",
          "ja": "7世紀のシヴァ寺院。叩くと音階を奏でる有名な音楽石柱。",
          "zh": "7世纪的湿婆神庙建筑杰作，以轻敲能发出音阶的音乐石柱而闻名。",
          "ar": "تحفة معمارية من القرن السابع مخصصة للإله شيفا مع أعمدة موسيقية حجرية.",
          "hi": "7वीं सदी का भव्य शिव मंदिर, जो अपनी संगीतमय पत्थर की खंभों के लिए प्रसिद्ध है।",
          "es": "Obra maestra del siglo VII dedicada a Shiva con famosos pilares musicales de piedra."
        },
        "timings": "5:30 AM – 12:30 PM & 4:30 PM – 9:00 PM",
        "entryFee": "Free (Special Darshan: ₹20)",
        "bestTimeToVisit": "October to March (Aani Brahmotsavam Car Festival in June/July)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 38900,
        "aiTip": "Tap the musical pillars gently with knuckles to hear sapthaswaras. Don't miss visiting Iruttu Kadai Halwa near the temple at 5 PM.",
        "dresscode": "Strict Hindu temple dress code: Dhoti/Kurta for men, Saree or Salwar for women.",
        "nearbyHotels": [
          {
            "id": "hotel-klassik-tirunelveli",
            "name": "Hotel Klassik Radiant",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,500",
            "distanceFromSpot": "1.5 km",
            "transitScore": 91,
            "amenities": [
              "AC",
              "Restaurant",
              "WiFi",
              "Parking"
            ],
            "address": "Trivandrum Road, Tirunelveli",
            "phone": "+91 462 250 1234"
          },
          {
            "id": "regency-tirunelveli",
            "name": "Regency Tirunelveli by GRT",
            "stars": 4,
            "pricePerNight": "₹4,200 – ₹7,500",
            "distanceFromSpot": "2.8 km",
            "transitScore": 88,
            "amenities": [
              "Restaurant",
              "Fitness Center",
              "WiFi",
              "Bar"
            ],
            "address": "Madurai Road, Tirunelveli",
            "phone": "+91 462 233 4567"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Tirunelveli Jn Railway Station",
            "duration": "10 min",
            "fare": "₹60 – ₹80",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "Local Bus from Tirunelveli Junction to Town",
            "duration": "12 min",
            "fare": "₹10",
            "frequency": "Every 5 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 8.7289,
          "lng": 77.6894
        }
      },
      {
        "id": "manimuthar-falls",
        "name": "Manimuthar Waterfalls & Dam",
        "nameInTamil": "மணிமுத்தாறு அருவி",
        "type": "waterfall",
        "description": "Cascading pristine waterfall flowing into a deep natural pond amidst dense Western Ghats forests below Manjolai tea estates.",
        "translations": {
          "fr": "Cascade vierge se déversant dans un bassin naturel au cœur des Ghats occidentaux.",
          "de": "Kaskadenartiger Wasserfall im dichten Dschungel der Westghats.",
          "ja": "西ガーツ山脈の密林の中にある清らかな滝と天然プール。",
          "zh": "西高止山脉密林深处的天然瀑布与山泉池。",
          "ar": "شلال عذب يتدفق في بركة طبيعية داخل غابات غاتس الغربية.",
          "hi": "पश्चिमी घाट के जंगलों में स्थित प्राकृतिक झरना और बांध।",
          "es": "Cascada virgen en un estanque natural en los Ghats occidentales."
        },
        "timings": "8:00 AM – 4:00 PM",
        "entryFee": "₹25 per person",
        "bestTimeToVisit": "September to January",
        "crowdLevel": "moderate",
        "rating": 4.6,
        "reviewCount": 18500,
        "aiTip": "Water contains medicinal herbal minerals from mountain plants. Forest department permits may be required for Manjolai hill top.",
        "nearbyHotels": [
          {
            "id": "hotel-arun-ambai",
            "name": "Hotel Arun Grand Ambasamudram",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,800",
            "distanceFromSpot": "12 km",
            "transitScore": 82,
            "amenities": [
              "AC Rooms",
              "Restaurant",
              "WiFi"
            ],
            "address": "Main Road, Ambasamudram",
            "phone": "+91 4634 250 888"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Tirunelveli to Ambasamudram / Manimuthar",
            "duration": "1 hr 15 min",
            "fare": "₹35",
            "frequency": "Every 30 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Cab from Tirunelveli City",
            "duration": "50 min",
            "fare": "₹800 – ₹1,200",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 8.5746,
          "lng": 77.4227
        }
      }
    ]
  },
  {
    "id": "vellore",
    "name": "Vellore",
    "nameInTamil": "வேலூர்",
    "region": "north",
    "description": "Historic city renowned for the golden Sripuram Mahalakshmi Temple, 16th-century granite fort with moat, and Christian Medical College (CMC).",
    "population": "0.50 Million",
    "famousFor": [
      "Sripuram Golden Temple",
      "Vellore Fort",
      "CMC Vellore",
      "Jalakandeswarar Temple"
    ],
    "districtHQ": "Vellore",
    "spots": [
      {
        "id": "sripuram-golden-temple",
        "name": "Sripuram Golden Temple",
        "nameInTamil": "ஸ்ரீபுரம் தங்கக் கோவில்",
        "type": "temple",
        "description": "Spiritual park covering 100 acres where the sanctum is covered in 1,500 kg of pure gold leaf. Pilgrims walk a star-shaped path with spiritual messages.",
        "translations": {
          "fr": "Temple spirituel recouvert de 1500 kg d'or pur entouré d'un parc en forme d'étoile.",
          "de": "Tempel mit 1500 kg reinem Gold überzogen in einem sternförmigen Park.",
          "ja": "1500kgの純金で覆われた聖堂。星型の回廊を歩く黄金寺院。",
          "zh": "覆盖有1500公斤纯金金箔的宏伟神庙，建在星形灵修步道中心。",
          "ar": "معبد مذهّب مغطى بـ 1500 كجم من الذهب الخالص.",
          "hi": "1500 किलोग्राम शुद्ध सोने से ढका भव्य महालक्ष्मी मंदिर।",
          "es": "Templo espiritual recubierto con 1500 kg de oro puro."
        },
        "timings": "4:00 AM – 8:00 PM",
        "entryFee": "Free (VIP Darshan: ₹100 – ₹250)",
        "bestTimeToVisit": "October to March (Evening lighting is breathtaking)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 52000,
        "aiTip": "Cellphones and digital cameras are strictly banned inside. Arrive by 5:30 PM to witness the temple illuminated with thousands of lights.",
        "dresscode": "Strict dress code: Traditional clothes only. No jeans, shorts, or tight clothing.",
        "nearbyHotels": [
          {
            "id": "darling-residency",
            "name": "Darling Residency",
            "stars": 3,
            "pricePerNight": "₹2,500 – ₹4,200",
            "distanceFromSpot": "7 km",
            "transitScore": 90,
            "amenities": [
              "Pure Veg Restaurant",
              "AC",
              "WiFi",
              "Travel Desk"
            ],
            "address": "Anna Salai, Vellore",
            "phone": "+91 416 222 1441"
          },
          {
            "id": "hotel-benzz-park-vellore",
            "name": "Hotel Benzz Park Vellore",
            "stars": 4,
            "pricePerNight": "₹4,500 – ₹7,200",
            "distanceFromSpot": "6 km",
            "transitScore": 88,
            "amenities": [
              "Pool",
              "Multi-Cuisine Restaurant",
              "Gym",
              "Bar"
            ],
            "address": "Katpadi Main Road, Vellore",
            "phone": "+91 416 663 3555"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Katpadi Railway Station to Sripuram",
            "duration": "20 min",
            "fare": "₹150 – ₹200",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "Local Bus from Old Bus Stand to Sripuram",
            "duration": "25 min",
            "fare": "₹15",
            "frequency": "Every 15 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 12.8711,
          "lng": 79.0886
        }
      },
      {
        "id": "vellore-fort",
        "name": "Vellore Fort & Jalakandeswarar Temple",
        "nameInTamil": "வேலூர் கோட்டை & ஜலகண்டேஸ்வரர் கோவில்",
        "type": "fort",
        "description": "Monumental 16th-century Vijayanagara granite fortress surrounded by a wide deep moat. Houses the exquisite Jalakandeswarar temple and Tipu Sultan family monuments.",
        "translations": {
          "fr": "Forteresse en granit du XVIe siècle avec un fossé géant et un temple orné.",
          "de": "Granitfestung aus dem 16. Jahrhundert, umgeben von einem tiefen Wassergraben.",
          "ja": "深い堀に囲まれた16世紀の花崗岩城塞。壮麗な寺院を内包。",
          "zh": "建于16世纪的花岗岩要塞，周围环绕着巨大的护城河，内有精美的雕刻神庙。",
          "ar": "قلعة جرانيتية من القرن السادس عشر محاطة بخندق مائي عميق.",
          "hi": "16वीं सदी का विशाल ग्रेनाइट किला और नक्काशीदार जलकंडेश्वर मंदिर।",
          "es": "Fortaleza de granito del siglo XVI rodeada por un foso profundo."
        },
        "timings": "8:00 AM – 6:00 PM",
        "entryFee": "Free (Museum: ₹5)",
        "bestTimeToVisit": "Year-round (Morning or late afternoon)",
        "crowdLevel": "moderate",
        "rating": 4.6,
        "reviewCount": 34100,
        "aiTip": "Walk the ramparts for cool breezes. The stone carvings on the temple wedding hall (Kalyana Mandapam) are world class.",
        "nearbyHotels": [
          {
            "id": "hotel-prince-manor",
            "name": "Hotel Prince Manor",
            "stars": 3,
            "pricePerNight": "₹1,600 – ₹2,900",
            "distanceFromSpot": "0.8 km",
            "walkTime": "10 min walk",
            "transitScore": 92,
            "amenities": [
              "AC Rooms",
              "WiFi",
              "Restaurant"
            ],
            "address": "Officer's Line, Vellore",
            "phone": "+91 416 222 3456"
          }
        ],
        "transport": [
          {
            "mode": "walk",
            "label": "Walk from Vellore Old Bus Stand",
            "duration": "5 min walk",
            "fare": "Free",
            "icon": "🚶"
          },
          {
            "mode": "auto",
            "label": "Auto from Katpadi Jn Station",
            "duration": "15 min",
            "fare": "₹100 – ₹130",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 12.9234,
          "lng": 79.1325
        }
      }
    ]
  },
  {
    "id": "tiruvannamalai",
    "name": "Tiruvannamalai",
    "nameInTamil": "திருவண்ணாமலை",
    "region": "north",
    "description": "One of the holiest Shaivite pilgrimage centers representing the Agni (Fire) element of Pancha Bhoota, home to sacred Arunachala Hill and Sri Ramana Maharshi Ashram.",
    "population": "0.14 Million",
    "famousFor": [
      "Arunachaleswarar Temple",
      "Arunachala Hill Girivalam",
      "Ramana Maharshi Ashram",
      "Karthigai Deepam"
    ],
    "districtHQ": "Tiruvannamalai",
    "spots": [
      {
        "id": "arunachaleswarar-temple",
        "name": "Arunachaleswarar Temple",
        "nameInTamil": "அருணாசலேஸ்வரர் கோவில்",
        "type": "pilgrimage",
        "description": "Massive temple complex covering 24 acres at the foot of Arunachala Hill. Represents the Fire (Agni) element among the Pancha Bhoota Sthalams, with an imposing 66m Rajagopuram.",
        "translations": {
          "fr": "Temple colossal de 10 hectares dédié à l'élément Feu (Agni) au pied de la colline sacrée.",
          "de": "Gewaltige Tempelanlage am Fuße des Arunachala-Berges, gewidmet dem Element Feuer.",
          "ja": "五大元素「火」を表す巨大シヴァ寺院。霊峰アルナーチャラの麓。",
          "zh": "位于阿鲁纳恰拉山下的宏伟寺庙，代表五大元素中的“火”。",
          "ar": "معبد ضخم يمثل عنصر النار في قاعدة جبل أروناتشالا المقدس.",
          "hi": "अरुणाचल पहाड़ी की तलहटी में स्थित पंचभूत अग्नि स्थल शिव मंदिर।",
          "es": "Templo colosal que representa el elemento Fuego al pie del sagrado monte Arunachala."
        },
        "timings": "5:00 AM – 12:30 PM & 3:30 PM – 9:30 PM",
        "entryFee": "Free (Special Darshan: ₹50)",
        "bestTimeToVisit": "October to March (Karthigai Deepam mega fire festival in Nov/Dec)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 68000,
        "aiTip": "Full Moon (Pournami) nights attract hundreds of thousands of pilgrims doing the 14 km barefoot Girivalam walk around the holy hill.",
        "dresscode": "Strict Hindu traditional dress: Dhoti for men, Saree or Salwar for women.",
        "nearbyHotels": [
          {
            "id": "ramana-towers",
            "name": "Ramana Towers Hotel",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "1.2 km",
            "transitScore": 90,
            "amenities": [
              "Veg Restaurant",
              "AC",
              "WiFi",
              "Meditation Hall"
            ],
            "address": "Chengham Road, Tiruvannamalai",
            "phone": "+91 4175 237 888"
          },
          {
            "id": "sparsha-resort-arunachala",
            "name": "Sparsa Resort Tiruvannamalai",
            "stars": 4,
            "pricePerNight": "₹5,500 – ₹9,200",
            "distanceFromSpot": "3.5 km",
            "transitScore": 86,
            "amenities": [
              "Hill View",
              "Eco-friendly",
              "Pool",
              "Ayurveda Spa"
            ],
            "address": "Athiyandal Village, Tiruvannamalai",
            "phone": "+91 4175 236 677"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Tiruvannamalai Railway Station / Bus Stand",
            "duration": "8 min",
            "fare": "₹50 – ₹80",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "TNSTC Direct Bus from Chennai CMBT",
            "duration": "4 hrs",
            "fare": "₹140",
            "frequency": "Every 20 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 12.2299,
          "lng": 79.0669
        }
      },
      {
        "id": "ramana-ashram-girivalam",
        "name": "Sri Ramana Maharshi Ashram & Girivalam",
        "nameInTamil": "ரமண மகரிஷி ஆசிரமம் & கிரிவலம்",
        "type": "pilgrimage",
        "description": "Serene spiritual ashram where sage Ramana Maharshi lived and taught self-enquiry (Atma Vichara). Serves as the starting point for the holy 14 km Girivalam circumambulation.",
        "translations": {
          "fr": "Ashram spirituel serein du sage Ramana Maharshi et point de départ du pèlerinage Girivalam.",
          "de": "Friedlicher Ashram von Ramana Maharshi und Ausgangspunkt der heiligen Girivalam-Umrundung.",
          "ja": "聖者ラマナ・マハルシのアシュラムと14kmの聖山周回巡礼路。",
          "zh": "拉玛那·马哈希圣者的灵修修院，也是环绕圣山14公里吉里瓦拉姆朝圣的起点。",
          "ar": "أشرم روحي هادئ للحكيم رامانا ماهارشي ونقطة انطلاق للطواف المقدس.",
          "hi": "महर्षि रमण का आध्यात्मिक आश्रम और 14 किमी पवित्र गिरिवलम परिक्रमा।",
          "es": "Sereno ashram de Ramana Maharshi y punto de partida del sagrado Girivalam."
        },
        "timings": "5:00 AM – 12:30 PM & 2:00 PM – 9:00 PM",
        "entryFee": "Free (Donations accepted)",
        "bestTimeToVisit": "Year-round (Early mornings and evenings for quiet meditation)",
        "crowdLevel": "moderate",
        "rating": 4.8,
        "reviewCount": 31000,
        "aiTip": "Maintain pin-drop silence in the Old Meditation Hall. Peacocks and deer roam freely around the gardens.",
        "nearbyHotels": [
          {
            "id": "hotel-arunachala-guest",
            "name": "Hotel Sri Arunachala Residency",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,500",
            "distanceFromSpot": "0.4 km",
            "walkTime": "5 min walk",
            "transitScore": 94,
            "amenities": [
              "Quiet Rooms",
              "Pure Veg Dining",
              "WiFi"
            ],
            "address": "Post Office Road, Near Ashram",
            "phone": "+91 4175 237 123"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Main Temple / Central Bus Stand",
            "duration": "7 min",
            "fare": "₹60 – ₹70",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 12.2208,
          "lng": 79.0528
        }
      }
    ]
  },
  {
    "id": "kancheepuram",
    "name": "Kancheepuram",
    "nameInTamil": "காஞ்சிபுரம்",
    "region": "north",
    "description": "The City of Thousand Temples and world capital of authentic handwoven pure mulberry Kanchipuram silk sarees. Sacred to both Shaivism and Vaishnavism.",
    "population": "0.16 Million",
    "famousFor": [
      "Kanchipuram Silk Sarees",
      "Ekambareswarar Temple",
      "Kamakshi Amman Temple",
      "Kailasanathar Temple"
    ],
    "districtHQ": "Kancheepuram",
    "spots": [
      {
        "id": "ekambareswarar-temple",
        "name": "Ekambareswarar Temple",
        "nameInTamil": "ஏகாம்பரேஸ்வரர் கோவில்",
        "type": "temple",
        "description": "Pancha Bhoota Sthalam representing the Earth (Prithvi) element. Features a towering 59m Rajagopuram and a sacred 3,500-year-old mango tree whose branches bear four distinct types of mangoes.",
        "translations": {
          "fr": "Temple de l'élément Terre avec un manguier sacré de 3500 ans et un gopuram de 59m.",
          "de": "Erd-Element-Tempel mit 3500 Jahre altem Mangobaum und 59m hohem Turm.",
          "ja": "五大元素「地」を表す寺院。4種のマンゴーが実る樹齢3500年の神木。",
          "zh": "代表“地”元素的古老神庙，拥有3500年历史的圣芒果树。",
          "ar": "معبد يمثل عنصر الأرض مع شجرة مانجو مقدسة عمرها 3500 عام.",
          "hi": "पंचभूत पृथ्वी स्थल शिव मंदिर, जहाँ 3,500 वर्ष पुराना दिव्य आम का पेड़ है।",
          "es": "Templo del elemento Tierra con un árbol de mango sagrado de 3500 años."
        },
        "timings": "6:00 AM – 12:30 PM & 4:00 PM – 8:30 PM",
        "entryFee": "Free (Special Darshan: ₹20 – ₹50)",
        "bestTimeToVisit": "October to March (Panguni Uthiram festival)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 41200,
        "aiTip": "Don't miss the 1000-pillar hall and the ancient Prithvi Lingam made of sand, which priests do not pour water over during abhishekam.",
        "dresscode": "Strict Hindu traditional wear: Dhoti for men, Saree/Salwar for women.",
        "nearbyHotels": [
          {
            "id": "grt-residency-kanchi",
            "name": "Regency Kanchipuram by GRT Hotels",
            "stars": 4,
            "pricePerNight": "₹4,200 – ₹7,200",
            "distanceFromSpot": "2.5 km",
            "transitScore": 90,
            "amenities": [
              "Multi-cuisine Restaurant",
              "AC",
              "WiFi",
              "Bar",
              "Silk Tour Desk"
            ],
            "address": "Gandhi Road, Kanchipuram",
            "phone": "+91 44 2722 5250"
          },
          {
            "id": "babas-residency",
            "name": "Hotel Babas Residency",
            "stars": 3,
            "pricePerNight": "₹1,600 – ₹2,800",
            "distanceFromSpot": "1.0 km",
            "walkTime": "12 min walk",
            "transitScore": 92,
            "amenities": [
              "AC Rooms",
              "Veg Restaurant",
              "Free Parking"
            ],
            "address": "Nellukara Street, Kanchipuram",
            "phone": "+91 44 2722 3456"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Direct TNSTC / SETC Bus from Chennai CMBT",
            "duration": "2 hrs",
            "fare": "₹60",
            "frequency": "Every 15 min",
            "icon": "🚌"
          },
          {
            "mode": "train",
            "label": "EMU / Passenger Train from Chennai Beach to Kanchipuram",
            "duration": "2 hrs 15 min",
            "fare": "₹25",
            "icon": "🚆"
          },
          {
            "mode": "auto",
            "label": "Auto from Kanchipuram Bus Stand",
            "duration": "6 min",
            "fare": "₹50 – ₹70",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 12.8476,
          "lng": 79.6997
        }
      },
      {
        "id": "kamakshi-amman-temple",
        "name": "Sri Kamakshi Amman Temple",
        "nameInTamil": "காமாட்சி அம்மன் கோவில்",
        "type": "pilgrimage",
        "description": "One of the 51 holy Shakti Peethas and the supreme shrine where Goddess Kamakshi sits in Padmasana posture with sugar-cane bow and flower arrows. Features a magnificent gold-plated sanctum dome.",
        "translations": {
          "fr": "L'un des plus importants temples de la Déesse Shakti en Inde avec un dôme doré étincelant.",
          "de": "Eines der heiligsten Shakti-Heiligtümer Indiens mit vergoldeter Kuppel.",
          "ja": "インド最高峰の女神シャクティ寺院。黄金に輝く本殿屋根。",
          "zh": "印度最重要的性力派女神神庙之一，拥有镀金圣殿穹顶。",
          "ar": "واحد من أهم معابد الإلهة شاكتي في الهند مع قبة مطلية بالذهب.",
          "hi": "51 शक्तिपीठों में से एक अत्यंत पावन कामाक्षी देवी मंदिर, स्वर्ण शिखर से सुशोभित।",
          "es": "Uno de los santuarios de Shakti más importantes con cúpula dorada."
        },
        "timings": "5:30 AM – 12:15 PM & 4:00 PM – 9:00 PM",
        "entryFee": "Free (Special Darshan: ₹100)",
        "bestTimeToVisit": "October to March (Navratri in Oct is celebrated with grand golden chariot)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 49500,
        "aiTip": "Visit during early morning Abhishekam (5:30 AM) for tranquil darshan. Local silk cooperative stores (Co-optex) are right around the corner.",
        "dresscode": "Strict Hindu temple attire required: Traditional dhoti/pants with shirt for men, saree/churidar for women.",
        "nearbyHotels": [
          {
            "id": "hotel-sbk-park-kanchi",
            "name": "Hotel SBK Park Way",
            "stars": 3,
            "pricePerNight": "₹2,000 – ₹3,200",
            "distanceFromSpot": "0.6 km",
            "walkTime": "8 min walk",
            "transitScore": 95,
            "amenities": [
              "Pure Veg Restaurant",
              "AC",
              "WiFi"
            ],
            "address": "Hospital Road, Kanchipuram",
            "phone": "+91 44 2723 1122"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Kanchipuram Railway Station",
            "duration": "8 min",
            "fare": "₹60 – ₹80",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 12.8407,
          "lng": 79.7032
        }
      }
    ]
  },
  {
    "id": "dharmapuri",
    "name": "Dharmapuri",
    "nameInTamil": "தர்மபுரி",
    "region": "west",
    "description": "Lush agricultural district in northwestern Tamil Nadu famous for Hogenakkal Falls (\"Niagara of India\") and ancient rock temples.",
    "population": "1.50 Million",
    "famousFor": [
      "Hogenakkal Falls",
      "Coracle Boat Rides",
      "Theerthamalai Temple",
      "Mango Orchards"
    ],
    "districtHQ": "Dharmapuri",
    "spots": [
      {
        "id": "hogenakkal-falls",
        "name": "Hogenakkal Falls",
        "nameInTamil": "ஒகேனக்கல் அருவி",
        "type": "waterfall",
        "description": "Dramatic series of cascading waterfalls on the Cauvery River where carbonatite rock formations are among the oldest in South Asia. Famed for circular coracle boat rides and fresh herbal oil massages.",
        "translations": {
          "fr": "Série spectaculaire de cascades sur le fleuve Cauvery, surnommée le Niagara de l'Inde.",
          "de": "Spektakuläre Wasserfälle am Cauvery-Fluss, bekannt für Rundbootfahrten (Coracle).",
          "ja": "「インドのナイアガラ」と呼ばれるコーヴェリ川の壮大な滝群。円形ボート体験。",
          "zh": "高韦里河上的壮丽瀑布群，被称为“印度的尼亚加拉”，以圆形柳条船闻名。",
          "ar": "سلسلة شلالات مذهلة على نهر كافيري تُعرف باسم نياجرا الهند.",
          "hi": "कावेरी नदी पर स्थित \"भारत का नियाग्रा\" झरना, गोल नाव (कोराकल) की सवारी के लिए प्रसिद्ध।",
          "es": "Espectacular serie de cascadas apodadas las cataratas del Niágara de la India."
        },
        "timings": "8:00 AM – 5:30 PM (Boating operates weather permitting)",
        "entryFee": "₹10 entry (Coracle ride: ₹400 – ₹750 per person)",
        "bestTimeToVisit": "July to December (High post-monsoon water flow)",
        "crowdLevel": "high",
        "rating": 4.6,
        "reviewCount": 39500,
        "aiTip": "Take a circular coracle boat (Parisal) ride right beneath the spraying mist. Always wear the life jacket provided.",
        "nearbyHotels": [
          {
            "id": "ttdc-hogenakkal",
            "name": "TTDC Hotel Tamil Nadu Hogenakkal",
            "stars": 3,
            "pricePerNight": "₹1,600 – ₹3,000",
            "distanceFromSpot": "0.8 km",
            "walkTime": "10 min walk",
            "transitScore": 90,
            "amenities": [
              "River View",
              "Restaurant",
              "Boating Desk",
              "Parking"
            ],
            "address": "Pennagaram Taluk, Hogenakkal",
            "phone": "+91 4342 256 447"
          },
          {
            "id": "falls-view-resort",
            "name": "Hogenakkal Falls View Resort",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "1.2 km",
            "transitScore": 86,
            "amenities": [
              "Cottages",
              "Local Fish Dining",
              "Garden"
            ],
            "address": "Main Road, Hogenakkal",
            "phone": "+91 4342 256 888"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Dharmapuri Bus Stand to Hogenakkal",
            "duration": "1 hr 15 min",
            "fare": "₹40",
            "frequency": "Every 30 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Cab from Dharmapuri or Salem",
            "duration": "1 hr",
            "fare": "₹750 – ₹1,200",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 12.1182,
          "lng": 77.7772
        }
      },
      {
        "id": "theerthamalai-temple",
        "name": "Theerthamalai Theerthagirishwarar Temple",
        "nameInTamil": "தீர்த்தமலை தீர்த்தகிரீஸ்வரர் கோவில்",
        "type": "pilgrimage",
        "description": "Ancient hill temple dedicated to Lord Shiva situated atop Theerthagiri hill, blessed with five perennial holy waterfalls (theerthams) where Lord Rama is believed to have performed penance.",
        "translations": {
          "fr": "Ancien temple perché sur une colline avec cinq sources sacrées pérennes.",
          "de": "Historischer Bergtempel mit fünf ganzjährigen heiligen Quellen.",
          "ja": "ラーマ神が祈りを捧げたと伝わる5つの聖なる湧き水を持つ丘の上の寺院。",
          "zh": "位于山顶的古老湿婆神庙，拥有五处长年不绝的圣泉。",
          "ar": "معبد تل قديم مع خمسة ينابيع مقدسة لا تنضب.",
          "hi": "तीर्थगिरि पहाड़ी पर स्थित प्राचीन शिव मंदिर, जहाँ पाँच पवित्र जलधाराएँ हैं।",
          "es": "Antiguo templo en la colina con cinco manantiales sagrados perennes."
        },
        "timings": "6:00 AM – 6:00 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "October to February (Maha Shivaratri festival)",
        "crowdLevel": "moderate",
        "rating": 4.5,
        "reviewCount": 14200,
        "aiTip": "Climb the stone steps in the cool morning. Take a holy shower under the Agasthiyar Theertham waterfall flowing from the rocks.",
        "nearbyHotels": [
          {
            "id": "hotel-dharani-dharmapuri",
            "name": "Hotel Dharani Dharmapuri",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,400",
            "distanceFromSpot": "28 km",
            "transitScore": 80,
            "amenities": [
              "AC",
              "Restaurant",
              "WiFi"
            ],
            "address": "Bye-pass Road, Dharmapuri",
            "phone": "+91 4342 260 123"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Harur to Theerthamalai",
            "duration": "30 min",
            "fare": "₹20",
            "frequency": "Every 45 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 12.0833,
          "lng": 78.5833
        }
      }
    ]
  },
  {
    "id": "nagapattinam",
    "name": "Nagapattinam",
    "nameInTamil": "நாகப்பட்டினம்",
    "region": "east",
    "description": "Coastal district on the Bay of Bengal and global epicenter of interfaith communal harmony, hosting the holy Basilica of Our Lady of Good Health in Velankanni and Nagore Dargah Sharif.",
    "population": "1.61 Million",
    "famousFor": [
      "Velankanni Church",
      "Nagore Dargah",
      "Point Calimere Bird Sanctuary",
      "Fishing Harbor"
    ],
    "districtHQ": "Nagapattinam",
    "spots": [
      {
        "id": "velankanni-church",
        "name": "Basilica of Our Lady of Good Health",
        "nameInTamil": "வேளாங்கண்ணி ஆரோக்கிய மாதா பேராலயம்",
        "type": "pilgrimage",
        "description": "World-renowned Roman Catholic minor basilica often referred to as the \"Lourdes of the East\". Celebrates 16th-century Marian apparitions with pilgrims of all faiths offering prayers for healing.",
        "translations": {
          "fr": "Basilique catholique mondialement célèbre surnommée le Lourdes de l'Orient.",
          "de": "Weltberühmte katholische Basilika, auch bekannt als Lourdes des Ostens.",
          "ja": "「東洋のルルド」として世界的に名高いカトリック大聖堂。",
          "zh": "举世闻名的天主教大圣殿，被誉为“东方卢尔德”。",
          "ar": "كنيسة كاثوليكية مشهورة عالمياً تُعرف باسم لورد الشرق.",
          "hi": "विश्व प्रसिद्ध वेलंकन्नी आरोग्य माता बेसिलिका, जिसे \"पूरब का लूर्डेस\" कहा जाता है।",
          "es": "Basílica católica de fama mundial conocida como el Lourdes de Oriente."
        },
        "timings": "5:00 AM – 9:00 PM (Masses in multiple languages)",
        "entryFee": "Free",
        "bestTimeToVisit": "August to March (Grand Feast from August 29 to September 8 attracts millions)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 65400,
        "aiTip": "Mass services are held in Tamil, English, Malayalam, Hindi, Telugu, and Kannada. The serene beachfront is directly behind the church.",
        "nearbyHotels": [
          {
            "id": "hotel-star-beach",
            "name": "Hotel Sea Gate Velankanni",
            "stars": 3,
            "pricePerNight": "₹2,000 – ₹3,600",
            "distanceFromSpot": "0.4 km",
            "walkTime": "5 min walk",
            "transitScore": 94,
            "amenities": [
              "Pool",
              "AC Rooms",
              "Multi-Cuisine Restaurant",
              "WiFi"
            ],
            "address": "Main Road, Velankanni",
            "phone": "+91 4365 263 900"
          },
          {
            "id": "ttdc-velankanni",
            "name": "TTDC Hotel Tamil Nadu Velankanni",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "0.6 km",
            "walkTime": "8 min walk",
            "transitScore": 92,
            "amenities": [
              "AC Rooms",
              "Restaurant",
              "Parking"
            ],
            "address": "Beach Road, Velankanni",
            "phone": "+91 4365 263 237"
          },
          {
            "id": "clinton-park-inn",
            "name": "Clinton Park Inn",
            "stars": 4,
            "pricePerNight": "₹3,800 – ₹6,500",
            "distanceFromSpot": "0.8 km",
            "transitScore": 89,
            "amenities": [
              "Luxury Suites",
              "Fine Dining",
              "WiFi",
              "Travel Desk"
            ],
            "address": "Nagapattinam Main Road, Velankanni",
            "phone": "+91 4365 263 333"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Direct Express Trains from Chennai, Bangalore, Goa to Velankanni Terminal (VLNK)",
            "duration": "8 hrs from Chennai",
            "fare": "₹280 – ₹950",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "TNSTC / SETC Bus from Chennai CMBT directly to Velankanni",
            "duration": "7.5 hrs",
            "fare": "₹240",
            "frequency": "Hourly",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Velankanni Station to Church",
            "duration": "5 min",
            "fare": "₹50 – ₹60",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 10.6807,
          "lng": 79.8497
        }
      },
      {
        "id": "nagore-dargah",
        "name": "Nagore Dargah Sharif",
        "nameInTamil": "நாகூர் தர்கா ஷரீப்",
        "type": "pilgrimage",
        "description": "500-year-old Sufi saint shrine dedicated to Saint Hazrat Syed Shahul Hameed Qadir Wali. Features five soaring minarets, the tallest reaching 131 feet (Thallai Madhu), symbol of peace and multi-faith unity.",
        "translations": {
          "fr": "Sanctuaire soufi de 500 ans avec 5 minarets emblématiques, symbole de paix universelle.",
          "de": "500 Jahre alter Sufi-Schrein mit 5 Minaretten, Symbol universeller Harmonie.",
          "ja": "5つのミナレットを持つ500年の歴史を誇るスーフィー聖者霊廟。",
          "zh": "拥有500年历史的苏菲派圣人圣殿，建有五座宏伟的宣礼塔。",
          "ar": "ضريح صوفي عمره 500 عام مع خمس مآذن شاهقة يرمز للسلام.",
          "hi": "500 साल पुरानी नागूर दरगाह शरीफ, जिसमें 131 फीट ऊंची प्रसिद्ध मीनार है।",
          "es": "Santuario sufí de 500 años con cinco minaretes icónicos."
        },
        "timings": "4:30 AM – 10:00 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "Year-round (Annual Kanduri Urs festival is celebrated with grand fervor)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 38200,
        "aiTip": "Open to people of all religious faiths. Visitors offer holy chadar, fragrant flowers, and sweet pudding. Remove shoes outside the entrance gate.",
        "nearbyHotels": [
          {
            "id": "hotel-mangala-nagore",
            "name": "Hotel Mangala Residency Nagore",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,600",
            "distanceFromSpot": "0.6 km",
            "walkTime": "7 min walk",
            "transitScore": 92,
            "amenities": [
              "AC Rooms",
              "Restaurant",
              "WiFi"
            ],
            "address": "Dargah Road, Nagore",
            "phone": "+91 4365 250 123"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Train to Nagore Railway Station",
            "duration": "5 min from Station",
            "fare": "₹10",
            "icon": "🚆"
          },
          {
            "mode": "auto",
            "label": "Auto from Nagapattinam Town to Nagore",
            "duration": "12 min",
            "fare": "₹80 – ₹100",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 10.8228,
          "lng": 79.8458
        }
      }
    ]
  },
  {
    "id": "tenkasi",
    "name": "Tenkasi",
    "nameInTamil": "தென்காசி",
    "region": "south",
    "description": "Picturesque district nestled under Western Ghats, famed as the \"Spa of South India\" for Courtallam medicinal waterfalls and historic Kasi Viswanathar Temple.",
    "population": "1.41 Million",
    "famousFor": [
      "Courtallam Waterfalls",
      "Kasi Viswanathar Temple",
      "Five Falls",
      "Chitraru River"
    ],
    "districtHQ": "Tenkasi",
    "spots": [
      {
        "id": "courtallam-falls",
        "name": "Courtallam (Kutralam) Waterfalls",
        "nameInTamil": "குற்றாலம் அருவி",
        "type": "waterfall",
        "description": "Renowned as the \"Spa of South India\". Nine natural cascades (Main Falls, Five Falls, Tiger Falls, Old Courtallam) flow over therapeutic medicinal herbs inside Western Ghats forests.",
        "translations": {
          "fr": "Célèbre \"Spa de l'Inde du Sud\" avec 9 cascades thérapeutiques.",
          "de": "Bekannt als \"Kurort Südindiens\" mit 9 heilenden Wasserfällen.",
          "ja": "薬草の香る天然の温泉・滝。「南インドのスパ」として有名。",
          "zh": "被誉为“南印度水疗胜地”，九处带有草药疗效的天然瀑布。",
          "ar": "شلالات كورتالام العلاجية المعروفة باسم منتجع جنوب الهند.",
          "hi": "दक्षिण भारत का प्राकृतिक स्पा, जहाँ का पानी औषधीय गुणों से भरपूर माना जाता है।",
          "es": "Famoso \"Spa del Sur de la India\" con nueve cascadas terapéuticas."
        },
        "timings": "6:00 AM – 6:00 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "June to September (Southwest Monsoon Season \"Saaral\")",
        "crowdLevel": "high",
        "rating": 4.7,
        "reviewCount": 46200,
        "aiTip": "The July-August \"Saaral\" season brings gentle drizzles and full cascading water. Separate bathing sections are marked for men and women.",
        "nearbyHotels": [
          {
            "id": "ttdc-courtallam",
            "name": "TTDC Hotel Tamil Nadu Courtallam",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "0.4 km",
            "walkTime": "5 min walk",
            "transitScore": 92,
            "amenities": [
              "Near Main Falls",
              "Veg Restaurant",
              "Family Rooms"
            ],
            "address": "Bus Stand Road, Courtallam",
            "phone": "+91 4633 222 423"
          },
          {
            "id": "green-valley-resort",
            "name": "Green Valley Courtallam Retreat",
            "stars": 3,
            "pricePerNight": "₹2,500 – ₹4,500",
            "distanceFromSpot": "1.2 km",
            "transitScore": 86,
            "amenities": [
              "Garden View",
              "AC",
              "Room Service"
            ],
            "address": "Five Falls Bypass Road, Tenkasi",
            "phone": "+91 4633 223 555"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Tenkasi Railway Station to Courtallam",
            "duration": "15 min",
            "fare": "₹120 – ₹150",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "Frequent Town Bus from Tenkasi Bus Stand",
            "duration": "15 min",
            "fare": "₹12",
            "frequency": "Every 10 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 8.9288,
          "lng": 77.2694
        }
      },
      {
        "id": "kasi-viswanathar-temple",
        "name": "Kasi Viswanathar Temple Tenkasi",
        "nameInTamil": "தென்காசி காசி விஸ்வநாதர் கோவில்",
        "type": "temple",
        "description": "Historic 14th-century temple built by Pandyan King Parakkirama Pandian, who named the town \"Tenkasi\" (Varanasi of the South). Boasts a monumental 180-foot Rajagopuram that can be ascended.",
        "translations": {
          "fr": "Temple historique du XIVe siècle fondé par les rois Pandya, surnommé Varanasi du Sud.",
          "de": "Historischer Tempel aus dem 14. Jahrhundert mit 55m hohem Torturm (Varanasi des Südens).",
          "ja": "「南のバラナシ」と呼ばれる14世紀パーンディヤ朝の壮大な寺院。",
          "zh": "14世纪潘地亚国王建立的古老寺庙，被称为“南方的瓦拉纳西”。",
          "ar": "معبد تاريخي من القرن الرابع عشر يُعرف باسم فاراناسي الجنوب.",
          "hi": "14वीं सदी का भव्य मंदिर जिसे \"दक्षिण का काशी\" कहा जाता है, 180 फीट ऊंचा गोपुरम।",
          "es": "Templo histórico del siglo XIV conocido como la Benarés del Sur."
        },
        "timings": "6:00 AM – 12:00 PM & 4:30 PM – 8:30 PM",
        "entryFee": "Free (Gopuram climb: ₹10)",
        "bestTimeToVisit": "October to March (Masi Maham in Feb/March)",
        "crowdLevel": "moderate",
        "rating": 4.7,
        "reviewCount": 22100,
        "aiTip": "Climb up to the 9th tier of the 180-ft Rajagopuram for an incredible aerial view of Tenkasi town and the Western Ghats range.",
        "dresscode": "Traditional temple dress code required: Dhoti for men, Saree/Salwar for women.",
        "nearbyHotels": [
          {
            "id": "hotel-kalyani-tenkasi",
            "name": "Hotel Kalyani Tenkasi",
            "stars": 3,
            "pricePerNight": "₹1,400 – ₹2,400",
            "distanceFromSpot": "0.8 km",
            "transitScore": 90,
            "amenities": [
              "AC Rooms",
              "Pure Veg Restaurant",
              "WiFi"
            ],
            "address": "Railway Feeder Road, Tenkasi",
            "phone": "+91 4633 224 888"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Tenkasi Junction Station",
            "duration": "5 min",
            "fare": "₹40 – ₹60",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 8.9592,
          "lng": 77.3142
        }
      }
    ]
  },
  {
    "id": "villupuram",
    "name": "Villupuram",
    "nameInTamil": "விழுப்புரம்",
    "region": "north",
    "description": "Central Tamil Nadu transit junction, home to the impregnable medieval Gingee Fort (\"Troy of the East\") and famous Melmalayanur Angalamman temple.",
    "population": "0.96 Million",
    "famousFor": [
      "Gingee Fort",
      "Melmalayanur Temple",
      "Transit Junction",
      "Rock Sculptures"
    ],
    "districtHQ": "Villupuram",
    "spots": [
      {
        "id": "gingee-fort",
        "name": "Gingee Fort (Senji Fort)",
        "nameInTamil": "செஞ்சிக் கோட்டை",
        "type": "fort",
        "description": "Impregnable 9th-century fortress spread over three monumental granite hills (Rajagiri, Krishnagiri, and Chandrayandurg). Chhatrapati Shivaji famously named it the \"most impregnable fortress in India\".",
        "translations": {
          "fr": "Forteresse spectaculaire sur 3 collines de granit, surnommée \"Troie de l'Orient\".",
          "de": "Uneinnehmbare Festung auf drei Granitbergen, genannt \"Troja des Ostens\".",
          "ja": "「東洋のトロイ」と称賛された3つの花崗岩の山にまたがる難攻不落の城塞。",
          "zh": "分布在三座花岗岩山丘上的坚固要塞，被誉为“东方特洛伊”。",
          "ar": "قلعة منيعة تمتد عبر 3 تلال جرانيتية تُلقب بطروادة الشرق.",
          "hi": "तीन पहाड़ियों पर फैला भारत का अभेद्य किला, जिसे \"पूरब का ट्रॉय\" कहा गया।",
          "es": "Fortaleza inexpugnable sobre tres colinas de granito apodada \"Troya de Oriente\"."
        },
        "timings": "9:00 AM – 5:30 PM",
        "entryFee": "₹25 for Indians, ₹300 for Foreign Tourists",
        "bestTimeToVisit": "October to February (Climbing in midday heat is exhausting)",
        "crowdLevel": "moderate",
        "rating": 4.7,
        "reviewCount": 36800,
        "aiTip": "Start early morning (9:00 AM) to climb Rajagiri hill (takes approx. 1.5 hrs). Carry plenty of water and wear good grip sports shoes.",
        "nearbyHotels": [
          {
            "id": "hotel-annamalai-gingee",
            "name": "Hotel Annamalai Gingee",
            "stars": 3,
            "pricePerNight": "₹1,600 – ₹2,800",
            "distanceFromSpot": "1.5 km",
            "transitScore": 85,
            "amenities": [
              "AC",
              "Restaurant",
              "WiFi",
              "Parking"
            ],
            "address": "Tiruvannamalai Road, Gingee",
            "phone": "+91 4145 222 345"
          },
          {
            "id": "hotel-grand-kuber-villupuram",
            "name": "Hotel Grand Kubera Villupuram",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,500",
            "distanceFromSpot": "28 km",
            "transitScore": 82,
            "amenities": [
              "AC Rooms",
              "Multi-cuisine Restaurant",
              "Bar"
            ],
            "address": "Trichy Trunk Road, Villupuram",
            "phone": "+91 4146 226 777"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Villupuram / Chennai to Gingee",
            "duration": "45 min from Villupuram",
            "fare": "₹30",
            "frequency": "Every 20 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Gingee Town Bus Stop to Fort Base",
            "duration": "5 min",
            "fare": "₹50 – ₹70",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 12.2536,
          "lng": 79.4184
        }
      },
      {
        "id": "melmalayanur-temple",
        "name": "Melmalayanur Angalamman Temple",
        "nameInTamil": "மேல்மலையனூர் அங்காளம்மன் கோவில்",
        "type": "pilgrimage",
        "description": "Ancient and powerful temple dedicated to Goddess Angala Parameswari, famed for the vibrant Amavasya (New Moon) midnight swinging ritual (Oonjal Sevai) and Mayana Kollai festival.",
        "translations": {
          "fr": "Temple renommé de la déesse Angalamman avec rituels nocturnes de la nouvelle lune.",
          "de": "Berühmter Göttinnen-Tempel mit mitternächtlichen Neumond-Schaukelritualen.",
          "ja": "新月の夜に行われる壮大な深夜の儀式で知られる女神寺院。",
          "zh": "著名的女神庙，以新月之夜的午夜摇篮祈福仪式而闻名。",
          "ar": "معبد قديم مشهور بطقوس أرجوحة منتصف الليل في ليالي المحاق.",
          "hi": "अंगालम्मन देवी का पावन मंदिर, जो अमावस्या की मध्यरात्रि झूला सेवा के लिए विख्यात है।",
          "es": "Templo renombrado de la Diosa con ritual nocturno de luna nueva."
        },
        "timings": "6:00 AM – 1:00 PM & 4:00 PM – 9:00 PM (All night on Amavasya)",
        "entryFee": "Free",
        "bestTimeToVisit": "New Moon days (Amavasya) and Masi Festival (Feb/March)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 31400,
        "aiTip": "On Amavasya night, more than 100,000 devotees gather to witness the Goddess swung on a silver jhula. Special buses run from all parts of Tamil Nadu.",
        "dresscode": "Traditional Indian wear.",
        "nearbyHotels": [
          {
            "id": "hotel-sakthi-residency-melmalayanur",
            "name": "Sakthi Residency Gingee",
            "stars": 3,
            "pricePerNight": "₹1,200 – ₹2,200",
            "distanceFromSpot": "18 km",
            "transitScore": 80,
            "amenities": [
              "AC",
              "Vegetarian Dining"
            ],
            "address": "Gingee Road",
            "phone": "+91 4145 223 999"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Direct Special Buses from Chennai, Villupuram, Vellore",
            "duration": "1 hr from Villupuram",
            "fare": "₹35",
            "frequency": "Regular on festival days",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 12.3789,
          "lng": 79.3524
        }
      }
    ]
  },
  {
    "id": "dindigul",
    "name": "Dindigul",
    "nameInTamil": "திண்டுக்கல்",
    "region": "south",
    "description": "Renowned for world-famous Dindigul Thalappakatti Biryani, handcrafted iron locks, Palani Murugan Temple, and the misty hills of Kodaikanal.",
    "population": "0.21 Million",
    "famousFor": [
      "Palani Murugan Temple",
      "Kodaikanal Hill Station",
      "Dindigul Biryani",
      "Dindigul Locks",
      "Rock Fort"
    ],
    "districtHQ": "Dindigul",
    "spots": [
      {
        "id": "kodaikanal-lake",
        "name": "Kodaikanal Lake & Hill Station",
        "nameInTamil": "கொடைக்கானல் ஏரி & மலைவாழிடம்",
        "type": "hill",
        "description": "The \"Princess of Hill Stations\" located at 2,133m in Palani Hills, featuring a star-shaped lake, Coaker's Walk cliff views, Bryant Park, and pine forests.",
        "translations": {
          "fr": "La \"Princesse des stations de montagne\" à 2133m avec lac en étoile et forêts de pins.",
          "de": "Die \"Prinzessin der Bergstationen\" auf 2133m mit sternförmigem See.",
          "ja": "標高2133m「高原の王女」と呼ばれる美しい星型湖と松林。",
          "zh": "海拔2133米的“山中公主”，拥有星形湖泊和松树林。",
          "ar": "أميرة المحطات الجبلية على ارتفاع 2133م مع بحيرة على شكل نجمة.",
          "hi": "2133 मीटर पर स्थित \"हिल स्टेशनों की राजकुमारी\", तारा रूपी झील और पाइन वन।",
          "es": "La \"Princesa de las colinas\" a 2133m con un lago en forma de estrella."
        },
        "timings": "Open 24 hours | Boating: 8:30 AM – 5:30 PM",
        "entryFee": "Free (Boating: ₹50 – ₹180)",
        "bestTimeToVisit": "September to May",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 78500,
        "aiTip": "Rent a bicycle or tandem bike to cycle the 5 km perimeter around the lake. Visit Pillar Rocks and Coaker's Walk for valley panoramas.",
        "nearbyHotels": [
          {
            "id": "carlton-kodaikanal",
            "name": "The Carlton Kodaikanal",
            "stars": 5,
            "pricePerNight": "₹9,500 – ₹18,000",
            "distanceFromSpot": "0.3 km",
            "walkTime": "4 min walk",
            "transitScore": 96,
            "amenities": [
              "Lakefront",
              "Spa",
              "Fine Dining",
              "Gym",
              "Heated Rooms"
            ],
            "address": "Lake Road, Kodaikanal",
            "phone": "+91 4542 248 555"
          },
          {
            "id": "hotel-kodai-resort",
            "name": "Kodai Resort Hotel",
            "stars": 4,
            "pricePerNight": "₹4,500 – ₹8,000",
            "distanceFromSpot": "0.8 km",
            "transitScore": 91,
            "amenities": [
              "Cottages",
              "Ayurveda Spa",
              "Restaurant",
              "Kids Play"
            ],
            "address": "Coaker's Walk, Kodaikanal",
            "phone": "+91 4542 240 632"
          },
          {
            "id": "valley-view-kodai",
            "name": "Valley View Inn",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "1.2 km",
            "transitScore": 88,
            "amenities": [
              "Valley View",
              "Pure Veg Dining",
              "WiFi"
            ],
            "address": "Post Office Road, Kodaikanal",
            "phone": "+91 4542 240 258"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Ghat Bus from Dindigul / Madurai Bus Stand",
            "duration": "3 hrs from Dindigul",
            "fare": "₹85",
            "frequency": "Every 30 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Cab from Kodai Road Railway Station",
            "duration": "2.5 hrs",
            "fare": "₹1,600 – ₹2,200",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 10.2381,
          "lng": 77.4892
        }
      },
      {
        "id": "palani-murugan-temple",
        "name": "Arulmigu Dhandayuthapani Swamy Temple, Palani",
        "nameInTamil": "பழனி முருகன் கோவில்",
        "type": "pilgrimage",
        "description": "Third sacred Arupadaiveedu of Lord Murugan atop Sivagiri hill. The presiding deity idol is sculpted from Navapashanam (an amalgam of nine poisonous herbs) by sage Bogar, granting miraculous healing.",
        "translations": {
          "fr": "L'un des 6 temples sacrés d'Arupadaiveedu de Murugan, célèbre pour son idole médicinale Navapashanam.",
          "de": "Heiliger Murugan-Tempel der sechs Arupadaiveedu mit heilendem Navapashanam-Idol.",
          "ja": "ムルガン神の6大聖地（アルパダイヴィードゥ）の第3聖殿。",
          "zh": "穆鲁干神六大圣所之第三圣殿，供奉由九种草药合金雕刻的神像。",
          "ar": "واحد من أقدس ستة معابد للإله موروغان يقع على قمة تل شيفاجيري.",
          "hi": "भगवान मुरुगन के 6 पवित्र अरुपदैवीडु में से तीसरा मंदिर, प्रसिद्ध पंचामृतम् प्रसादम।",
          "es": "Uno de los seis templos sagrados Arupadaiveedu de Murugan en la colina Sivagiri."
        },
        "timings": "5:30 AM – 9:00 PM",
        "entryFee": "Free (Winch/Rope car: ₹15 – ₹50)",
        "bestTimeToVisit": "October to March (Thai Poosam in Jan/Feb draws millions of Kavadi bearers)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 84000,
        "aiTip": "Take the scenic rope car or electric winch to ascend the 690-step hill. Don't miss buying GI-tagged Palani Panchamirtham prasadam.",
        "dresscode": "Strict Hindu temple dress: Dhoti for men, Saree or Salwar with Dupatta for women.",
        "nearbyHotels": [
          {
            "id": "hotel-ganpat-palani",
            "name": "Ganpat Grand Palani",
            "stars": 4,
            "pricePerNight": "₹3,500 – ₹6,200",
            "distanceFromSpot": "0.8 km",
            "transitScore": 92,
            "amenities": [
              "Temple View",
              "Pure Veg Restaurant",
              "AC",
              "Parking"
            ],
            "address": "Adivaram, Palani",
            "phone": "+91 4545 244 555"
          },
          {
            "id": "hotel-subam-palani",
            "name": "Hotel Subam",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹2,900",
            "distanceFromSpot": "0.3 km",
            "walkTime": "4 min walk",
            "transitScore": 95,
            "amenities": [
              "Near Winch Station",
              "Pure Veg Dining",
              "AC"
            ],
            "address": "North Giri Street, Palani",
            "phone": "+91 4545 242 222"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Direct Trains from Chennai, Coimbatore, Madurai to Palani (PLNI)",
            "duration": "1 hr from Dindigul",
            "fare": "₹45",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "TNSTC Bus from Dindigul to Palani",
            "duration": "1 hr 15 min",
            "fare": "₹40",
            "frequency": "Every 10 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 10.4439,
          "lng": 77.5186
        }
      }
    ]
  },
  {
    "id": "erode",
    "name": "Erode",
    "nameInTamil": "ஈரோடு",
    "region": "west",
    "description": "Turmeric City and textile hub situated on the banks of the Cauvery River, famous for the Bhavani Sangameshwarar Triveni Sangam temple and massive Bhavani Sagar Dam.",
    "population": "0.52 Million",
    "famousFor": [
      "Bhavani Sangameshwarar Temple",
      "Bhavanisagar Dam",
      "Turmeric Market",
      "Chennimalai Handlooms"
    ],
    "districtHQ": "Erode",
    "spots": [
      {
        "id": "bhavani-sangameshwarar",
        "name": "Bhavani Sangameshwarar Temple (Triveni Sangam)",
        "nameInTamil": "பவானி சங்கமேஸ்வரர் கோவில் (தென் திரிவேணி)",
        "type": "temple",
        "description": "Holy pilgrimage center revered as the \"Triveni Sangam of South India\", situated on an island where rivers Cauvery, Bhavani, and the invisible subterranean Amutha merge.",
        "translations": {
          "fr": "Le \"Triveni Sangam de l'Inde du Sud\" où se rejoignent trois rivières sacrées.",
          "de": "Das \"Triveni Sangam Südindiens\", Zusammenfluss von drei heiligen Flüssen.",
          "ja": "「南インドのトリヴェニ・サンガム」と呼ばれる3つの神聖な川の合流点にある寺院。",
          "zh": "被称为“南印度的三途河交汇点”，建在三条圣河汇流的岛屿上。",
          "ar": "نقطة التقاء تريفيني في جنوب الهند حيث تلتقي 3 أنهار مقدسة.",
          "hi": "दक्षिण भारत का \"त्रिवेणी संगम\" जहाँ कावेरी, भवानी और अदृश्य अमृता नदियाँ मिलती हैं।",
          "es": "El \"Triveni Sangam del Sur de la India\" en la confluencia de tres ríos sagrados."
        },
        "timings": "5:30 AM – 1:00 PM & 4:00 PM – 8:30 PM",
        "entryFee": "Free (Holy bath at Sangam ghat is free)",
        "bestTimeToVisit": "October to March (Aadi Perukku festival in August)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 32400,
        "aiTip": "Take a holy dip at Kooduthurai (the confluence). Devotees perform ancestral tarpanam rituals here for peace and prosperity.",
        "dresscode": "Traditional temple attire required.",
        "nearbyHotels": [
          {
            "id": "hotel-aruna-erode",
            "name": "Hotel Aruna International",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "14 km",
            "transitScore": 88,
            "amenities": [
              "AC Rooms",
              "Restaurant",
              "WiFi",
              "Bar"
            ],
            "address": "Perundurai Road, Erode",
            "phone": "+91 424 225 1234"
          },
          {
            "id": "hotel-atrium-erode",
            "name": "Hotel Atrium Erode",
            "stars": 4,
            "pricePerNight": "₹3,500 – ₹5,800",
            "distanceFromSpot": "15 km",
            "transitScore": 86,
            "amenities": [
              "Multi-cuisine Dining",
              "Gym",
              "Conference",
              "WiFi"
            ],
            "address": "Brough Road, Erode",
            "phone": "+91 424 228 1111"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Town Bus from Erode Central Bus Stand to Bhavani",
            "duration": "25 min",
            "fare": "₹15",
            "frequency": "Every 5 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Bhavani Town Bus Stand",
            "duration": "5 min",
            "fare": "₹40 – ₹50",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 11.4428,
          "lng": 77.6833
        }
      },
      {
        "id": "bhavani-sagar-dam",
        "name": "Bhavani Sagar Dam",
        "nameInTamil": "பவானி சாகர் அணை",
        "type": "nature",
        "description": "One of the world's largest earthen dams built across the Bhavani River, offering vast panoramic water reservoirs, children's parks, and fresh river fish stalls.",
        "translations": {
          "fr": "L'un des plus grands barrages en terre du monde avec vastes réservoirs et parcs.",
          "de": "Einer der größten Erddämme der Welt mit großem Stausee.",
          "ja": "世界最大級の土石ダム。広大な貯水池と公園。",
          "zh": "世界最大的土坝之一，拥有广阔的水库和绿意盎然的公园。",
          "ar": "واحد من أكبر السدود الترابية في العالم مع حدائق خلابة.",
          "hi": "दुनिया के सबसे बड़े मिट्टी के बांधों में से एक, सुंदर जलाशय और पार्क।",
          "es": "Una de las presas de tierra más grandes del mundo con grandes parques."
        },
        "timings": "9:00 AM – 5:30 PM",
        "entryFee": "₹10",
        "bestTimeToVisit": "August to January",
        "crowdLevel": "moderate",
        "rating": 4.5,
        "reviewCount": 21500,
        "aiTip": "Try freshly fried spiced river fish (Meen Varuval) at the local fishermen co-op stalls outside the park gates.",
        "nearbyHotels": [
          {
            "id": "hotel-le-garden-sathyamangalam",
            "name": "Hotel Le Garden",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,500",
            "distanceFromSpot": "16 km",
            "transitScore": 82,
            "amenities": [
              "AC",
              "Restaurant",
              "Parking"
            ],
            "address": "Sathyamangalam Bypass",
            "phone": "+91 4295 220 123"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Erode / Sathyamangalam to Bhavanisagar",
            "duration": "1 hr 15 min from Erode",
            "fare": "₹35",
            "frequency": "Every 30 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 11.4705,
          "lng": 77.1136
        }
      }
    ]
  },
  {
    "id": "thoothukudi",
    "name": "Thoothukudi",
    "nameInTamil": "தூத்துக்குடி",
    "region": "south",
    "description": "Historic Pearl City on the Gulf of Mannar, famed for sea-shore Tiruchendur Murugan Temple, salt pans, and Our Lady of Snows Basilica.",
    "population": "0.41 Million",
    "famousFor": [
      "Tiruchendur Murugan Temple",
      "Pearl Fishery",
      "Our Lady of Snows Basilica",
      "Tuticorin Macaroons"
    ],
    "districtHQ": "Thoothukudi",
    "spots": [
      {
        "id": "tiruchendur-temple",
        "name": "Tiruchendur Subramanya Swamy Temple",
        "nameInTamil": "திருச்செந்தூர் முருகன் கோவில்",
        "type": "pilgrimage",
        "description": "Second of the sacred Arupadaiveedu shrines and the only one situated on the seashore of the Gulf of Mannar where Lord Murugan vanquished demon Surapadman.",
        "translations": {
          "fr": "Le seul temple Arupadaiveedu de Murugan situé sur le rivage du golfe de Mannar.",
          "de": "Der einzige Murugan-Arupadaiveedu-Tempel direkt an der Meeresküste.",
          "ja": "マンナール湾の海岸線に堂々と建つムルガン神の第2聖殿。",
          "zh": "穆鲁干神六大圣所中唯一坐落在海边的圣殿。",
          "ar": "المعبد الوحيد للإله موروغان الواقع على شاطئ البحر في خليج منار.",
          "hi": "मुरुगन के 6 अरुपदैवीडु में से एकमात्र मंदिर जो समुद्र तट पर स्थित है।",
          "es": "El único templo Arupadaiveedu de Murugan situado a la orilla del mar."
        },
        "timings": "5:00 AM – 9:00 PM",
        "entryFee": "Free (Special Darshan: ₹100 – ₹250)",
        "bestTimeToVisit": "October to March (Soorasamharam festival in Oct/Nov draws over 1 million devotees onto the beach)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 78000,
        "aiTip": "Take a dip in the calm sea waters of the Bay of Bengal before entering the temple. The sacred spring (Nazhi Kinaru) delivers sweet fresh water right on the beach.",
        "dresscode": "Strict temple dress: Men must remove upper shirts. Dhoti for men, Saree/Salwar for women.",
        "nearbyHotels": [
          {
            "id": "hotel-murugan-tiruchendur",
            "name": "Hotel Murugan Heritage",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "0.5 km",
            "walkTime": "6 min walk",
            "transitScore": 92,
            "amenities": [
              "Near Beach & Temple",
              "Pure Veg Restaurant",
              "AC"
            ],
            "address": "Sannathi Street, Tiruchendur",
            "phone": "+91 4639 242 123"
          },
          {
            "id": "sparsa-resort-tiruchendur",
            "name": "Chola Resort Tiruchendur",
            "stars": 4,
            "pricePerNight": "₹3,800 – ₹6,500",
            "distanceFromSpot": "2.5 km",
            "transitScore": 88,
            "amenities": [
              "Sea View",
              "Multi-Cuisine",
              "Pool",
              "WiFi"
            ],
            "address": "Tirunelveli Highway, Tiruchendur",
            "phone": "+91 4639 245 678"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Direct Chendur Express from Chennai Egmore to Tiruchendur (TCN)",
            "duration": "12 hrs",
            "fare": "₹320 – ₹1,100",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "TNSTC Bus from Thoothukudi / Tirunelveli to Tiruchendur",
            "duration": "50 min",
            "fare": "₹35",
            "frequency": "Every 10 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 8.4975,
          "lng": 78.1294
        }
      },
      {
        "id": "our-lady-of-snows-basilica",
        "name": "Our Lady of Snows Basilica",
        "nameInTamil": "பனிமய மாதா பேராலயம்",
        "type": "pilgrimage",
        "description": "16th-century Portuguese Renaissance basilica in Thoothukudi dedicated to Our Lady of the Snows, deeply venerated by the Paravar seafaring pearl divers for centuries.",
        "translations": {
          "fr": "Basilique portugaise du XVIe siècle vénérée par les pêcheurs de perles.",
          "de": "Portugiesische Renaissance-Basilika aus dem 16. Jahrhundert.",
          "ja": "真珠採りの潜水夫たちに深く崇敬されてきた16世紀ポルトガル様式の大聖堂。",
          "zh": "16世纪葡萄牙文艺复兴风格大圣殿，深受采珠人敬奉。",
          "ar": "كنيسة عصر النهضة البرتغالية من القرن السادس عشر مخصصة لسيدة الثلوج.",
          "hi": "16वीं सदी की पुर्तगाली बेसिलिका, जो सदियों से मोती गोताखोरों द्वारा पूजनीय है।",
          "es": "Basílica renacentista portuguesa del siglo XVI venerada por los buzos de perlas."
        },
        "timings": "5:30 AM – 8:30 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "August (Annual Golden Car festival on August 5)",
        "crowdLevel": "moderate",
        "rating": 4.7,
        "reviewCount": 22400,
        "aiTip": "Sample the famous Tuticorin Macaroons (made with egg whites and cashews) from nearby authentic bakeries like Ganesh Bakery.",
        "nearbyHotels": [
          {
            "id": "hotel-chinnas-tuticorin",
            "name": "Hotel DSF Grand Plaza",
            "stars": 4,
            "pricePerNight": "₹3,500 – ₹5,800",
            "distanceFromSpot": "1.2 km",
            "transitScore": 90,
            "amenities": [
              "Multi-cuisine Restaurant",
              "Bar",
              "Gym",
              "WiFi"
            ],
            "address": "Pereira Street, Thoothukudi",
            "phone": "+91 461 232 3456"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Tuticorin Railway Station",
            "duration": "6 min",
            "fare": "₹40 – ₹60",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 8.8028,
          "lng": 78.1567
        }
      }
    ]
  },
  {
    "id": "namakkal",
    "name": "Namakkal",
    "nameInTamil": "நாமக்கல்",
    "region": "west",
    "description": "Poultry and transport hub dominated by a single giant monolithic rock hill crowned by a historic fort, an 18-foot open-air Anjaneyar statue, and Kolli Hills.",
    "population": "0.12 Million",
    "famousFor": [
      "18-ft Anjaneyar Temple",
      "Namakkal Rock Fort",
      "Narasimhaswamy Temple",
      "Kolli Hills"
    ],
    "districtHQ": "Namakkal",
    "spots": [
      {
        "id": "namakkal-fort-temple",
        "name": "Namakkal Fort & Sri Anjaneyar Temple",
        "nameInTamil": "நாமக்கல் ஆஞ்சநேயர் & நரசிம்மர் கோவில்",
        "type": "temple",
        "description": "Spectacular 18-foot monolithic single-stone statue of Lord Hanuman standing under open sky with folded hands, directly facing the rock-cut cave temple of Lord Narasimha on Namakkal Rock Fort.",
        "translations": {
          "fr": "Statue monolithique de 5,5m d'Hanuman sous le ciel ouvert face à la forteresse.",
          "de": "5,5m hohe monolithische Hanuman-Statue unter freiem Himmel vor der Festung.",
          "ja": "青空の下に直立する高さ5.5メートルの巨大ハヌマーン一枚岩像。",
          "zh": "露天伫立的5.5米高哈奴曼整块岩石雕像，面朝岩堡内的湿婆与毗湿奴石窟。",
          "ar": "تمثال متآلف بارتفاع 5.5 متر للإله هانومان تحت السماء المفتوحة.",
          "hi": "खुले आसमान के नीचे 18 फीट ऊंची भगवान हनुमान की अखंड एकल-पत्थर प्रतिमा।",
          "es": "Estatua monolítica de 5,5m de Hanuman bajo el cielo abierto frente al fuerte."
        },
        "timings": "6:00 AM – 1:00 PM & 4:30 PM – 8:30 PM",
        "entryFee": "Free (Special Darshan: ₹20 – ₹50)",
        "bestTimeToVisit": "October to March (Hanumath Jayanthi draws 100,000 devotees)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 39100,
        "aiTip": "Devotees offer massive garlands of 10,008 Vadais (savory fritters) to Hanuman. Climb up to the fort ramparts at sunset for views of the town.",
        "dresscode": "Traditional temple dress code required.",
        "nearbyHotels": [
          {
            "id": "hotel-shanmuga-namakkal",
            "name": "Hotel Shanmuga Namakkal",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,600",
            "distanceFromSpot": "0.6 km",
            "walkTime": "8 min walk",
            "transitScore": 92,
            "amenities": [
              "AC Rooms",
              "Pure Veg Dining",
              "WiFi",
              "Parking"
            ],
            "address": "Thuraiyur Road, Namakkal",
            "phone": "+91 4286 276 555"
          },
          {
            "id": "nila-residency-namakkal",
            "name": "Hotel Nila Residency",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "1.2 km",
            "transitScore": 89,
            "amenities": [
              "AC",
              "Restaurant",
              "Room Service"
            ],
            "address": "Salem Road, Namakkal",
            "phone": "+91 4286 228 123"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Namakkal New Bus Stand",
            "duration": "5 min",
            "fare": "₹40 – ₹60",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "TNSTC Bus from Salem or Karur to Namakkal",
            "duration": "50 min",
            "fare": "₹40",
            "frequency": "Every 10 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 11.2189,
          "lng": 78.1674
        }
      },
      {
        "id": "kolli-hills-agaya-gangai",
        "name": "Kolli Hills & Agaya Gangai Falls",
        "nameInTamil": "கொல்லிமலை & ஆகாய கங்கை அருவி",
        "type": "hill",
        "description": "Mystical, untouched hill range at 1,300m accessible via 70 thrilling continuous hairpin bends. Famed for herbal medicinal plants, Arapaleeswarar temple, and 300-foot Agaya Gangai waterfall.",
        "translations": {
          "fr": "Collines mystiques avec 70 virages en épingle et cascade de 90m d'Agaya Gangai.",
          "de": "Mystische Berge mit 70 Haarnadelkurven und 90m hohem Agaya Gangai Wasserfall.",
          "ja": "70の連続ヘアピンカーブを登る神秘の山峰。落差90mのアガヤ・ガンガイ滝。",
          "zh": "拥有70道连续发夹弯的神秘山脉，以及90米高的阿加亚恒河瀑布。",
          "ar": "تلال غامضة مع 70 منعطفاً حاداً وشلال أغيا غانغاي بارتفاع 90 متراً.",
          "hi": "70 हेयरपिन मोड़ों से घिरी रहस्यमयी कोल्ली हिल्स और 300 फीट ऊंचा आकाश गंगा झरना।",
          "es": "Colinas místicas con 70 curvas cerradas y cascada Agaya Gangai de 90m."
        },
        "timings": "Open all day | Falls access: 8:00 AM – 4:00 PM",
        "entryFee": "₹10",
        "bestTimeToVisit": "September to March",
        "crowdLevel": "moderate",
        "rating": 4.6,
        "reviewCount": 24800,
        "aiTip": "Descending to Agaya Gangai falls requires climbing 1,050 steep stone steps down and back up. Carry energy bars and water.",
        "nearbyHotels": [
          {
            "id": "silverline-resort-kolli",
            "name": "Silverline Retreat Kolli Hills",
            "stars": 3,
            "pricePerNight": "₹2,500 – ₹4,200",
            "distanceFromSpot": "4 km",
            "transitScore": 80,
            "amenities": [
              "Valley View",
              "Cottages",
              "Restaurant",
              "Campfire"
            ],
            "address": "Semmedu, Kolli Hills",
            "phone": "+91 4286 247 444"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Namakkal / Salem to Semmedu",
            "duration": "2 hrs",
            "fare": "₹50",
            "frequency": "Every 1 hr",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Private Taxi from Namakkal (experienced hill driver recommended)",
            "duration": "1.5 hrs",
            "fare": "₹1,500 – ₹2,000",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 11.2505,
          "lng": 78.3375
        }
      }
    ]
  },
  {
    "id": "cuddalore",
    "name": "Cuddalore",
    "nameInTamil": "கடலூர்",
    "region": "east",
    "description": "Coastal heritage district home to the cosmic Nataraja Temple in Chidambaram (Akasha/Space element), the world's second largest mangrove forest at Pichavaram, and Silver Beach.",
    "population": "0.17 Million",
    "famousFor": [
      "Chidambaram Nataraja Temple",
      "Pichavaram Mangroves",
      "Silver Beach",
      "Porto Novo (Parangipettai)"
    ],
    "districtHQ": "Cuddalore",
    "spots": [
      {
        "id": "chidambaram-nataraja",
        "name": "Chidambaram Nataraja Temple",
        "nameInTamil": "சிதம்பரம் நடராஜர் கோவில்",
        "type": "temple",
        "description": "World capital of Bharatanatyam dance and the Pancha Bhoota Sthalam representing the Akasha (Space/Ether) element. Features Lord Shiva as Nataraja in cosmic dance, gold-roofed Kanaka Sabha, and the mystical Chidambara Rahasyam.",
        "translations": {
          "fr": "Capitale mondiale de la danse cosmique de Shiva représentant l'élément Éther (Espace).",
          "de": "Weltzentrum von Shivas kosmischem Tanz, der das Element Äther (Raum) darstellt.",
          "ja": "宇宙の踊り手シヴァ（ナタラージャ）を祀る五大元素「虚空」の総本山。",
          "zh": "湿婆宇宙之舞的世界圣地，代表五大元素中的“虚空（以太）”。",
          "ar": "عاصمة رقصة شيفا الكونية التي تمثل عنصر الفضاء والأثير.",
          "hi": "भगवान शिव के कॉस्मिक नृत्य नटराज का पावन मंदिर, पंचभूत आकाश स्थल और रहस्य।",
          "es": "Capital mundial de la danza cósmica de Shiva que representa el elemento Éter (Espacio)."
        },
        "timings": "6:00 AM – 12:30 PM & 4:30 PM – 9:30 PM",
        "entryFee": "Free (Special Darshan: ₹50)",
        "bestTimeToVisit": "October to March (Natyanjali Dance Festival in Feb/March during Mahashivaratri)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 56200,
        "aiTip": "Attend the 6:00 PM evening Puja to witness the opening of the Chidambara Rahasyam (the secret of formless divine space).",
        "dresscode": "Strict Hindu temple dress: Men must remove upper shirts. Dhoti for men, Saree/Salwar for women.",
        "nearbyHotels": [
          {
            "id": "hotel-saradha-chidambaram",
            "name": "Hotel Saradha Residency",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "0.8 km",
            "transitScore": 92,
            "amenities": [
              "Pure Veg Restaurant",
              "AC",
              "WiFi",
              "Parking"
            ],
            "address": "VGP Street, Chidambaram",
            "phone": "+91 4144 221 336"
          },
          {
            "id": "hotel-akshaya-chidambaram",
            "name": "Hotel Akshaya",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,600",
            "distanceFromSpot": "0.5 km",
            "walkTime": "6 min walk",
            "transitScore": 94,
            "amenities": [
              "AC",
              "Vegetarian Dining",
              "Room Service"
            ],
            "address": "East Car Street, Chidambaram",
            "phone": "+91 4144 220 500"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Trains from Chennai Egmore, Trichy to Chidambaram (CDM)",
            "duration": "4 hrs from Chennai",
            "fare": "₹145 – ₹650",
            "icon": "🚆"
          },
          {
            "mode": "auto",
            "label": "Auto from Chidambaram Railway Station to Temple",
            "duration": "6 min",
            "fare": "₹50 – ₹60",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 11.3992,
          "lng": 79.6934
        }
      },
      {
        "id": "pichavaram-mangrove-forest",
        "name": "Pichavaram Mangrove Forest",
        "nameInTamil": "பிச்சாவரம் சதுப்புநிலக் காடு",
        "type": "nature",
        "description": "The second largest mangrove forest in the world, covering 1,100 hectares with over 4,400 interconnected water canals where canopy trees form natural green tunnels over peaceful rowboats.",
        "translations": {
          "fr": "Deuxième plus grande forêt de mangrove au monde avec 4400 canaux d'eau étroits.",
          "de": "Zweitgrößter Mangrovenwald der Welt mit 4400 natürlichen Wasserkanälen.",
          "ja": "4400以上の水路が交差する世界第2位の面積を誇るマングローブ林。小舟での水上探検。",
          "zh": "世界第二大红树林湿地，拥有4400多条相互连接的天然水道水渠。",
          "ar": "ثاني أكبر غابة مانغروف في العالم تضم 4400 قناة مائية طبيعية.",
          "hi": "दुनिया का दूसरा सबसे बड़ा मैंग्रोव वन, 4,400 से अधिक जल नहरों में नाव की सैर।",
          "es": "Segundo bosque de manglares más grande del mundo con 4400 canales de agua navegables."
        },
        "timings": "8:00 AM – 5:00 PM",
        "entryFee": "₹10 entry (Rowboat: ₹350 – ₹600 per boat for 4 persons)",
        "bestTimeToVisit": "November to February (Migratory cormorants, herons, and egrets)",
        "crowdLevel": "moderate",
        "rating": 4.7,
        "reviewCount": 38400,
        "aiTip": "Opt for the traditional wooden rowboat rather than the motorboat. Rowboats can glide through the narrow, shallow green canopy tunnels where motorboats cannot enter.",
        "nearbyHotels": [
          {
            "id": "ttdc-pichavaram",
            "name": "TTDC Arignar Anna Complex Pichavaram",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,500",
            "distanceFromSpot": "0.2 km",
            "walkTime": "3 min walk",
            "transitScore": 90,
            "amenities": [
              "Boat Jetty Access",
              "Restaurant",
              "Parking"
            ],
            "address": "Pichavaram Jetty Road",
            "phone": "+91 4144 249 232"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Chidambaram to Pichavaram",
            "duration": "30 min",
            "fare": "₹20",
            "frequency": "Every 30 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Cab from Chidambaram Town",
            "duration": "20 min",
            "fare": "₹400 – ₹550",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 11.4286,
          "lng": 79.7828
        }
      }
    ]
  },
  {
    "id": "ranipet",
    "name": "Ranipet",
    "nameInTamil": "ராணிப்பேட்டை",
    "region": "north",
    "description": "Historical industrial center famed for the 18th-century Siege of Arcot by Robert Clive, the grand Delhi Gate, and Rathinagiri Balamurugan hill temple.",
    "population": "0.51 Million",
    "famousFor": [
      "Arcot Fort & Delhi Gate",
      "Rathinagiri Murugan Temple",
      "Palar River Bed",
      "Arcot Biryani"
    ],
    "districtHQ": "Ranipet",
    "spots": [
      {
        "id": "arcot-fort",
        "name": "Arcot Nawab Fort & Delhi Gate",
        "nameInTamil": "ஆற்காடு டெல்லி கேட் & நவாப் கோட்டை",
        "type": "heritage",
        "description": "Historical red-brick gateway and fort ramparts where the decisive 1751 Siege of Arcot took place, marking a monumental turning point in modern South Asian history.",
        "translations": {
          "fr": "Porte historique de Delhi et remparts où s'est déroulé le siège d'Arcot en 1751.",
          "de": "Historisches Delhi-Tor und Festung der berühmten Schlacht von Arcot 1751.",
          "ja": "1751年のアルコット包囲戦の舞台となった歴史的なデリーゲートと要塞。",
          "zh": "历史悠久的德里门与城墙遗迹，1751年著名的阿尔科特战役发生地。",
          "ar": "بوابة دلهي التاريخية وحصن نواب أركوت حيث دارت المعركة الشهيرة عام 1751.",
          "hi": "ऐतिहासिक दिल्ली गेट और अर्कोट नवाब का किला, 1751 की प्रसिद्ध लड़ाई का गवाह।",
          "es": "Histórica Puerta de Delhi y murallas del fuerte del asedio de Arcot de 1751."
        },
        "timings": "8:00 AM – 6:00 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "October to March",
        "crowdLevel": "low",
        "rating": 4.3,
        "reviewCount": 9400,
        "aiTip": "Visit the upper chamber of Delhi Gate overlooking the Palar river bed. Don't forget to taste traditional Arcot Biryani and Makkan Peda sweet in Arcot bazaar.",
        "nearbyHotels": [
          {
            "id": "hotel-balaji-ranipet",
            "name": "Hotel Balaji International",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,500",
            "distanceFromSpot": "3 km",
            "transitScore": 84,
            "amenities": [
              "AC Rooms",
              "Restaurant",
              "WiFi"
            ],
            "address": "Arcot Road, Ranipet",
            "phone": "+91 4172 272 123"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Vellore / Chennai to Arcot",
            "duration": "25 min from Vellore",
            "fare": "₹20",
            "frequency": "Every 10 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Ranipet Town",
            "duration": "10 min",
            "fare": "₹60 – ₹80",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 12.9056,
          "lng": 79.3333
        }
      },
      {
        "id": "rathinagiri-murugan-temple",
        "name": "Rathinagiri Balamurugan Temple",
        "nameInTamil": "இரத்தினகிரி பாலமுருகன் கோவில்",
        "type": "pilgrimage",
        "description": "Spectacular 14th-century hill temple dedicated to Lord Balamurugan, built on a sacred granite hillock with gold-plated vimanams and lush green views.",
        "translations": {
          "fr": "Temple de Murugan perché sur une colline de granit avec dômes dorés étincelants.",
          "de": "Herrlicher Bergtempel des Murugan mit vergoldetem Schrein.",
          "ja": "金色のドームを持つ花崗岩の丘の上のムルガン寺院。",
          "zh": "建在花岗岩山丘上的穆鲁干神庙，拥有镀金殿顶和壮丽景色。",
          "ar": "معبد تل هادئ للإله بالاموروغان مع قباب مذهبة.",
          "hi": "ग्रेनाइट पहाड़ी पर स्थित भव्य बालमुरुगन मंदिर, स्वर्ण शिखर से सुशोभित।",
          "es": "Espectacular templo de Murugan en la colina con cúpulas doradas."
        },
        "timings": "6:00 AM – 1:00 PM & 4:00 PM – 8:30 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "Year-round (Sashti and Kiruthigai festival days)",
        "crowdLevel": "moderate",
        "rating": 4.8,
        "reviewCount": 24500,
        "aiTip": "There are gentle motorable roads up to the top as well as steps for pilgrims. The temple runs free daily Annadhanam (sacred meal).",
        "dresscode": "Traditional temple dress code.",
        "nearbyHotels": [
          {
            "id": "kh-residency-ranipet",
            "name": "KH Residency Ranipet",
            "stars": 3,
            "pricePerNight": "₹2,000 – ₹3,200",
            "distanceFromSpot": "8 km",
            "transitScore": 86,
            "amenities": [
              "AC",
              "Restaurant",
              "WiFi"
            ],
            "address": "NH-48 Highway, Ranipet",
            "phone": "+91 4172 271 888"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Bus from Vellore / Ranipet towards Arcot/Walaja",
            "duration": "20 min",
            "fare": "₹15",
            "frequency": "Every 15 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 12.9372,
          "lng": 79.2319
        }
      }
    ]
  },
  {
    "id": "tiruppur",
    "name": "Tiruppur",
    "nameInTamil": "திருப்பூர்",
    "region": "west",
    "description": "The Knitwear Capital of India, home to sacred Velliangiri Hills, Thirumoorthy Hills with the Tri-deity shrine, and Avinashi Temple.",
    "population": "0.88 Million",
    "famousFor": [
      "Knitwear Hub",
      "Velliangiri Hills",
      "Thirumoorthy Hills & Dam",
      "Avinashi Lingeshwarar"
    ],
    "districtHQ": "Tiruppur",
    "spots": [
      {
        "id": "velliangiri-hills",
        "name": "Velliangiri Hills (Seventh Hill)",
        "nameInTamil": "வெள்ளியங்கிரி மலை",
        "type": "hill",
        "description": "Known as the \"Kailash of the South\", a sacred pilgrimage trek across seven hills in the Western Ghats to reach the Swayambhu Shiva Lingam on the summit at 1,778m.",
        "translations": {
          "fr": "Le \"Kailash du Sud\", trekking sacré à travers 7 collines jusqu'au sanctuaire à 1778m.",
          "de": "Das \"Kailash des Südens\", heilige Wanderung über 7 Hügel auf 1778m Höhe.",
          "ja": "「南のカイラス」として名高い7つの峰を越える聖なるトレッキング巡礼地。",
          "zh": "被誉为“南方的冈仁波齐”，跨越七座山峰直达海拔1778米圣地的朝圣之路。",
          "ar": "جبل كايلاش الجنوب، رحلة حج مقدسة عبر 7 تلال حتى ارتفاع 1778 متراً.",
          "hi": "दक्षिण का कैलाश कहे जाने वाले सात पवित्र पहाड़ियों की यात्रा और 1,778 मीटर पर स्वयंभू शिवलिंग।",
          "es": "El \"Kailash del Sur\", trekking sagrado a través de 7 colinas hasta los 1778m."
        },
        "timings": "Pilgrimage season: Mid-February to May | Day visits: 6:00 AM – 4:00 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "February to May (Maha Shivaratri season)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 33400,
        "aiTip": "The 7-hill trek is rigorous (6–8 hours). Carry bamboo walking sticks, plenty of electrolytes, and start before 4:00 AM to avoid heat.",
        "dresscode": "Pilgrim attire: White or saffron dhoti/trousers.",
        "nearbyHotels": [
          {
            "id": "kovai-aerocity",
            "name": "Poppys Hotel Tiruppur",
            "stars": 4,
            "pricePerNight": "₹3,500 – ₹6,000",
            "distanceFromSpot": "35 km",
            "transitScore": 88,
            "amenities": [
              "Pool",
              "Multi-cuisine Restaurant",
              "Gym"
            ],
            "address": "Avinashi Road, Tiruppur",
            "phone": "+91 421 433 3333"
          },
          {
            "id": "hotel-gokulam-tiruppur",
            "name": "Gokulam Park Tiruppur",
            "stars": 4,
            "pricePerNight": "₹4,000 – ₹7,200",
            "distanceFromSpot": "38 km",
            "transitScore": 86,
            "amenities": [
              "Luxury Suites",
              "Bar",
              "Spa"
            ],
            "address": "Palladam Road, Tiruppur",
            "phone": "+91 421 223 9999"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Bus from Tiruppur or Coimbatore to Poondi foot hills",
            "duration": "1 hr 15 min",
            "fare": "₹40",
            "frequency": "Every 20 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 10.9856,
          "lng": 76.6894
        }
      },
      {
        "id": "thirumoorthy-hills-temple",
        "name": "Thirumoorthy Hills, Dam & Temple",
        "nameInTamil": "திருமூர்த்தி மலை, அணை & கோவில்",
        "type": "temple",
        "description": "Sacred foothill shrine dedicated to Sri Amanalingeswarar where the Holy Trinity (Brahma, Vishnu, and Shiva) are worshipped together beside a perennial waterfall and scenic reservoir.",
        "translations": {
          "fr": "Sanctuaire sacré au pied des collines où la Sainte Trinité (Brahma, Vishnu, Shiva) est vénérée.",
          "de": "Heiligtum am Fuße der Berge, in dem die Dreifaltigkeit Brahma, Vishnu und Shiva verehrt wird.",
          "ja": "ブラフマー、ヴィシュヌ、シヴァの三神一体を祀る滝のほとりの聖堂。",
          "zh": "坐落于瀑布水库边的神圣古刹，供奉梵天、毗湿奴和湿婆三位一体神灵。",
          "ar": "معبد مقدس يجمع بين ثالوث الآلهة براهما وفيشنو وشيفا بجوار شلال خلاب.",
          "hi": "ब्रह्मा, विष्णु और महेश (त्रिदेव) की संयुक्त पूजा का पावन मंदिर, बांध और झरना।",
          "es": "Santuario sagrado donde se adora a la Trinidad (Brahma, Vishnu, Shiva) junto a una cascada."
        },
        "timings": "6:00 AM – 6:00 PM",
        "entryFee": "Free (Panjalinga falls bath is free)",
        "bestTimeToVisit": "August to January",
        "crowdLevel": "moderate",
        "rating": 4.7,
        "reviewCount": 22100,
        "aiTip": "Walk 1.5 km up the stone path through the forest to reach the secluded Panjalinga Waterfalls for a refreshing bath.",
        "nearbyHotels": [
          {
            "id": "hotel-udumalpet-residency",
            "name": "Hotel Annamalai Residency Udumalpet",
            "stars": 3,
            "pricePerNight": "₹1,600 – ₹2,800",
            "distanceFromSpot": "18 km",
            "transitScore": 84,
            "amenities": [
              "AC",
              "Restaurant",
              "WiFi"
            ],
            "address": "Palani Road, Udumalpet",
            "phone": "+91 4252 224 567"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Town Bus from Udumalpet Bus Stand to Thirumoorthy Hills",
            "duration": "35 min",
            "fare": "₹22",
            "frequency": "Every 30 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 10.4667,
          "lng": 77.1667
        }
      }
    ]
  },
  {
    "id": "krishnagiri",
    "name": "Krishnagiri",
    "nameInTamil": "கிருஷ்ணகிரி",
    "region": "north",
    "description": "Gateway from Karnataka and Mango Capital of Tamil Nadu, celebrated for the scenic Krishnagiri Dam between granite crags and Tipu Sultan's Rayakottai fortress.",
    "population": "0.20 Million",
    "famousFor": [
      "Mango Orchards",
      "Krishnagiri Reservoir Dam (KRP)",
      "Rayakottai Fort",
      "Granite Hills"
    ],
    "districtHQ": "Krishnagiri",
    "spots": [
      {
        "id": "krishnagiri-dam",
        "name": "Krishnagiri Dam & Reservoir Park",
        "nameInTamil": "கிருஷ்ணகிரி அணை & பூங்கா",
        "type": "nature",
        "description": "Picturesque dam built across the Thenpennai River flanked by dramatic craggy black hills, featuring landscaped botanical gardens, boating, and children's amusements.",
        "translations": {
          "fr": "Barrage pittoresque sur la rivière Thenpennai entouré de collines de granit spectaculaires.",
          "de": "Malerischer Damm am Thenpennai-Fluss, umgeben von dramatischen Granitbergen.",
          "ja": "テンペンナイ川に造られた美しいダムと花崗岩の巨石群に囲まれた公園。",
          "zh": "跨越登本奈河建成的秀美水坝，两侧耸立着奇特的花岗岩山峰。",
          "ar": "سد خلاب على نهر ثينبيناي تحيط به تلال الجرانيت الشاهقة.",
          "hi": "थेनपेन्नई नदी पर बना सुरम्य बांध और हरी-भरी पहाड़ियों से घिरा पार्क।",
          "es": "Presa pintoresca en el río Thenpennai rodeada de espectaculares colinas de granito."
        },
        "timings": "8:30 AM – 5:30 PM",
        "entryFee": "₹15 (Boating: ₹40)",
        "bestTimeToVisit": "August to February",
        "crowdLevel": "moderate",
        "rating": 4.4,
        "reviewCount": 21800,
        "aiTip": "Visit between June and July to buy fresh Totapuri, Alphonso, and Banganapalli mangoes directly from local orchard stalls.",
        "nearbyHotels": [
          {
            "id": "hotel-royal-residency-krishnagiri",
            "name": "Hotel Royal Residency",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "7 km",
            "transitScore": 86,
            "amenities": [
              "AC Rooms",
              "Multi-cuisine Restaurant",
              "WiFi",
              "Parking"
            ],
            "address": "Bangalore Highway, Krishnagiri",
            "phone": "+91 4343 234 567"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Krishnagiri Central Bus Stand to KRP Dam",
            "duration": "15 min",
            "fare": "₹120 – ₹150",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "Town Bus from Krishnagiri to Dam Gate",
            "duration": "20 min",
            "fare": "₹15",
            "frequency": "Every 30 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 12.5189,
          "lng": 78.2125
        }
      },
      {
        "id": "rayakottai-fort",
        "name": "Rayakottai Hill Fort",
        "nameInTamil": "ராயக்கோட்டை மலைக்கோட்டை",
        "type": "fort",
        "description": "Imposing monolithic stone hill fort built by Vijayanagara kings and later heavily fortified by Hyder Ali and Tipu Sultan. Offers an exhilarating trekking trail and historic cannons.",
        "translations": {
          "fr": "Forteresse rocheuse historique de Tipu Sultan avec superbe sentier de randonnée.",
          "de": "Historische Bergfestung von Tipu Sultan mit fantastischem Wanderweg.",
          "ja": "ティプー・スルタンが築いた歴史的城塞。山頂へのトレッキング。",
          "zh": "提普苏丹的古老山地要塞，拥有俯瞰全平原的徒步观景径。",
          "ar": "قلعة صخرية تاريخية لتيبو سلطان مع مسارات مشي ممتازة.",
          "hi": "टीपू सुल्तान और हैदर अली का ऐतिहासिक पहाड़ी किला और ट्रेकिंग मार्ग।",
          "es": "Fuerte histórico de Tipu Sultan con excelentes rutas de senderismo."
        },
        "timings": "6:00 AM – 5:00 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "October to February (Mornings are best for trekking)",
        "crowdLevel": "low",
        "rating": 4.6,
        "reviewCount": 12400,
        "aiTip": "The trek to the top takes about 1 hour along well-marked stone steps. The mountain breeze at the summit ramparts is breathtaking.",
        "nearbyHotels": [
          {
            "id": "hotel-dharmapuri-inn",
            "name": "Hotel Velan International Hosur",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "28 km",
            "transitScore": 82,
            "amenities": [
              "AC",
              "Dining",
              "WiFi"
            ],
            "address": "Hosur Highway",
            "phone": "+91 4344 242 123"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Passenger train to Rayakkottai Station (RYC)",
            "duration": "5 min from Station",
            "fare": "₹10",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "TNSTC Bus from Krishnagiri / Hosur to Rayakottai",
            "duration": "45 min",
            "fare": "₹30",
            "frequency": "Every 30 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 12.5167,
          "lng": 78.0333
        }
      }
    ]
  },
  {
    "id": "virudhunagar",
    "name": "Virudhunagar",
    "nameInTamil": "விருதுநகர்",
    "region": "south",
    "description": "Trading hub and birthplace of national leader K. Kamaraj, honored for the 192-foot Srivilliputhur Andal Temple Gopuram — the Official Emblem of the Government of Tamil Nadu.",
    "population": "0.14 Million",
    "famousFor": [
      "Srivilliputhur Andal Temple",
      "Official TN State Emblem",
      "Srivilliputhur Palkova",
      "Ayyanar Falls"
    ],
    "districtHQ": "Virudhunagar",
    "spots": [
      {
        "id": "andal-temple",
        "name": "Srivilliputhur Andal Temple",
        "nameInTamil": "ஸ்ரீவில்லிபுத்தூர் ஆண்டாள் கோவில்",
        "type": "temple",
        "description": "Birthplace of the beloved female Vaishnavite poet-saint Kothai (Andal) and Periyalwar. Its monumental 192-foot, 11-tiered Rajagopuram is the official symbol chosen for the Emblem of Tamil Nadu.",
        "translations": {
          "fr": "Lieu de naissance de la sainte Andal dont la tour de 59m est l'emblème officiel du Tamil Nadu.",
          "de": "Geburtsort der Heiligen Andal; der 59m hohe Tempelturm ist das offizielle Wappen von Tamil Nadu.",
          "ja": "聖女アンダールの生誕地。高さ59mの塔門はタミル・ナードゥ州公式の州章。",
          "zh": "女性诗人圣者安达尔的诞生地，其59米高的宏伟塔门是泰米尔纳德邦政府的官方徽标。",
          "ar": "مسقط رأس القديسة أندال؛ برج المعبد بارتفاع 59 متراً هو الشعار الرسمي لتاميل نادو.",
          "hi": "वैष्णव संत आंडाल की जन्मस्थली; इसका 192 फीट गोपुरम तमिलनाडु सरकार का आधिकारिक प्रतीक है।",
          "es": "Lugar de nacimiento de la santa Andal; su gopuram de 59m es el emblema oficial de Tamil Nadu."
        },
        "timings": "6:00 AM – 1:00 PM & 4:00 PM – 9:00 PM",
        "entryFee": "Free (Special Darshan: ₹20)",
        "bestTimeToVisit": "October to March (Aadi Pooram Car Festival in July/August attracts 200,000+ devotees)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 46200,
        "aiTip": "Sample authentic warm Srivilliputhur Palkova (GI-tagged caramelized milk sweet) from the cooperative dairy booths right outside the temple gate.",
        "dresscode": "Strict temple dress code: Dhoti for men, Saree/Salwar for women.",
        "nearbyHotels": [
          {
            "id": "hotel-raja-residency",
            "name": "Hotel Raja Residency Srivilliputhur",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,800",
            "distanceFromSpot": "0.8 km",
            "walkTime": "10 min walk",
            "transitScore": 92,
            "amenities": [
              "Pure Veg Restaurant",
              "AC Rooms",
              "WiFi"
            ],
            "address": "Madurai Road, Srivilliputhur",
            "phone": "+91 4563 260 888"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Direct Trains from Chennai, Madurai to Srivilliputhur (SVPR)",
            "duration": "1.5 hrs from Madurai",
            "fare": "₹40",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "TNSTC Bus from Madurai to Srivilliputhur",
            "duration": "1 hr 45 min",
            "fare": "₹60",
            "frequency": "Every 15 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 9.5108,
          "lng": 77.6322
        }
      },
      {
        "id": "ayyanar-falls",
        "name": "Ayyanar Waterfalls Rajapalayam",
        "nameInTamil": "அய்யனார் அருவி ராஜபாளையம்",
        "type": "waterfall",
        "description": "Serene natural waterfall located 12 km from Rajapalayam in the dense Western Ghats reserve forest, featuring a sacred jungle temple dedicated to deity Ayyanar.",
        "translations": {
          "fr": "Cascade naturelle sereine dans les Ghats occidentaux avec sanctuaire forestier.",
          "de": "Ruhiger Naturwasserfall im Wald der Westghats mit Dschungel-Tempel.",
          "ja": "西ガーツ山脈の密林にある清流の滝と森林寺院。",
          "zh": "西高止山脉森林深处的幽静天然瀑布与森林神庙。",
          "ar": "شلال طبيعي هادئ داخل غابات غاتس الغربية مع معبد غابة.",
          "hi": "पश्चिमी घाट के घने जंगलों में स्थित शांत प्राकृतिक झरना और अय्यनार मंदिर।",
          "es": "Serena cascada natural en el bosque de los Ghats occidentales con templo en la jungla."
        },
        "timings": "7:00 AM – 4:00 PM",
        "entryFee": "₹15 per person",
        "bestTimeToVisit": "September to January (Post-monsoon water flow)",
        "crowdLevel": "moderate",
        "rating": 4.5,
        "reviewCount": 16400,
        "aiTip": "Excellent eco-picnic spot with pure mountain water. Beware of monkeys in the canopy and avoid bringing plastic bags.",
        "nearbyHotels": [
          {
            "id": "hotel-rajapalayam-residency",
            "name": "Hotel Amil Palace Rajapalayam",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "14 km",
            "transitScore": 84,
            "amenities": [
              "AC Rooms",
              "Multi-Cuisine Dining",
              "WiFi"
            ],
            "address": "Tenkasi Road, Rajapalayam",
            "phone": "+91 4563 222 345"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Town Bus from Rajapalayam Bus Stand to Ayyanar Kovil base",
            "duration": "30 min",
            "fare": "₹18",
            "frequency": "Hourly",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Rajapalayam Railway Station",
            "duration": "25 min",
            "fare": "₹200 – ₹250",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 9.45,
          "lng": 77.4833
        }
      }
    ]
  },
  {
    "id": "sivaganga",
    "name": "Sivaganga",
    "nameInTamil": "சிவகங்கை",
    "region": "south",
    "description": "Heart of the Chettinad heritage region, world-famous for Pillayarpatti rock-cut Karpaga Vinayagar Temple, fiery Chettinad cuisine, and majestic palatial mansions.",
    "population": "0.14 Million",
    "famousFor": [
      "Chettinad Heritage Mansions",
      "Pillayarpatti Vinayagar Temple",
      "Spicy Chettinad Cuisine",
      "Athangudi Tiles"
    ],
    "districtHQ": "Sivaganga",
    "spots": [
      {
        "id": "pillayarpatti-temple",
        "name": "Pillayarpatti Karpaga Vinayagar Temple",
        "nameInTamil": "பிள்ளையார்பட்டி கற்பக விநாயகர் கோவில்",
        "type": "temple",
        "description": "1,600-year-old rock-cut cave temple where a 6-foot monolithic Karpaga Vinayagar is carved directly out of the living granite rock with two arms and golden tusk turned rightwards (Valampuri).",
        "translations": {
          "fr": "Temple rupestre de 1600 ans avec une statue monolithique de Ganesh taillée dans le granit.",
          "de": "1600 Jahre alter Felsentempel mit monolithischer Ganesha-Statue.",
          "ja": "1600年の歴史を持つ岩窟寺院。巨大な花崗岩から直接彫り出されたガネーシャ像。",
          "zh": "拥有1600年历史的岩石凿刻石窟神庙，供奉从整块花岗岩上直接雕出的象头神。",
          "ar": "معبد كهفي منحوت في الصخر عمره 1600 عام مع تمثال ضخم للإله غانيشا.",
          "hi": "1,600 वर्ष पुराना चट्टान काटकर बना गुफा मंदिर, जहाँ 6 फीट ऊंचे विघ्नहर्ता गणेश विराजित हैं।",
          "es": "Templo rupestre de 1600 años con un monolito de Ganesha tallado en granito."
        },
        "timings": "6:00 AM – 1:00 PM & 4:00 PM – 8:30 PM",
        "entryFee": "Free (Special Darshan: ₹50)",
        "bestTimeToVisit": "Year-round (Vinayagar Chaturthi in Aug/Sept is celebrated with 10-day grand festival)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 52100,
        "aiTip": "Karpaga Vinayagar is believed to fulfill all sincere desires (like the celestial wish-fulfilling tree Karpaga Vriksha). Try the traditional Modakams and Paniyaram.",
        "dresscode": "Strict Hindu temple dress code required.",
        "nearbyHotels": [
          {
            "id": "chola-chettinad-heritage",
            "name": "The Bangala Chettinad",
            "stars": 4,
            "pricePerNight": "₹6,500 – ₹11,000",
            "distanceFromSpot": "12 km",
            "transitScore": 90,
            "amenities": [
              "Heritage Mansion",
              "Legendary Chettinad Dining",
              "Pool",
              "Library"
            ],
            "address": "Devakottai Road, Karaikudi",
            "phone": "+91 4565 220 221"
          },
          {
            "id": "hotel-pandian-sivaganga",
            "name": "Hotel Subhalakshmi Palace Karaikudi",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "11 km",
            "transitScore": 89,
            "amenities": [
              "Pure Veg Restaurant",
              "AC",
              "WiFi"
            ],
            "address": "Sekkalai Road, Karaikudi",
            "phone": "+91 4565 235 200"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Trains from Chennai, Trichy to Karaikudi Junction (KKDI)",
            "duration": "1.5 hrs from Trichy",
            "fare": "₹65",
            "icon": "🚆"
          },
          {
            "mode": "auto",
            "label": "Auto from Karaikudi to Pillayarpatti",
            "duration": "15 min",
            "fare": "₹150 – ₹200",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 10.1208,
          "lng": 78.6833
        }
      },
      {
        "id": "chettinad-palace-karaikudi",
        "name": "Chettinad Heritage Mansions (Karaikudi / Kanadukathan)",
        "nameInTamil": "செட்டிநாடு பாரம்பரிய அரண்மனைகள்",
        "type": "heritage",
        "description": "Vast, palatial 19th-century merchant mansions built with Burmese teak pillars, Italian marble floors, Belgian crystal chandeliers, hand-painted Athangudi terracotta tiles, and grand courtyards.",
        "translations": {
          "fr": "Somptueux manoirs marchands du XIXe siècle avec teck de Birmanie et marbre d'Italie.",
          "de": "Prachtvolle Kaufmannspaläste aus dem 19. Jahrhundert mit Teakholz und italienischem Marmor.",
          "ja": "ビルマ産チーク材やイタリア産大理石で建てられた19世紀の豪壮なチェティナード邸宅群。",
          "zh": "19世纪富商建造的宏伟庄园豪宅群，采用缅甸柚木和意大利大理石精雕细琢。",
          "ar": "قصور تجارية فخمة من القرن التاسع عشر مبنية من خشب الساج البورمي والرخام الإيطالي.",
          "hi": "19वीं सदी की भव्य चेट्टीनाड हवेलियाँ, बर्मा की सागौन और इतालवी संगमरमर से निर्मित।",
          "es": "Suntuosas mansiones mercantiles del siglo XIX con teca de Birmania y mármol italiano."
        },
        "timings": "9:00 AM – 5:00 PM",
        "entryFee": "₹50 – ₹100 per mansion visit",
        "bestTimeToVisit": "October to March",
        "crowdLevel": "moderate",
        "rating": 4.8,
        "reviewCount": 31000,
        "aiTip": "Visit Kanadukathan village to walk among dozens of magnificent palaces. Watch local craftsmen handcraft vibrant Athangudi geometric tiles.",
        "nearbyHotels": [
          {
            "id": "chidambara-vilas",
            "name": "Chidambara Vilas Luxury Heritage",
            "stars": 5,
            "pricePerNight": "₹8,500 – ₹15,000",
            "distanceFromSpot": "6 km",
            "transitScore": 92,
            "amenities": [
              "Restored Palace",
              "Fine Dining",
              "Pool",
              "Heritage Walks"
            ],
            "address": "Kadiapatti, Pudukkottai/Sivaganga border",
            "phone": "+91 4565 241 111"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Karaikudi Bus Stand to Kanadukathan",
            "duration": "12 min",
            "fare": "₹120 – ₹150",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 10.1772,
          "lng": 78.7889
        }
      }
    ]
  },
  {
    "id": "pudukkottai",
    "name": "Pudukkottai",
    "nameInTamil": "புதுக்கோட்டை",
    "region": "central",
    "description": "Former princely kingdom celebrated for Thirumayam Fort, rock-cut Jain cave monastery at Sittannavasal with 2nd-century BC fresco murals, and Avudaiyarkoil.",
    "population": "0.14 Million",
    "famousFor": [
      "Thirumayam Fort",
      "Sittannavasal Cave Murals",
      "Avudaiyarkoil Temple",
      "Kudumiyanmalai"
    ],
    "districtHQ": "Pudukkottai",
    "spots": [
      {
        "id": "thirumayam-fort",
        "name": "Thirumayam Fort & Cave Temples",
        "nameInTamil": "திருமயம் கோட்டை & குடைவரைக் கோவில்கள்",
        "type": "fort",
        "description": "17th-century double-walled ring fortress built on a sheer boulder hill by Sethupathi rulers. Houses ancient rock-cut cave shrines of Lord Shiva (Sathyagiriswarar) and reclining Vishnu (Sathyamurthi).",
        "translations": {
          "fr": "Forteresse à double enceinte sur une colline avec sanctuaires rupestres anciens.",
          "de": "Ringfestung aus dem 17. Jahrhundert mit antiken Felsentempeln für Shiva und Vishnu.",
          "ja": "巨石の丘に建つ17世紀の二重城壁要塞とシヴァ・ヴィシュヌの古代岩窟寺院。",
          "zh": "建在孤峰巨石上的17世纪双重城墙要塞，内有古老湿婆与毗湿奴石窟神殿。",
          "ar": "قلعة ذات أسوار مزدوجة من القرن السابع عشر تضم معابد كهفية منحوتة في الصخر.",
          "hi": "17वीं सदी का दोहरी दीवार वाला पहाड़ी किला और चट्टानों में तराशे गए प्राचीन गुफा मंदिर।",
          "es": "Fortaleza de doble muralla del siglo XVII con templos rupestres excavados en la roca."
        },
        "timings": "9:00 AM – 5:30 PM",
        "entryFee": "₹25 for Indians, ₹300 for Foreign Tourists",
        "bestTimeToVisit": "October to March",
        "crowdLevel": "moderate",
        "rating": 4.6,
        "reviewCount": 18200,
        "aiTip": "Climb to the cannon bastion on top for sweeping 360-degree views. The colossal reclining Vishnu in the rock cave is larger than typical idols.",
        "nearbyHotels": [
          {
            "id": "hotel-ruby-pudukkottai",
            "name": "Hotel Ruby Pudukkottai",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,600",
            "distanceFromSpot": "18 km",
            "transitScore": 84,
            "amenities": [
              "AC",
              "Restaurant",
              "WiFi",
              "Parking"
            ],
            "address": "Trichy Main Road, Pudukkottai",
            "phone": "+91 4322 221 456"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Pudukkottai / Karaikudi to Thirumayam",
            "duration": "20 min",
            "fare": "₹18",
            "frequency": "Every 15 min",
            "icon": "🚌"
          },
          {
            "mode": "train",
            "label": "Passenger train to Thirumayam Station (TYM)",
            "duration": "10 min walk to Fort",
            "fare": "₹10",
            "icon": "🚆"
          }
        ],
        "coordinates": {
          "lat": 10.2444,
          "lng": 78.7514
        }
      },
      {
        "id": "sittannavasal-caves",
        "name": "Sittannavasal Cave Paintings & Jaina Beds",
        "nameInTamil": "சித்தன்னவாசல் குகை ஓவியங்கள்",
        "type": "heritage",
        "description": "2nd-century BC Jain rock-cut cave monastery renowned across the world for natural vegetable dye fresco murals depicting lotus ponds, geese, and celestial dancers, second only to Ajanta.",
        "translations": {
          "fr": "Monastère rupestre jaïn du IIe siècle av. J.-C. aux célèbres fresques murales.",
          "de": "Jain-Höhlenkloster aus dem 2. Jh. v. Chr. mit weltberühmten Naturfarben-Fresken.",
          "ja": "紀元前2世紀のジャイナ教石窟僧院。蓮池を描いた世界的な古代フレスコ画壁画。",
          "zh": "公元前2世纪的耆那教石窟修院，以描绘莲花池和天女的天然矿物彩绘湿壁画闻名于世。",
          "ar": "دير كهفي جايني من القرن الثاني قبل الميلاد مع لوحات جدارية فريدة.",
          "hi": "ईसा पूर्व दूसरी सदी की जैन गुफाएं, प्राकृतिक रंगों से बनी विश्व प्रसिद्ध भित्ति चित्रकला।",
          "es": "Monasterio rupestre jainista del siglo II a.C. con célebres pinturas murales al fresco."
        },
        "timings": "9:00 AM – 5:30 PM",
        "entryFee": "₹25 for Indians, ₹300 for Foreign Tourists",
        "bestTimeToVisit": "October to February",
        "crowdLevel": "moderate",
        "rating": 4.7,
        "reviewCount": 21900,
        "aiTip": "Climb the top of the hill to see the rock-cut Jain stone beds (Eladipattam) inscribed with ancient Tamil-Brahmi script dating from the 3rd century BC.",
        "nearbyHotels": [
          {
            "id": "chola-palace-pudukkottai",
            "name": "Hotel Ma Grand Pudukkottai",
            "stars": 3,
            "pricePerNight": "₹2,000 – ₹3,400",
            "distanceFromSpot": "16 km",
            "transitScore": 86,
            "amenities": [
              "AC Rooms",
              "Multi-cuisine Dining",
              "WiFi"
            ],
            "address": "Marthandapuram, Pudukkottai",
            "phone": "+91 4322 228 888"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Bus from Pudukkottai to Annavasal / Sittannavasal",
            "duration": "30 min",
            "fare": "₹20",
            "frequency": "Every 30 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Cab from Pudukkottai Town",
            "duration": "20 min",
            "fare": "₹400 – ₹600",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 10.45,
          "lng": 78.7333
        }
      }
    ]
  },
  {
    "id": "karur",
    "name": "Karur",
    "nameInTamil": "கரூர்",
    "region": "central",
    "description": "Ancient Chola commercial capital and modern Home Textile Export Capital on the Cauvery and Amaravathi rivers, famed for the Kalyana Pasupatheeswarar temple.",
    "population": "0.23 Million",
    "famousFor": [
      "Home Textiles",
      "Pasupatheeswarar Temple",
      "Mayanur Barrage",
      "Amaravathi River"
    ],
    "districtHQ": "Karur",
    "spots": [
      {
        "id": "kalyana-pasupatheeswarar-temple",
        "name": "Kalyana Pasupatheeswarar Temple",
        "nameInTamil": "கல்யாண பசுபதீஸ்வரர் கோவில்",
        "type": "temple",
        "description": "Ancient 7th-century Shiva Sthalam of Kongu Nadu sung in the Tevaram hymns. Legend states that Kamadhenu (the divine cow) performed penance and bathed the self-manifested Shiva Lingam with milk.",
        "translations": {
          "fr": "Ancien temple de Shiva du VIIe siècle lié à la légende de la vache divine Kamadhenu.",
          "de": "Antiker Shiva-Tempel aus dem 7. Jahrhundert, besungen in den Tevaram-Hymnen.",
          "ja": "神牛カーマデーヌが祈りを捧げたと伝わる7世紀の神聖なシヴァ寺院。",
          "zh": "7世纪的古老湿婆神庙，相传如意神牛曾在此沐浴自显林伽祈祷。",
          "ar": "معبد شيفا قديم من القرن السابع مرتبط بأسطورة البقرة الإلهية كامادهينو.",
          "hi": "7वीं सदी का प्राचीन शिव मंदिर, जहाँ कामधेनु गाय द्वारा पूजा करने की पावन मान्यता है।",
          "es": "Antiguo templo de Shiva del siglo VII vinculado a la leyenda de la vaca divina Kamadhenu."
        },
        "timings": "6:00 AM – 12:30 PM & 4:30 PM – 8:30 PM",
        "entryFee": "Free (Special Darshan: ₹20)",
        "bestTimeToVisit": "October to March (Panguni Uthiram festival)",
        "crowdLevel": "moderate",
        "rating": 4.7,
        "reviewCount": 24100,
        "aiTip": "Notice the hoof mark of the divine cow visible on the Lingam inside the sanctum sanctorum.",
        "dresscode": "Traditional temple dress code required.",
        "nearbyHotels": [
          {
            "id": "hotel-karpagam-karur",
            "name": "Hotel Hemala Karur",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "1.2 km",
            "transitScore": 90,
            "amenities": [
              "AC Rooms",
              "Multi-Cuisine Restaurant",
              "WiFi",
              "Bar"
            ],
            "address": "Police Line Street, Karur",
            "phone": "+91 4324 262 922"
          },
          {
            "id": "hotel-vivera-karur",
            "name": "The Royal Grand Karur",
            "stars": 4,
            "pricePerNight": "₹3,500 – ₹5,800",
            "distanceFromSpot": "2.0 km",
            "transitScore": 88,
            "amenities": [
              "Luxury Rooms",
              "Restaurant",
              "Gym",
              "WiFi"
            ],
            "address": "Covai Road, Karur",
            "phone": "+91 4324 249 999"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Karur Junction Railway Station",
            "duration": "6 min",
            "fare": "₹40 – ₹60",
            "icon": "🛺"
          },
          {
            "mode": "bus",
            "label": "Town Bus from Karur Bus Stand",
            "duration": "8 min",
            "fare": "₹10",
            "frequency": "Every 5 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 10.9572,
          "lng": 78.0833
        }
      },
      {
        "id": "mayanur-barrage",
        "name": "Mayanur Barrage & Riverbed",
        "nameInTamil": "மாயனூர் கதவணை & பூங்கா",
        "type": "nature",
        "description": "Spectacular barrage built across the broad Cauvery River featuring beautifully landscaped waterfront parks, cool evening breezes, and local riverboat rides.",
        "translations": {
          "fr": "Barrage spectaculaire sur le fleuve Cauvery avec vastes jardins au bord de l'eau.",
          "de": "Spektakulärer Staudamm am Cauvery-Fluss mit herrlichen Ufergärten.",
          "ja": "コーヴェリ川に架かる壮大な堰堤ダムと水辺の公園。",
          "zh": "横跨高韦里河的壮丽水闸工程，建有风景优美的水滨公园。",
          "ar": "سد جميل على نهر كافيري مع حدائق مائية خلابة.",
          "hi": "कावेरी नदी पर बना भव्य बांध और सुंदर जल-किनारा पार्क।",
          "es": "Espectacular presa en el río Cauvery con hermosos parques ribereños."
        },
        "timings": "8:30 AM – 6:00 PM",
        "entryFee": "₹10",
        "bestTimeToVisit": "August to January (When Cauvery river is full)",
        "crowdLevel": "moderate",
        "rating": 4.4,
        "reviewCount": 14500,
        "aiTip": "A great sunset stop between Trichy and Karur along the highway. Sunset reflections on the wide Cauvery waters are stunning.",
        "nearbyHotels": [
          {
            "id": "hotel-sakthi-mayanur",
            "name": "Hotel River View Mayanur",
            "stars": 3,
            "pricePerNight": "₹1,400 – ₹2,400",
            "distanceFromSpot": "1.5 km",
            "transitScore": 82,
            "amenities": [
              "River View",
              "Restaurant"
            ],
            "address": "Trichy-Karur Highway",
            "phone": "+91 4324 250 123"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Karur to Trichy (alight at Mayanur)",
            "duration": "25 min from Karur",
            "fare": "₹22",
            "frequency": "Every 10 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 10.9333,
          "lng": 78.2667
        }
      }
    ]
  },
  {
    "id": "theni",
    "name": "Theni",
    "nameInTamil": "தேனி",
    "region": "west",
    "description": "Cardamom and fruit basket surrounded by the Western Ghats, gateway to the misty tea clouds of Megamalai Wildlife Sanctuary and Suruli Falls.",
    "population": "0.12 Million",
    "famousFor": [
      "Megamalai Hill Station",
      "Suruli Falls",
      "Kumbakkarai Falls",
      "Grapes & Cardamom"
    ],
    "districtHQ": "Theni",
    "spots": [
      {
        "id": "megamalai",
        "name": "Megamalai Wildlife Sanctuary (Highwavys)",
        "nameInTamil": "மேகமலை வனவிலங்கு சரணாலயம்",
        "type": "wildlife",
        "description": "Known as the \"High Wavy Mountains\" at 1,500m elevation. Verdant rolling tea gardens, cloud-kissed emerald lakes, wild elephant herds, tigers, and hornbills.",
        "translations": {
          "fr": "Les \"Montagnes brumeuses\" à 1500m avec plantations de thé et éléphants sauvages.",
          "de": "Die \"Nebelberge\" auf 1500m mit Teegärten und wilden Elefanten.",
          "ja": "雲海に浮かぶ標高1500mの茶園。野生ゾウや鳥類が生息する自然保護区。",
          "zh": "海拔1500米的“云山”，拥有茶园、高山湖泊和野生象群。",
          "ar": "جبال الضباب على ارتفاع 1500م مع مزارع الشاي والأفيال البرية.",
          "hi": "1500 मीटर पर बादलों से ढकी मेगामलाई पहाड़ियां, चाय के बागान और जंगली हाथी।",
          "es": "Las \"Montañas nubladas\" a 1500m con plantaciones de té y elefantes salvajes."
        },
        "timings": "6:00 AM – 5:00 PM (Forest checkpost closes at 5 PM)",
        "entryFee": "₹25 per person + ₹50 for vehicle",
        "bestTimeToVisit": "September to May",
        "crowdLevel": "low",
        "rating": 4.7,
        "reviewCount": 22800,
        "aiTip": "High clearance SUV recommended for ghat roads. Spotting wild elephants near Highwavys Dam is common in late afternoon.",
        "nearbyHotels": [
          {
            "id": "megamalai-wilderness-camp",
            "name": "Briar Tea Bungalows Megamalai",
            "stars": 4,
            "pricePerNight": "₹5,500 – ₹9,500",
            "distanceFromSpot": "2 km",
            "transitScore": 80,
            "amenities": [
              "Heritage Tea Bungalow",
              "Plantation Tour",
              "Dining"
            ],
            "address": "Highwavys Estate, Megamalai",
            "phone": "+91 4546 235 678"
          },
          {
            "id": "hotel-suriya-theni",
            "name": "Hotel Western Gatz Theni",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "42 km",
            "transitScore": 85,
            "amenities": [
              "AC",
              "Multi-Cuisine Restaurant",
              "Bar",
              "WiFi"
            ],
            "address": "Periyakulam Road, Theni",
            "phone": "+91 4546 252 555"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Theni / Chinnamanur to Megamalai",
            "duration": "2.5 hrs",
            "fare": "₹55",
            "frequency": "3 times daily",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Hire Taxi from Theni Town",
            "duration": "2 hrs",
            "fare": "₹2,000 – ₹2,500",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 9.6833,
          "lng": 77.3833
        }
      },
      {
        "id": "suruli-falls",
        "name": "Suruli Waterfalls & Kailasanathar Cave",
        "nameInTamil": "சுருளி அருவி & குகைக் கோவில்",
        "type": "waterfall",
        "description": "Sacred 150-foot two-stage waterfall mentioned in the ancient Tamil epic Silappathikaram, tumbling through 18 natural caves with rock-cut Shiva shrines.",
        "translations": {
          "fr": "Cascade sacrée de 45m mentionnée dans l'épopée antique Silappathikaram.",
          "de": "Heiliger 45m hoher Wasserfall, erwähnt im antiken tamilischen Epos Silappathikaram.",
          "ja": "古代タミル叙事詩にも登場する落差45メートルの神聖な二段の滝。",
          "zh": "古老泰米尔史诗记载的45米双级神圣瀑布，流经18处天然石窟。",
          "ar": "شلال مقدس من مرحلتين بارتفاع 45 متراً مذكور في الملحمة التاميلية القديمة.",
          "hi": "प्राचीन तमिल महाकाव्य शिलप्पाधिकारम में वर्णित 150 फीट ऊंचा पावन सुरुलि झरना।",
          "es": "Cascada sagrada de dos etapas de 45m mencionada en la épica clásica tamil."
        },
        "timings": "7:00 AM – 5:00 PM",
        "entryFee": "₹15 per person",
        "bestTimeToVisit": "August to January",
        "crowdLevel": "moderate",
        "rating": 4.6,
        "reviewCount": 26500,
        "aiTip": "The mineral-rich herbal waters are believed to have therapeutic rejuvenation powers. Watch out for troop monkeys along the path.",
        "nearbyHotels": [
          {
            "id": "hotel-cumbum-residency",
            "name": "Hotel Cumbum Club",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,600",
            "distanceFromSpot": "11 km",
            "transitScore": 84,
            "amenities": [
              "AC",
              "Dining",
              "WiFi"
            ],
            "address": "Bypass Road, Cumbum",
            "phone": "+91 4554 271 222"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Theni / Cumbum to Suruli Patti",
            "duration": "45 min from Theni",
            "fare": "₹28",
            "frequency": "Every 20 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 9.6647,
          "lng": 77.2981
        }
      }
    ]
  },
  {
    "id": "tiruvarur",
    "name": "Tiruvarur",
    "nameInTamil": "திருவாரூர்",
    "region": "east",
    "description": "Cultural capital of the Carnatic Music Trinity (Thyagaraja, Muthuswami Dikshitar, and Syama Sastri), famed for Asia's largest temple chariot and Kamalalayam Tank.",
    "population": "0.13 Million",
    "famousFor": [
      "Asia's Largest Temple Chariot (Aazhi Ther)",
      "Thyagaraja Swamy Temple",
      "Kamalalayam Tank",
      "Carnatic Music Trinity"
    ],
    "districtHQ": "Tiruvarur",
    "spots": [
      {
        "id": "thyagaraja-temple-tiruvarur",
        "name": "Arulmigu Thyagaraja Swamy Temple",
        "nameInTamil": "திருவாரூர் தியாகராஜர் கோவில்",
        "type": "temple",
        "description": "Sprawling 20-acre historic temple complex dedicated to Lord Somaskanda (Thyagaraja). Home to the colossal Aazhi Ther (the largest temple chariot in Asia weighing over 300 tonnes) and the Ajapa Natanam cosmic dance.",
        "translations": {
          "fr": "Immense temple de 8 hectares abritant le plus grand char de temple d'Asie (Aazhi Ther).",
          "de": "Gewaltige 8 Hektar große Tempelanlage mit dem größten Tempelwagen Asiens (300 Tonnen).",
          "ja": "アジア最大の寺院山車（アーリ・テール、300トン）を擁する20エーカーの壮大な寺院。",
          "zh": "占地20英亩的宏伟寺庙，拥有亚洲最大的木质神庙游行彩车（重超300吨）。",
          "ar": "معبد ضخم يضم أكبر عربة معبد في آسيا تزن أكثر من 300 طن.",
          "hi": "20 एकड़ में फैला ऐतिहासिक मंदिर, जहाँ एशिया का सबसे विशाल रथ (आषि तेर) है।",
          "es": "Inmenso templo que alberga el carruaje ceremonial más grande de Asia (Aazhi Ther)."
        },
        "timings": "5:30 AM – 12:30 PM & 4:00 PM – 8:45 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "October to March (Aazhi Ther Chariot festival in March/April draws 300,000+ spectators)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 42100,
        "aiTip": "Visit the bronze museum inside the temple containing Chola metallic masterpieces. The adjacent 33-acre Kamalalayam sacred tank is one of the largest in India.",
        "dresscode": "Traditional temple dress code required.",
        "nearbyHotels": [
          {
            "id": "hotel-athithya-tiruvarur",
            "name": "Hotel Athithya",
            "stars": 3,
            "pricePerNight": "₹1,600 – ₹2,800",
            "distanceFromSpot": "0.5 km",
            "walkTime": "6 min walk",
            "transitScore": 94,
            "amenities": [
              "Pure Veg Restaurant",
              "AC",
              "WiFi"
            ],
            "address": "South Street, Tiruvarur",
            "phone": "+91 4366 222 345"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Trains to Tiruvarur Junction (TVR)",
            "duration": "8 min walk to Temple",
            "fare": "₹10",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "TNSTC Bus from Thanjavur / Nagapattinam to Tiruvarur",
            "duration": "1 hr from Thanjavur",
            "fare": "₹38",
            "frequency": "Every 10 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 10.7761,
          "lng": 79.6339
        }
      }
    ]
  },
  {
    "id": "mayiladuthurai",
    "name": "Mayiladuthurai",
    "nameInTamil": "மயிலாடுதுறை",
    "region": "east",
    "description": "Ancient Cauvery delta district where Goddess Parvati worshipped Lord Shiva as a peacock, famous for Poompuhar ancient Chola port, Thirukadaiyur wedding renewals, and Vaitheeswaran Koil.",
    "population": "0.91 Million",
    "famousFor": [
      "Thirukadaiyur Temple (Sashtiapthapoorthi)",
      "Poompuhar Ancient Port",
      "Vaitheeswaran Koil",
      "Mayuranathaswamy Temple"
    ],
    "districtHQ": "Mayiladuthurai",
    "spots": [
      {
        "id": "thirukadaiyur-temple",
        "name": "Thirukadaiyur Amirthakadeswarar Temple",
        "nameInTamil": "திருக்கடையூர் அமிர்தகடேஸ்வரர் கோவில்",
        "type": "temple",
        "description": "World-renowned holy shrine where Lord Shiva vanquished Yama (God of Death) to protect young Markandeya. The principal destination in India for celebrating 60th (Sashtiapthapoorthi) and 80th (Sadabhishekam) wedding renewal rituals for longevity.",
        "translations": {
          "fr": "Sanctuaire sacré réputé pour les célébrations de longévité et de renouveau matrimonial.",
          "de": "Weltberühmter Tempel für Langlebigkeitsrituale und die Erneuerung des Ehegelübdes zum 60./80. Geburtstag.",
          "ja": "死の神を退けた伝説を持つ、還暦や長寿の結婚儀式でインド全土から参拝者が集まる寺院。",
          "zh": "闻名印度的祈求长寿与福寿神庙，专为庆祝60岁与80岁金婚盟誓延寿仪式而设。",
          "ar": "معبد مشهور بطقوس تجديد عهود الزواج وطول العمر عند بلوغ سن الستين والثمانين.",
          "hi": "यमराज पर विजय पाने वाला पावन तीर्थ, जहाँ 60वें और 80वें जन्मदिन पर दीर्घायु वैवाहिक पूजा होती है।",
          "es": "Santuario sagrado famoso por las ceremonias de longevidad y renovación matrimonial a los 60 y 80 años."
        },
        "timings": "6:00 AM – 1:00 PM & 4:00 PM – 9:00 PM",
        "entryFee": "Free (Ritual tickets available at temple counter)",
        "bestTimeToVisit": "Year-round (Thousands of marriage renewals performed daily)",
        "crowdLevel": "high",
        "rating": 4.9,
        "reviewCount": 48000,
        "aiTip": "Couples from all over the world come here to celebrate their 60th, 70th, and 80th milestone wedding renewals for divine longevity and health.",
        "dresscode": "Strict traditional Indian wear: Dhoti for men, Saree for women.",
        "nearbyHotels": [
          {
            "id": "hotel-mani-residency-thirukadaiyur",
            "name": "Hotel Sadhabhishekam Thirukadaiyur",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "0.3 km",
            "walkTime": "4 min walk",
            "transitScore": 95,
            "amenities": [
              "Pure Veg Banquet",
              "AC Rooms",
              "WiFi",
              "Pooja Services"
            ],
            "address": "Sannathi Street, Thirukadaiyur",
            "phone": "+91 4364 287 444"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Mayiladuthurai to Thirukadaiyur",
            "duration": "30 min",
            "fare": "₹20",
            "frequency": "Every 15 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Mayiladuthurai Junction",
            "duration": "25 min",
            "fare": "₹250 – ₹300",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 11.0772,
          "lng": 79.8089
        }
      },
      {
        "id": "poompuhar",
        "name": "Poompuhar (Ancient Kaveripattinam Port)",
        "nameInTamil": "பூம்புகார் (காவிரிப்பூம்பட்டினம்)",
        "type": "heritage",
        "description": "Legendary Sangam-era capital port city celebrated in the epic Silappathikaram where river Cauvery embraces the Bay of Bengal, featuring a 7-tiered Silappathikaram Art Gallery and coastal monuments.",
        "translations": {
          "fr": "Port antique légendaire de l'ère Sangam avec galerie d'art de Silappathikaram.",
          "de": "Legendäre antike Hafenstadt der Sangam-Ära mit Silappathikaram-Kunstgalerie.",
          "ja": "古代タミル叙事詩の舞台となった港湾都市と7層の美術記念館。",
          "zh": "传奇的桑伽姆时代古海港，建有七层诗歌艺术纪念画廊。",
          "ar": "مدينة ميناء قديمة أسطورية مع معرض فني من سبعة طوابق.",
          "hi": "शिलप्पाधिकारम महाकाव्य की ऐतिहासिक संगम युगीन बंदरगाह नगरी और कला दीर्घा।",
          "es": "Mítico puerto antiguo de la era Sangam con galería de arte de Silappathikaram."
        },
        "timings": "9:00 AM – 5:30 PM (Tuesday closed)",
        "entryFee": "₹10 (Gallery entry)",
        "bestTimeToVisit": "October to March (Chitra Pournami festival in April/May)",
        "crowdLevel": "moderate",
        "rating": 4.4,
        "reviewCount": 19500,
        "aiTip": "Visit the spot where the Cauvery river merges peacefully into the Bay of Bengal. Walk through the statues depicting the story of Kannagi and Kovalan.",
        "nearbyHotels": [
          {
            "id": "hotel-vel-mayas-mayiladuthurai",
            "name": "Hotel Pesisir Poompuhar TTDC",
            "stars": 3,
            "pricePerNight": "₹1,400 – ₹2,400",
            "distanceFromSpot": "0.4 km",
            "transitScore": 86,
            "amenities": [
              "Beachside",
              "Restaurant",
              "Parking"
            ],
            "address": "Beach Road, Poompuhar",
            "phone": "+91 4364 260 439"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Mayiladuthurai or Sirkazhi to Poompuhar",
            "duration": "40 min",
            "fare": "₹25",
            "frequency": "Every 30 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 11.1447,
          "lng": 79.8553
        }
      }
    ]
  },
  {
    "id": "tirupathur",
    "name": "Tirupathur",
    "nameInTamil": "திருப்பத்தூர்",
    "region": "north",
    "description": "Picturesque northern district celebrated for Yelagiri Hills hill station, Jalagamparai water falls, and the Vainu Bappu Astronomical Observatory at Kavalur.",
    "population": "0.11 Million",
    "famousFor": [
      "Yelagiri Hills",
      "Jalagamparai Falls",
      "Vainu Bappu Observatory",
      "Punganoor Lake"
    ],
    "districtHQ": "Tirupathur",
    "spots": [
      {
        "id": "yelagiri-hills",
        "name": "Yelagiri Hills",
        "nameInTamil": "ஏலகிரி மலை",
        "type": "hill",
        "description": "Charming, tranquil hill station at 1,110m nestled among 14 tribal hamlets with pleasant climate year-round, Punganoor boating lake, nature park, and paragliding cliffs.",
        "translations": {
          "fr": "Station de montagne paisible à 1110m avec lac de canotage et falaises de parapente.",
          "de": "Ruhige Bergstation auf 1110m mit See und Gleitschirmfliegen.",
          "ja": "標高1110mの穏やかな高原リゾート。湖のボート遊びやパラグライダー。",
          "zh": "海拔1110米的宁静山地度假地，有游船湖泊和滑翔伞悬崖。",
          "ar": "محطة جبلية هادئة على ارتفاع 1110م مع بحيرة قوارب ومظلات شراعية.",
          "hi": "1,110 मीटर पर स्थित शांत हिल स्टेशन, पुंगानूर नौका विहार झील और नेचर पार्क।",
          "es": "Tranquila estación de montaña a 1110m con lago de botes y parapente."
        },
        "timings": "Open all day | Lake Boating: 8:30 AM – 5:30 PM",
        "entryFee": "Free (Boating: ₹50)",
        "bestTimeToVisit": "October to May (Annual Summer Flower Festival in May)",
        "crowdLevel": "moderate",
        "rating": 4.5,
        "reviewCount": 31200,
        "aiTip": "Trek up to Swamimalai Peak (4,338 ft) for panoramic valley views. Buy pure local mountain honey directly from the forest tribal cooperative stalls.",
        "nearbyHotels": [
          {
            "id": "sterling-yelagiri",
            "name": "Sterling Yelagiri Resort",
            "stars": 4,
            "pricePerNight": "₹4,500 – ₹7,500",
            "distanceFromSpot": "1.2 km",
            "transitScore": 90,
            "amenities": [
              "Pool",
              "Spa",
              "Multi-cuisine Dining",
              "Activity Center"
            ],
            "address": "Nilavoor Road, Yelagiri Hills",
            "phone": "+91 4179 245 400"
          },
          {
            "id": "hotel-hills-view-yelagiri",
            "name": "Hotel Hills View",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,000",
            "distanceFromSpot": "0.5 km",
            "walkTime": "7 min walk",
            "transitScore": 92,
            "amenities": [
              "Near Lake",
              "Restaurant",
              "WiFi"
            ],
            "address": "Punganoor Lake Road, Yelagiri",
            "phone": "+91 4179 245 222"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Trains to Jolarpettai Junction (JTJ)",
            "duration": "35 min from Station to Yelagiri top",
            "fare": "₹15",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "TNSTC Ghat Bus from Jolarpettai / Tirupathur to Yelagiri Athanavur",
            "duration": "45 min",
            "fare": "₹30",
            "frequency": "Every 45 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 12.5786,
          "lng": 78.6394
        }
      },
      {
        "id": "jalagamparai-falls",
        "name": "Jalagamparai Waterfalls",
        "nameInTamil": "ஜலகாம்பாறை அருவி",
        "type": "waterfall",
        "description": "Cascading natural waterfall formed by river Attaru dropping off the southern edge of the Yelagiri Hills, accompanied by a scenic temple dedicated to Lord Murugan sculpted like a Shivalingam.",
        "translations": {
          "fr": "Cascade pittoresque tombant du bord sud des collines de Yelagiri.",
          "de": "Malerischer Wasserfall an der Südseite der Yelagiri-Berge mit Murugan-Schrein.",
          "ja": "エラギリの崖を落ちる絵のように美しい滝とムルガン寺院。",
          "zh": "自耶拉吉里山南缘飞流直下的天然秀丽瀑布。",
          "ar": "شلال طبيعي يتدفق من الحافة الجنوبية لتلال يلاغيري.",
          "hi": "एलागिरि पहाड़ियों के किनारे से गिरता सुरम्य जलप्रपात और मुरुगन मंदिर।",
          "es": "Cascada pintoresca que cae desde el borde sur de las colinas de Yelagiri."
        },
        "timings": "8:00 AM – 4:30 PM",
        "entryFee": "₹10",
        "bestTimeToVisit": "November to January (Best post-monsoon water volume)",
        "crowdLevel": "moderate",
        "rating": 4.4,
        "reviewCount": 16800,
        "aiTip": "Accessible either by road from Tirupathur side or via an adventurous 5 km downhill forest trekking trail starting from Yelagiri Hills.",
        "nearbyHotels": [
          {
            "id": "hotel-tirupathur-inn",
            "name": "Hotel Saravana Bhavan Tirupathur",
            "stars": 3,
            "pricePerNight": "₹1,400 – ₹2,400",
            "distanceFromSpot": "14 km",
            "transitScore": 84,
            "amenities": [
              "Pure Veg Restaurant",
              "AC",
              "Parking"
            ],
            "address": "Tirupathur Main Road",
            "phone": "+91 4179 220 123"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Tirupathur Railway Station / Bus Stand",
            "duration": "25 min",
            "fare": "₹200 – ₹250",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 12.5333,
          "lng": 78.6
        }
      }
    ]
  },
  {
    "id": "perambalur",
    "name": "Perambalur",
    "nameInTamil": "பெரம்பலூர்",
    "region": "central",
    "description": "Central Tamil Nadu historic district crowned by the 17th-century bastion of Ranjankudi Fort and ancient temples of Siruvachur Madhurakaliamman and Chettikulam.",
    "population": "0.56 Million",
    "famousFor": [
      "Ranjankudi Fort",
      "Siruvachur Madhurakaliamman Temple",
      "Chettikulam Temple",
      "Sugar Mills"
    ],
    "districtHQ": "Perambalur",
    "spots": [
      {
        "id": "ranjankudi-fort",
        "name": "Ranjankudi 17th Century Fort",
        "nameInTamil": "ரஞ்சன்குடிக் கோட்டை",
        "type": "fort",
        "description": "Imposing 17th-century fortress constructed by the Jagirdar of the Nawab of the Carnatic, featuring intact stone battlements, cannon embrasures, high observation bastions, and moats.",
        "translations": {
          "fr": "Forteresse du XVIIe siècle avec remparts intacts et meurtrières à canons.",
          "de": "Imposante Festung aus dem 17. Jahrhundert mit intakten Steinmauern und Gräben.",
          "ja": "完全な石造銃眼や濠を残す17世紀のカルナータカ・ナワーブ城塞。",
          "zh": "17世纪保存完好的石砌要塞，设有完整的炮台观测台和护城河。",
          "ar": "قلعة من القرن السابع عشر مع أسوار حجرية سليمة وخنادق.",
          "hi": "17वीं सदी का विशाल ऐतिहासिक किला, जिसके बुर्ज और खाई आज भी सुरक्षित हैं।",
          "es": "Imponente fortaleza del siglo XVII con almenas intactas y fosos."
        },
        "timings": "8:30 AM – 5:30 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "October to February",
        "crowdLevel": "low",
        "rating": 4.5,
        "reviewCount": 14200,
        "aiTip": "Walk the full perimeter of the high stone ramparts. The battle of Valikondah between French and British forces took place near this site in 1751.",
        "nearbyHotels": [
          {
            "id": "hotel-comfort-perambalur",
            "name": "Hotel Dhanalakshmi Srinivasan",
            "stars": 3,
            "pricePerNight": "₹1,800 – ₹3,200",
            "distanceFromSpot": "16 km",
            "transitScore": 86,
            "amenities": [
              "AC Rooms",
              "Multi-Cuisine Dining",
              "WiFi",
              "Parking"
            ],
            "address": "NH-45 Trichy Highway, Perambalur",
            "phone": "+91 4328 220 555"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Perambalur or Trichy along NH-45",
            "duration": "20 min from Perambalur",
            "fare": "₹18",
            "frequency": "Every 20 min",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 11.3367,
          "lng": 78.9633
        }
      },
      {
        "id": "siruvachur-madhurakaliamman",
        "name": "Siruvachur Madhurakaliamman Temple",
        "nameInTamil": "சிறுவாச்சூர் மதுரகாளியம்மன் கோவில்",
        "type": "pilgrimage",
        "description": "Renowned temple dedicated to Goddess Madhurakaliamman, famous for only being opened for public worship on Mondays and Fridays, attracting tens of thousands of devout pilgrims.",
        "translations": {
          "fr": "Temple sacré ouvert au public uniquement les lundis et vendredis.",
          "de": "Heiliger Tempel der Göttin Kali, der nur montags und freitags für Gläubige öffnet.",
          "ja": "月曜日と金曜日のみ開帳される極めて信仰篤いカーリー女神寺院。",
          "zh": "仅在每周一和周五开门迎客的著名女神庙，朝圣者云集。",
          "ar": "معبد شهير للإلهة كالي يفتح أبوابه للمصلين يومي الاثنين والجمعة فقط.",
          "hi": "प्रसिद्ध मंदिर जो केवल सोमवार और शुक्रवार को दर्शनार्थियों के लिए खुलता है।",
          "es": "Templo sagrado abierto para el culto público exclusivamente lunes y viernes."
        },
        "timings": "6:30 AM – 8:30 PM (Mondays and Fridays only)",
        "entryFee": "Free",
        "bestTimeToVisit": "Mondays and Fridays, and Panguni Car Festival in April",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 38200,
        "aiTip": "Remember that the temple sanctum is closed to public on Tue, Wed, Thu, Sat, Sun. Devotees offer Mavilakku (rice flour ghee lamps) to fulfill vows.",
        "dresscode": "Traditional temple dress code.",
        "nearbyHotels": [
          {
            "id": "hotel-perambalur-inn",
            "name": "Hotel Guru Palace Perambalur",
            "stars": 3,
            "pricePerNight": "₹1,400 – ₹2,400",
            "distanceFromSpot": "8 km",
            "transitScore": 85,
            "amenities": [
              "AC",
              "Restaurant",
              "WiFi"
            ],
            "address": "New Bus Stand Road, Perambalur",
            "phone": "+91 4328 277 123"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "Town Bus from Perambalur Old / New Bus Stand to Siruvachur",
            "duration": "15 min",
            "fare": "₹12",
            "frequency": "Every 15 min on Mon/Fri",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 11.2,
          "lng": 78.85
        }
      }
    ]
  },
  {
    "id": "ariyalur",
    "name": "Ariyalur",
    "nameInTamil": "அரியலூர்",
    "region": "central",
    "description": "Home of the UNESCO World Heritage Gangaikondacholapuram Great Living Chola Temple, Karaivetti bird sanctuary, and rich prehistoric dinosaur fossil beds.",
    "population": "0.75 Million",
    "famousFor": [
      "Gangaikondacholapuram (UNESCO)",
      "Cement Hub",
      "Dinosaur Fossil Museum",
      "Karaivetti Bird Sanctuary"
    ],
    "districtHQ": "Ariyalur",
    "spots": [
      {
        "id": "gangaikondacholapuram",
        "name": "Gangaikondacholapuram Temple (UNESCO)",
        "nameInTamil": "கங்கைகொண்ட சோழபுரம் கோவில் (யுனெஸ்கோ)",
        "type": "heritage",
        "description": "UNESCO World Heritage Great Living Chola Temple built by Emperor Rajendra Chola I to commemorate his victorious military expedition to the sacred river Ganges. Features a 55m curvilinear vimana and massive 4m monolithic Nandi.",
        "translations": {
          "fr": "Chef-d'œuvre Chola classé au patrimoine mondial de l'UNESCO avec vimana de 55m.",
          "de": "UNESCO-Weltkulturerbe der Großen Chola-Tempel mit 55m geschwungener Turmspitze.",
          "ja": "ガンジス遠征戦勝を記念してラージェーンドラ1世が建てたユネスコ世界遺産の壮麗な寺院。",
          "zh": "联合国教科文组织世界遗产，拉金德拉·乔拉一世为纪念远征恒河胜利而建的伟大乔拉神庙。",
          "ar": "تحفة معمارية مصنفة ضمن التراث العالمي لليونسكو مع برج بارتفاع 55 متراً.",
          "hi": "यूनेस्को विश्व धरोहर महान चोल मंदिर, 55 मीटर ऊंचा विमान और विशाल नंदी प्रतिमा।",
          "es": "Obra maestra Chola declarada Patrimonio de la Humanidad por la UNESCO."
        },
        "timings": "6:00 AM – 12:30 PM & 4:00 PM – 8:30 PM",
        "entryFee": "Free (ASI Protected Monument)",
        "bestTimeToVisit": "October to March (Maha Shivaratri and Chola heritage days)",
        "crowdLevel": "moderate",
        "rating": 4.9,
        "reviewCount": 46800,
        "aiTip": "Notice the graceful concave curves of this temple vimana compared to the straight pyramidal rise of the Thanjavur Big Temple. The massive monolithic Lion Well (Simhakinaru) is unique.",
        "dresscode": "Respectful attire for active sanctum worship.",
        "nearbyHotels": [
          {
            "id": "hotel-arasu-ariyalur",
            "name": "Hotel Arasu Ariyalur",
            "stars": 3,
            "pricePerNight": "₹1,500 – ₹2,600",
            "distanceFromSpot": "32 km",
            "transitScore": 82,
            "amenities": [
              "AC",
              "Restaurant",
              "Parking"
            ],
            "address": "Market Street, Ariyalur",
            "phone": "+91 4329 222 345"
          },
          {
            "id": "hotel-raya-kumbakonam",
            "name": "Hotel Raya's Kumbakonam",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "35 km",
            "transitScore": 88,
            "amenities": [
              "Pure Veg Dining",
              "AC",
              "WiFi"
            ],
            "address": "Head Post Office Road, Kumbakonam",
            "phone": "+91 435 242 3123"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Kumbakonam / Jayankondam to Gangaikondacholapuram",
            "duration": "45 min from Kumbakonam",
            "fare": "₹28",
            "frequency": "Every 20 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Cab from Trichy / Kumbakonam",
            "duration": "1 hr",
            "fare": "₹800 – ₹1,200",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 11.2065,
          "lng": 79.4496
        }
      },
      {
        "id": "ariyalur-dinosaur-museum",
        "name": "Ariyalur On-Site Fossil Museum",
        "nameInTamil": "அரியலூர் புதைபடிவ அருங்காட்சியகம்",
        "type": "museum",
        "description": "Fascinating paleontological museum located in the heart of Cretaceous period sedimentary rock formations, displaying 65-million-year-old dinosaur egg clusters, fossilized marine mollusks, ammonites, and petrified wood.",
        "translations": {
          "fr": "Musée paléontologique avec œufs de dinosaures et fossiles marins vieux de 65 millions d'années.",
          "de": "Paläontologisches Museum mit 65 Millionen Jahre alten Dinosauriereiern und Fossilien.",
          "ja": "6500万年前の恐竜の卵やアンモナイトの化石を展示する古生物学博物館。",
          "zh": "展示6500万年前白垩纪恐龙蛋群、菊石和硅化木的古生物化石博物馆。",
          "ar": "متحف حفريات جيولوجي يعرض بيض الديناصورات والأحافير التي تعود إلى 65 مليون عام.",
          "hi": "65 मिलियन वर्ष पुराने डायनासोर के अंडे और समुद्री जीवाश्मों का जीवाश्म संग्रहालय।",
          "es": "Museo paleontológico con huevos de dinosaurio y fósiles marinos de hace 65 millones de años."
        },
        "timings": "9:30 AM – 5:00 PM (Monday closed)",
        "entryFee": "₹10 for Adults, ₹5 for Children",
        "bestTimeToVisit": "Year-round",
        "crowdLevel": "low",
        "rating": 4.4,
        "reviewCount": 9800,
        "aiTip": "Ariyalur is famous among geologists as the \"Cretaceous Park of South India\". A great educational visit for students and dinosaur enthusiasts.",
        "nearbyHotels": [
          {
            "id": "hotel-ariyalur-residency",
            "name": "Hotel Vairavel Ariyalur",
            "stars": 3,
            "pricePerNight": "₹1,400 – ₹2,200",
            "distanceFromSpot": "4 km",
            "transitScore": 84,
            "amenities": [
              "AC",
              "Dining",
              "WiFi"
            ],
            "address": "Railway Station Road, Ariyalur",
            "phone": "+91 4329 221 888"
          }
        ],
        "transport": [
          {
            "mode": "auto",
            "label": "Auto from Ariyalur Railway Station",
            "duration": "10 min",
            "fare": "₹70 – ₹90",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 11.14,
          "lng": 79.08
        }
      }
    ]
  },
  {
    "id": "kallakurichi",
    "name": "Kallakurichi",
    "nameInTamil": "கள்ளக்குறிச்சி",
    "region": "north",
    "description": "Central Tamil Nadu agricultural district nestled below the Kalvarayan Hills, famed for ancient temple heritage at Thirukoilur and Vridhachalam.",
    "population": "0.13 Million",
    "famousFor": [
      "Kalvarayan Hills",
      "Periyar Falls",
      "Thirukoilur Temple",
      "Vridhachalam Shrine"
    ],
    "districtHQ": "Kallakurichi",
    "spots": [
      {
        "id": "vridhachalam-temple",
        "name": "Gnana Mukteswarar Temple (Vridhachalam)",
        "nameInTamil": "வேதாரண்யேஸ்வரர் / விருத்தகிரீஸ்வரர் கோவில்",
        "type": "temple",
        "description": "Ancient and sacred Shaivite temple where the Lingam is believed to be self-manifested (Swayambhu). Counted among the holiest spots in Tamil Nadu with centuries of royal Chola patronage.",
        "translations": {
          "fr": "Ancien temple de Shiva avec Lingam auto-manifesté (Swayambhu) et architecture Chola.",
          "de": "Antiker Shiva-Tempel mit selbstmanifestiertem Lingam (Swayambhu).",
          "ja": "シヴァの自己顕現（スワヤンブー）リンガムを祀る古代寺院。",
          "zh": "古老湿婆神庙，供奉自我显现的斯瓦扬布林伽。",
          "ar": "معبد شيفا قديم مع لينجام تجلى من تلقاء نفسه.",
          "hi": "प्राचीन शिव मंदिर जहाँ लिंगम स्वयंभू माना जाता है, चोल स्थापत्य का सुंदर उदाहरण।",
          "es": "Antiguo templo de Shiva con Lingam auto-manifestado (Swayambhu)."
        },
        "timings": "6:00 AM – 1:00 PM & 4:00 PM – 9:00 PM",
        "entryFee": "Free",
        "bestTimeToVisit": "October to March (Masi Magam festival in Feb/March)",
        "crowdLevel": "moderate",
        "rating": 4.6,
        "reviewCount": 24800,
        "aiTip": "Tuesdays and Fridays are especially auspicious with traditional deepa worship. The town is famous for delicious mango groves in summer.",
        "dresscode": "Traditional Indian wear: Dhoti for men, Saree/Salwar for women.",
        "nearbyHotels": [
          {
            "id": "hotel-ganga-kallakurichi",
            "name": "Hotel Ganga Kallakurichi",
            "stars": 3,
            "pricePerNight": "₹1,200 – ₹2,200",
            "distanceFromSpot": "2 km",
            "transitScore": 86,
            "amenities": [
              "AC Rooms",
              "Restaurant",
              "WiFi",
              "Parking"
            ],
            "address": "Main Road, Kallakurichi",
            "phone": "+91 4151 223 456"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Villupuram / Salem to Kallakurichi",
            "duration": "1 hr from Villupuram",
            "fare": "₹35",
            "frequency": "Every 20 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Bus Stand",
            "duration": "5 min",
            "fare": "₹40 – ₹60",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 11.7389,
          "lng": 78.9633
        }
      },
      {
        "id": "kalvarayan-hills-periyar-falls",
        "name": "Kalvarayan Hills & Periyar Falls",
        "nameInTamil": "கல்வராயன் மலை & பெரியார் அருவி",
        "type": "hill",
        "description": "Serene, untouched tribal hill ranges rising to 1,000m with dense deciduous forests, cascading Periyar and Megam waterfalls, and Gomukhi Dam recreation park.",
        "translations": {
          "fr": "Chaîne de collines tribales préservées avec cascades de Periyar et barrage de Gomukhi.",
          "de": "Unberührte Bergketten mit Periyar-Wasserfällen und Gomukhi-Staudamm.",
          "ja": "落差のあるペリヤール滝とゴームキ・ダム公園を持つ静かな秘境山岳地帯。",
          "zh": "未受污染的原始原住民山脉，拥有佩里亚尔瀑布和戈穆基大坝公园。",
          "ar": "سلسلة تلال عذراء مع شلالات بيريّار وسد غوموخي.",
          "hi": "प्राकृतिक कलवरायन पहाड़ियाँ, पेरियार जलप्रपात और गोमुखी बांध पार्क।",
          "es": "Cadena de colinas vírgenes con cascadas de Periyar y presa de Gomukhi."
        },
        "timings": "7:00 AM – 5:30 PM",
        "entryFee": "Free (Dam park: ₹10)",
        "bestTimeToVisit": "September to February (Post-monsoon water flow)",
        "crowdLevel": "low",
        "rating": 4.5,
        "reviewCount": 15100,
        "aiTip": "Pack your own food and water before ascending the hills as dining options are limited. The cool mountain air and forest walks are deeply rejuvenating.",
        "nearbyHotels": [
          {
            "id": "hotel-kallakurichi-residency",
            "name": "Hotel Archana Residency",
            "stars": 3,
            "pricePerNight": "₹1,400 – ₹2,400",
            "distanceFromSpot": "22 km",
            "transitScore": 82,
            "amenities": [
              "AC",
              "Dining",
              "WiFi"
            ],
            "address": "Salem Trunk Road, Kallakurichi",
            "phone": "+91 4151 228 123"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Kallakurichi to Vellimalai / Periyar Falls",
            "duration": "1 hr 15 min",
            "fare": "₹35",
            "frequency": "Hourly",
            "icon": "🚌"
          }
        ],
        "coordinates": {
          "lat": 11.8333,
          "lng": 78.7167
        }
      }
    ]
  },
  {
    "id": "tiruvallur",
    "name": "Tiruvallur",
    "nameInTamil": "திருவள்ளூர்",
    "region": "north",
    "description": "Sacred temple district bordering Chennai, home to Sri Veeraraghava Swamy Temple (one of 108 Divya Desams), Pulicat Lake bird sanctuary, and Poondi Reservoir.",
    "population": "3.72 Million",
    "famousFor": [
      "Veeraraghava Swamy Temple (108 Divya Desams)",
      "Pulicat Lake & Bird Sanctuary",
      "Poondi Reservoir",
      "Heritage Temples"
    ],
    "districtHQ": "Tiruvallur",
    "spots": [
      {
        "id": "veeraraghava-swamy-temple",
        "name": "Sri Veeraraghava Swamy Temple",
        "nameInTamil": "வீரராகவ சுவாமி கோவில் (108 திவ்ய தேசம்)",
        "type": "temple",
        "description": "One of the 108 sacred Divya Desams dedicated to Lord Vishnu in the form of Vaidya Veeraraghava Swamy (the divine celestial healer). Pilgrims take sacred dips in Hruthtapanasini tank to cure incurable ailments.",
        "translations": {
          "fr": "Temple sacré des 108 Divya Desams dédié à Vishnu comme médecin céleste avec son bassin sacré.",
          "de": "Heiliger Tempel der 108 Divya Desams, gewidmet Vishnu als himmlischem Heiler mit heiligem Becken.",
          "ja": "神聖な治療者ヴィシュヌ神を祀る108ディヴィヤ・デーシャムの一つ。病気平癒の聖なる池。",
          "zh": "108大圣地之一，供奉作为神圣医师的毗湿奴神，信徒在圣池沐浴祈求疗愈疾病。",
          "ar": "أحد معابد ديفيا ديسام الـ 108 المقدسة المخصصة للإله فيشنو كطبيب إلهي مع بركة مقدسة للشفاء.",
          "hi": "108 दिव्य देशम में से एक पावन तीर्थ जहाँ भगवान वीरराघव स्वामी को रोगनाशक माना जाता है।",
          "es": "Uno de los 108 Divya Desams sagrados dedicado a Vishnu como sanador divino con su estanque sagrado."
        },
        "timings": "6:00 AM – 12:30 PM & 4:00 PM – 8:30 PM",
        "entryFee": "Free (Special Darshan: ₹50)",
        "bestTimeToVisit": "October to March (Amavasya days and Brahmotsavam in Jan/Feb)",
        "crowdLevel": "high",
        "rating": 4.8,
        "reviewCount": 42100,
        "aiTip": "Devotees offer salt and pepper into the temple pond (Hruthtapanasini) for good health. New moon (Amavasya) days witness massive spiritual crowds.",
        "dresscode": "Strict traditional attire: Dhoti for men, Saree or Salwar with Dupatta for women. Shorts and sleeveless tops not permitted.",
        "nearbyHotels": [
          {
            "id": "hotel-bliss-tiruvallur",
            "name": "Hotel Bliss Tiruvallur",
            "stars": 3,
            "pricePerNight": "₹1,600 – ₹2,600",
            "distanceFromSpot": "0.8 km",
            "walkTime": "10 min walk",
            "transitScore": 92,
            "amenities": [
              "AC Rooms",
              "Pure Veg Restaurant",
              "Free WiFi",
              "Room Service"
            ],
            "address": "JNK Road, Near Railway Station, Tiruvallur",
            "phone": "+91 44 2766 1234"
          },
          {
            "id": "hotel-grt-grand-tiruvallur",
            "name": "GRT Great Trails Nature Resort",
            "stars": 4,
            "pricePerNight": "₹3,800 – ₹6,200",
            "distanceFromSpot": "14 km",
            "transitScore": 84,
            "amenities": [
              "Swimming Pool",
              "Multi-cuisine Restaurant",
              "Fitness Gym",
              "Spa"
            ],
            "address": "NH-716 Tiruvallur Bypass Road",
            "phone": "+91 44 2766 5678"
          }
        ],
        "transport": [
          {
            "mode": "train",
            "label": "Chennai Suburban EMU Train from Chennai Central / Moore Market to Tiruvallur Station",
            "duration": "50 min",
            "fare": "₹15",
            "frequency": "Every 15 min",
            "icon": "🚆"
          },
          {
            "mode": "bus",
            "label": "MTC Bus Route 59 / 54V from CMBT Koyambedu to Tiruvallur",
            "duration": "1 hr 20 min",
            "fare": "₹35",
            "frequency": "Every 20 min",
            "icon": "🚌"
          },
          {
            "mode": "auto",
            "label": "Auto from Tiruvallur Railway Station to Temple",
            "duration": "6 min",
            "fare": "₹50 – ₹70",
            "icon": "🛺"
          }
        ],
        "coordinates": {
          "lat": 13.1438,
          "lng": 79.9079
        }
      },
      {
        "id": "pulicat-lake-bird-sanctuary",
        "name": "Pulicat Lake & Bird Sanctuary",
        "nameInTamil": "பழவேற்காடு ஏரி & பறவைகள் சரணாலயம்",
        "type": "wildlife",
        "description": "The second largest brackish-water lagoon in India, home to over 20,000 greater flamingos during winter, pelicans, painted storks, and historic 17th-century Dutch colonial monuments.",
        "translations": {
          "fr": "Deuxième plus grande lagune d'eau saumâtre d'Inde, accueillant des milliers de flamants roses et des monuments hollandais historiques.",
          "de": "Zweitgrößte Brackwasserlagune Indiens mit Tausenden von Rosaflamingos und historischen holländischen Kolonialdenkmälern.",
          "ja": "何千羽ものフラミンゴが飛来するインド第2の汽水潟湖。17世紀オランダ植民地時代の歴史的記念碑。",
          "zh": "印度第二大半咸水潟湖，冬季聚集数万只大红鹳，还有17世纪荷兰殖民遗迹。",
          "ar": "ثاني أكبر بحيرة مياه مالحة في الهند، موطن لآلاف طيور الفلامنجو وآثار هولندية تاريخية.",
          "hi": "भारत का दूसरा सबसे बड़ा खारे पानी का लैगून, सर्दियों में 20,000+ राजहंस (फ्लेमिंगो) और डच औपनिवेशिक विरासत।",
          "es": "Segunda laguna de agua salobre más grande de la India, hogar de miles de flamencos y monumentos coloniales holandeses."
        },
        "timings": "6:00 AM – 6:00 PM",
        "entryFee": "Free (Boat safari: ₹600 – ₹1,200 per boat)",
        "bestTimeToVisit": "November to February (Peak migratory flamingo season)",
        "crowdLevel": "moderate",
        "rating": 4.5,
        "reviewCount": 16800,
        "aiTip": "Hire a motorized fisherman boat at 7:00 AM for the best chance of navigating near large pink flamingo feeding colonies. Bring binoculars and a telephoto camera.",
        "nearbyHotels": [
          {
            "id": "pulicat-lake-resort",
            "name": "Pulicat Lake Lagoon Retreat",
            "stars": 3,
            "pricePerNight": "₹2,200 – ₹3,800",
            "distanceFromSpot": "1.5 km",
            "transitScore": 78,
            "amenities": [
              "Lake View",
              "Fresh Seafood Restaurant",
              "Boat Safari Desk",
              "WiFi"
            ],
            "address": "Lighthouse Road, Pazhaverkadu, Tiruvallur",
            "phone": "+91 44 2797 8899"
          },
          {
            "id": "sheraton-grand-chennai-north",
            "name": "Sheraton Grand Chennai Resort",
            "stars": 5,
            "pricePerNight": "₹9,500 – ₹16,000",
            "distanceFromSpot": "45 km",
            "transitScore": 74,
            "amenities": [
              "Private Beachfront",
              "Infinity Pool",
              "Luxury Spa",
              "Fine Dining"
            ],
            "address": "East Coast Corridor, North Chennai",
            "phone": "+91 44 7100 6000"
          }
        ],
        "transport": [
          {
            "mode": "bus",
            "label": "TNSTC Bus from Chennai Broadway to Pulicat",
            "duration": "1 hr 45 min",
            "fare": "₹40",
            "frequency": "Every 40 min",
            "icon": "🚌"
          },
          {
            "mode": "cab",
            "label": "Cab from Chennai City or Tiruvallur",
            "duration": "1 hr 15 min",
            "fare": "₹1,200 – ₹1,600",
            "icon": "🚖"
          }
        ],
        "coordinates": {
          "lat": 13.4189,
          "lng": 80.3204
        }
      }
    ]
  }
];
