// convert wind direction to a string
function degToCompass(num) {
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = [
    'Nord',
    'Nord Nord Øst',
    'Nord Øst',
    'Øst Nord Øst',
    'Øst',
    'Øst Syd Øst',
    'Syd Øst',
    'Syd Syd Øst',
    'Syd',
    'Syd Syd Vest',
    'Syd Vest',
    'Vest Syd Vest',
    'Vest',
    'Vest Nord Vest',
    'Nord Vest',
    'Nord Nord Vest',
  ];
  return arr[val % 16];
}

export default data => {
  return {
    name: data.name,
    temperature: `${data.main.temp}°C`,
    humidity: data.main.humidity,
    wind: `${data.wind.speed} m/s ${data.wind.deg ? degToCompass(data.wind.deg) : ''}`,
  };
};
