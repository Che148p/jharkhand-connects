const map = L.map('map').setView([23.6102, 85.2799], 7); // Centered on Jharkhand

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
