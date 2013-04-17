$(document).ready(function() {

// USER PROFILE DYNAMIC DATA--------------------//

// CAROUSEL FUNCTIONALITY----------------------//

        //move he last list item before the first item. The purpose of this is if the user clicks to slide left he will be able to see the last item.
        $('#carousel_ul li:first').before($('#carousel_ul li:last')); 
             
        //when user clicks the image for sliding right        
        $('#right_scroll img').click(function(){
        
            //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
            var item_width = $('#carousel_ul li').outerWidth() + 10;
            
            //calculae the new left indent of the unordered list
            var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;
            
            //make the sliding effect using jquery's anumate function '
            $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){    
                
                //get the first list item and put it after the last list item (that's how the infinite effects is made) '
                $('#carousel_ul li:last').after($('#carousel_ul li:first')); 
                
                //and get the left indent to the default -210px
                $('#carousel_ul').css({'left' : '-160px'});
            }); 
        });
        
        //when user clicks the image for sliding left
        $('#left_scroll img').click(function(){
            
            var item_width = $('#carousel_ul li').outerWidth() + 10;
            
            /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */
            var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
            
            $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){    
            
            /* when sliding to left we are moving the last item before the first list item */            
            $('#carousel_ul li:first').before($('#carousel_ul li:last')); 
            
            /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */
            $('#carousel_ul').css({'left' : '-160px'});
            });
            
            
        });


  // <!-- FUNCTION TO RETURN CAROUSEL LIST ITEMS AS ARRAY, TO RUN EFFECT SCRIPT ON THEM. -->

var carouselArray = [
  {
    url: "https://www.libboo.com//inhouse/book_image_cover/c8e51778-027c-11e2-8fab-1231390c5871_4.png",
    title: "The Heart and the Fist",
    authorName: "Eric Greitens",
    description: "THE HEART AND THE FIST shares one man's story of extraordinary leadership and service as both a humanitarian and a warrior. In a life lived at the raw edges of the human experience, Greitens has seen what can be accomplished when compassion and courage come together in meaningful service. As a Rhodes Scholar and Navy SEAL, Greitens worked alongside volunteers who taught art to street children in Bolivia and led US Marines who hunted terrorists in Iraq. He's learned from nuns who fed the destitute in one of Mother Teresa's homes for the dying in India, from aid workers who healed orphaned children in Rwanda, and from Navy SEALs who fought in Afghanistan. He excelled at the hardest military training in the world, and today he works with severely wounded and disabled veterans who are rebuilding their lives as community leaders at home. Greitens offers each of us a new way of thinking about living a meaningful life. We learn that to win any war, even those we wage against ourselves; to create and obtain lasting peace; to save a life; and even, simply to live with purpose requires us--every one of us--to be both good and strong."
  },
  {
    url: "https://www.libboo.com//inhouse/book_image_cover/c8e51778-027c-11e2-8fab-1231390c5871_4.png",
    title: "The Heart and the Fist",
    authorName: "Eric Greitens",
    description: "THE HEART AND THE FIST shares one man's story of extraordinary leadership and service as both a humanitarian and a warrior. In a life lived at the raw edges of the human experience, Greitens has seen what can be accomplished when compassion and courage come together in meaningful service. As a Rhodes Scholar and Navy SEAL, Greitens worked alongside volunteers who taught art to street children in Bolivia and led US Marines who hunted terrorists in Iraq. He's learned from nuns who fed the destitute in one of Mother Teresa's homes for the dying in India, from aid workers who healed orphaned children in Rwanda, and from Navy SEALs who fought in Afghanistan. He excelled at the hardest military training in the world, and today he works with severely wounded and disabled veterans who are rebuilding their lives as community leaders at home. Greitens offers each of us a new way of thinking about living a meaningful life. We learn that to win any war, even those we wage against ourselves; to create and obtain lasting peace; to save a life; and even, simply to live with purpose requires us--every one of us--to be both good and strong."
  },
  {
    url: "https://www.libboo.com//inhouse/book_image_cover/c8e51778-027c-11e2-8fab-1231390c5871_4.png",
    title: "The Heart and the Fist",
    authorName: "Eric Greitens",
    description: "THE HEART AND THE FIST shares one man's story of extraordinary leadership and service as both a humanitarian and a warrior. In a life lived at the raw edges of the human experience, Greitens has seen what can be accomplished when compassion and courage come together in meaningful service. As a Rhodes Scholar and Navy SEAL, Greitens worked alongside volunteers who taught art to street children in Bolivia and led US Marines who hunted terrorists in Iraq. He's learned from nuns who fed the destitute in one of Mother Teresa's homes for the dying in India, from aid workers who healed orphaned children in Rwanda, and from Navy SEALs who fought in Afghanistan. He excelled at the hardest military training in the world, and today he works with severely wounded and disabled veterans who are rebuilding their lives as community leaders at home. Greitens offers each of us a new way of thinking about living a meaningful life. We learn that to win any war, even those we wage against ourselves; to create and obtain lasting peace; to save a life; and even, simply to live with purpose requires us--every one of us--to be both good and strong."
  },
  {
    url: "https://www.libboo.com//inhouse/book_image_cover/c8e51778-027c-11e2-8fab-1231390c5871_4.png",
    title: "The Heart and the Fist",
    authorName: "Eric Greitens",
    description: "THE HEART AND THE FIST shares one man's story of extraordinary leadership and service as both a humanitarian and a warrior. In a life lived at the raw edges of the human experience, Greitens has seen what can be accomplished when compassion and courage come together in meaningful service. As a Rhodes Scholar and Navy SEAL, Greitens worked alongside volunteers who taught art to street children in Bolivia and led US Marines who hunted terrorists in Iraq. He's learned from nuns who fed the destitute in one of Mother Teresa's homes for the dying in India, from aid workers who healed orphaned children in Rwanda, and from Navy SEALs who fought in Afghanistan. He excelled at the hardest military training in the world, and today he works with severely wounded and disabled veterans who are rebuilding their lives as community leaders at home. Greitens offers each of us a new way of thinking about living a meaningful life. We learn that to win any war, even those we wage against ourselves; to create and obtain lasting peace; to save a life; and even, simply to live with purpose requires us--every one of us--to be both good and strong."
  },
  
  {
    url: "https://www.libboo.com//inhouse/book_image_cover/c8e51778-027c-11e2-8fab-1231390c5871_4.png",
    title: "The Heart and the Fist",
    authorName: "Eric Greitens",
    description: "THE HEART AND THE FIST shares one man's story of extraordinary leadership and service as both a humanitarian and a warrior. In a life lived at the raw edges of the human experience, Greitens has seen what can be accomplished when compassion and courage come together in meaningful service. As a Rhodes Scholar and Navy SEAL, Greitens worked alongside volunteers who taught art to street children in Bolivia and led US Marines who hunted terrorists in Iraq. He's learned from nuns who fed the destitute in one of Mother Teresa's homes for the dying in India, from aid workers who healed orphaned children in Rwanda, and from Navy SEALs who fought in Afghanistan. He excelled at the hardest military training in the world, and today he works with severely wounded and disabled veterans who are rebuilding their lives as community leaders at home. Greitens offers each of us a new way of thinking about living a meaningful life. We learn that to win any war, even those we wage against ourselves; to create and obtain lasting peace; to save a life; and even, simply to live with purpose requires us--every one of us--to be both good and strong."
  },
  {
    url: "https://www.libboo.com//inhouse/book_image_cover/c8e51778-027c-11e2-8fab-1231390c5871_4.png",
    title: "The Heart and the Fist",
    authorName: "Eric Greitens",
    description: "THE HEART AND THE FIST shares one man's story of extraordinary leadership and service as both a humanitarian and a warrior. In a life lived at the raw edges of the human experience, Greitens has seen what can be accomplished when compassion and courage come together in meaningful service. As a Rhodes Scholar and Navy SEAL, Greitens worked alongside volunteers who taught art to street children in Bolivia and led US Marines who hunted terrorists in Iraq. He's learned from nuns who fed the destitute in one of Mother Teresa's homes for the dying in India, from aid workers who healed orphaned children in Rwanda, and from Navy SEALs who fought in Afghanistan. He excelled at the hardest military training in the world, and today he works with severely wounded and disabled veterans who are rebuilding their lives as community leaders at home. Greitens offers each of us a new way of thinking about living a meaningful life. We learn that to win any war, even those we wage against ourselves; to create and obtain lasting peace; to save a life; and even, simply to live with purpose requires us--every one of us--to be both good and strong."
  }
];

for (var i = 0; i < carouselArray.length; i++) {
  var ul = document.getElementById("carousel_ul");
  var img = document.createElement("image");
  var li = document.createElement('li');
  img.setAttribute("src", carouselArray[i].url);
  img.setAttribute("class", "coverArt");
  li.setAttribute("book", carouselArray[i]);
  li.className = "item";
  li.appendChild(img);
  ul.appendChild(li);
}

    $("li.item").on('mouseover', function() {
        
        var $this = $(this);

        $this.addClass("selected");
        $("#carousel_ul li:not(.selected)").stop(true, true).animate({opacity: 0.3});
        $(".details").show();
        $(".details").stop(true, true).animate({top: 240}, function(){
        var book = $this.data('book');
        $("#title").text(book.title);
        $("#authorName").text(book.authorName);
        $("#description").text(book.description);
});
      });

    $('li.item').on('mouseout', function() {
        $("#carousel_ul li:not(.selected)").stop(true, true).animate({opacity: 1.0});
        $(this).removeClass("selected");
        
        $(".details").stop(true, true).animate({top: -1000}, function(){
        // $(".details").hide();
      });
     });
  
// METRICS ----------------------------//

$(".metric_dropdown").change(function() {
  $(this).trigger("metric_filter_changed");

});
  $("body").on("metric_filter_changed", function(e){
    console.log(e.target);
  });






// CHART SCRIPTS ------------------------//
  var ctx = document.getElementById("metricsChart").getContext("2d");
  
  var data = {
   labels : ["Cover","Description","Bio","Paragraph","Quote"],
   datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        data : [4,-3,6,0,-4]
      },
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        data : [6,0,4,0,-6]
      }
   ]
  };

  var newChart = new Chart(ctx);

  newChart.Bar(data);

    newChart.defaults = {
          
    //Boolean - If we show the scale above the chart data     
    scaleOverlay : false,
    
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : false,
    
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : null,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : null,
    //Number - The scale starting value
    scaleStartValue : null,

    //String - Colour of the scale line 
    scaleLineColor : "rgba(0,0,0,.1)",
    
    //Number - Pixel width of the scale line  
    scaleLineWidth : 1,

    //Boolean - Whether to show labels on the scale 
    scaleShowLabels : false,
    
    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",
    
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Arial'",
    
    //Number - Scale label font size in pixels  
    scaleFontSize : 12,
    
    //String - Scale label font weight style  
    scaleFontStyle : "normal",
    
    //String - Scale label font colour  
    scaleFontColor : "#666",  
    
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",
    
    //Number - Width of the grid lines
    scaleGridLineWidth : 1, 
    
    //Boolean - Whether the line is curved between points
    bezierCurve : true,
    
    //Boolean - Whether to show a dot for each point
    pointDot : true,
    
    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,
    
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,
    
    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,
    
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,
    
    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,
    
    //Boolean - Whether to animate the chart
    animation : true,

    //Number - Number of animation steps
    animationSteps : 60,
    
    //String - Animation easing effect
    animationEasing : "easeOutQuart",

    //Function - Fires when the animation is complete
    onAnimationComplete : null
    
  }


// TABS ----------------------------//

$(".tabs a").click(function(e){
  // e.preventDefault();

  var $this = $(this);
  var containerId = $this.data("container");
  $(".carousel_container").hide();
  $("#"+containerId).show();
  $this.parent().addClass("active").siblings().removeClass("active");
}).first().click();




});

