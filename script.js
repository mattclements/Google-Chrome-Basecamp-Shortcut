$(document).ready(function() {
	$(window).load(function(){
		if(localStorage.getItem("basecampId")) {
			var basecampId_stored = localStorage.getItem("basecampId"),
                basecampType_stored = localStorage.getItem("basecampType");
            basecampId_stored = basecampId_stored.replace("https://basecamp.com/","");
            basecampId_stored = basecampId_stored.replace("https://","");
            basecampId_stored = basecampId_stored.replace(".basecamphq.com/","");
			$('#basecampId').val(basecampId_stored);
            $('#basecampType').val(basecampType_stored);
		} else {
			$('#basecampId').val('');
		}
	});
	$('#save_options').submit(function(event){
		event.preventDefault();
        if($('#basecampType').val()==="Classic")
        {
            var basecampId_stored = "https://" + $('#basecampId').val() + ".basecamphq.com/";
        }
        else
        {
            var basecampId_stored = "https://basecamp.com/" + $('#basecampId').val();
        }
        
        var basecampType_stored = $('#basecampType').val();

		localStorage.setItem("basecampId", basecampId_stored);
        localStorage.setItem("basecampType", basecampType_stored);

		if(!localStorage.getItem("basecampId")) {
			alert('Please enter a Basecamp ID');
		} else {
			alert('Basecamp Shortcut set to: ' + localStorage.getItem("basecampId"));
		}
		return false;
	});
});