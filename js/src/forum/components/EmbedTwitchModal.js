import Button from 'flarum/common/components/Button';
import Modal from 'flarum/common/components/Modal';
import Select from 'flarum/common/components/Select';

export default class CustomModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.content_type = 'channel';
        this.channel = '';
        this.collection = '';
        this.video = '';
        this.layout = 'video-with-chat';
    }

    className() {
        return 'EmbedTwitchModal Modal--small';
    }

    title() {
        return 'Embed Twitch';
    }

    content() {
        return [
            m('.Modal-body', [
                m('.Form', [
                    m('.Form-group', [
                        m('label', app.translator.trans('nearata-embed-twitch.forum.modal.label.type')),
                        m(Select, {
                            options: {
                                channel: app.translator.trans('nearata-embed-twitch.forum.modal.options.channel'),
                                video: app.translator.trans('nearata-embed-twitch.forum.modal.options.video'),
                                collection: app.translator.trans('nearata-embed-twitch.forum.modal.options.collection')
                            },
                            value: this.content_type,
                            onchange: value => this.content_type = value
                        })
                    ]),
                    this.content_type === 'channel' ? m('.Form-group', [
                        m('label', app.translator.trans('nearata-embed-twitch.forum.modal.label.channel')),
                        m('input', {
                            type: 'name',
                            name: 'text',
                            class: 'FormControl',
                            disabled: this.disabled,
                            oninput: e => this.channel = e.target.value,
                            autocomplete: 'off',
                            placeholder: 'lirik'
                        })
                    ]) : null,
                    this.content_type === 'collection' ? m('.Form-group', [
                        m('label', app.translator.trans('nearata-embed-twitch.forum.modal.label.collection')),
                        m('input', {
                            type: 'name',
                            name: 'text',
                            class: 'FormControl',
                            disabled: this.disabled,
                            oninput: e => this.channel = e.target.value,
                            autocomplete: 'off',
                            placeholder: 'GMEgKwTQpRQwyA'
                        })
                    ]) : null,
                    ['collection', 'video'].indexOf(this.content_type) >= 0 ? m('.Form-group', [
                        m('label', app.translator.trans('nearata-embed-twitch.forum.modal.label.video')),
                        this.content_type === 'collection' ? m('.helpText', 'Optional') : null,
                        m('input', {
                            type: 'name',
                            name: 'text',
                            class: 'FormControl',
                            disabled: this.disabled,
                            oninput: e => this.channel = e.target.value,
                            autocomplete: 'off',
                            placeholder: '124085610'
                        })
                    ]) : null,
                    this.content_type === 'channel' ? m('.Form-group', [
                        m('label', app.translator.trans('nearata-embed-twitch.forum.modal.label.layout')),
                        m(Select, {
                            options: {
                                'video-with-chat': 'Video with Chat',
                                video: 'Video'
                            },
                            value: this.layout,
                            onchange: value => this.layout = value
                        })
                    ]) : null,
                    m('.Form-group', [
                        m(Button, {
                            className: 'Button Button--primary Button--block',
                            type: 'submit',
                            loading: this.loading
                        }, app.translator.trans('nearata-embed-twitch.forum.modal.save_changes'))
                    ])
                ])
            ]),
            m('.Modal-footer', [
                m('span', [
                    'Powered by ',
                    m('a', {
                        href: 'https://dev.twitch.tv/docs/embed',
                        target: '_blank'
                    }, 'Twitch Embed')
                ])
            ])
        ];
    }

    onsubmit(e) {
        e.preventDefault();

        const array = new Uint16Array(1);
        const numbers = window.crypto.getRandomValues(array);
        const id = numbers[0];

        const string = `[embed-twitch id="${id}" channel="${this.channel}" video="${this.video}" collection="${this.collection}" layout="${this.layout}" ]`;

        this.attrs.editor.insertAtCursor(string);
        this.hide();
    }
}
