function refreshData() {
    fetch('/home/get-update')
      .then(weatherData => {
        console.log("updated");
        return weatherData.json()})
      .then(data => {
       
        document.getElementById('location').textContent = `Location: ${data.location}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
        document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°F`;
        document.getElementById('status').textContent = `Status: ${data.status}`;
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Placeholder for locating umbrella
function locateUmbrella() {
    alert('Opening map to locate umbrella...');
    // Replace with actual GPS tracking logic
  }