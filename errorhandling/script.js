const base = "https://v2.api.noroff.dev"
const url = `${base}/cat-facts/random`; 

const out = document.querySelector("div#fact");
const spinner = document.querySelector(".spinner-border");
//console.log ({out, spinner})

async function getData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error (response.status);
        let obj = await response.json();
        console.log(obj);
        displayCatFact(obj.data, out);
    } catch (err) {
        console.error ("Error: " + err.message);
        out.innerHTML = "<li>An error occurred</li>";
    } finally {
        spinner.remove();    
    }
}

getData(url); // Remove to show spinner forever

function displayCatFact (fact, element) {
    //console.log (fact, element);
    if (fact && element) {
        //console.log(fact);
        let f = `<p>${fact.text}</p>`;
        element.innerHTML = f;
    } else {
        console.error ("Some parameters where wrong: ", list, element);
    }
}
