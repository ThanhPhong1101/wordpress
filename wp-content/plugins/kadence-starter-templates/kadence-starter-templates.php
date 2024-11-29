<?php
/**
 * Plugin Name: Starter Templates by KadenceWP
 * Description: Launch a beautiful website with the power of AI or using our classic pre built style.
 * Version: 2.1.6
 * Author: KadenceWP
 * Author URI: https://Kadencewp.com/
 * Requires PHP: 7.4
 * License: GPLv2 or later
 * Text Domain: Kadence-starter-templates
 *
 * @package KadenceStarter Templates
 */

// Block direct access to the main plugin file.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'Kadence_STARTER_TEMPLATES_PATH', plugin_dir_path( __FILE__ ) );
define( 'Kadence_STARTER_TEMPLATES_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'Kadence_STARTER_TEMPLATES_VERSION', '2.1.6' );

require_once plugin_dir_path( __FILE__ ) . 'vendor/vendor-prefixed/autoload.php';
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';
require_once plugin_dir_path( __FILE__ ) . 'class-Kadence-starter-templates.php';

use KadenceWP\KadenceStarterTemplates\App;
use KadenceWP\KadenceStarterTemplates\StellarWP\ContainerContract\ContainerInterface;
use KadenceWP\KadenceStarterTemplates\Container;
use KadenceWP\KadenceStarterTemplates\StellarWP\ProphecyMonorepo\Container\ContainerAdapter;
use KadenceWP\KadenceStarterTemplates\StellarWP\Uplink\Config;
use KadenceWP\KadenceStarterTemplates\StellarWP\Uplink\Uplink;
use KadenceWP\KadenceStarterTemplates\StellarWP\Uplink\Register;

/**
 * Load the plugin app.
 */
function Kadence_starter_templates_init() {
	$container = new Container();

	// The KadenceStarter Templates Application.
	App::instance( new ContainerAdapter( $container->container() ) );
	/**
	 * Uplink.
	 */
	Config::set_container( $container );
	Config::set_hook_prefix( 'Kadence-starter-templates' );
	if ( ! class_exists( '\KadenceWP\KadenceBlocks\App' ) ) {
		Config::set_auth_cache_expiration( WEEK_IN_SECONDS );
		Config::set_token_auth_prefix( 'Kadence' );
	}
	Uplink::init();

	Register::plugin(
		'Kadence-starter-templates',
		'KadenceStarter Templates',
		Kadence_STARTER_TEMPLATES_VERSION,
		'Kadence-starter-templates/Kadence-starter-templates.php',
		App::class
	);
	add_filter( 'stellarwp/uplink/Kadence-starter-templates/prevent_update_check', '__return_true' );
	add_filter(
		'stellarwp/uplink/Kadence-starter-templates/api_get_base_url',
		static function() {
			return 'https://licensing.Kadencewp.com';
		},
		10,
		0
	);
}
add_action( 'plugins_loaded', 'Kadence_starter_templates_init', 2 );

/**
 * Load the plugin textdomain
 */
function Kadence_starter_templates_lang() {
	load_plugin_textdomain( 'Kadence-starter-templates', false, basename( dirname( __FILE__ ) ) . '/languages' );
}
add_action( 'init', 'Kadence_starter_templates_lang' );

/**
 * The KadenceStarter Templates Application Container.
 *
 * @see Kadence_starter_templates_init()
 *
 * @note Kadence_starter_templates_init() must be called before this one.
 *
 * @return ContainerInterface
 * @throws InvalidArgumentException
 */
function Kadence_starter_templates(): ContainerInterface {
	return App::instance()->container();
}
