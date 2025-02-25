// points.js
let points = null;

// Initialize points from localStorage or set to default value
function initializePoints() {
    const storedPoints = localStorage.getItem('points');
    if (storedPoints !== null) {
        points = parseInt(storedPoints, 10);
    } else {
        points = 100; // Default points value
        localStorage.setItem('points', points);
    }
}

// Simulate fetching points from local storage
function fetchPoints() {
    return points;
}

function updatePoints(pointsGiven) {
    points += pointsGiven;
    if (points < 0) {
        points = 0;
    }
    localStorage.setItem('points', points); // Save updated points to localStorage
    displayPoints();
}

function displayPoints() {
    const pointsElements = document.querySelectorAll('#points-number');
    pointsElements.forEach(element => {
        element.textContent = points;
    });
}

// Initialize points and call displayPoints when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializePoints();
    displayPoints();
});