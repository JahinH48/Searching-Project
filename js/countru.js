const countries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => display(data))
}
countries()

const display = data => {
    const div = document.getElementById('cound')

    data.forEach(country => {
        const DivC = document.createElement('div')
        DivC.classList.add('country')
        DivC.innerHTML = `
                <h3>${country.name}</h3>
                <p>${country.capital}</p>
                <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        /*   const h3 = document.createElement('h3')
          h3.innerText = country.name;
          DivC.appendChild(h3)
          const p = document.createElement('p')
          p.innerText = country.capital;
          DivC.appendChild(p) */
        div.appendChild(DivC)

    })
    // console.log(data)


}
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]))
}

const displayDetails = data => {
    const resul = document.getElementById('name')
    resul.innerHTML = `
        <p>${data.name}</p>
        <p>population : ${data.population}</p>
        <img width:100px src= "${data.flag}">
    `

    // console.log(data.name)

}