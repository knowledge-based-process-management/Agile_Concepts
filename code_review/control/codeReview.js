/**
 * http://usejsdoc.org/
 */
$(function() {
	$('.menu .item').tab();
	$('#notification-panel .result-content').click(function(){
		var url = $(this).data('url');
		window.location.href=url;
	});
	
	$('.button').click(function(){
		var url = $(this).data('url');
		window.location.href=url;
	});
	
	$('#activities-panel .request-content').click(function(){
		var url = $(this).data('url');
//		window.location.href='code_review_commenting.html';
		window.location.href=url;
	});
	
//	$('#in-review-panel .content').click(function(){
//		
//	});
	
//	$(document).on('click','#in-review-panel .content', function(){
//		window.location.href='code_review_commenting.html';
//	});
	
	$('.ui.accordion').accordion();
	
	$( "#commits-panel .commit-content" ).hover(
			  function() {
				  $(this).dimmer('show');
			  }, function() {
				  $(this).dimmer('hide');
			  }
	);
	
	$('#commits-panel .dimmer .content').click(function(){
//		window.location.href='code_review_dashboard2.html';
		var card = $(this).closest(".card");
		var commitID = card.data("commit-id");
		var commitTitle = card.find('.description').text();
		var inReviewCard = '<div class="ui card" data-commit-id="'+commitID+'"> \
		<div class="content in-review-content" data-url="code_review_commenting.html"> \
			<div class="description">'+commitTitle+'</div> \
		</div> \
		<div class="extra content commit-analysis-content"> \
			<span href="code_review_commit_analysis.html"> <i class="code icon"></i> ID:'+commitID+'\
			</span> \
		</div> \
	</div>';
		$("#in-review-panel").append(inReviewCard);
		card.remove();
	});
	
	$.urlParam = function(name){
	    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	    if (results==null){
	       return null;
	    }
	    else{
	       return decodeURI(results[1]) || 0;
	    }
	}
	
	var commitID = $.urlParam('commit-id');
	var previousCommitID = commitID - 1;
	
	$('.latest-commit-display').text("ID:"+commitID);
	$('.previous-commit-display').text("ID:"+previousCommitID);
	
	
	$(document).on('click','.reply-with-ratings .submit-button', function(e){
		var form = $(this).closest('.reply-with-ratings');
		var icon = form.data('icon');
		var userName = form.data('user-name');
		var values = {};
		$.each(form.serializeArray(), function(i, field) {
		    values[field.name] = field.value;
		});
		var userName = form.data('user-name');
		var commentItem = '<div class="comment"> \
								<a class="avatar"> <img src="'+icon+'"> \
								</a> \
								<div class="content"> \
									<a class="author">'+userName+'</a> \
									<div class="metadata"> \
										<span class="date">Just now</span> \
										<span class="circle status-'+values['rating']+'-circle"></span> \
									</div> \
									<div class="text">'+values['input-comment']+'</div> \
									<div class="actions"> \
										<a class="reply">Reply</a> \
									</div> \
								</div> \
							</div>';
		var lastComment = form.closest('.comments').children('.comment').last();
		$(commentItem).insertAfter($(lastComment));
		return false;
	});
	
	$(document).on('click','.reply-to-review .submit-button', function(e){
		var form = $(this).closest('.reply-to-review');
		var icon = form.data('icon');
		var userName = form.data('user-name');
		var values = {};
		$.each(form.serializeArray(), function(i, field) {
		    values[field.name] = field.value;
		});
		var userName = form.data('user-name');
		var commentItem = '<div class="comment"> \
								<a class="avatar"> <img src="'+icon+'"> \
								</a> \
								<div class="content"> \
									<a class="author">'+userName+'</a> \
									<div class="metadata"> \
										<span class="date">Just now</span> \
									</div> \
									<div class="text">'+values['input-comment']+'</div> \
									<div class="actions"> \
										<a class="reply">Reply</a> \
									</div> \
								</div> \
							</div>';
		var lastComment = form.closest('.comments').children('.comment').last();
		var commentsBox = lastComment.find('.comments');
		if(commentsBox.length == 0){
			commentsBox = $('<div class="comments"></div>');
			lastComment.append(commentsBox);
		}
		commentsBox.append($(commentItem));
		return false;
	});
	
	
	
	$(document).on('click','#in-review-panel .in-review-content', function(){
		var url = $(this).data('url');
		var commitID = $(this).closest('.card').data('commit-id');
		window.location.href= url+"?commit-id="+commitID;
	});
	
	$(document).on('click','.commit-analysis-content', function(){
//		window.location.href='code_review_commenting.html';
		var url = $(this).find('span').attr('href');
		var commitID = $(this).closest('.card').data('commit-id');
		window.location.href= url+"?commit-id="+commitID;
	});
	
});