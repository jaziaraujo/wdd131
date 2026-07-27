
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Última modificação: ${document.lastModified}`;

const temperature = 8; // °C
const windSpeed = 12;  // km/h

function calcularSensacaoTermica(temp, vento) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(vento, 0.16)) +
        (0.3965 * temp * Math.pow(vento, 0.16))
    ).toFixed(1);
}

const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent =
        `${calcularSensacaoTermica(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}