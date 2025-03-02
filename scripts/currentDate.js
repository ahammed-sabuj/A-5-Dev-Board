const d = new Date();
    document.getElementById("current-date").innerHTML = 
        d.toLocaleDateString("en-US", { weekday: "short" }) + ",<br>" +
        d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });