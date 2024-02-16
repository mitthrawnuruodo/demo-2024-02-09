import { listData, favourites } from "./utils.js"
console.log("favourites:", favourites);

const outElement = document.getElementById("container");

async function collectCards() {
    try {
        const api = `https://www.amiiboapi.com/api/amiibo/`;
        const response = await fetch(api);
        //console.log(response);
        const data = await response.json();
        //console.log("Data:", data);
        let filtered = data.amiibo.filter((item)=>{
            let id = item.head + item.tail;
            return favourites.includes(id);
        });
        console.log("Filtered Collection:", filtered);
        if (filtered.length > 0) { 
            listData (filtered, outElement);
        } else {
            outElement.innerHTML = `You have no favourites, click on a few hearts to add them...`;
        }
    } catch (error) {
        console.error(error.message);
        outElement.innerHTML = `Could not fetch data...`;
    }
}

collectCards();