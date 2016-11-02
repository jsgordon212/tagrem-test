
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function() {

  hideCards();
  BindControls();
  closeWindow();
  showProduct();


   });

   function closeWindow(){

     var cards = $('.info-container').children();
     $('.close').click( function(){
       event.preventDefault();
       for(var i = 0; i < 4; i++){
         if($(cards[i]).attr('id')==$(this).attr('id')){
           $(cards[i]).hide();
         }
       }
     });
   }

  function hideCards(){
    var cards = $('.info-container').children();
    for(var i = 0; i < 4; i++){
      $(cards[i]).hide();
    }
  }

   function showProduct(){

     var cards = $('.info-container').children();
     $('.learn').click(function(){
       event.preventDefault();
       for(var i = 0; i < 4; i++){
         if($(cards[i]).attr('id')==$(this).attr('id')){
           $(cards[i]).show();
           $(window).scrollTop($(cards[i]).offset().top-20)
         }
       }
     });
   }



   function BindControls() {
       var States = ['Alabama',
           'Alaska',
           'Arizona',
           'Arkansas',
           'California',
           'Colorado',
           'Connecticut',
           'Delaware',
           'District Of Columbia',
           'Florida',
           'Georgia',
           'Hawaii',
           'Idaho',
           'Illinois',
           'Indiana',
           'Iowa',
           'Kansas',
           'Kentucky',
           'Louisiana',
           'Maine',
           'Maryland',
           'Massachusetts',
           'Michigan',
           'Minnesota',
           'Mississippi',
           'Missouri',
           'Montana',
           'Nebraska',
           'Nevada',
           'New Hampshire',
           'New Jersey',
           'New York',
           'North Carolina',
           'North Dakota',
           'Ohio',
           'Oklahoma',
           'Oregon',
           'Pennsylvania',
           'Rhode Island',
           'South Carolina',
           'South Dakota',
           'Tennessee',
           'Texas',
           'Utah',
           'Vermont',
           'Virginia',
           'Washington',
           'West Virginia',
           'Wisconson',
           'Wyoming'];

       $('#states').autocomplete({
           source: States,
           minLength: 0,
           scroll: true
       }).focus(function() {
           $(this).autocomplete("search", "");
       });

   }




   window.products = {
   1: {
       id : 1,
       order: 1,
       'title' : 'Product Title 1',
       'price' : 'Staring at $500',
       'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.<br><br>'
           +'<ul>'
                   + '     <li>Non porta dui euismod nec</li>'
                   + '     <li>Ut tristique ipsum velit</li>'
                                   + '     <li>Quisque mollis justo</li>'
           +'</ul>',
       'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                       'src'        : 'material/000010885.jpg'
   },
   2: {
       id : 2,
       order: 2,
       'title' : 'Product Title 2',
       'price' : 'Staring at $1900',
       'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
       'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                       'src'        : 'material/ff_x20_008.JPG'
   },
   3: {
       id : 3,
       order: 3,
       'title' : 'Product Title 3',
       'price' : 'Staring at $2730',
       'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
       'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                       'src'        : 'material/sample1.jpg'
   },
   4: {
       id : 4,
       order: 4,
       'title' : 'Product Title 4',
       'price' : 'Staring at $731',
       'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
       'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                       'src'        : 'material/sample_08.jpg'
   }
   }
