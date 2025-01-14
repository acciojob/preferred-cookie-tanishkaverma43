//your JS code here. If required.
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get the font size and color
  let fontSize = document.getElementById('fontsize').value;
  let fontColor = document.getElementById('fontcolor').value;
  
  // Update the CSS variables
  document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
  document.documentElement.style.setProperty('--fontcolor', fontColor);
  
  // Save the preferences in cookies
  // Note: You need to write the code for saving the values in cookies
});