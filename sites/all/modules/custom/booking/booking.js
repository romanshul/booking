(function ($) {
  Drupal.behaviors.booking = {
    attach : function(context, settings) {
    	var eid = Drupal.settings.booking.eid;
    	$('span.book', context).live('click', function(eventObject) {

			var obj = this;
	    	var dt_ = Date();
	    	var checked = $(this).find('input#edit-id').attr('checked');
	    	
	    	var booked = "/booking-save/"+ eid +"?nocache="+dt_
	    	jQuery.get(booked, function(data){
	    		var json = jQuery.parseJSON(data);
	    		$('span.count').text(json.count);
	    		$('input#edit-id').removeAttr('checked');
	    		if(!checked) {
	    			// $('input#edit-id').attr('checked', 'checked');
	    			// $('label[for=edit-id]').text(json.text);
	    			$('span.book').text(json.text)
	    		}
	        });

	        return false;
	    });
    }
  };
})(jQuery);