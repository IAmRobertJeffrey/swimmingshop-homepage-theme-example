    $(".nav").hover(function(){
        $(this).css("background-color", "rgba(245, 245, 245, 0.6)");
        $(".checked").css("border-bottom", "5px none #0587CA");
        $(this).css("border-bottom", "5px solid #0587CA");
        $(this).css("border-radius", "-25px");
        $(this).css("border-radius", "-25px");


    }, function(){
        $(this).css("background-color", "rgba(245, 245, 245, 0.35)");
        $(this).css("border-bottom", "3px none red");

        $(".checked").css("border-bottom", "5px solid #0587CA");
    });



    let images= ["img/mainpoolphoto.jpg","img/raphael-biscaldi-7RQf2X6aXXI-unsplash.jpg","img/pool3.jpg"], i = 0;

    function volgendefoto() {
        i<images.length - 1?i+=1:i=0;
        document.getElementById('parallax').style.backgroundImage = "url(" + images[i] + ")";


    }
    setInterval(volgendefoto, 5000);


    initMap();

    function initMap() {

        const amsterdam = { lat: 51.380462790807826, lng: -1.1008104059123314 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: amsterdam,
        });

        const marker = new google.maps.Marker({
            position: amsterdam,
            map: map,
        });


    }

    document.getElementById("scrollMission").addEventListener("click", scrollDown);



    function scrollDown()
    {
        $('html, body').animate({
            scrollTop: 700,
        }, 1000);

    }



    function revealLoginScreen()
    {
        document.getElementById('fadeScreen').style.visibility = "visible";
        document.getElementById('loginScreenContainer').style.visibility = "visible";
        document.getElementById('fadeScreen').style.opacity = "1";
        document.getElementById('loginScreenContainer').style.opacity = "1";


    }


    function insideOrOutside(){
        document.addEventListener('click', function(e)
        {

            if(document.getElementById('loginScreenContainer').style.visibility === "visible")
            {
                if (!document.getElementById('loginButton').contains(e.target)) {


                    if (document.getElementById('loginScreenContainer').contains(e.target)) {

                    } else {

                        document.getElementById('fadeScreen').style.opacity = "0";
                        document.getElementById('loginScreenContainer').style.opacity = "0";
                        document.getElementById('fadeScreen').style.visibility = "hidden";
                        document.getElementById('loginScreenContainer').style.visibility = "hidden";


                    }
                }
            }

        });

    }
