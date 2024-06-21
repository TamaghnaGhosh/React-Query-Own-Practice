import React from 'react';
import ImageGallery from './ImageGallery'; // Adjust path as per your project structure

const App = () => {
  const imageUrls = [
    'https://assets.goal.com/images/v3/blt8e77bc12a4296d08/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-06-10T073032.898.png?auto=webp&format=pjpg&width=3840&quality=60',
    'https://www.sportsnet.ca/wp-content/uploads/2023/09/messi1280-1040x572.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzw_Ti47ovNmMbRwz3HaY7hDhHFeAmER6kw&s',
    'https://assets.goal.com/images/v3/blt029b0eabe4320c5b/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-06-13T072127.824.png?auto=webp&format=pjpg&width=3840&quality=60',
    // 'https://images.news18.com/ibnlive/uploads/2024/06/lionel-messi-1-2024-06-95252e9b5adc48583338a64b7a1574c2.jpg?impolicy=website&width=640&height=480',
    // 'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/06/USAT/74005561007-usatsi-19647073.jpg?crop=2658,1495,x683,y437&width=660&height=371&format=pjpg&auto=webp',
    // 'https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/18/USAT/74136236007-usatsi-23512430-168402560-lowres.jpg?crop=2680,1508,x2,y95&width=660&height=371&format=pjpg&auto=webp'
    // Add more URLs as needed
  ];

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      <ImageGallery imageUrls={imageUrls} />
    </div>
  );
};

export default App;
