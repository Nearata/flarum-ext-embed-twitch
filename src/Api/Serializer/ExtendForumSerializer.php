<?php

namespace Nearata\EmbedTwitch\Api\Serializer;

use Flarum\Api\Serializer\ForumSerializer;

class ExtendForumSerializer
{
    public function __invoke(ForumSerializer $serializer, array $model, array $attributes)
    {
        return [
            'nearataEmbedTwitchCanCreate' => (bool) $serializer->getActor()->can('nearata.embed-twitch.can_use')
        ];
    }
}
