$(document).ready(function () {

// When the page is loaded replace the slogan by "Bazinga!"

	// $("#myContent p").eq(0).text('BAZINGA!');

// When you click on the input to write my name the previous name is deleted
		// var resetInput = function() {
	 //    // Do something on click
	 //    $("#name").val("");
	 //    $("#result").text("hola");
	 //    console.log("focused on name box");
	 // 	};

	 // 	resetInput();
		// $( "#name" ).bind("focus", resetInput);

// When you move your mouse over one jQuery projects it change the background-color to silver

		// var Myfuncion= function(){$(this).css("background-color", "silver")};
		// $("#myContent li").mouseenter(Myfuncion);

// With the previous one active, when the user leaves the element remove the background-color

		// var Myfuncion_2= function(){$(this).css("background-color", "white")};
		// $("#myContent li").mouseleave(Myfuncion_2);

// When you move your mouse enter on each jQuery projects it change the background-color to silver
	
	// $("#myContent li").mouseenter(function(){
	// 	$(this).addClass("bordered");
	// });


// When I finish to write my name I want my name written in the result div
		
		// $("#name").blur(function(){
		// 	var namevar= $(this).val();
		// 	$("#result").text(namevar);
		// });


// When I click on any element of the body show the mouse x and y in the result div

		// $(document).on( "mousemove", function(event){
		// 	$("#result").text(event.pageX + " " + event.pageY);
		// });

// Adds a div with "Hello" at the end of the body when you click on the result div
		
		// $("#result").click( function(){
		// 	$("body").append("<li>Hello</li>");	
		// });


// Adds a div with "Hello" when you click on the result div only the first time
		// $("#result").one ("click", function(){
		// 	$("body").append("<li>Hello</li>");
		// });

		// $("#result").unbind ("click", function(){
		// 	$("body").append("<li>Hello</li>");
		// });


// Adds a new "jQueryUI" element when clicks over one jQuery project

	// $("#myContent ul").click( function(){
	// 	var palabra = $("#jquery-ui").clone();
	// 	$(this).append(palabra);
	// });


// Avoid the navigation when you click a link

	

// When you click a link go to ironhack.com


		// 	$("a").click( function(){
		// 	$(this).attr("href", "http//:www.ironhack.com");				
		// });

	

// When you click on myContent div toggle the class bordered to the result
// except if jquery-ui element is clicked.

	

// When you select a part of the input name the selected part is shown in the result div

    /**
     * Final round
     */


// Duplicate the jQuery projects when clicks over them

	// $("#myContent li").click( function(){
	// 	var palabra = $(this).clone();
	// 	$(this).after(palabra);
	// })


	// $("#id")
 // .delegate("li", "click", myFn)

	
// When you uncheck "I love learning" you get an alert with "Really???"
		
		$("#love").prop("selected", false)

	

// When you resize the page show the size in the result div

	

// I want the result div follows my mouse until I click (then will be fixed on the page)
// The mouse should be in the center of the div

});