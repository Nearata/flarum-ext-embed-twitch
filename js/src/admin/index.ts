import app from "flarum/admin/app";

app.initializers.add("nearata-embed-twitch", (app) => {
    app.extensionData
        .for("nearata-embed-twitch")
        .registerSetting({
            setting: "nearata-embed-twitch.settings.allowfullscreen",
            label: app.translator.trans(
                "nearata-embed-twitch.admin.allowfullscreen"
            ),
            type: "boolean",
        })
        .registerSetting({
            setting: "nearata-embed-twitch.settings.autoplay",
            label: app.translator.trans("nearata-embed-twitch.admin.autoplay"),
            type: "boolean",
        })
        .registerPermission(
            {
                icon: "fas fa-check",
                label: app.translator.trans(
                    "nearata-embed-twitch.admin.permissions.create_twitch"
                ),
                permission: "nearata.embed-twitch.can_use",
                tagScoped: true,
            },
            "start"
        );
});
