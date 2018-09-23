<?php

add_action('init', function() {

    register_post_type('article', [
        'labels'    => [
            'name'          => __('Articles'),
            'singular_name' => __('Article'),
            'add_new_item'  => __('Add new article'),
            'edit_item'     => __('Edit article'),
        ],
        'menu_icon' => 'dashicons-welcome-widgets-menus',
        'public'    => true
    ]);

    remove_post_type_support( 'article', 'editor' );


    $fields = [
        acf_post_object([
            'name' => 'author',
            'label' => __('Author'),
            'instructions' => __('Select the author of the article.'),
            'post_type' => ['author'],
            'required' => true,
            'taxonomy' => [],
            'allow_null' => false,
            'multiple' => false,
        ]),
        acf_post_object([
            'name' => 'magazine',
            'label' => __('Magazine'),
            'instructions' => __('Select which magazine the article was published in'),
            'post_type' => ['magazine'],
            'required' => true,
            'taxonomy' => [],
            'allow_null' => false,
            'multiple' => false,
        ]),
        acf_textarea([
            'name' => 'description',
            'label' => __('Description'),
            'instructions' => __('Add a description of the article.'),
            'required' => true,
        ]),
        acf_flexible_content([
            'name'          => 'sections',
            'label'         => __('Sections'),
            'button_label'  => __('Add a new section'),
            'layouts'        => [
                acf_layout([
                    'name'          => 'image_section',
                    'label'         => __('Section with image'),
                    'sub_fields'    => [
                        acf_wysiwyg([
                            'name' => 'content',
                            'label' => __('Content'),
                            'instructions' => __('Add the text content.'),
                            'required' => true,
                            'media_upload' => false,
                            'tabs' => ['visual', 'text'],
                            'toolbar' => 'simple',
                        ]),
                        acf_image([
                            'name' => 'image',
                            'label' => __('Image'),
                            'instructions' => __('Add the image.'),
                            'required' => true,
                        ])
                    ]
                ]),
                acf_layout([
                    'name'          => 'quote_section',
                    'label'         => __('Section with quote'),
                    'sub_fields'    => [
                        acf_wysiwyg([
                            'name' => 'content',
                            'label' => __('Content'),
                            'instructions' => __('Add the text content.'),
                            'required' => true,
                            'media_upload' => false,
                            'tabs' => 'visual',
                            'toolbar' => 'simple',
                        ]),
                        acf_text([
                            'name' => 'quote',
                            'label' => __('Quote'),
                            'instructions' => __('Add the quote to highlight.'),
                            'required' => true,
                        ])
                    ]
                ])
            ]
        ])
    ];

    acf_field_group([
        'title' => __('Article Sections'),
        'fields' => $fields,
        'style' => 'seamless',
        'location' => [
            [acf_location('post_type', 'article')]
        ],
    ]);
});
