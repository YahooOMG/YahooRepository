$(document).ready(function(){
  var red = 7;
  var black = 3;
  var roles =
        [ 'mafia',
          'mafia',
          'don',
          'sheriff',
          'citizen',
          'citizen',
          'citizen',
          'citizen',
          'citizen',
          'citizen'
        ];
  var killButton = "<span class='kill'><button name='button'>Kill</button></span>";

$('#rolify').on('click',function(){


  $("li").each(function(index) {
    var rand = Math.floor(Math.random() * (roles.length));
    $(this).append('   '+'<span>'+ roles[rand]+'</span>' + killButton);
    roles.splice(rand, 1);
  });

  $('.kill').on('click',function(){
    var player = $( this ).parent('li');

    if ( player.text().indexOf('citizen')!=-1 || player.text().indexOf('sheriff')!=-1) {
      red--;
    }

    if ( player.text().indexOf('mafia')!=-1 || player.text().indexOf('don')!=-1) {
      black--;
    }

    player.text($( this ).parent('li').find('input').val() + ' Killed');

    if(black===0)
      alert('city wins');
    if(red===black)
      alert('mafia wins');
    });

    $('#rolify').off();
  });
});
