const github = new GitHub;

github.getUserData()
.then(data => {
    console.log(data.profile);
    console.log(data.repos);
})