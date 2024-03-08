const url = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDZiNjJkN2IxMTAwMTkwZTZkZDEiLCJpYXQiOjE3MDk4ODkyMDYsImV4cCI6MTcxMTA5ODgwNn0.3V3TfWE6H_di6zL_DJ2YmxuEYS0MQ9I4zpWKGJjgEsA";

const fetcher = () => {
    fetch(url, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            console.log(response);

            if (!response.ok) throw new Error("Errore");
            return response.json();
        })
        .then((products) => {
            const spinner = document.getElementById("spinner");
            spinner.classList.add("d-none");
            console.log(products);
            products.forEach((product) => {
                let products = generateClone()
                let img = products.querySelector('.card-img-top')
                img.src = product.imageUrl;
                let name = products.querySelector('.card-title')
                name.innerText = product.name;
                let description = products.querySelector('.card-text')
                description.innerText = product.description;
                let price = products.querySelector('.price')
                price.innerText = product.price + '€';
                const det = products.querySelector('.details')
                const mod = products.querySelector('.modify')
                det.href = "./details.html?resourceId=" + product._id;
                mod.href = "./back.html?resourceId=" + product._id;
                document.querySelector('#products').appendChild(products)
                console.log(product);
            });
        })
        .catch((error) => new Error(error));
};

function generateClone(){
    let template = document.querySelector('#card-template')
    let clone = template.content.cloneNode(true)
    return clone;
}

window.addEventListener("DOMContentLoaded", () => {
    fetcher();
});
