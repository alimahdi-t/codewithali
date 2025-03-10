"use client";

import "./styles.css"; // Styles for code editor
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import ImageResize from "tiptap-extension-resize-image";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import TextDirection from "@/components/RichTextEditor/extensions/TextDirection";
import Loader from "@/components/common/Loader";

interface RichTextEditorProps {
  content: string;
}

export default function ReadOnly({ content, ...props }: RichTextEditorProps) {
  const lowlight = createLowlight(all);

  const editor: Editor | null = useEditor({
    immediatelyRender: false,
    editable: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-3",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-3",
          },
        },
        codeBlock: false,
        code: false,
      }),
      Superscript,
      Subscript,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Highlight.configure({
        multicolor: true,
      }),
      ImageResize,
      Underline,
      Link,
      Typography,
      TextDirection.configure({
        types: ["heading", "paragraph", "listItem", "codeBlock"],
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "max-w-5xl overflow-y-auto prose focus-node",
      },
    },
  });

  if (!editor) {
    return <Loader />;
  }

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
}