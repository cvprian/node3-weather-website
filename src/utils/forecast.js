const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dd858253365ab5c7bde7b251486bff17&query=' + latitude + ',' + longitude;

    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect ro weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is ${body.current.temperature} degrees out. It feels like it is ${body.current.feelslike} degrees. Pressure is ${body.current.pressure}`);
        }
    })
}

module.exports = forecast;