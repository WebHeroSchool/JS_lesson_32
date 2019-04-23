let userName = window.location.search.slice(10);
fetch("https://api.github.com/users/" + userName)
.then(response => {
    if(!(response.status === 200)) {
        throw new Error(`Request rejected with ${response.status}`);
    } else {
        return response.json();
    }
})

.then(responseJson => {
    const name = responseJson.name;
    const imageUrl = responseJson.avatar_url;
    const bio = responseJson.bio ? responseJson.bio: "N/A";
    const body = document.body;
    const profileCard = document.querySelector(".profile-card")
    const figure = document.createElement("figure");
    figure.classList.add("figure");
    const img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    img.classList.add("image");
    const paragraph = document.createElement("paragraph");
    paragraph.classList.add("paragraph");
    const figCaption = document.createElement("figcaption");
    figCaption.classList.add("fig-caption");
    figCaption.innerHTML = name;
    const link = document.createElement("a");
    link.classList.add("link");
    link.setAttribute("href", responseJson.html_url)
    const br = document.createElement("br");
    link.innerHTML = responseJson.login;
    profileCard.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figCaption);
    profileCard.appendChild(paragraph);
    paragraph.innerHTML = "Bio: " + bio;
    paragraph.appendChild(br);
    paragraph.innerHTML += "My GitHub: "
    paragraph.appendChild(link);
    console.log(responseJson);
})
.catch(console.error);