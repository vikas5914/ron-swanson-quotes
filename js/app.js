function shuffle(array) {
		    for (var i = array.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = array[i];
		        array[i] = array[j];
		        array[j] = temp;
		    }
		    return array;
		}

		var list;
		var newlist=[];

		$.getJSON('quotes.json', function(data) {
		          list = data.list;
		 }).done(function(){

		 	newlist = shuffle(list);

		 	$.each(newlist,function(key){
		      $('#cbp-qtrotator').append('<div class="cbp-qtcontent"><blockquote><p>'+ newlist[key] +'</p><footer>Ron Swanson</footer></blockquote></div>')
		    });
		 	$( '#cbp-qtrotator' ).cbpQTRotator();
		});

		$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
		});