'use client';
import EditorJS from "@editorjs/editorjs";
import classes from '../styles/editorjs.module.css';
import { useEffect, useRef } from "react";
import { EDITOR_CONFIG } from "../configs/editorjs.config";

const Editor = ({ value, onChange, holder }) => {

    const ref = useRef();

    useEffect(() => {

        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                tools: EDITOR_CONFIG,
                placeholder: 'Write an Amazing Blog',
                data: value,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },
                i18n: {
                    toolNames: {
                        Hyperlink: 'Link'
                    },
                    tools: {
                        hyperlink: {
                            Save: 'Salvar',
                            'Select target': 'Seleziona destinazione',
                            'Select rel': 'Wählen rel'
                        }
                    }
                }
            })

            ref.current = editor;
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);


    return (
        <div id={holder} className={classes.editorjs} py={4} border={'1px solid rgb(190, 195, 224, 0.4)'} borderRadius={6} />
    )
}


export default Editor;