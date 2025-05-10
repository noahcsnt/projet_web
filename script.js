// Sauvegarde signalement dans localStorage
document.getElementById("signalementForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const objet = document.getElementById("objet").value;
  const lieu = document.getElementById("lieu").value;
  const description = document.getElementById("description").value;
  const signalement = { objet, lieu, description, date: new Date().toLocaleString() };

  const signalements = JSON.parse(localStorage.getItem("signalements") || "[]");
  signalements.push(signalement);
  localStorage.setItem("signalements", JSON.stringify(signalements));
  alert("Signalement enregistré !");
  this.reset();
});

// Affichage des signalements
if (document.getElementById("signalementsList")) {
  const signalements = JSON.parse(localStorage.getItem("signalements") || "[]");
  const list = document.getElementById("signalementsList");
  signalements.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.objet} à ${s.lieu} – ${s.description} (${s.date})`;
    list.appendChild(li);
  });
}

// Forum local
document.getElementById("forumForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const pseudo = document.getElementById("pseudo").value;
  const message = document.getElementById("message").value;
  const post = { pseudo, message, date: new Date().toLocaleString() };

  const posts = JSON.parse(localStorage.getItem("forum") || "[]");
  posts.push(post);
  localStorage.setItem("forum", JSON.stringify(posts));
  displayForum();
  this.reset();
});

function displayForum() {
  const forum = document.getElementById("forumMessages");
  if (!forum) return;
  forum.innerHTML = "";
  const posts = JSON.parse(localStorage.getItem("forum") || "[]");
  posts.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.pseudo} : ${p.message} (${p.date})`;
    forum.appendChild(li);
  });
}

displayForum();

