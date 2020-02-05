class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(userData){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <h3 class="font-weight-bold text-info">${userData.login}</h3>
                        <img class="img-fluid mb-2" src="${userData.avatar_url}">
                        <a class="btn btn-primary btn-block" target="_blank" href="${userData.html_url}">Go to Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${userData.public_repos}</span>
                        <span class="badge badge-success">Follower: ${userData.followers}</span>
                        <span class="badge badge-info">Following: ${userData.following}</span>

                        <ul class="list-group mt-3">
                            <li class="list-group-item">Website/Blog: ${userData.blog}</li>
                            <li class="list-group-item">Location: ${userData.location}</li>
                            <li class="list-group-item">Member since: ${userData.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div> 
            
            <h3 class="page-heading mb-3">Lastest Repos</h3>
            <div id="repos"></div>
            
        `;
    }

    showRepos(repos){
        let reposArrayElement = '';

        repos.forEach(repo => {
            reposArrayElement += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}">${repo.name}</a>
                        </div>
                        
                        <div class="col-md-6">
                            <span class="badge badge-primary">Followers: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>

            `;

            document.getElementById('repos').innerHTML = reposArrayElement;
        })

        
    }
}