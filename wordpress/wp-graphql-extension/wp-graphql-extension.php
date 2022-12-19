<?php

/**
 * @since             1.0.0
 * @package           WP_GRAPHQL_EXTENSION
 *
 * @wordpress-plugin
 * Plugin Name:       wp-graphql-extension
 * Description:       This extension registers custom data fields for graphql.
 * Version:           1.0.0
 * Author:            Christopher Stolfa
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

/**
 * Allows the custom post type of event to be available in wpgraphql.
 */
add_filter('register_post_type_args', function ($args, $post_type) {
  if ('event' === $post_type) {
    $args['show_in_graphql'] = true;
    $args['graphql_single_name'] = 'event';
    $args['graphql_plural_name'] = 'events';
  }

  return $args;
}, 10, 2);

/**
 * Allows menu side panel data to be available in wpgraphql.
 */
add_filter('register_post_type_args', function ($args, $post_type) {
  if ('menu-side-panel' === $post_type) {
    $args['show_in_graphql'] = true;
    $args['graphql_single_name'] = 'sidePanelItem';
    $args['graphql_plural_name'] = 'sidePanelItems';
  }

  return $args;
}, 10, 2);

/**
 * Add event start and end date fields to event nodes.
 */
add_action('graphql_register_types', function () {
  register_graphql_field('Event', 'eventStartDate', [
    'type' => 'String',
    'description' => __('The start date of an event.', 'wp-graphql'),
    'resolve' => function ($post) {
      $event_start_date = get_post_meta($post->ID, '_event_start_date', true);
      return !empty($event_start_date) ? $event_start_date : null;
    }
  ]);

  register_graphql_field('Event', 'eventEndDate', [
    'type' => 'String',
    'description' => __('The start date of an event.', 'wp-graphql'),
    'resolve' => function ($post) {
      $event_end_date = get_post_meta($post->ID, '_event_end_date', true);
      return !empty($event_end_date) ? $event_end_date : null;
    }
  ]);
});

/**
 * Add filter by event end date to event nodes.
 */
add_filter('graphql_PostObjectsConnectionOrderbyEnum_values', function ($values) {

  $values['EVENT_END_DATE'] = [
    'value' => '_event_end_date',
    'description' => __('The event end date', 'wp-graphql'),
  ];

  $values['EVENT_START_DATE'] = [
    'value' => '_event_start_date',
    'description' => __('The event start date', 'wp-graphql'),
  ];

  return $values;
});


add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $input) {

  if (isset($input['where']['orderby']) && is_array($input['where']['orderby'])) {

    foreach ($input['where']['orderby'] as $orderby) {

      if (!isset($orderby['field']) || '_event_end_date' !== $orderby['field']) {
        continue;
      }

      $query_args['meta_key'] = '_event_end_date';
      $query_args['orderby'] = 'meta_value';
      $query_args['order'] = $orderby['order'];
    }
  }

  return $query_args;
}, 10, 3);

add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $input) {

  if (isset($input['where']['orderby']) && is_array($input['where']['orderby'])) {

    foreach ($input['where']['orderby'] as $orderby) {

      if (!isset($orderby['field']) || '_event_start_date' !== $orderby['field']) {
        continue;
      }

      $query_args['meta_key'] = '_event_start_date';
      $query_args['orderby'] = 'meta_value';
      $query_args['order'] = $orderby['order'];
    }
  }

  return $query_args;
}, 10, 3);
