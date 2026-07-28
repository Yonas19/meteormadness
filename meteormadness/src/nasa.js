// src/nasa.js

// Function to get a date in YYYY-MM-DD format
const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const MOCK_ASTEROIDS = [
  {
    id: "2000433",
    name: "(433 Eros)",
    is_potentially_hazardous_asteroid: false,
    estimated_diameter: {
      meters: {
        estimated_diameter_min: 16800,
        estimated_diameter_max: 17200,
      },
    },
    close_approach_data: [
      {
        close_approach_date_full: "2026-08-01 12:00",
        relative_velocity: {
          kilometers_per_second: "24.32",
        },
        miss_distance: {
          astronomical: "0.149",
          kilometers: "22290000",
        },
      },
    ],
  },
  {
    id: "2099942",
    name: "(99942 Apophis)",
    is_potentially_hazardous_asteroid: true,
    estimated_diameter: {
      meters: {
        estimated_diameter_min: 340,
        estimated_diameter_max: 390,
      },
    },
    close_approach_data: [
      {
        close_approach_date_full: "2026-08-03 18:30",
        relative_velocity: {
          kilometers_per_second: "30.73",
        },
        miss_distance: {
          astronomical: "0.024",
          kilometers: "3590000",
        },
      },
    ],
  },
  {
    id: "2101955",
    name: "(101955 Bennu)",
    is_potentially_hazardous_asteroid: true,
    estimated_diameter: {
      meters: {
        estimated_diameter_min: 490,
        estimated_diameter_max: 520,
      },
    },
    close_approach_data: [
      {
        close_approach_date_full: "2026-08-04 09:15",
        relative_velocity: {
          kilometers_per_second: "27.65",
        },
        miss_distance: {
          astronomical: "0.048",
          kilometers: "7180000",
        },
      },
    ],
  },
  {
    id: "2024001",
    name: "(2024 BX1)",
    is_potentially_hazardous_asteroid: false,
    estimated_diameter: {
      meters: {
        estimated_diameter_min: 50,
        estimated_diameter_max: 110,
      },
    },
    close_approach_data: [
      {
        close_approach_date_full: "2026-08-05 21:40",
        relative_velocity: {
          kilometers_per_second: "18.45",
        },
        miss_distance: {
          astronomical: "0.082",
          kilometers: "12260000",
        },
      },
    ],
  },
  {
    id: "2023002",
    name: "(2023 DW)",
    is_potentially_hazardous_asteroid: true,
    estimated_diameter: {
      meters: {
        estimated_diameter_min: 140,
        estimated_diameter_max: 280,
      },
    },
    close_approach_data: [
      {
        close_approach_date_full: "2026-08-06 14:10",
        relative_velocity: {
          kilometers_per_second: "21.90",
        },
        miss_distance: {
          astronomical: "0.035",
          kilometers: "5230000",
        },
      },
    ],
  },
];

export const fetchAsteroids = async () => {
  // Use your key from .env, or fallback to the demo key
  const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
  
  const today = new Date();
  const endDate = new Date();
  endDate.setDate(today.getDate() + 7); // Fetch data for the next 7 days

  const startDateStr = getFormattedDate(today);
  const endDateStr = getFormattedDate(endDate);

  const API_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDateStr}&end_date=${endDateStr}&api_key=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      console.warn(`NASA API request status ${response.status}. Using fallback asteroid data.`);
      return MOCK_ASTEROIDS;
    }
    const data = await response.json();
    
    // The API returns data grouped by date. We flatten it into a single array.
    const asteroids = [];
    if (data.near_earth_objects) {
        Object.keys(data.near_earth_objects).forEach(date => {
            data.near_earth_objects[date].forEach(asteroid => {
                asteroids.push(asteroid);
            });
        });
    }

    return asteroids.length > 0 ? asteroids : MOCK_ASTEROIDS;
  } catch (error) {
    console.warn("Failed to fetch NASA asteroid data, using fallback data:", error);
    return MOCK_ASTEROIDS;
  }
};