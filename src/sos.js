document.addEventListener("DOMContentLoaded", () => {
    const sosBtn = document.getElementById("sosBtn");
    const cityInput = document.getElementById("cityInput");
    const sosResult = document.getElementById("sosResult");

    sosBtn.addEventListener("click", () => {
        const city = cityInput.value.trim();

        // Validation
        if (!city) {
            sosResult.innerHTML = <span style="color:red;">Please enter a city/town in Jharkhand.</span>;
            return;
        }

        sosResult.innerHTML = <span style="color:blue;">Fetching SOS contacts for ${city}...</span>;

        fetch("/Backend/sos.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ city })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                sosResult.innerHTML = `
                    <div class="card p-3">
                        <h4>SOS Contacts for ${data.city}</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Police:</strong> ${data.contacts.police}</li>
                            <li class="list-group-item"><strong>Police Control Room:</strong> ${data.contacts.policeControlRoom}</li>
                            <li class="list-group-item"><strong>Hospital:</strong> ${data.contacts.hospital}</li>
                            <li class="list-group-item"><strong>Anti-Naxal Soldiers:</strong> ${data.contacts.antiNaxal || "Not Available"}</li>
                        </ul>
                    </div>
                `;
            } else {
                sosResult.innerHTML = <span style="color:red;">${data.message}</span>;
            }
        })
        .catch(err => {
            console.error(err);
            sosResult.innerHTML = <span style="color:red;">Error fetching SOS data. Try again later.</span>;
        });
    });
});
