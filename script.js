var audio;

finction my_Audio(element)
{
	var song= element.attr('song');
	var title = element.text();
	var artist = element.attr('artist');

	audio=new Audio('Media/' + song);

}

function SimpleTrack() {

    $.ajax({
        type: "GET",
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: document.getElementById("SongName").value,
            type: 'track'
        },
        success: function (response) {
            console.log(response);
            var id = response.tracks.items[0].id;
            fullTrack(id);

        },
    });
}



$('#play').click(function())
{
	audio.play();
});

$('#pause').click(function())
{
	audio.pause();
});

$('#stop').click(function())
{
	audio.pause();
});

$('#next').click(function()){
	audio.pause();
	var next=$('#playlist li.active').next();
}

  my_Audio(next);
  audio.play();
});


$('#previous').click(function()){
	audio.pause();
	var previous=$('#playlist li.active').previous();
}

  my_Audio(previous);
  audio.play();
});

