<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2', '/articles/', [
        'methods' => 'GET',
        'callback' => function () {
            $posts = get_posts([
                'post_type' => 'article',
            ]);

            $formattedPosts = [];

            foreach ($posts as $post) {
                $post->fields = get_fields($post->ID);
                $post->fields['magazine']->published = get_field('published', $post->fields['magazine']->ID);
                $formattedPosts[] = [
                    'id' => $post->ID,
                    'title' => $post->post_title,
                    'slug' => $post->post_name,
                    'author' => [
                        'name' => $post->fields['author']->post_title,
                        'id' => $post->fields['author']->ID,
                    ],
                    'magazine' => [
                        'title' => $post->fields['magazine']->post_title,
                        'published' => $post->fields['magazine']->published,
                    ],
                    'lead' => $post->fields['lead'],
                    'image' => $post->fields['image'],
                    'sections' => $post->fields['sections'],
                ];
            }
            return $formattedPosts;
        }
    ]);

    register_rest_route( 'wp/v2', '/articles/(?P<id>\d+)', [
        'methods' => 'GET',
        'callback' => function ($data) {
            $post = get_post($data['id']);
            $post->fields = get_fields($post->ID);

            $formattedPost = [
                'id' => $post->ID,
                'title' => $post->post_title,
                'slug' => $post->post_name,
                'author' => [
                    'name' => $post->fields['author']->post_title,
                    'id' => $post->fields['author']->ID,
                ],
                'magazine' => [
                    'title' => $post->fields['magazine']->post_title,
                    'published' => get_field('published', $post->fields['magazine']->ID),
                ],
                'lead' => $post->fields['lead'],
                'image' => $post->fields['image'],
                'sections' => $post->fields['sections'],
            ];
            return $formattedPost;
        }
    ]);

});
