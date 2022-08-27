<?php

namespace Nearata\EmbedTwitch\Listener;

use Flarum\Post\Event\Saving;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class PostSavingListener
{
    public function handle(Saving $event)
    {
        $content = Arr::get($event->data, 'attributes.content');

        if (!Str::contains($content, '[embed-twitch')) {
            return;
        }

        $event->actor->assertCan('nearata.embed-twitch.can_use');
    }
}
