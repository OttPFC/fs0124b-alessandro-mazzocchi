document
    .querySelector("section .btn-primary")

    .addEventListener("click", function () {
        call("sunset");
    });
async function call(query) {
    const apiKey = "ree1NW2zHogVKCPcVttrzMTmrXiKU6mFRLgQCLFwbGXa283F5E8awT2R";

    return await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        method: "GET",
        headers: {
            Authorization: apiKey,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            let allImages = document.querySelectorAll(".bd-placeholder-img");
            allImages.forEach((imgTag, i) => {
                imgTag.src = data.photos[i].src.medium;
            });
        });
}
call("vietnam").then((image) => {
    console.log(image);
});
