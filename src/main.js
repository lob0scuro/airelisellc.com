const calls = document.querySelectorAll(".service-call");
const responses = document.querySelectorAll(".service-response");

calls.forEach((call, index) => {
  call.addEventListener("click", () => {
    const response = responses[index];
    const isActive = response.classList.contains("active");
    //Close all responses first
    responses.forEach((r) => r.classList.remove("active"));
    calls.forEach((c) => c.classList.remove("active"));

    //If the clicked one wasn't already open, open it
    if (!isActive) {
      response.classList.add("active");
      call.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error sending message: " + result.error || "Unknown error");
      }
    } catch (error) {
      alert("Error sending message, check console for details.");
    }
  });
});
