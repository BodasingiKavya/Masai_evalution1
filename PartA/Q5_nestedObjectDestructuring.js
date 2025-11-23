let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let {city,pin,geo}=user['address'];
console.log(city);
console.log(pin);
console.log(geo);