const PROFILE_HEADER_FADE_TIME = 700;

$(document).ready (function() {
	//visibility is hidden instead of just hiding the componenets so the location is preserved
	$('#profile-header').css('visibility','visible').hide().fadeIn(PROFILE_HEADER_FADE_TIME, function () {
	});
});