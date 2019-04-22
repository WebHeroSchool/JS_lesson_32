let userName = window.location.search.slice(10);
fetch("https://api.github.com/users/" + userName)
.then(response => {
    if(!(response.status === 200)) {
        throw new Error(error);
    }
    return response.json();
})
.then(responseJson => {
    const name = responseJson.login;
    const imageUrl = responseJson.avatar_url;
    const bio = responseJson.bio ? responseJson.bio: "N/A";
    const body = document.body;
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    const paragraph = document.createElement("paragraph");
    const figCaption = document.createElement("figcaption");
    figCaption.innerHTML = name;
    body.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figCaption);
    body.appendChild(paragraph);
    paragraph.innerHTML = "Bio: " + bio;
})
