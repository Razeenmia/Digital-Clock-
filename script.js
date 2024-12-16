function showTime() {
    // Get the current date and time
    const now = new Date();

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Pad single digits with a leading zero
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format time as HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Display the time in the div with the id 'myclockdisplay'
    document.getElementById('myclockdisplay').innerText = timeString;

    // Call showTime every second to keep the time updated
    setTimeout(showTime, 1000);
}

// Call the function to start showing time when the page loads
window.onload = showTime;
