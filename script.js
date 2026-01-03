// 🔒 FORCE HOME MODE (LIVE SAFE)
// 🔒 ABSOLUTE HOME MODE – LIVE SAFE
document.documentElement.style.scrollBehavior = "auto";

window.addEventListener("pageshow", () => {
  const player = document.getElementById("playerScreen");
  const mini = document.getElementById("miniPlayer");

  player.classList.add("hidden");
  player.style.display = "none";

  mini.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("songListScreen")?.classList.remove("hidden");
  document.getElementById("playerScreen")?.classList.add("hidden");
  document.getElementById("profileScreen")?.classList.add("hidden");
  document.getElementById("miniPlayer")?.classList.add("hidden");
});

const songs = [
  { name: "Batein Ye Kabhi Na", file: "music/song1.mp3",type: "sad" },
  { name: "Baton Ko Teri", file: "music/song2.mp3",type: "sad" },
  { name: "Bedardi Se Pyaar Ka", file: "music/song3.mp3",type: "sad" },
  { name: "Chashni", file: "music/song4.mp3" ,type: "romantic"},
  { name: "Lutt Putt Gaya", file: "music/song5.mp3", type: "fun" },
  { name: "Main Koi Aisa Geet", file: "music/song6.mp3",type: "romantic" },
  { name: "Bol Do Na Zara", file: "music/song8.mp3",type: "sad" },
  { name: "Dekhte Dekhte", file: "music/song9.mp3" ,type: "sad"},
  { name: "Dil Sambhal Ja Zara", file: "music/song10.mp3",type: "sad" },
  { name: "Haule Haule", file: "music/song11.mp3",type: "romantic" },
  { name: "Gold Tamba", file: "music/song12.mp3", type: "fun" },
  { name: "Dil Kya Kare", file: "music/song13.mp3",type: "romantic" },
  { name: "Galavar Khali", file: "music/song14.mp3",type: "fun" },
  { name: "Dil Meri Na Sune", file: "music/song15.mp3",type: "romantic" },
  { name: "Dil Cheez Tujhe Dedi", file: "music/song16.mp3",type: "fun" },
  { name: "Khel Mandla", file: "music/song17.mp3",type: "sad" },
  { name: "Phie Aur Kya Chahiye", file: "music/song18.mp3",type: "romantic" },
  { name: "Sawan Aaya Hai", file: "music/song19.mp3",type: "romantic" },
  { name: "Phoolon Sa Chehra", file: "music/song20.mp3",type: "romantic" },
  { name: "Radha Hi Bawri", file: "music/song21.mp3",type: "fun" },
  { name: "Suniye To", file: "music/song22.mp3", type: "fun" },
  { name: "Jeeta Tha Jiske Liye", file: "music/song23.mp3",type: "sad" },
  { name: "Sweetheart", file: "music/song24.mp3",type: "romantic" },
  { name: "Tauba Tumhare Yeh Ishare", file: "music/song25.mp3",type: "romantic" },
  { name: "Tera Chehra", file: "music/song26.mp3",type: "romantic" },
  { name: "Ghungtein Mein Chanda Hai", file: "music/song27.mp3", type: "fun" },
  { name: "Lo Maan Liya", file: "music/song28.mp3",type: "sad" },
  { name: "My Name Is Ranveer Chaing", file: "music/song29.mp3" , type: "fun"},
  { name: "Pachtaoge - Vocals Only", file: "music/song30.mp3",type: "sad" },
  { name: "Khushi Jab Bhi Teri", file: "music/song31.mp3",type: "romantic" },
  { name: "Parikatha", file: "music/song32.mp3",type: "fun" },
  { name: "O Maahi", file: "music/song33.mp3",type: "romantic" },
  { name: "Kaun Tujhe", file: "music/song34.mp3",type: "romantic" },
  { name: "Hua Hai aaj Pehli Bar", file: "music/song35.mp3" ,type: "romantic"},
  { name: "Hamari Adhri kahani", file: "music/song36.mp3",type: "sad" },
  { name: "Dil Jhoom Jhoom", file: "music/song37.mp3",type: "romantic" },
  { name: "Tera Naam Dhoka", file: "music/song38.mp3",type: "sad" },
  { name: "Chale Aana", file: "music/song39.mp3",type: "sad" },
  { name: "Choti Si Pyari", file: "music/song40.mp3",type: "fun" },
  { name: "Haan Tu Hai", file: "music/song41.mp3" ,type: "romantic"},
  { name: "Humnava Mere", file: "music/song42.mp3",type: "sad" },
  { name: "Nashe Si Chadh Gayi", file: "music/song43.mp3",type: "romantic" },
  { name: "Pehi Baar", file: "music/song44.mp3" ,type: "romantic"},
  { name: "Dhaga Dhaga - Vocal Only", file: "music/song45.mp3",type: "romantic" },
  { name: "Kajwa-Vocal Only", file: "music/song46.mp3",type: "romantic" },
  { name: "Tera Dhyaan Kidhar Hai", file: "music/song50.mp3", type: "fun" },
  { name: "Thodi Jagah", file: "music/song51.mp3",type: "sad" },
  { name: "Tujhe Bhoolna To Chaha", file: "music/song52.mp3",type: "sad" },
  { name: "Tum Hi Ho", file: "music/song53.mp3",type: "romantic" },
  { name: "Tumhe Kitna Pyaar Karte", file: "music/song54.mp3" ,type: "sad"},
  { name: "Tumse Bhi Jyada", file: "music/song55.mp3",type: "sad" },
  { name: "Tumse Milne Ki Tammana Hai", file: "music/song56.mp3",type: "fun" },
  { name: "Ve Mahi", file: "music/song57.mp3" ,type: "romantic"},
  { name: "Wafa Na Ras Aayi", file: "music/song58.mp3",type: "sad" },
  { name: "Wajah Tum Ho", file: "music/song59.mp3",type: "romantic" },
  { name: "Woh Ladki Jo", file: "music/song60.mp3", type: "fun" },
  { name: "Soch Na Sake", file: "music/song61.mp3",type: "romantic" },
  { name: "Ruk Ja ... Oo dil Deewane", file: "music/song62.mp3", type: "fun" },
  { name: "Pyaar Hota Kayi Baar Hai", file: "music/song63.mp3" , type: "fun"},
  { name: "Roke Na Ruke Naina", file: "music/song64.mp3" ,type: "sad"},
  { name: "Yeh Teri Aakhein Jhuki Jhuki", file: "music/song65.mp3",type: "romantic" },
  { name: "Tere Vaste", file: "music/song66.mp3",type: "romantic" },
  { name: "Tera Fitoor", file: "music/song67.mp3",type: "romantic" },

];
let autoPlayEnabled = true; // default ON
let loopEnabled = false;
let currentCategory = "all";
let searchQuery = "";
let userClickedSong = false;



let index = 0;
let currentPlayingIndex = null;
const audio = new Audio();

const songListScreen = document.getElementById("songListScreen");
const playerScreen = document.getElementById("playerScreen");
const songListEl = document.getElementById("songList");
const miniPlayer = document.getElementById("miniPlayer");
const miniTrack = document.getElementById("miniTrack");
const miniProgress = document.getElementById("miniProgress");
const miniPlayBtn = document.getElementById("miniPlayBtn");
const profileScreen = document.getElementById("profileScreen");

const miniCurrentTimeEl = document.getElementById("miniCurrentTime");
const miniDurationEl = document.getElementById("miniDuration");

const trackName = document.getElementById("trackName");
const progress = document.getElementById("progress");
const playBtn = document.getElementById("playBtn");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const playlistEl = document.getElementById("songList");
document.getElementById("autoBtn").classList.add("active");

const funnyMessages = [
  "Ye gaana bhi tumhe chhod ke chala gaya 🥲",
  "Itna bhi alag naam mat likho yaar 😅",
  "404: Gaana nahi mila, feelings mil gayi",
  "Lagta hai ye gaana sirf tumhare dil me hai ❤️",
  "Gaana chai peene gaya ☕ thodi der baad try karo",
  "Spotify pe hoga shayad 😜",
  "System bol raha hai: rehne de bhai"
];


/* BUILD SONG LIST */
songs.forEach((song, i) => {
  const li = document.createElement("li");
  li.textContent = song.name;
  li.onclick = () => openPlayer(i);
  songListEl.appendChild(li);
});

// function openPlayer(i) {
//   userClickedSong = true;

//   index = i;
//   loadSong();

//   songListScreen.classList.add("hidden");
//   playerScreen.style.display = "flex";
// playerScreen.classList.remove("hidden");


//   enforceMiniBarRule();

//   audio.play();
//   playBtn.textContent = "⏸";
//   miniPlayBtn.textContent = "⏸";
// }
function openPlayer(i) {
  // SAME SONG already playing → just open full player
  if (currentPlayingIndex === i && !audio.paused) {
    songListScreen.classList.add("hidden");
    playerScreen.style.display = "flex";
    playerScreen.classList.remove("hidden");

    miniPlayer.classList.add("hidden");
    return;
  }

  // NEW song clicked
  currentPlayingIndex = i;
  index = i;

  loadSong();

  songListScreen.classList.add("hidden");
  playerScreen.style.display = "flex";
  playerScreen.classList.remove("hidden");

  miniPlayer.classList.add("hidden");

  audio.play();
  playBtn.textContent = "⏸";
  miniPlayBtn.textContent = "⏸";
}



function closePlayer() {
  playerScreen.classList.add("hidden");
  playerScreen.style.display = "none";

  songListScreen.classList.remove("hidden");

  if (audio.src) {
    miniPlayer.classList.remove("hidden");
  }
}

window.addEventListener("load", () => {
  // 🔥 Always start on HOME
  hideAllScreens();
  songListScreen.classList.remove("hidden");

  // 🔒 Mini player hidden on first load
  miniPlayer.classList.add("hidden");

  // Reset play buttons
  playBtn.textContent = "▶";
  miniPlayBtn.textContent = "▶";
});








function loadSong() {
  audio.src = songs[index].file;
  trackName.textContent = songs[index].name;
  miniTrack.textContent = songs[index].name;
}


function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
    miniPlayBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
    miniPlayBtn.textContent = "▶";
  }
}



function nextSong() {
  index = (index + 1) % songs.length;
  loadSong();
  audio.play();

  // ✅ SYNC BUTTON STATE
  playBtn.textContent = "⏸";
  miniPlayBtn.textContent = "⏸";

  // keep mini bar hidden if full player is open
  if (!playerScreen.classList.contains("hidden")) {
    miniPlayer.classList.add("hidden");
  }
}



function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();

  // ✅ SYNC BUTTON STATE
  playBtn.textContent = "⏸";
  miniPlayBtn.textContent = "⏸";

  if (!playerScreen.classList.contains("hidden")) {
    miniPlayer.classList.add("hidden");
  }
}



// audio.addEventListener("timeupdate", () => {
//   const percent = (audio.currentTime / audio.duration) * 100;
//   progress.style.width = percent + "%";
//   miniProgress.style.width = percent + "%";

//   currentTimeEl.textContent = formatTime(audio.currentTime);
//   durationEl.textContent = formatTime(audio.duration);
// });
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const percent = (audio.currentTime / audio.duration) * 100;

  progress.style.width = percent + "%";
  miniProgress.style.width = percent + "%";

  const current = formatTime(audio.currentTime);
  const duration = formatTime(audio.duration);

  currentTimeEl.textContent = current;
  durationEl.textContent = duration;

  miniCurrentTimeEl.textContent = current;
  miniDurationEl.textContent = duration;
});



function seek(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  audio.currentTime = (offsetX / rect.width) * audio.duration;
}


function setVolume(v) {
  audio.volume = v;
}

function formatTime(t) {
  if (isNaN(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// function openFromMini() {
//   if (!userClickedSong) return;

//   songListScreen.classList.add("hidden");
//   playerScreen.classList.remove("hidden");

//   enforceMiniBarRule();
// }
// function openFromMini() {
//   // ❌ Do nothing if full player already hidden AND user just seeking
//   if (playerScreen.classList.contains("hidden")) return;

//   songListScreen.classList.add("hidden");
//   playerScreen.classList.remove("hidden");

//   enforceMiniBarRule();
// }
function openFromMini() {
  if (!audio.src) return;

  songListScreen.classList.add("hidden");
  playerScreen.style.display = "flex";
  playerScreen.classList.remove("hidden");

  miniPlayer.classList.add("hidden");
}









function toggleAuto() {
  autoPlayEnabled = !autoPlayEnabled;
  const btn = document.getElementById("autoBtn");

  if (autoPlayEnabled) {
    btn.classList.add("active");
    btn.textContent = "AUTO";
  } else {
    btn.classList.remove("active");
    btn.textContent = "AUTO";
  }
}

function toggleLoop() {
  loopEnabled = !loopEnabled;
  const btn = document.getElementById("loopBtn");

  if (loopEnabled) {
    btn.classList.add("active");
    btn.textContent = "LOOP";
  } else {
    btn.classList.remove("active");
    btn.textContent = "LOOP";
  }
}



audio.addEventListener("ended", () => {

  // 🔁 LOOP CURRENT SONG
  if (loopEnabled) {
    audio.currentTime = 0;
    audio.play();
    return;
  }

  // ▶ AUTO NEXT SONG
  if (autoPlayEnabled) {
    nextSong();
  } else {
    playBtn.textContent = "▶";
    miniPlayBtn.textContent = "▶";
  }
});

// 🚫 hide mini bar on initial load
miniPlayer.classList.add("hidden");
// function renderPlaylist(list) {
//   playlistEl.innerHTML = "";
//   list.forEach((song, i) => {
//     const li = document.createElement("li");
//     li.textContent = song.name;
//     li.onclick = () => openPlayer(i);
//     playlistEl.appendChild(li);
//   });
// }
function renderPlaylist(list) {
  playlistEl.innerHTML = "";

  list.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.name;

    // 🔥 find REAL index from original songs array
    const realIndex = songs.findIndex(s => s.file === song.file);

    li.onclick = () => openPlayer(realIndex);
    playlistEl.appendChild(li);
  });
}



function filterSongs(type) {
  currentCategory = type;
  applyFilters();
}
function searchSongs(query) {
  searchQuery = query.toLowerCase();
  applyFilters();
}

function applyFilters() {
  let filtered = songs;

  if (currentCategory !== "all") {
    filtered = filtered.filter(song => song.type === currentCategory);
  }

  if (searchQuery) {
    filtered = filtered.filter(song =>
      song.name.toLowerCase().includes(searchQuery)
    );
  }

  // 🎭 NO RESULTS
  if (filtered.length === 0) {
    showNoResults();
  } else {
    hideNoResults();
    renderPlaylist(filtered);
  }
}


function showNoResults() {
  songListEl.innerHTML = "";

  const msg = funnyMessages[
    Math.floor(Math.random() * funnyMessages.length)
  ];

  const div = document.createElement("div");
  div.className = "no-results";
  div.textContent = msg;

  songListEl.appendChild(div);
}

function hideNoResults() {
  const existing = document.querySelector(".no-results");
  if (existing) existing.remove();
}
// document.querySelectorAll("#songList li").forEach(li =>
//   li.classList.remove("active-song")
// );
// document.querySelectorAll("#songList li")[i]?.classList.add("active-song");

window.addEventListener("load", () => {
  const overlay = document.getElementById("headphoneOverlay");

  // show popup
  overlay.classList.add("show");

  // auto close after 3 seconds
  setTimeout(() => {
    overlay.classList.remove("show");
  }, 3000);
});
/* ☰ MENU */
function toggleMenu() {
  document.getElementById("menuDropdown").classList.toggle("hidden");
}

/* NAVIGATION */
function goHome() {
  hideAllScreens();
  songListScreen.classList.remove("hidden");

  // Show mini player ONLY if music is playing
  if (audio.src) {
    miniPlayer.classList.remove("hidden");
  } else {
    miniPlayer.classList.add("hidden");
  }

  document.getElementById("menuDropdown").classList.add("hidden");
}



function openProfile() {
  hideAllScreens();
  profileScreen.classList.remove("hidden");
  miniPlayer.classList.add("hidden");
  document.getElementById("menuDropdown").classList.add("hidden");
}

function openSecret() {
  const overlay = document.getElementById("secretOverlay");
  overlay.classList.remove("hidden");
  overlay.classList.add("show");
  document.getElementById("menuDropdown").classList.add("hidden");
}




function checkSecret() {
  const input = document.getElementById("secretInput").value;
  const error = document.getElementById("secretError");

  const authBox = document.getElementById("secretAuth");
  const messageBox = document.getElementById("secretMessage");

  if (input === "Nilkanth@2002") {
    authBox.classList.add("hidden");     // ❌ hide password UI
    messageBox.classList.remove("hidden"); // ✅ show message
  } else {
    error.innerText = "Sorry ! No Entry zone For You 😅";
  }
}

document.addEventListener("click", () => {
  document.getElementById("menuDropdown").classList.add("hidden");
});
function hideAllScreens() {
  document.getElementById("songListScreen").classList.add("hidden");
  document.getElementById("profileScreen").classList.add("hidden");
  document.getElementById("playerScreen").classList.add("hidden");
}


function closeSecret() {
  const overlay = document.getElementById("secretOverlay");
  const authBox = document.getElementById("secretAuth");
  const messageBox = document.getElementById("secretMessage");

  // Hide overlay
  overlay.classList.remove("show");
  overlay.classList.add("hidden");

  // Reset state (important if reopened)
  authBox.classList.remove("hidden");
  messageBox.classList.add("hidden");

  document.getElementById("secretInput").value = "";
  document.getElementById("secretError").innerText = "";
}
// function enforceMiniBarRule() {
//   if (!playerScreen.classList.contains("hidden")) {
//     miniPlayer.classList.add("hidden");
//   }
// }
function enforceMiniBarRule() {
  if (!playerScreen.classList.contains("hidden")) {
    // Full player open → mini player MUST be hidden
    miniPlayer.classList.add("hidden");
  }
}



// audio.addEventListener("loadedmetadata", () => {
//   durationEl.textContent = formatTime(audio.duration);
// });
// window.scrollTo({ top: 0, behavior: "smooth" });
// window.onload = () => {
//   hideAllScreens();
//   songListScreen.classList.remove("hidden");
//   miniPlayer.classList.add("hidden");
// };
audio.addEventListener("loadedmetadata", () => {
  const d = formatTime(audio.duration);
  durationEl.textContent = d;
  miniDurationEl.textContent = d;
});



/* ================= KEYBOARD CONTROLS (FIXED) ================= */

document.addEventListener("keydown", function (e) {
  // ❌ Ignore typing inside inputs
  if (
    e.target.tagName === "INPUT" ||
    e.target.tagName === "TEXTAREA"
  ) {
    return;
  }

  // Prevent scroll
  if (
    e.key === " " ||
    e.key === "ArrowUp" ||
    e.key === "ArrowDown"
  ) {
    e.preventDefault();
  }

  // 🔍 DEBUG (optional – remove later)
  console.log("Key pressed:", e.key);

  switch (e.key) {
    case " ":
      togglePlay();
      break;

    case "ArrowRight":
      nextSong();
      break;

    case "ArrowLeft":
      prevSong();
      break;

    case "ArrowUp":
      audio.volume = Math.min(1, audio.volume + 0.05);
      break;

    case "ArrowDown":
      audio.volume = Math.max(0, audio.volume - 0.05);
      break;

    case "Escape":
      if (!playerScreen.classList.contains("hidden")) {
        closePlayer();
      }

      const secret = document.getElementById("secretOverlay");
      if (secret && secret.classList.contains("show")) {
        closeSecret();
      }
      break;
  }
});


