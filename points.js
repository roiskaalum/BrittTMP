// points.js
const points = 100; // Example points value
// Simulate fetching points from a server or local storage
function fetchPoints() {
    // For demonstration purposes, we'll use a fixed value
    // In a real application, you might fetch this from a server or local storage
    return points; // Example points value
}

function updatePoints(points){
    points += points;
    if(points < 0){
        points = 0;
    }
}

function displayPoints() {
    const points = fetchPoints();
    const pointsElements = document.querySelectorAll('#points-number');
    pointsElements.forEach(element => {
        element.textContent = points;
    });
}

// Call displayPoints when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    displayPoints();
});