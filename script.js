// Function to retrieve and apply the saved preferences
function applyPreferences() {
    let cookies = document.cookie.split('; ');
    let savedFontSize = cookies.find(row => row.startsWith('fontSize'));
    let savedFontColor = cookies.find(row => row.startsWith('fontColor'));

    if (savedFontSize && savedFontColor) {
        savedFontSize = savedFontSize.split('=')[1];
        savedFontColor = savedFontColor.split('=')[1];

        document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
        document.documentElement.style.setProperty('--fontcolor', savedFontColor);
    }
}

// Call the function when the page loads
applyPreferences();

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the font size and color
    let fontSize = document.getElementById('fontsize').value;
    let fontColor = document.getElementById('fontcolor').value;

    // Save the preferences in cookies
    document.cookie = "fontSize=" + fontSize;
    document.cookie = "fontColor=" + fontColor;

    // Update the CSS variables
    document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
    document.documentElement.style.setProperty('--fontcolor', fontColor);
});