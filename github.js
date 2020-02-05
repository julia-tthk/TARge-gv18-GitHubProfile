class GitHub {
    constructor(){
        this.client_ID = "c28b611029b2e8280916";
        this.client_secret = "4faf218ea16fb4df1987f88683c0197eddd08c78";
        this.user = "julia-tthk";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
        this.apiUrl = "https://api.github.com/users/";
    }

    //method to get data from github API
    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }

    }


}