<?php

namespace Nearata\EmbedTwitch\Formatter;

use s9e\TextFormatter\Configurator;

class AddTwitchBBCode
{
    public function __invoke(Configurator $configurator)
    {
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
    }
}
