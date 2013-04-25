$(function(){
	$('.dragme').draggable({
		snap: '.dragme',
		revert: 'invalid',
		stack: '.dragme'
	});	
	$('td').droppable({
		
		drop: function(event, ui){
			var newstatusId = "";
			if (this.id == 'colRdy') {
				newstatusId = 1
			} else if(this.id =='colProg'){
				newstatusId = 2;
			} else if(this.id =='colCompl'){
				newstatusId = 3;
			} else if(this.id =='colTest'){
				newstatusId = 4 ;
			} else if(this.id == 'colDepl'){
				newstatusId = 5;
			}
			
			$.get('/task/update/status', {newstatus:newstatusId})
		},
		tolerance: 'intersect'
		
	});
});
