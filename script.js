const url = "https://api.github.com/users/";
const Searchinput = document.getElementById("searchInput");
const SearchinputBtn = document.getElementById("search-btn");
const profile = document.getElementById("profileContainer");
const loading = document.getElementById("loading");
const fetchProfile = async () => {
  loading.innerHTML = "Loading....";
  loading.style.color = "black";
  try {
    const user = Searchinput.value;
    const res = await fetch(`${url}${user}`);
    const data = await res.json();
    if (data.name) {
      loading.innerText = " ";
      profile.innerHTML = showProfile(data);
    } else {
      loading.innerHTML = data.message;
      loading.style.color = "red";
    }
  } catch (error) {
    console.log({ error });
    loading.innerText = " ";
  }
  return data;
};

const showProfile = (data) => {
  return ` <div class="profile-box">
      <div class="top-section">
        <div class="left">
          <div class="avatar">
            <img src= "${data.avatar_url}" />
          </div>
          <div class="self">
            <h1 id="name">${data.name}</h1>
            <h3 id="userName">${data.login}</h3>
          </div>
        </div>
      <a>
      <a href = "${data.html_url}"
      <button class="Check-btn">Check Profile</button>
      </a>
      </div>
      <div class="about">
        <h2>About</h2>
        <p id="About">${data.bio}</p>
      </div>
      <div class="status">
        <div class="status-item">
          <h3>Followers</h3>
          <p id="followers">${data.followers}</p>
        </div>
        <div class="status-item">
          <h3>Following</h3>
          <p id="following">${data.following}</p>
        </div>
        <div class="status-item">
          <h3>Repos</h3>
          <p id="respos">${data.public_repos}</p>
        </div>
      </div>
    </div>`;
};
SearchinputBtn.addEventListener("click", fetchProfile);
