# Smart Travel Application

This project is a comprehensive **Smart Travel** built using React and TailwindCSS. It enables users to plan trips by searching for flights, hotels, and destinations with dynamic features such as filtering and detailed options for destinations and accommodations.

---

## Features

### 1. **Flight Search**

- Users can input origin and destination.
- Search for flights between selected dates.
- Filter results dynamically based on destinations and additional details.

### 2. **Destination Details**

- Integrated destination component to provide detailed information about the selected location.
- Includes popular attractions, weather, and travel tips.

### 3. **Hotels Search**

- Search and filter hotel options based on:
  - Price range
  - Star ratings
  - Amenities (Wi-Fi, pool, parking, etc.).
- Displays hotel details such as reviews, availability, and location.

---

## Components

### Location Component

- Handles origin and destination inputs.
- Fetches and displays suggestions dynamically.

### Date Component

- Start and end date selection.
- Prevents selecting an end date earlier than the start date.

### Destination Component

- Displays detailed information about the selected destination.
- Showcases key attractions, cultural highlights, and travel advisories.

### Hotels Component

- Allows users to filter and browse hotels.
- Dynamic price slider to refine hotel searches.
- Displays hotel ratings, reviews, and booking links.

### Details Information

- Comprehensive details on flights and hotels.
- Provides a seamless experience for reviewing and booking.

---

## Technologies Used

- **ReactJS**: For building the user interface.
- **TailwindCSS and Css**: For responsive and modern design.
- **Axios**: For API requests.
- **Amadeus API**: To fetch flights and hotel details.

---

## How to Run

1. Clone this repository:

   
   git clone https://github.com/imma1001/smart-travel.git
   

2. Navigate to the project folder:

   cd smart-travel
   

3. Install dependencies:

   npm install
   

4. Run the application:

   npm start
  

---
## Future Enhancements

- Add user authentication for saving preferences.
- Enable multi-destination trip planning.
- Integrate maps for real-time navigation.
- Include reviews and ratings for flights and destinations.




