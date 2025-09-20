places.forEach(place => {
  const marker = L.marker(place.coordinates).addTo(map);
  marker.bindPopup(`<strong>${place.name}</strong><br>${place.description}<br><em>Mood: ${place.mood}</em>`);
});
const places = [
  {
    name: "Netarhat",
    coordinates: [23.4821, 84.1240],
    mood: "Tranquil",
    description: "Known as the Queen of Chotanagpur, famous for sunrise views."
  },
  {
    name: "Jonha Falls",
    coordinates: [23.2736, 85.4189],
    mood: "Introspective",
    description: "Requires a trek down steps; peaceful and spiritual ambiance."
  }
  // Add more...
];
