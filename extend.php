<?php

namespace Nearata\EmbedTwitch;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Post\Event\Saving as PostSaving;
use Nearata\EmbedTwitch\Api\Serializer\ExtendForumSerializer;
use Nearata\EmbedTwitch\Formatter\AddTwitchBBCode;
use Nearata\EmbedTwitch\Listener\PostSavingListener;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Formatter)
        ->configure(AddTwitchBBCode::class),

    (new Extend\Settings())
        ->serializeToForum('darkMode', 'theme_dark_mode', 'boolval')
        ->serializeToForum('embedTwitchAllowfullscreen', 'nearata-embed-twitch.settings.allowfullscreen', 'boolval')
        ->serializeToForum('embedTwitchAutoplay', 'nearata-embed-twitch.settings.autoplay', 'boolval'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(ExtendForumSerializer::class),

    (new Extend\Event)
        ->listen(PostSaving::class, PostSavingListener::class)
];
