//for reservation


document.addEventListener("DOMContentLoaded", function() {
    const dateSelect = document.getElementById('reservation-date');
    const timeSelect = document.getElementById('reservation-time');

    // Function to populate the date dropdown
    function populateDates() {
        const today = new Date();
        const endDate = new Date();
        endDate.setDate(today.getDate() + 30); // Allow reservations for the next 30 days

        for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
            const date = d.toISOString().split('T')[0];
            const option = document.createElement('option');
            option.value = date;
            option.textContent = d.toDateString();
            dateSelect.appendChild(option);
        }
    }

    // Function to populate the time dropdown
    function populateTimes() {
        const openTime = 17; // 5 PM
        const closeTime = 22; // 10 PM
        const interval = 30; // 30-minute intervals

        for (let h = openTime; h <= closeTime; h++) {
            for (let m = 0; m < 60; m += interval) {
                const hour = String(h).padStart(2, '0');
                const minute = String(m).padStart(2, '0');
                const time = `${hour}:${minute}`;

                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            }
        }
    }
    
    // Call the functions to populate the dropdowns on page load
    populateDates();
    populateTimes();
});