const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");
const typecolor = {
    bug: "#26de81",
    dragon: "#ffeaa7"

}


let getPokeData = () => {
    // generate a random card for us
    let id = Math.floor(Math.random()*150) + 1;
    console.log(id);
    // combine the pokemon url with pokemon id
    const finalurl = url + id;
    // console.log(finalurl)
    //fetch generated poke
    fetch(finalurl)
    .then((response) => response.json())
    .then((data) => {
    //    console.log(data)
    generateCard(data);
    });

};
btn.addEventListener("click" , getPokeData);
window.addEventListener("load" , getPokeData)


let generateCard = (data) => {
    // get necessary data and assign them it to varibales
    console.log(data);
    const hp = data.stats[0].base_stat;
    console.log(hp);
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense =  data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    
// set theme color based on pokemon type
const themecolor = typecolor[data.types[0].type.name];
console.log(themecolor)
    card.innerHTML = `<div id="card">
          <p class="hp">
            <span>Hp</span>
            ${hp}
          </p>
          <img src="https://clipart-library.com/data_images/293851.png" alt="">
          <h2 class="poke-name">${pokeName}</h2>
          <div class="types">
            <span>type 1</span>
            <span>type 2</span>
          </div>
          <div class="stats">
            <div>
                <h3>${statAttack}</h3>
                <p>attack</p>
            </div>
            <div>
                <h3>${statDefense}</h3>
                <p>defense</p>
            </div>
            <div>
                <h3>${statSpeed}</h3>
                <p>speed</p>
            </div>
          </div>
        </div> `
        ;

        appendTypes(data.types)
        styleCard = (themecolor);
}
let appendTypes = (types) => {
    console.log(types);
    types.forEach(item => {
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);

    })
}
let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50%  0% , ${color} 36% , #ffffff 36%)`;
    card.querySelector(".types span").forEach(typecolor => {
        typecolor.style.backgroundcolor = color;
    })
}

