"use client";

import "./styles.css"; // Styles for code editor
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import TextAlign from "@tiptap/extension-text-align";
import ToolBar from "./ToolBar";
import Highlight from "@tiptap/extension-highlight";
import ImageResize from "tiptap-extension-resize-image";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import CharacterCount from "@tiptap/extension-character-count";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import TextDirection from "@/components/RichTextEditor/extensions/TextDirection";
import { Skeleton } from "@/components/ui/skeleton";
import { convertToPersianNumbers } from "@/utils";

interface RichTextEditorProps {
  content: string;
  onChangeAction: (html: string) => void;
  charLimit?: number;
  charCounterMode?: "textSize" | "nodeSize";
}

export default function RichTextEditor({
  content,
  onChangeAction,
  charLimit = 500,
  charCounterMode = "textSize",
  ...props
}: RichTextEditorProps) {
  const lowlight = createLowlight(all);

  const editor: Editor | null = useEditor({
    immediatelyRender: false,
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

      CharacterCount.configure({
        limit: charLimit,
        mode: "nodeSize",
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "max-w-5xl min-h-[300px] max-h-[500px] overflow-y-auto border rounded-md bg-slate-50 px-3 py-2 prose",
      },
    },
    onUpdate: ({ editor }) => {
      onChangeAction(editor.getHTML());
    },
  });

  if (!editor) {
    return (
      <div className="w-full flex flex-col gap-y-0.5">
        <Skeleton className="w-full border rounded-md py-1 px-2 mb-1 bg-slate-50 sticky  top-10 z-50 flex flex-wrap justify-end items-center gap-3 ">
          {Array.from({ length: 22 }).map((_, i) => (
            <Skeleton key={i} className="w-5 h-5 bg-gray-400 rounded-full" />
          ))}
        </Skeleton>
        <Skeleton className="max-w-5xl min-h-[300px] max-h-[500px] overflow-y-auto border rounded-md bg-slate-50 px-3 py-2 prose"></Skeleton>
        <div
          className={`relative bottom-16 right-4 text-xs text-gray-600/50 flex items-start gap-2 character-count`}
        >
          <Skeleton className="w-6 h-6 bg-gray-400 rounded-full" />
          <div>
            <Skeleton className="w-12 h-2.5 bg-gray-400 rounded-3xl" />
            <Skeleton className="w-8 h-2.5 mt-1.5 bg-gray-400 rounded-3xl" />
          </div>
        </div>
      </div>
    );
  }

  const percentage = editor
    ? Math.round((100 / charLimit) * editor.storage.characterCount.characters())
    : 0;

  return (
    <>
      <ToolBar editor={editor} />
      <EditorContent editor={editor} {...props} spellCheck={false} />
      {/*C1: Character Counter UI*/}
      <div
        className={`relative bottom-16 right-4 text-xs text-gray-600/50 flex items-start gap-2 character-count ${
          editor.storage.characterCount.characters() === charLimit
            ? "character-count--warning"
            : ""
        }`}
      >
        <svg height="20" width="20" viewBox="0 0 20 20">
          <circle r="10" cx="10" cy="10" fill="#e9ecef" />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
            transform="rotate(-90) translate(-20)"
          />
          <circle r="6" cx="10" cy="10" fill="white" />
        </svg>
        {convertToPersianNumbers(editor.storage.characterCount.characters())} /{" "}
        {convertToPersianNumbers(charLimit)} حرف
        <br />
        {convertToPersianNumbers(editor.storage.characterCount.words())} کلمه
      </div>

      {/*<div dangerouslySetInnerHTML={{ __html: editor.getHTML() }} />*/}
    </>
  );
}