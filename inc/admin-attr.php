<?php

namespace SASW_SWATCHES\Admin\Attr;

use function SASW_SWATCHES\get_assets;
use function SASW_SWATCHES\get_wc_tax_attrs;
use function SASW_SWATCHES\get_ajax_configs;
use function SASW_SWATCHES\get_custom_attr_data;
use function SASW_SWATCHES\get_swatch_data;

function get_current_tax()
{
	if (isset($_GET['taxonomy'])) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return sanitize_text_field($_GET['taxonomy']); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	}
	return false;
}



function get_current_tax_type()
{
	$key = 'sasw_current_tax_type';
	if (isset($GLOBALS[$key])) {
		return $GLOBALS[$key];
	}

	$t = get_current_tax();
	$attrs = get_wc_tax_attrs();
	$type =  $t && isset($attrs[$t]) ? $attrs[$t]['type'] : false;
	$GLOBALS[$key] = [
		'tax' => $t,
		'type' => $type,
	];

	return $GLOBALS[$key];
}

function save_term_fields($term_id)
{
	if (isset($_POST['sasw_attr_swatch'])) { // phpcs:ignore WordPress.Security.NonceVerification.Missing
		$data = wc_clean(json_decode(wp_unslash($_POST['sasw_attr_swatch']), true)); // phpcs:ignore WordPress.Security.NonceVerification.Missing
		update_term_meta(
			$term_id,
			'_sasw_swatch',
			$data,
		);
	}
}


function get_term_swatch($term_id)
{
	return get_swatch_data($term_id);
}


function column_content($content, $column_name, $term_id)
{
	switch ($column_name) {
		case 'swatch':
			$tax =  get_current_tax_type();
			$data = get_swatch_data($term_id);
			if (in_array($tax['type'], ['sasw_color', 'sasw_image'])) {
				$content =  '<div data-tax="' . esc_attr($tax['tax']) . '" data-swatch="' . esc_attr(wp_json_encode($data, JSON_NUMERIC_CHECK)) . '" data-tax-type="' . esc_attr($tax['type']) . '" data-term_id="' . esc_attr($term_id) . '"  class="sasw_swatch"></div>';
			} else {
				$content = esc_html($data['value']);
			}
			break;
		default:
			break;
	}

	return $content;
}

function add_columns($columns)
{
	$columns['swatch'] = __('Swatch', "sa-swatches" );
	return $columns;
}


function add_term_fields_text($taxonomy)
{
?>
	<div class="form-field">
		<label for="sasw_attr_swatch"><?php esc_html_e('Swatch label', "sa-swatches") ?></label>
		<div id="sasw_attr_swatch_el">
			<input type="text" name="sasw_attr_swatch" id="sasw_attr_swatch" />
		</div>
	</div>
<?php
}

function add_term_fields_color($taxonomy)
{
?>
	<div class="form-field">
		<label for="sasw_attr_swatch"><?php esc_html_e('Swatch color', "sa-swatches") ?></label>
		<div id="sasw_attr_swatch_el">
			<input type="hidden" name="sasw_attr_swatch" id="sasw_attr_swatch" />
		</div>
	</div>
<?php
}

function add_term_fields_image($taxonomy)
{
?>
	<div class="form-field">

		<label for="sasw_attr_swatch"><?php esc_html_e('Swatch image', "sa-swatches") ?></label>
		<div id="sasw_attr_swatch_el">
			<input type="hidden" name="sasw_attr_swatch" id="sasw_attr_swatch" />
		</div>
	</div>
<?php
}

function edit_term_fields_text($term, $taxonomy)
{

	// get meta data value
	$data = get_swatch_data($term->term_id);

?><tr class="form-field">
		<th><label for="sasw_attr_swatch"><?php esc_html_e('Swatch label', "sa-swatches") ?></label></th>
		<td>
			<div id="sasw_attr_swatch_el">
				<input type="hidden" name="sasw_attr_swatch" id="sasw_attr_swatch" />
			</div>
		</td>
	</tr>
<?php
}

function edit_term_fields_color($term, $taxonomy)
{

	// get meta data value
	$data = get_term_swatch($term->term_id);
?><tr class="form-field">
		<th><label for="sasw_attr_swatch_color"><?php esc_html_e('Swatch label', "sa-swatches") ?></label></th>
		<td>
			<div id="sasw_attr_swatch_el">
				<input name="sasw_attr_swatch" id="sasw_attr_swatch" type="hidden" value="<?php echo esc_attr(wp_json_encode($data, JSON_NUMERIC_CHECK)) ?>" />
			</div>
		</td>
	</tr>
<?php

}
function edit_term_fields_image($term, $taxonomy)
{

	$data = get_term_swatch($term->term_id);
?><tr class="form-field">
		<th><label for="sasw_attr_swatch_image"><?php esc_html_e('Swatch image', "sa-swatches") ?></label></th>
		<td>
			<div id="sasw_attr_swatch_el">
				<input name="sasw_attr_swatch" id="sasw_attr_swatch" type="hidden" value="<?php echo esc_attr(wp_json_encode($data, JSON_NUMERIC_CHECK)) ?>" />
			</div>
		</td>
	</tr>
<?php
}



function manage_attr_columns()
{

	$attrs = wc_get_attribute_taxonomies();

	foreach ($attrs as $attr) {
		$tax = "pa_{$attr->attribute_name}";
		$field = '_text';
		switch ($attr->attribute_type) {
			case 'sasw_color':
				$field = '_color';
				break;
			case 'sasw_image':
				$field = '_image';
				break;
		}

		add_filter("manage_edit-{$tax}_columns", __NAMESPACE__ . '\add_columns');
		add_filter("manage_{$tax}_custom_column", __NAMESPACE__ . '\column_content', 10, 3);
		add_action("{$tax}_add_form_fields", __NAMESPACE__ . "\add_term_fields{$field}");
		add_action("{$tax}_edit_form_fields", __NAMESPACE__ . '\edit_term_fields' . $field, 10, 2);
		add_action("created_{$tax}", __NAMESPACE__ . '\save_term_fields');
		add_action("edited_{$tax}", __NAMESPACE__ . '\save_term_fields');
	}
}

add_filter('plugins_loaded', __NAMESPACE__ . '\manage_attr_columns', 10, 3);


add_action('admin_enqueue_scripts', __NAMESPACE__ . '\admin_scripts');

/**
 * Change admin tags js to update some js events.
 * @see /wp-admin/js/tags.js
 *
 * @param [type] $src
 * @param [type] $handle
 * @return void
 */
function maybe_change_admin_js($src, $handle)
{
	if ($handle === 'admin-tags') {
		$src = SASW_SWATCHES_URL . '/assets/wp-admin-js/tags.js';
	}
	return $src;
}

function attr_terms_scripts()
{
	$assets = get_assets('attr/attr-manager');
	if (!$assets) {
		return;
	}

	$assets['dependencies'][] = 'jquery';
	wp_enqueue_media();
	wp_register_script('sasw_admin_attr_manager', $assets['files']['js'], $assets['dependencies'], $assets['version'], ['in_footer' => true]);
	wp_register_style('sasw_admin_attr_manager', $assets['files']['css'], [], $assets['version']);

	$config = get_ajax_configs();
	$config['current_tax'] = get_current_tax_type();

	if (isset($_GET['tag_ID'])) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$config['current_term'] = get_swatch_data(absint($_GET['tag_ID'])); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	}

	wp_localize_script('sasw_admin_attr_manager', 'SASW_SWATCHES', $config);
	wp_enqueue_script('sasw_admin_attr_manager');
	wp_enqueue_style('sasw_admin_attr_manager');

	add_filter('script_loader_src', __NAMESPACE__ . '\maybe_change_admin_js', 10, 2);
}


function product_attr_scripts()
{
	$assets = get_assets('attr/product-attributes');
	if (!$assets) {
		return;
	}

	$assets['dependencies'][] = 'jquery';
	wp_enqueue_media();
	wp_register_script('sasw_admin_product_attr', $assets['files']['js'], $assets['dependencies'], $assets['version'], ['in_footer' => true]);
	wp_register_style('sasw_admin_product_attr', $assets['files']['css'], [], $assets['version']);


	$config = get_ajax_configs();
	if (isset($_GET['edit'])) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$config['id'] = absint($_GET['edit']); // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	}

	wp_localize_script('sasw_admin_product_attr', 'SASW_SWATCHES', $config);
	wp_enqueue_script('sasw_admin_product_attr');
	wp_enqueue_style('sasw_admin_product_attr');
}



function admin_scripts()
{

	$screen    = get_current_screen();
	$taxonomy = $screen ? $screen->taxonomy : '';

	if ('product_page_product_attributes' === $screen->id) {
		product_attr_scripts();
		return;
	}

	$attrs = get_wc_tax_attrs();
	if (!isset($attrs[$taxonomy])) {
		return;
	}

	attr_terms_scripts();
}


function update_attribute($id, $data = [])
{
	global $wpdb;

	$desc =  isset($_POST['sasw_attr_desc']) ? sanitize_text_field($_POST['sasw_attr_desc']) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Missing
	$label =  isset($_POST['sasw_attr_btn_label']) ? sanitize_text_field($_POST['sasw_attr_btn_label']) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Missing
	$title =  isset($_POST['sasw_attr_modal_title']) ? sanitize_text_field($_POST['sasw_attr_modal_title']) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Missing
	$save_data =  [
		'description' =>  $desc,
		'title' =>  $title,
		'button_label' =>  $label,
	];
	$table =  $wpdb->prefix . 'sasw_attr_tax_data';
	$row = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table WHERE attr_id = %d LIMIT 1", $id)); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching,WordPress.DB.PreparedSQL.InterpolatedNotPrepared

	if ($row) {
		$wpdb->update( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching
			$table,
			$save_data,
			array('attr_id' => $id),
		); 
	} else {
		$save_data['attr_id'] = $id;
		$wpdb->insert( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching
			$table,
			$save_data,
		);
	}
}

function delete_attribute($id)
{
	global $wpdb;
	$table =  $wpdb->prefix . 'sasw_attr_tax_data';
	$wpdb->query($wpdb->prepare("DELETE FROM {$table} WHERE attr_id = %d", $id)); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching,WordPress.DB.PreparedSQL.InterpolatedNotPrepared
}
add_action('woocommerce_attribute_updated', __NAMESPACE__ . '\update_attribute', 10, 2);
add_action('woocommerce_attribute_added', __NAMESPACE__ . '\update_attribute', 10, 2);
add_action('woocommerce_attribute_deleted', __NAMESPACE__ . '\delete_attribute', 10, 1);

function add_attribute_fields()
{
?>
	<div class="form-field">
		<label for="sasw_attr_btn_label"><?php esc_html_e('Button label', "sa-swatches"); ?></label>
		<div class="sasw_attribute_field">
			<input name="sasw_attr_btn_label" id="sasw_attr_btn_label" type="text" value="">
			<p class="description"><?php esc_html_e('E.g: View chart size', "sa-swatches"); ?></p>
		</div>
	</div>
	<div class="form-field">
		<label for="sasw_attr_modal_title"><?php esc_html_e('Modal title', "sa-swatches"); ?></label>
		<div class="sasw_attribute_field">
			<input name="sasw_attr_modal_title" id="sasw_attr_modal_title" type="text" value="">
			<p class="description"><?php esc_html_e('E.g: View chart size', "sa-swatches"); ?></p>
		</div>
	</div>
	<div class="form-field">
		<label for="sasw_attribute_settings"><?php esc_html_e('Description', "sa-swatches"); ?></label>
		<div class="sasw_attribute_field"><?php wp_editor("", 'sasw_attr_desc', ['textarea_rows' => 15]); ?></div>
		<div class="sasw_attribute_settings"></div>
	</div>
<?php
}
function edit_attribute_fields()
{

	$id = isset($_GET['edit']) ? absint($_GET['edit']) : 0; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
	$data = get_custom_attr_data($id);


?>
	<tr class="form-field form-required">
		<th scope="row" valign="top">
			<label for="sasw_attr_btn_label"><?php esc_html_e('Button label', "sa-swatches"); ?></label>
		</th>
		<td>
			<div class="sasw_attribute_field "><input name="sasw_attr_btn_label" id="sasw_attr_btn_label" type="text" value="<?php echo esc_attr($data['button_label']); ?>"></div>
			<p class="description"><?php esc_html_e('E.g: View chart size', "sa-swatches"); ?></p>
		</td>
	</tr>
	<tr class="form-field form-required">
		<th scope="row" valign="top">
			<label for="sasw_attr_modal_title"><?php esc_html_e('Modal title', "sa-swatches"); ?></label>
		</th>
		<td>
			<div class="sasw_attribute_field "><input name="sasw_attr_modal_title" id="sasw_attr_modal_title" type="text" value="<?php echo esc_attr($data['title']); ?>"></div>
		</td>
	</tr>
	<tr class="form-field form-required">
		<th scope="row" valign="top">
			<label for="sasw_attribute_settings"><?php esc_html_e('Description', "sa-swatches"); ?></label>
		</th>
		<td>
			<div class="sasw_attribute_field "><?php wp_editor($data['description'], 'sasw_attr_desc', ['textarea_rows' => 15]); ?></div>
			<div class="sasw_attribute_settings"></div>
		</td>
	</tr>
<?php
}

add_action('woocommerce_after_add_attribute_fields', __NAMESPACE__ . '\add_attribute_fields');
add_action('woocommerce_after_edit_attribute_fields', __NAMESPACE__ . '\edit_attribute_fields');
