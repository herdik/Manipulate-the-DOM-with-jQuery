let names = ['Jajo', 'Misko', 'Pepa','Lucka', 'Filip', 'Juraj'];


names.forEach((name) => {
    if (name === 'Juraj'){
$('ul').append('<li><strong>'+name+'<strong></li>')
    } else {
    $('ul').append('<li>'+name+'</li>');
}   
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('body').append('<div></div>');
  $('div').append('<h1>'+ additionalBlock.title + '</h1> <p>' + additionalBlock.text + '</p>');

  /*$('div').append(`<h1>${additionalBlock.title}</h1> <p>${additionalBlock.text}</p>`);*/

  