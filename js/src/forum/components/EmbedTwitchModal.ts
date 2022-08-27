import Button from "flarum/common/components/Button";
import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import Select from "flarum/common/components/Select";
import BasicEditorDriver from "flarum/common/utils/BasicEditorDriver";
import app from "flarum/forum/app";

interface Attrs extends IInternalModalAttrs {
    editor: BasicEditorDriver;
}

export default class EmbedTwitchModal extends Modal<Attrs> {
    contentType: string;
    channel: string;
    collection: string;
    video: string;
    layout: string;

    oninit(vnode: any) {
        super.oninit(vnode);

        this.contentType = "channel";
        this.channel = "";
        this.collection = "";
        this.video = "";
        this.layout = "video-with-chat";
    }

    className() {
        return "EmbedTwitchModal Modal--small";
    }

    title() {
        return "Embed Twitch";
    }

    content() {
        return [
            m(".Modal-body", [
                m(".Form", [
                    m(".Form-group", [
                        m(
                            "label",
                            app.translator.trans(
                                "nearata-embed-twitch.forum.modal.label.type"
                            )
                        ),
                        m(Select, {
                            options: {
                                channel: app.translator.trans(
                                    "nearata-embed-twitch.forum.modal.options.channel"
                                ),
                                video: app.translator.trans(
                                    "nearata-embed-twitch.forum.modal.options.video"
                                ),
                                collection: app.translator.trans(
                                    "nearata-embed-twitch.forum.modal.options.collection"
                                ),
                            },
                            value: this.contentType,
                            onchange: (value) => (this.contentType = value),
                        }),
                    ]),
                    this.contentType === "channel"
                        ? m(".Form-group", [
                              m(
                                  "label",
                                  app.translator.trans(
                                      "nearata-embed-twitch.forum.modal.label.channel"
                                  )
                              ),
                              m("input", {
                                  type: "name",
                                  name: "text",
                                  class: "FormControl",
                                  disabled: this.loading,
                                  oninput: (e: any) =>
                                      (this.channel = e.target.value),
                                  autocomplete: "off",
                                  placeholder: "lirik",
                              }),
                          ])
                        : null,
                    this.contentType === "collection"
                        ? m(".Form-group", [
                              m(
                                  "label",
                                  app.translator.trans(
                                      "nearata-embed-twitch.forum.modal.label.collection"
                                  )
                              ),
                              m("input", {
                                  type: "name",
                                  name: "text",
                                  class: "FormControl",
                                  disabled: this.loading,
                                  oninput: (e: any) =>
                                      (this.channel = e.target.value),
                                  autocomplete: "off",
                                  placeholder: "GMEgKwTQpRQwyA",
                              }),
                          ])
                        : null,
                    ["collection", "video"].indexOf(this.contentType) >= 0
                        ? m(".Form-group", [
                              m(
                                  "label",
                                  app.translator.trans(
                                      "nearata-embed-twitch.forum.modal.label.video"
                                  )
                              ),
                              this.contentType === "collection"
                                  ? m(".helpText", "Optional")
                                  : null,
                              m("input", {
                                  type: "name",
                                  name: "text",
                                  class: "FormControl",
                                  disabled: this.loading,
                                  oninput: (e: any) =>
                                      (this.channel = e.target.value),
                                  autocomplete: "off",
                                  placeholder: "124085610",
                              }),
                          ])
                        : null,
                    this.contentType === "channel"
                        ? m(".Form-group", [
                              m(
                                  "label",
                                  app.translator.trans(
                                      "nearata-embed-twitch.forum.modal.label.layout"
                                  )
                              ),
                              m(Select, {
                                  options: {
                                      "video-with-chat": "Video with Chat",
                                      video: "Video",
                                  },
                                  value: this.layout,
                                  onchange: (value: string) =>
                                      (this.layout = value),
                              }),
                          ])
                        : null,
                    m(".Form-group", [
                        m(
                            Button,
                            {
                                className:
                                    "Button Button--primary Button--block",
                                type: "submit",
                                loading: this.loading,
                            },
                            app.translator.trans(
                                "nearata-embed-twitch.forum.modal.save_changes"
                            )
                        ),
                    ]),
                ]),
            ]),
            m(".Modal-footer", [
                m("span", [
                    "Powered by ",
                    m(
                        "a",
                        {
                            href: "https://dev.twitch.tv/docs/embed",
                            target: "_blank",
                        },
                        "Twitch Embed"
                    ),
                ]),
            ]),
        ];
    }

    onsubmit(e: any) {
        e.preventDefault();

        const id = window.crypto.randomUUID();

        const string = `[embed-twitch id="${id}" channel="${this.channel}" video="${this.video}" collection="${this.collection}" layout="${this.layout}" ]`;

        this.attrs.editor.insertAtCursor(string);

        this.hide();
    }
}
