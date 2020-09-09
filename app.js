// const inputvalue = document.querySelector(".search-input").value;
const api = "https://images-api.nasa.gov/search?q=";
const btn = document.querySelector(".submit-btn");
const Card = document.querySelector(".Card");
let click = true;
console.log(Card);
btn.addEventListener("click", (e) => {
  Card.innerHTML = " ";
  e.preventDefault();
  const inputvalue = document.querySelector(".search-input");
  let url = api + inputvalue.value;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((Data) => getdata(Data));

  inputvalue.value = " ";
});

function getdata(data) {
  data.collection.items.forEach((newdata) => {
    let div = document.createElement("div");
    div.classList.add("card");
    //img
    let divimg = document.createElement("div");
    divimg.classList.add("img-txt");
    let img = document.createElement("img");
    img.src = newdata.links[0].href;
    divimg.appendChild(img);
    // console.log(img);

    //text
    let divtitle = document.createElement("div");
    divtitle.classList.add("text");
    let h3 = document.createElement("h3");
    h3.innerText = newdata.data[0].title;
    let ptage = document.createElement("p");
    ptage.innerText = newdata.data[0].description;
    let h4 = document.createElement("h4");
    if (newdata.data[0].photographer == null) {
      h4.innerText = `Photographer: Unknows`;
    } else {
      h4.innerText = `Photographer:${newdata.data[0].photographer}`;
    }
    divtitle.appendChild(h3);
    divtitle.appendChild(ptage);
    divtitle.appendChild(h4);

    div.appendChild(divimg);
    div.appendChild(divtitle);

    Card.appendChild(div);

    console.log("works");
  });
}
