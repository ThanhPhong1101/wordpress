/**
 * Ajax install the Theme Plugin
 *
 */
 (function($, window, document, undefined){
	"use strict";
	$(function(){
		$( '.starter-upsell-wrap .starter-upsell-dismiss' ).on( 'click', function( event ) {
			Kadence_starter_dismissNotice();
		} );
		function Kadence_starter_dismissNotice(){
			var data = new FormData();
			data.append( 'action', 'Kadence_starter_dismiss_notice' );
			data.append( 'security', KadenceStarterAdmin.ajax_nonce );
			$.ajax({
				url : KadenceStarterAdmin.ajax_url,
				method:  'POST',
				data: data,
				contentType: false,
				processData: false,
			});
			$( '.starter-upsell-wrap' ).remove();
		}
	});
})(jQuery, window, document);