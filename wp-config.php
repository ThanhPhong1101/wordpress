<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress_db');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', '');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '-2o_w$(pN(|Hg+Uz*-h2dsvnFM?F3@0gMkHy-pEsgC&K2.s|_z[=(SEmt_t_yTRl');
define('SECURE_AUTH_KEY',  'FmSV@%.r{-73eYeAa^_.?r!q5]3Be#v%Ek|sCyo)Mt#hD<(s&RT[K3WLK`d?+Tjv');
define('LOGGED_IN_KEY',    '9C@`w-b0eW/n(FaL=!jmG+TbxasGmhMe48dL,u!q9,U=?~x+uxtvOwU+770|z0Ih');
define('NONCE_KEY',        'FrW~zjqB]P_Z2RlJ0o=//?zu?SdlK?afx=(]2&@Y_SY[P(=wC2CnmDIOmV@R6_j]');
define('AUTH_SALT',        'CtPDReCX&c*+7z)}GoM!as^E:Z&v,&ZzgY[fsFp1NYiS_C)x*+;7{9ADL[vQ@+FI');
define('SECURE_AUTH_SALT', '{DNHMqSb.x0A);c>v.43l2m3a-h0c|z(tsDOufPx#;Ki4a#R? I:I/Y:ye5ksQ1y');
define('LOGGED_IN_SALT',   'fX?Eh m_uD[J7OwR]uN)7+Hq_k9T AnOu2L1s?.miRR-a7@_w<@|{,;Y3*@4A1=X');
define('NONCE_SALT',       '~)<)tkwc,G>oqBfHGEFUWHb&?=y+~QPlKQnWSU9?u;D;ZE(+~(F`$u|9#sQHpqK0');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (! defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
