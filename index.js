const userGitHub = window.prompt(`Digite seu usuário do GitHub`)

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${userGitHub}`

    fetch(url)
    .then(response =>  response.json())
    .then(data => {
        userName.textContent = data.name,
        userPhoto.src = data.avatar_url,
        user.href = data.html_url,
        userLink.textContent = data.login,
        userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()