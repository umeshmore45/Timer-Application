const watchContainer = () => {
  const divroot = document.getElementById("root");
  divroot.classList.add("watch-container");

  //---------------------------------
  const divdis = document.createElement("div");
  divdis.id = "watch-display";
  divdis.innerHTML = "00:00:00";
  divroot.appendChild(divdis);
  //-------------------------------------
  const divbut = document.createElement("div");
  divbut.classList.add("buttons");
  divroot.appendChild(divbut);
  //------------------------------
  const start = document.createElement("BUTTON");
  start.id = "startstop";
  start.innerHTML = "Start";
  divbut.appendChild(start);
  //------------------------------------------
  const rest = document.createElement("BUTTON");

  rest.id = "rest";
  rest.innerHTML = "Rest";

  divbut.appendChild(rest);
};

watchContainer();
