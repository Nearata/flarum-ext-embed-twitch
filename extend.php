<?php

namespace Nearata\EmbedTwitch;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Post\Event\Saving as PostSaving;

use s9e\TextFormatter\Configurator;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Formatter)
        ->configure(function (Configurator $configurator) {
            $configurator->BBCodes->addCustom(
                '[embed-twitch
                    id="{NUMBER}"
                    channel="{ANYTHING;optional}"
                    video="{ANYTHING2;optional}"
                    collection="{ANYTHING3;optional}"
                    layout="{ANYTHING4;optional}"
                ]',
                '<div
                    id="embed-twitch-{NUMBER}"
                    class="embed-twitch-container"
                    data-channel="{ANYTHING}"
                    data-video="{ANYTHING2}"
                    data-collection="{ANYTHING3}"
                    data-layout="{ANYTHING4}"
                >
                </div>'
            );
        }),
    (new Extend\Settings())
        ->serializeToForum('darkMode', 'theme_dark_mode', function ($value) {
            return (bool) $value;
        })
        ->serializeToForum('embedTwitchAllowfullscreen', 'nearata-embed-twitch.settings.allowfullscreen', function ($value) {
            return (bool) $value;
        })
        ->serializeToForum('embedTwitchAutoplay', 'nearata-embed-twitch.settings.autoplay', function ($value) {
            return (bool) $value;
        }),
    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('nearataEmbedTwitchCanCreate', function (ForumSerializer $serializer) {
            return (bool) $serializer->getActor()->can('nearata.embed-twitch.can_use');
        }),
    (new Extend\Event)
        ->listen(PostSaving::class, function($event) {
            if (Arr::has($event->data, 'attributes.content')) {
                $content = Arr::get($event->data, 'attributes.content');

                if (!Str::contains($content, 'embed-twitch')) {
                    return;
                }

                $event->actor->assertCan('nearata.embed-twitch.can_use');
            }
        })
];
