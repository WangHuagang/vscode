/**
 * Created by Mr.Wang on 2017/2/15.
 */
$(function(){
    //alert($("#box").text())
    // alert($("#box").html());
    //$("#box").html("<em>你好</em>")
    //$("#box").html(function(index,value){
      //  return value+"<em>你好</em>";
   // })


   // alert($("div").attr("id"));


    // $("#box").attr("title","bb")
/*
    var box=$("#box").css(["color","width","height"]);
    $.each(box,function(attr,vaule){
        alert(attr+":"+vaule);
    })*/
//通过添加、删除class来切换颜色
    $("#box").click(function(){
        $(this).toggleClass("red");
        if($(this).hasClass("red")){
            $(this).removeClass("green");
        }
        else{
            $(this).toggleClass("green");
        }
    })

    $(".btn_show").on("click",function(){
        $(".box").eq(0).show("fast",function test(){
            $(this).next().show("fsat",test);
        });
    });


    $(".btn_hide").on("click",function(){
        $(".box").last().hide("fast",function test(){
            $(this).prev().hide("fsat",test);
        });
    });


    $(".a_btn").click(function(){
       $(".anniate").animate({
           width:"400px",
           height:"300px",
           fontSize:"40px",

       },2000).queue(function(){
           $(".anniate").css({
               color:"green",
               background:"red"
           })
       })
    });


    $(".stop").click(function(){
        $(".anniate").stop(true,true);
    })



    $(".ajax").click(function(){
        $(".black").load("test.html")
    })


    $(".a_btn1").click(function(){
        $.get("test1.html",function(respose){
            alert(respose);
        })
    })

})