$('.btn-primary').click(function (){
        $('#giphyResults').empty();
        getData();
    })

$('#inputForm').keypress(function(event){

        let keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $('#giphyResults').empty();
            getData();
        }
    
    });

function getData() {
    let input = $('#inputForm').val();
    let giphyData = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=zeRT27Agp97SJNlbCo7MXVPEHOahLxM5&limit=25");
    giphyData.done(function (response) {
        console.log("your Giphy data is here", response);
        let giphyGifs = response.data;
        for (x in giphyGifs) {
            $('#giphyResults').append("<img src='" + giphyGifs[x].images.original.url + "' style='width:20%;'/>")
        }
    })
}

$( document ).ready(function() {
    console.log( "ready!" )
});