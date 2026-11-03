document.addEventListener("DOMContentLoaded", function() {

    const searchButton = document.getElementById("search");
    const searchInput = document.getElementById("searchInput");
    const result = document.getElementById("result");

    searchButton.addEventListener("click", function() {
        
        const query = searchInput.value.trim();

        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(response => {
                if (!response.ok) {
                    throw new Error("Unable to fetch superheroes");
                }
                return response.text();
            })
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => {
                console.error("Error:", error);
                result.textContent = "An error occurred.";
            });

    });

});
