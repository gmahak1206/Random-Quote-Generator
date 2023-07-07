$(document).ready(function () {
    var count = 0;
    var array = ["Remember that not getting what you want is sometimes a wonderful stroke of luck." , "Eighty percent of success is showing up." , "If you do what you’ve always done, you’ll get what you’ve always gotten." , "In order to succeed, your desire for success should be greater than your fear of failure." , "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." , "A truly rich man is one whose children run into his arms when his hands are empty." , "The only person you are destined to become is the person you decide to be." ,  "Our lives begin to end the day we become silent about things that matter."];
    var color = ["rgb(22, 160, 133)" , "rgb(119, 177, 169)" , "rgb(22, 160, 133)" , "rgb(52, 34, 36)" , "rgb(115, 168, 87)" , "rgb(119, 177, 169)" , "rgb(115, 168, 87)" , "rgb(115, 168, 87)" , "rgb(231, 76, 60)" , "rgb(71, 46, 50)" ,  "rgb(52, 34, 36)" ];
    $("#next").click(()=>{
        $("body").animate({ opacity: 0 }, 500, function () {
            $(this).animate({ opacity: 1 }, 500);
        count += 1;
        $(".quote").html(array[count]);
        $("body").css({
            "background-color":color[count] ,
            "animation" : "fadeIn 20s"
        })  
        $(".container").css({
            "background-color":color[count] ,
            "animation" : "fadeIn 20s"
        })
        $(".btn").css({
            "background-color":color[count] ,
            "animation" : "fadeIn 20s"
        })
        $(".quote").css({
            "color":color[count] ,
            "animation" : "fadeIn 20s"
        })
        $(".icon").css({
            "color":color[count],
            "animation" : "fadeIn 20s"
            
  });
        })
        if (count == array.length){
            count = 0;
        }
    });
});