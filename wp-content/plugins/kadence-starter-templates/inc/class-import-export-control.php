<?php
/**
 * The Import Export customize control extends the WP_Customize_Control class.
 *
 * @package KadenceStarter Templates
 */

namespace KadenceWP\KadenceStarterTemplates;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use WP_Customize_Control;

if ( ! class_exists( 'WP_Customize_Control' ) ) {
	return;
}

/**
 * Class Kadence_Starter_Control_Import_Export
 *
 * @access public
 */
class Kadence_Starter_Control_Import_Export extends WP_Customize_Control {
	/**
	 * Control type
	 *
	 * @var string
	 */
	public $type = 'Kadence_starter_import_export_control';
	/**
	 * Empty Render Function to prevent errors.
	 */
	public function render_content() {
		?>
			<span class="customize-control-title">
				<?php esc_html_e( 'Export', 'Kadence' ); ?>
			</span>
			<span class="description customize-control-description">
				<?php esc_html_e( 'Click the button below to export the customization settings for this theme.', 'Kadence' ); ?>
			</span>
			<input type="button" class="button Kadence-starter-export Kadence-starter-button" name="Kadence-starter-export-button" value="<?php esc_attr_e( 'Export', 'Kadence' ); ?>" />

			<hr class="kt-theme-hr" />

			<span class="customize-control-title">
				<?php esc_html_e( 'Import', 'Kadence' ); ?>
			</span>
			<span class="description customize-control-description">
				<?php esc_html_e( 'Upload a file to import customization settings for this theme.', 'Kadence' ); ?>
			</span>
			<div class="Kadence-starter-import-controls">
				<input type="file" name="Kadence-starter-import-file" class="Kadence-starter-import-file" />
				<?php wp_nonce_field( 'Kadence-starter-importing', 'Kadence-starter-import' ); ?>
			</div>
			<div class="Kadence-starter-uploading"><?php esc_html_e( 'Uploading...', 'Kadence' ); ?></div>
			<input type="button" class="button Kadence-starter-import Kadence-starter-button" name="Kadence-starter-import-button" value="<?php esc_attr_e( 'Import', 'Kadence' ); ?>" />

			<hr class="kt-theme-hr" />
			<span class="customize-control-title">
				<?php esc_html_e( 'Reset', 'Kadence' ); ?>
			</span>
			<span class="description customize-control-description">
				<?php esc_html_e( 'Click the button to reset all theme settings.', 'Kadence' ); ?>
			</span>
			<input type="button" class="components-button is-destructive Kadence-starter-reset Kadence-starter-button" name="Kadence-starter-reset-button" value="<?php esc_attr_e( 'Reset', 'Kadence' ); ?>" />
			<?php
	}
}