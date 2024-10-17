let temp = 25
let fahrenheit = (9 / 5 * temp) + 32
switch (true){
    case temp < 15:
        console.log(`${temp} graden Celsius is gelijk ${fahrenheit} aan graden Fahrenheit en is frisjes.`)
        break
    case temp >= 15 && temp <= 25:
        console.log(`${temp} graden Celsius is gelijk ${fahrenheit} aan graden Fahrenheit en voelt aangenaam aan.`)
        break
    case temp > 25:
        console.log(`${temp} graden Celsius is gelijk ${fahrenheit} aan graden Fahrenheit en is te warm.`)
        break
    default:
        console.log("ongeldig")
}