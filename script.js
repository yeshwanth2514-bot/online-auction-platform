function placeBid(inputId, priceId) {
  const input = document.getElementById(inputId);
  const display = document.getElementById(priceId);
  const amount = Number(input.value);

  const currentBid = Number(
    display.textContent.replace(/[^\d]/g, "")
  );

  if (!input.value || !Number.isFinite(amount) ||
      amount <= currentBid) {
    alert("Enter a bid higher than the current highest bid.");
    return;
  }

  display.textContent = "Highest bid: ₹" +
    amount.toLocaleString("en-IN");

  input.value = "";
  alert("Your bid has been placed successfully!");
}