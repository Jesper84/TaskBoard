$(function(){
	$('.dragme').draggable({
		snap: '.dragme',
		revert: 'invalid',
		stack: '.dragme'
	});	
	$('td').droppable({
		
		drop: function(){
			console.log('dropped');
		},
		tolerance: 'intersect'
		
	});
});
