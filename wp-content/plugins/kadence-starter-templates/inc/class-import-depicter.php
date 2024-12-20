<?php
/**
 * Class for importing fluent data.
 *
 * @package KadenceStarter Templates
 */

namespace Kadence_Starter_Templates;


use Depicter;

/**
 * Class for importing fluent forms.
 */
class Kadence_Starter_Templates_Depicter_Import {
	/**
	 * Import depicter slider via downloaded slider path
	 *
	 * @param string $slider_path
	 * @param int $old_slider_id
	 * @return bool
	 */
	public static function import_slider( $slider_path ) {
		if ( class_exists( '\Depicter' ) ) {
			$slider_id = \Depicter::importService()->unpack( $slider_path );

		}
		if ( apply_filters( 'Kadence_starter_templates_save_log_files', false ) ) {
			// Write error to log file.
			$log_file_path = $Kadence_starter_templates->get_log_file_path();
			$message = ! empty( $slider_id ) ? esc_html__( 'Slider Import ID:', 'Kadence-starter-templates' ) . $slider_id : esc_html__( 'No results for Slider Import', 'Kadence-starter-templates' );
			Helpers::append_to_file(
				$message,
				$log_file_path,
				esc_html__( 'Importing Slider', 'Kadence-starter-templates' )
			);
		}
	}
}
