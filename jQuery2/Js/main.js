const songsNames = [
    {
        name:"Los chicos no lloran",
        author:"Miguel Bosé",
        gender:"Pop",
        country:"España"
    },
    {
        name:"Morena mía",
        author:"Miguel Bosé",
        gender:"Pop",
        country:"España"
    },
    {
        name:"Manos Vacías",
        author:"Miguel Bosé",
        gender:"Pop",
        country:"España"
    },
    {
        name:"Aire soy",
        author:"Miguel Bosé",
        gender:"Pop",
        country:"España"
    },
    {
        name:"Te amare",
        author:"Miguel Bosé",
        gender:"Pop",
        country:"España"
    }
]

const fillSongsList = () => {
    songsNames.forEach((value,index)=>{
        console.log(`value ${value}, index ${index}`)
        $(".songs-list").append(`
            <div class="song-card" data-song-name="${value.name}">
                <p class="song-name">${value.name}</p>
                <p><b>${value.author}</b></p>
                <p><b>${value.gender}</b></p>
                <p><b>${value.country}</b></p>
                <div class="button-wrapper">
                    <button class="btn-danger">Eliminar</button>
                    <button class="btn-success">Agregar a favoritos</button>
                </div>
            </div>
        `)
    })
    $(".btn-danger").on("click",(event)=>{
        $(event.target).parent().remove();
    })
    $(".btn-success").on("click",(event) => {
        $(event.target).closest(".song-card").appendTo(".favourite-songs")
    })
}

fillSongsList();



$("input").val() /*getter*/
$("input").val("some value") /*setter*/
