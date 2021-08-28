const loadBuddies = () =>
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => display(data))

loadBuddies()
function display(data) {
    const buddies = data.results;
    // console.log(buddies)
    const div = document.getElementById('buddies')
    for (const buddy of buddies) {
        // console.log(buddy.email)
        const p = document.createElement('p')
        p.innerText = `Name : ${buddy.name.first} ${buddy.name.lest}  email : ${buddy.email}`;
        div.appendChild(p)
    }

}