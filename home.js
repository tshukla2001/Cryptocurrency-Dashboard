const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ef616b4653mshfcf19332b6b0ee4p13ff98jsn5868c77ee8e0",
    "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  },
};

fetch(
  "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc",
  options
)
  .then((response) => response.json())
  .then(
    (response) =>
      {
		document.getElementById("btcprice").innerHTML = "$ " + response[0].current_price.toFixed(3);
		document.getElementById("ethprice").innerHTML = "$ " + response[1].current_price.toFixed(3);
		document.getElementById("usdtprice").innerHTML = "$ " + response[2].current_price.toFixed(3);
		document.getElementById("usdprice").innerHTML = "$ " + response[3].current_price.toFixed(3);
	  }

  )
  .catch((err) => console.error(err));