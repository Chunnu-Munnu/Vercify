document.getElementById("checkButton").addEventListener("click", async function() {
    const content = document.getElementById("contentInput").value;

    if (!content) {
        alert("Please enter content to verify.");
        return;
    }

    const API_URL = window.location.hostname === "localhost" ? "http://127.0.0.1:5000/api/gemini" : "https://vercify-prototype.vercel.app/api/gemini";

    try {
        const response = await fetch(API_URL, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: content })
        });

        const result = await response.json();

        document.getElementById("resultContainer").style.display = "block";
        document.getElementById("status").innerText = `Status: ${result.status}`;
        document.getElementById("score").innerText = `Score: ${result.score}/10`;
        document.getElementById("explanation").innerText = `Explanation: ${result.verification_details}`;
    } catch (error) {
        console.error("Error:", error);
    }
});