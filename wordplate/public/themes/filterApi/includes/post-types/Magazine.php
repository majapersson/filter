<?php

add_action('init', function() {

    register_post_type('magazine', [
        'labels'    => [
            'name'          => __('Magazines'),
            'singular_name' => __('Magazine'),
            'add_new_item'  => __('Add new magazine'),
            'edit_item'     => __('Edit magazine'),
        ],
        'menu_icon' => 'dashicons-book',
        'public'    => true
    ]);

    remove_post_type_support( 'magazine', 'editor' );

    $fields = [
        acf_date_picker([
            'name' => 'published',
            'label' => __('Publication date'),
            'instructions' => __('Add the publication date.'),
            'required' => true,
            'display_format' => 'd/m/Y',
            'return_format' => 'd F Y',
        ])
    ];

    acf_field_group([
        'title' => __('Magazine'),
        'fields' => $fields,
        'style' => 'seamless',
        'location' => [
            [acf_location('post_type', 'magazine')]
        ],
    ]);
});
