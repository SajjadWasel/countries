const load = () => {
    fetch("https://restcountries.com/v3/all")
        .then(res => res.json())
        .then(data => displaycountries(data))
}

const displaycountries = countries => {
    const countryHtml = countries.map(country => getCountryHtml(country));
    document.getElementById("all-countries").innerHTML = countryHtml;
    console.log(countryHtml);
}

const getCountryHtml = country => {
    return `
        <div class='country'>
            <h2>Country:${country.name.common}</h2>
            <h3>Capital:${country.capital}</h3>
            <img src="${country.flags[0]}">
        </div>
    `
}

load();

