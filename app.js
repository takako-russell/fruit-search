let matchingList = [];
// event listener
const inputBox = document.getElementById("search-input");
const matches = document.getElementById("autofillers");

const showMatches = () => {
  matches.style.display = matchingList.length === 0 ? "none" : "";
};

showMatches();

inputBox.onkeyup = function () {
  const search = inputBox.value;
  if (inputBox.value) {
    matchingList = fruits.filter((fruit) => {
      return fruit.startsWith(search);
    });
  } else {
    matchingList = [];
    matches.innerHTML = "";
  }

  console.log(matchingList);
  buildSearch();
  showMatches();

  //   document.getElementById("printchatbox").innerHTML = inputBox.value;
};

const buildSearch = () => {
  matches.innerHTML = "";
  matchingList.forEach((item) => {
    let newLi = document.createElement("li");
    newLi.innerText = item;
    matches.appendChild(newLi);

    newLi.addEventListener("click", (e) => {
      inputBox.value = e.target.innerHTML;
      matches.innerHTML = "";
      matchingList = [];
      showMatches();
    });
  });
};

// on key up (?)
// get input value
// loop list.js list for a string that contains input value
// any matches, push to matchingList
// dropdown should only contain values from matchingList
