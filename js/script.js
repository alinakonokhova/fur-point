$(function(){

  // Linking Catalog blocks with Advise tabs
  $(document).on('click', '#catalog a', function(){
    let tab = $(this).data('tab');
    UIkit.switcher('#catalog-list').show(tab);
  });
  // 

  // Item card
  $(document).on('click', '.advise-cart a', function(event){
    event.preventDefault();
    var url = $(this).attr('href');
    $.ajax({
      url: url,
      success: function(data){
        $('#result').html(data);
        UIkit.modal('#item').show();
      }
    })
  });
  // 
})