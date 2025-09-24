document.addEventListener("DOMContentLoaded", () => {
    const sosBtn = document.getElementById("sosBtn");
    const cityInput = document.getElementById("cityInput");
    const sosResult = document.getElementById("sosResult");

    sosBtn.addEventListener("click", () => {
        const city = cityInput.value.trim();

        if (!city) {
            sosResult.innerHTML = <span style="color:red;">Please enter a city/town in Jharkhand.</span>;
            return;
        }

        fetch("Backend/sos.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ city })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                sosResult.innerHTML = `
                    <h4>SOS Contacts for ${data.city}</h4>
                    <ul>
                        <li><strong>Police:</strong> ${data.contacts.police}</li>
                        <li><strong>Police Control Room:</strong> ${data.contacts.policeControlRoom}</li>
                        <li><strong>Hospital:</strong> ${data.contacts.hospital}</li>
                        <li><strong>Anti-Naxal Soldiers:</strong> ${data.contacts.antiNaxal || "Not Available"}</li>
                    </ul>
                `;
            } else {
                sosResult.innerHTML = <span style="color:red;">${data.message}</span>;
            }
        })
        .catch(err => {
            console.error(err);
            sosResult.innerHTML = <span style="color:red;">Error fetching SOS data.</span>;
        });
    });
});
