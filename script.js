//fetching the data for all countries 
async function fetchCountries() {
    try {
        const API_URL = await fetch('https://restcountries.com/v3.1/all')
        const data = await API_URL.json()
        displayCountries(data)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

//extracting and displaying the required info.
function displayCountries(countries) {
    const container = document.getElementById('countries-container')
    container.innerHTML = ''

    //loop to get data for each country
    for (const country of countries) {
        const countryElement = document.createElement('div')
        countryElement.classList.add('country')

        //creating img tag to store flag img in it.
        const flagImg = document.createElement('img')
        flagImg.src = country.flags.png
        flagImg.alt = `Flag of ${country.name.common}`

        //creating span tag to store   name in it.
        const nameElement = document.createElement('span')
        nameElement.textContent = country.name.common

        //creating a tag to store maps link in it.        
        const mapsLink = document.createElement('a')
        mapsLink.href = country.maps.googleMaps
        mapsLink.target = '_blank'
        mapsLink.textContent = 'View on Google Maps'

        //apending all in div tag.
        countryElement.appendChild(flagImg)
        countryElement.appendChild(nameElement)
        countryElement.appendChild(mapsLink)

        container.appendChild(countryElement)
    }
}

//Calling the function to display flags.
fetchCountries()
