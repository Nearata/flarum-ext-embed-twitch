import EmbedTwitchModal from "./components/EmbedTwitchModal";
import load from "external-load";
import Button from "flarum/common/components/Button";
import TextEditor from "flarum/common/components/TextEditor";
import Tooltip from "flarum/common/components/Tooltip";
import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import CommentPost from "flarum/forum/components/CommentPost";

let loaded = false;

const addResources = async () => {
    if (loaded) {
        return;
    }

    await load.js("https://embed.twitch.tv/embed/v1.js");

    loaded = true;
};

app.initializers.add("nearata-embed-twitch", () => {
    const createInstance = (container: HTMLElement) => {
        const id = container.id;
        const channel = container.dataset.channel;
        const video = container.dataset.video;
        const collection = container.dataset.collection;
        const layout = container.dataset.layout;

        new Twitch.Embed(id, {
            width: 854,
            height: 480,
            channel: channel,
            video: video,
            collection: collection,
            layout: layout,
            theme: app.forum.attribute("darkMode") ? "dark" : "light",
            allowfullscreen: app.forum.attribute("embedTwitchAllowfullscreen"),
            autoplay: app.forum.attribute("embedTwitchAutoplay"),
            parent: ["localhost"],
        });
    };

    extend(TextEditor.prototype, "controlItems", function (items) {
        if (!app.forum.attribute("nearataEmbedTwitchCanCreate")) {
            return;
        }

        const editor = this.attrs.composer.editor;

        items.add(
            "nearataEmbedTwitch",
            m(
                Tooltip,
                {
                    text: app.translator.trans(
                        "nearata-embed-twitch.forum.button_tooltip_title"
                    ),
                },
                [
                    m(Button, {
                        icon: "fab fa-twitch",
                        class: "Button Button--icon",
                        onclick: () =>
                            app.modal.show(EmbedTwitchModal, {
                                editor: editor,
                            }),
                    }),
                ]
            )
        );
    });

    extend(CommentPost.prototype, "refreshContent", function () {
        const containers = this.element.querySelectorAll(
            ".embed-twitch-container"
        );

        if (!containers.length) {
            return;
        }

        addResources().then(() => {
            for (const i of containers) {
                createInstance(i);
            }
        });
    });
});
