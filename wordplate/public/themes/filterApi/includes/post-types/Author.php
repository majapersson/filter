<?php

add_action('init', function() {

    register_post_type('author', [
        'labels'    => [
            'name'          => __('Authors'),
            'singular_name' => __('Author'),
            'add_new_item'  => __('Add new author'),
            'edit_item'     => __('Edit author'),
        ],
        'menu_icon' => 'dashicons-admin-users',
        'public'    => true
    ]);
});
