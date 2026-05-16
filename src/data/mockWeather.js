/**
 * Mock Weather Data
 * Used for testing UI components before API integration
 */

export const mockWeatherData = {
  city: 'Ho Chi Minh City',
  country: 'VN',
  temperature: 28.5,
  description: 'Partly Cloudy',
  humidity: 75,
  windSpeed: 3.2,
  coordinates: {
    lat: 10.8231,
    lon: 106.6297,
  },
};

export const mockWeatherByCity = {
  'ho chi minh city': mockWeatherData,
  hanoi: {
    city: 'Hanoi',
    country: 'VN',
    temperature: 31.2,
    description: 'scattered clouds',
    humidity: 68,
    windSpeed: 2.8,
    coordinates: { lat: 21.0278, lon: 105.8342 },
  },
  danang: {
    city: 'Danang',
    country: 'VN',
    temperature: 30.1,
    description: 'light rain',
    humidity: 81,
    windSpeed: 4.1,
    coordinates: { lat: 16.0544, lon: 108.2022 },
  },
  tokyo: {
    city: 'Tokyo',
    country: 'JP',
    temperature: 24.8,
    description: 'few clouds',
    humidity: 60,
    windSpeed: 3.7,
    coordinates: { lat: 35.6762, lon: 139.6503 },
  },
  london: {
    city: 'London',
    country: 'GB',
    temperature: 18.4,
    description: 'overcast clouds',
    humidity: 73,
    windSpeed: 5.3,
    coordinates: { lat: 51.5072, lon: -0.1276 },
  },
};

export const mockForecastByCity = {
  'ho chi minh city': [
    { date: '2026-05-16', tempMin: 27, tempMax: 33, description: 'partly cloudy' },
    { date: '2026-05-17', tempMin: 27, tempMax: 34, description: 'light rain' },
    { date: '2026-05-18', tempMin: 26, tempMax: 33, description: 'thunderstorm' },
    { date: '2026-05-19', tempMin: 27, tempMax: 32, description: 'scattered clouds' },
    { date: '2026-05-20', tempMin: 26, tempMax: 32, description: 'moderate rain' },
  ],
  hanoi: [
    { date: '2026-05-16', tempMin: 28, tempMax: 34, description: 'scattered clouds' },
    { date: '2026-05-17', tempMin: 27, tempMax: 35, description: 'clear sky' },
    { date: '2026-05-18', tempMin: 27, tempMax: 33, description: 'light rain' },
    { date: '2026-05-19', tempMin: 26, tempMax: 32, description: 'moderate rain' },
    { date: '2026-05-20', tempMin: 27, tempMax: 34, description: 'few clouds' },
  ],
  danang: [
    { date: '2026-05-16', tempMin: 26, tempMax: 32, description: 'light rain' },
    { date: '2026-05-17', tempMin: 26, tempMax: 31, description: 'broken clouds' },
    { date: '2026-05-18', tempMin: 25, tempMax: 31, description: 'scattered clouds' },
    { date: '2026-05-19', tempMin: 26, tempMax: 32, description: 'light rain' },
    { date: '2026-05-20', tempMin: 26, tempMax: 33, description: 'partly cloudy' },
  ],
  tokyo: [
    { date: '2026-05-16', tempMin: 20, tempMax: 25, description: 'few clouds' },
    { date: '2026-05-17', tempMin: 19, tempMax: 24, description: 'light rain' },
    { date: '2026-05-18', tempMin: 18, tempMax: 23, description: 'overcast clouds' },
    { date: '2026-05-19', tempMin: 19, tempMax: 25, description: 'clear sky' },
    { date: '2026-05-20', tempMin: 20, tempMax: 26, description: 'scattered clouds' },
  ],
  london: [
    { date: '2026-05-16', tempMin: 13, tempMax: 19, description: 'overcast clouds' },
    { date: '2026-05-17', tempMin: 12, tempMax: 18, description: 'light rain' },
    { date: '2026-05-18', tempMin: 11, tempMax: 17, description: 'broken clouds' },
    { date: '2026-05-19', tempMin: 12, tempMax: 18, description: 'few clouds' },
    { date: '2026-05-20', tempMin: 13, tempMax: 19, description: 'clear sky' },
  ],
};

export const vietnamProvinces = [
  'Ha Noi', 'Ho Chi Minh City', 'Hai Phong', 'Da Nang', 'Can Tho',
  'An Giang', 'Ba Ria - Vung Tau', 'Bac Giang', 'Bac Kan', 'Bac Lieu',
  'Bac Ninh', 'Ben Tre', 'Binh Dinh', 'Binh Duong', 'Binh Phuoc',
  'Binh Thuan', 'Ca Mau', 'Cao Bang', 'Dak Lak', 'Dak Nong',
  'Dien Bien', 'Dong Nai', 'Dong Thap', 'Gia Lai', 'Ha Giang',
  'Ha Nam', 'Ha Tinh', 'Hai Duong', 'Hau Giang', 'Hoa Binh',
  'Hung Yen', 'Khanh Hoa', 'Kien Giang', 'Kon Tum', 'Lai Chau',
  'Lam Dong', 'Lang Son', 'Lao Cai', 'Long An', 'Nam Dinh',
  'Nghe An', 'Ninh Binh', 'Ninh Thuan', 'Phu Tho', 'Phu Yen',
  'Quang Binh', 'Quang Nam', 'Quang Ngai', 'Quang Ninh', 'Quang Tri',
  'Soc Trang', 'Son La', 'Tay Ninh', 'Thai Binh', 'Thai Nguyen',
  'Thanh Hoa', 'Thua Thien Hue', 'Tien Giang', 'Tra Vinh', 'Tuyen Quang',
  'Vinh Long', 'Vinh Phuc', 'Yen Bai',
];

export const worldMajorCities = [
  'Tokyo', 'Delhi', 'Shanghai', 'Sao Paulo', 'Mexico City', 'Cairo',
  'Dhaka', 'Mumbai', 'Beijing', 'Osaka', 'New York', 'Karachi',
  'Buenos Aires', 'Istanbul', 'Kolkata', 'Manila', 'Lagos', 'Rio de Janeiro',
  'Tianjin', 'Kinshasa', 'Guangzhou', 'Los Angeles', 'Moscow', 'Shenzhen',
  'Lahore', 'Bangalore', 'Paris', 'Bogota', 'Jakarta', 'Chennai',
  'Lima', 'Bangkok', 'Seoul', 'Nagoya', 'Hyderabad', 'London',
  'Tehran', 'Chicago', 'Chengdu', 'Nanjing', 'Wuhan', 'Ho Chi Minh City',
  'Luanda', 'Ahmedabad', 'Kuala Lumpur', 'Hong Kong', 'Dongguan', 'Hangzhou',
  'Foshan', 'Shenyang', 'Riyadh', 'Baghdad', 'Santiago', 'Surat',
  'Madrid', 'Toronto', 'Dubai', 'Singapore', 'Sydney', 'Berlin',
  'Rome', 'Vienna', 'Prague', 'Amsterdam', 'Brussels', 'Copenhagen',
  'Stockholm', 'Oslo', 'Helsinki', 'Zurich', 'Geneva', 'Lisbon',
  'Warsaw', 'Budapest', 'Athens', 'Dublin', 'Auckland', 'Melbourne',
  'San Francisco', 'Seattle', 'Boston', 'Washington', 'Dallas', 'Houston',
];

export const mockCities = Array.from(
  new Set([
    ...Object.values(mockWeatherByCity).map((item) => item.city),
    ...vietnamProvinces,
    ...worldMajorCities,
  ]),
).sort((a, b) => a.localeCompare(b));
