<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2', '/articles/', [
        'methods' => 'GET',
        'callback' => function () {
            $posts = get_posts([
                'post_type' => 'article',
            ]);
            foreach ($posts as $post) {
                $post->fields = get_fields($post->ID);
            }
            return $posts;
        }
    ]);

    register_rest_route( 'wp/v2', '/articles/(?P<id>\d+)', [
        'methods' => 'GET',
        'callback' => function ($data) {
            $post = get_post($data['id']);
            $post->fields = get_fields($post->ID);
            $post->fields['magazine']->published = get_field('published', $post->fields['magazine']->ID);
            return $post;
        }
    ]);

});
