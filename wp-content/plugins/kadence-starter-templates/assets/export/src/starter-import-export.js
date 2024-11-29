( function( $, api ) {
	var $window = $( window ),
		$document = $( document ),
		$body = $( 'body' );
	/**
	 * API on ready event handlers
	 *
	 * All handlers need to be inside the 'ready' state.
	 */
	wp.customize.bind( 'ready', function() {
		/**
		 * Init import export.
		 */
		var KadenceImportExport = {
			init: function() {
				$( 'input[name=Kadence-starter-export-button]' ).on( 'click', KadenceImportExport.export );
				$( 'input[name=Kadence-starter-import-button]' ).on( 'click', KadenceImportExport.import );
				$( 'input[name=Kadence-starter-reset-button]' ).on( 'click', KadenceImportExport.reset );
			},
		
			export: function() {
				window.location.href = KadenceStarterImport.customizerURL + '?Kadence-starter-export=' + KadenceStarterImport.nonce.export;
			},
			import: function() {
				var win			= $( window ),
					body		= $( 'body' ),
					form		= $( '<form class="Kadence-starter-import-form" method="POST" enctype="multipart/form-data"></form>' ),
					controls	= $( '.Kadence-starter-import-controls' ),
					file		= $( 'input[name=Kadence-starter-import-file]' ),
					message		= $( '.Kadence-starter-uploading' );
				
				if ( '' == file.val() ) {
					alert( KadenceStarterImport.emptyImport );
				}
				else {
					win.off( 'beforeunload' );
					body.append( form );
					form.append( controls );
					message.show();
					form.submit();
				}
			},
			reset: function() {
				var data = {
					wp_customize: 'on',
					action: 'Kadence_starter_reset',
					nonce: KadenceStarterImport.nonce.reset
				};
		
				var r = confirm( KadenceStarterImport.resetConfirm );
		
				if (!r) return;
		
				$( 'input[name=Kadence-starter-reset-button]' ).attr('disabled', 'disabled');
		
				$.post( ajaxurl, data, function () {
					wp.customize.state('saved').set( true );
					location.reload();
				});
			}
		};
		
		$( KadenceImportExport.init );
	});

} )( jQuery, wp );