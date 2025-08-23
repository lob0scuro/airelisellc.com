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
