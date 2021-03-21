app.initializers.add('nearata-embed-twitch', app => {
    app.extensionData.for('nearata-embed-twitch')
        .registerSetting(
            {
                setting: 'nearata-embed-twitch.settings.allowfullscreen',
                label: app.translator.trans('nearata-embed-twitch.admin.allowfullscreen'),
                type: 'boolean'
            }
        )
        .registerSetting(
            {
                setting: 'nearata-embed-twitch.settings.autoplay',
                label: app.translator.trans('nearata-embed-twitch.admin.autoplay'),
                type: 'boolean'
            }
        )
        .registerPermission(
        {
            icon: 'fas fa-check',
            label: 'Can use embed twitch',
            permission: 'nearata.embed-twitch.can_use'
        }, 'start', 95);
});
