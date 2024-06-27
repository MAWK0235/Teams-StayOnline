(function() {
    // Function to simulate activity
    function simulateActivity() {
        // Replace this with any action that simulates user activity
        console.log('Simulating activity...');
        
        // You can also call Microsoft Teams SDK to keep status online
        // For example:
        // microsoftTeams.appInitialization.notifySuccess();
    }
    
    // Call simulateActivity immediately when script runs
    simulateActivity();
    
    // Set interval to simulate activity every minute (adjust as needed)
    setInterval(simulateActivity, 60 * 1000); // 60 seconds * 1000 ms
})();
