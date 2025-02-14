<?php

namespace SASW_SWATCHES;


global $sasw_db_version;
$sasw_db_version = '1.0';

function install()
{
	global $wpdb;
	global $sasw_db_version;
	$table_name = $wpdb->prefix . 'sasw_attr_tax_data';

	$charset_collate = $wpdb->get_charset_collate();

	$sql = "CREATE TABLE $table_name (
		`attr_id` bigint(20) NOT NULL,
		`settings` longtext DEFAULT NULL,
		`button_label` varchar(255) DEFAULT NULL,
		`title` varchar(255) DEFAULT NULL,
		`description` longtext DEFAULT NULL,
		PRIMARY KEY  (attr_id)
	) $charset_collate;";

	require_once ABSPATH . 'wp-admin/includes/upgrade.php';
	dbDelta($sql);

	add_option('sasw_db_version', $sasw_db_version);
}
