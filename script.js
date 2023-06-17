function convert() {
    // Get the input value
    var amount = document.getElementById("amount").value;
  
    // Perform the conversion
    var rate = 55.00; // Use the current exchange rate between AUD and INR
    var result = amount * rate;
  
    // Display the result
    document.getElementById("result").innerHTML = "Converted amount in INR: " + result.toFixed(2);
  }
  