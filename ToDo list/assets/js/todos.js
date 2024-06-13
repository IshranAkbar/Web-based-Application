
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed"); //toggling the complete class from css to cross-off line
})

$("input[type='text']").keypress(function(e) { 
    if(e.which === 13) {
        var todoText = $(this).val(); //storing the value of text box in a variable
        $(this).val(""); //deleting the text of the text box
        $("ul").append("<li><span><i class='fa-regular fa-trash-can'></i></span> "+ todoText +"</li>"); //adding the todo text as a new todoList
    }
});


$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(250, function(){
        $(this).remove(); //delete any item from the list
    });
    e.stopPropagation();
})


$(".fa-pen-to-square").click(function() { 
    $("input[type='text']").fadeToggle() //toggle the add button to add new list
});
