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
    ...vietnamProvinces,
    ...worldMajorCities,
  ]),
).sort((a, b) => a.localeCompare(b));
