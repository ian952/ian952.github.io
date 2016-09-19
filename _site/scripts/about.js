const PROFILE_HEADER_FADE_TIME = 700;

$(document).ready (function() {
	$('#profile-header').css('visibility','visible').hide().fadeIn(PROFILE_HEADER_FADE_TIME, function () {
	});
});