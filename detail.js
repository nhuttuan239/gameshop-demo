
const url = new URLSearchParams(window.location.search);
console.log(url);
const id = url.get("id");
if(id){
    getDetailGame(id)
        .then(respon => {
            console.log(respon);
            const detail$ = document.getElementById("detailgame");
            const content = `<div class="showdetailgame" id="detailgame" >
                            <h2>Detail Game</h2>
                            <img src="${respon.header_image}">
                               <div class="content">
                                    <h4>${respon.name}</h4>

                                    <p>${respon.description}</p>
                                    <h6> Required_age: ${respon.required_age}</h6>
                                    <h6> Average_playtime: ${respon.average_playtime}</h6>
                                    <h6> Genres: ${respon.genres[0]}, ${respon.genres[1]}</h6>

                                    <div class="info">
                                        <p>Pricing <br><span>${respon.price}</span></p>
                                        <button onclick="reload()" class="playnow-btn">Back</button>
                                    </div>
                               </div>
                        </div>`

            detail$.innerHTML = content;
        });

} else {
    window.location.href = `/index.html`;
}

//get detailGame
async function getDetailGame() {

    try {
        const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/single-game/${id}`;

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        detail = data.data;
        return detail;

    } catch (err) {
        console.log("err", err);
    }

}

function reload(){
    window.location.href = `/index.html`;
}



