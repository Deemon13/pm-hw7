import axios from "axios";

const BASE_URL = "https://api.github.com/";
const USERS_PER_PAGE = 20;
const REPOS_PER_PAGE = 12;
const FOLLOWERS_PER_PAGE = 12;
const FOLLOWING_PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;

export default class ApiGetUsers {
  constructor() {
    this.apiQuery = "";
    this.page = 1;
    this.pageRepos = 1;
    this.pageFollowers = 1;
    this.pageFollowing = 1;
    this.perPage = USERS_PER_PAGE;
    this.reposPerPage = REPOS_PER_PAGE;
    this.followersPerPage = FOLLOWERS_PER_PAGE;
    this.followingPerPage = FOLLOWING_PER_PAGE;
  }

  get query() {
    return this.apiQuery;
  }

  set query(searchQuery) {
    this.apiQuery = searchQuery;
  }

  getOptions() {
    const options = new URLSearchParams({
      q: `${this.apiQuery}`,
      page: `${this.page}`,
      per_page: `${this.perPage}`,
    });
    return options;
  }

  incrementPage() {
    this.page += 1;
  }
  incrementReposPage() {
    this.pageRepos += 1;
  }
  incrementFollowersPage() {
    this.pageFollowers += 1;
  }
  incrementFollowingPage() {
    this.pageFollowing += 1;
  }

  resetPage() {
    this.page = 1;
  }
  resetReposPage() {
    this.pageRepos = 1;
  }
  resetFollowersPage() {
    this.pageFollowers = 1;
  }
  resetFollowingPage() {
    this.pageFollowing = 1;
  }

  async getUsers() {
    const params = this.getOptions();

    const response = await axios.get(`search/users?${params}`);

    return response;
  }

  async getUserByName(nickname) {
    const response = await axios.get(`/users/${nickname}`);

    return response.data;
  }

  async getRepos(user) {
    const response = await axios.get(
      `users/${user}/repos?page=${this.pageRepos}&per_page=${this.reposPerPage}`
    );

    return response.data;
  }

  async getFollowers(user) {
    const response = await axios.get(
      `/users/${user}/followers?page=${this.pageFollowers}&per_page=${this.followersPerPage}`
    );

    return response.data;
  }

  async getFollowing(user) {
    const response = await axios.get(
      `/users/${user}/following?page=${this.pageFollowing}&per_page=${this.followingPerPage}`
    );

    return response.data;
  }
}
