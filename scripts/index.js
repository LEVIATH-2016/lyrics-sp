$(function(){

	$(".title").click(function(){

		var $this = $(this);
		var btn = $this.find($(".aco-btn")).find('img');

		if($this.hasClass('active')){

			$this.removeClass('active');
					
			btn.attr('src', btn.attr('src').replace('open', 'close'));
			$this.next().slideUp();		

		}else{

			$this.addClass('active');
	
			btn.attr('src', btn.attr('src').replace('close', 'open'));
			$this.next().slideDown();	
			
		}

	});

	$(".btn").click(function(){
		var $this = $(this);

		var btn = $this.parent().parent().find($(".aco-btn")).find('img');

		btn.attr('src', btn.attr('src').replace('open', 'close'));

		$this.parent().slideUp();
		$this.parent().parent().find($(".title")).removeClass('active');
	});

});
