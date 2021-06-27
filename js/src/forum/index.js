import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import CommentPost from 'flarum/forum/components/CommentPost';
import TextEditor from 'flarum/forum/components/TextEditor';

import load from 'external-load';
import EmbedTwitchModal from './components/EmbedTwitchModal';

let loaded = false;
const addResources = async () => {
    if (loaded) {
        return;
    }

    await load.js('https://embed.twitch.tv/embed/v1.js');

    loaded = true;
}

app.initializers.add('nearata-embed-twitch', () => {
    const loadPlayers = containers => {
        for (const p of containers) {
            const id = p.id;
            const channel = p.dataset.channel;
            const video = p.dataset.video;
            const collection = p.dataset.collection;
            const layout = p.dataset.layout;

            new Twitch.Embed(id, {
                width: 854,
                height: 480,
                channel: channel,
                video: video,
                collection: collection,
                layout: layout,
                theme: app.forum.attribute('darkMode') ? 'dark' : 'light',
                allowfullscreen: app.forum.attribute('embedTwitchAllowfullscreen'),
                autoplay: app.forum.attribute('embedTwitchAutoplay'),
                parent: ['localhost']
            });
        }
    };

    extend(TextEditor.prototype, 'controlItems', function (items) {
        if (!app.forum.attribute('nearataEmbedTwitchCanCreate')) {
            return;
        }

        const editor = this.attrs.composer.editor;

        items.add(
            'nearataEmbedTwitch',
            m(Button, {
                icon: 'fab fa-twitch',
                class: 'Button Button--icon',
                onclick: () => app.modal.show(EmbedTwitchModal, { editor: editor }),
                oncreate: vnode => $(vnode.dom).tooltip()
            }, app.translator.trans('nearata-embed-twitch.forum.button_tooltip_title'))
        );
    });

    extend(CommentPost.prototype, 'oncreate', function () {
        const containers = this.element.querySelectorAll('.embed-twitch-container');

        if (containers.length) {
            addResources().then(() => {
                const interval = setInterval(() => {
                    if (window.Twitch) {
                        loadPlayers(containers);
                        clearInterval(interval);
                    }
                }, 250);
            })
        }
    });
});
