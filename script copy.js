//Fetch genres list from the API
async function genRes() {
    try {
        const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/genres`;
        const res = await fetch(url);
        const data = await res.json();
        return data.data;

    } catch (err) {
        console.log("err", err);
    }
};


genRes()
    .then(respon => {
        console.log(respon);
        const category$ = document.getElementById("category");
        const content = respon.map(item => {
            if (item.name === "action") {
                return `<li class="list active" data-filter="${item._id}" value = ${item.name}>${item.name}</li>`
            }
            return `<li class="list" data-filter="${item._id} value = ${item.name}">${item.name}</li>`

        })
            .join('');
        category$.innerHTML = content;
        
    });


//---------- Get API all games -------------//
// let games = [];

const getAllgames = async () => {
    try {
        const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games`;
        const res = await fetch(url);
        const data = await res.json();
        games = data.data;
        return games;
    } catch (err) {
        console.log("err", err);
    }
};

getAllgames()
    .then(games => {
        console.log(games);


        if (games.length>0) {
            const content = games.map(item => {
                return `<div class="categorys" data-item="action">
                            <img src="${item.header_image}">
                               <div class="content">
                                    <h4>${item.name}</h4>
                                    <div class="progress-line"><span></span> </div>
                                    <div class="info">
                                        <p>Pricing <br><span>${item.price}</span></p>
                                        <button onclick="showDetail(${item.appid})" class="playnow-btn">Detail</button>
                                    </div>
                               </div>
                        </div>`
            })


            const divGame$ = document.getElementById("game-category");
            divGame$.innerHTML = content;
        }
    });
// //---------- Search Games -------------//
let input = document.getElementById("search-input");
input.addEventListener("input", input =>{
    
    async function updateValue(){
        try{
        const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games?q=${input.data}`;
        const res = await fetch(url);
        const data = await res.json();
        const gameSearchApi = data.data;
        return gameSearchApi;
    
    
    } catch (err) {
                console.log("err", err);
            }
        };
    
    updateValue()
    .then(gameSearchApi => {

        if (gameSearchApi.length>0) {
            const content = gameSearchApi.map(item => {
                return `<div class="categorys" data-item="action">
                            <img src="${item.header_image}">
                               <div class="content">
                                    <h4>${item.name}</h4>
                                    <div class="progress-line"><span></span> </div>
                                    <div class="info">
                                        <p>Pricing <br><span>${item.price}</span></p>
                                        <button onclick="showDetail(${item.appid})" class="playnow-btn">Detail</button>
                                    </div>
                               </div>
                        </div>`
            })


            const divGame$ = document.getElementById("game-category");
            divGame$.innerHTML = content;
        }

        console.log(gameSearchApi);
    });
    console.log(input.data);
});

// ------ Filter Genres-----
const listgenres = document.querySelectorAll('.list');
console.log(listgenres);
// listgenres.forEach((tab)=>{
//     tab.onclick = function (){
//         // document.querySelector('.list.active').classList.remove('active');
//         // this.classList.add('active');
//         console.log(this);
//     }
// });
        // async function updateValue(){
        //     try{
        //     const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games?genres=${tab.innerText}`;
        //     const res = await fetch(url);
        //     const data = await res.json();
        //     const gameSearchApi = data.data;
        //     return gameSearchApi;
        
        
        // } catch (err) {
        //             console.log("err", err);
        //         }
        //     };
        
        // updateValue()
        // .then(gameSearchApi => {
    
        //     if (gameSearchApi.length>0) {
        //         const content = gameSearchApi.map(item => {
        //             return `<div class="categorys" data-item="action">
        //                         <img src="${item.header_image}">
        //                            <div class="content">
        //                                 <h4>${item.name}</h4>
        //                                 <div class="progress-line"><span></span> </div>
        //                                 <div class="info">
        //                                     <p>Pricing <br><span>${item.price}</span></p>
        //                                     <button onclick="showDetail(${item.appid})" class="playnow-btn">Detail</button>
        //                                 </div>
        //                            </div>
        //                     </div>`
        //         })
    
    
        //         const divGame$ = document.getElementById("game-category");
        //         divGame$.innerHTML = content;
        //     }
    
        //     console.log(gameSearchApi);
        // });
    



        

// ------ New Page-----
function showDetail(idDetailGame){
    window.location.href = `/detail.html?id=${idDetailGame}`;
}


