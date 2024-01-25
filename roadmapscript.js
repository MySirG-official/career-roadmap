$(document).ready(function() {
    // Sample data for career milestones
    const careerMilestones = [
        "Journey to FAANG",
        "Web Development",
        "Mobile App Development",
        "Cloud Engineer",
        "DevOps",
        "Ethical Hacking/Cyber Security",
        "Game Programming",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Capacity Building",
        "Startup/Freelancing"
    ];

    // Function to dynamically populate the roadmap container
    function populateRoadmap() {
        const roadmapContainer = $("#roadmap-container");

        careerMilestones.forEach((milestone, index) => {
            const milestoneElement = $("<div>")
                .addClass("milestone")
                .text(milestone);
            roadmapContainer.append(milestoneElement);
        });
    }

    // Call the function to populate the roadmap on page load
    //populateRoadmap();
});
