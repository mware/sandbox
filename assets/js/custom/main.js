/* Main.js -------------- */

// start wow for scrolling animations
new WOW().init();

( function ( $ ) {

	$( window ).scroll( function () {

		if ( $( window ).scrollTop() >= 450 ) {
			$( 'body' ).addClass( 'fixed-header' );
		} else {
			$( 'body' ).removeClass( 'fixed-header' );
		}
	} );

	$( '.search-button-trigger' ).on( "click", function () {
		$( this ).toggleClass( 'open' );
		$( '.search-section' ).toggleClass( 'open' );
        $('input.search-field').focus();
	} );

	// page loader, see .loaded styles in css

	$( 'body' ).fadeIn( 100, function () {
		setTimeout( function () {
			$( 'body' ).addClass( 'loaded' );
		}, 400 );

	} );


	// smooth scrolling, enabled by Beaver, needed here for back to top ----------
	// Select all links with hashes
	$( 'a[href*="#"]' )
		// Remove links that don't actually link to anything
		.not( '[href="#"]' )
		.not( '[href="#0"]' )
		.click( function ( event ) {
			// On-page links
			if (
				location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $( this.hash );
				target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
				// Does a scroll target exist?
				if ( target.length ) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$( 'html, body' ).animate( {
						scrollTop: target.offset().top
					}, 1000, function () {
						// Callback after animation
						// Must change focus!
						var $target = $( target );
						$target.focus();
						if ( $target.is( ":focus" ) ) { // Checking if the target was focused
							return false;
						} else {
							$target.attr( 'tabindex', '-1' ); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					} );
				}
			}
		} );


} )( jQuery );


