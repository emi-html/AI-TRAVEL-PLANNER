function planTrip() {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const mode = document.getElementById("mode").value;

    if (!source || !destination || !date) {
        alert("Please fill all travel details");
        return;
    }

    const distance = Math.floor(Math.random() * 800) + 200;
    const cost = Math.floor(Math.random() * 6000) + 1500;
    const duration = Math.floor(distance / 70) + " hrs";

    document.getElementById("travelOutput").innerHTML = `
        <strong>Route:</strong> ${source} → ${destination}<br>
        <strong>Date:</strong> ${date}<br>
        <strong>Recommended Mode:</strong> ${mode}<br><br>
        <strong>Distance:</strong> ${distance} km<br>
        <strong>Estimated Time:</strong> ${duration}<br>
        <strong>Estimated Cost:</strong> ₹${cost}
    `;

    document.getElementById("itinerary").innerHTML = `
        Day 1: Travel & Hotel Check-in<br>
        Day 2: Local Sightseeing & Events<br>
        Day 3: Return Journey
    `;
}
