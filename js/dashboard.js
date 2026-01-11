if (!localStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

function saveWorkout() {
  const workout = document.getElementById("workout").value;
  if (!workout) return;

  let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
  workouts.push(workout);
  localStorage.setItem("workouts", JSON.stringify(workouts));
  displayWorkouts();
}

function saveDiet() {
  const diet = document.getElementById("diet").value;
  if (!diet) return;

  let diets = JSON.parse(localStorage.getItem("diets")) || [];
  diets.push(diet);
  localStorage.setItem("diets", JSON.stringify(diets));
  displayDiets();
}

function displayWorkouts() {
  const list = document.getElementById("workoutList");
  list.innerHTML = "";
  (JSON.parse(localStorage.getItem("workouts")) || []).forEach(w =>
    list.innerHTML += `<li>${w}</li>`
  );
}

function displayDiets() {
  const list = document.getElementById("dietList");
  list.innerHTML = "";
  (JSON.parse(localStorage.getItem("diets")) || []).forEach(d =>
    list.innerHTML += `<li>${d}</li>`
  );
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

displayWorkouts();
displayDiets();
