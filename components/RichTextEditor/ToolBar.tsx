"use client";
import { Toggle } from "../ui/toggle";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  CircleX,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  ImagePlus,
  Italic,
  Link,
  List,
  ListOrdered,
  Palette,
  Redo,
  Strikethrough,
  Subscript,
  Superscript,
  TextQuote,
  Underline,
  Undo,
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ToolBarProps {
  editor: Editor | null;
}

export default function ToolBar({ editor }: ToolBarProps) {
  const [customColor, setCustomColor] = useState("#101828"); // Color for Text
  const [highlightColor, setHighlightColor] = useState("#FEFFA2"); // Default yellow highlight

  if (!editor) return null;

  const applyColor = (color: string) => {
    editor.chain().focus().setColor(color).run();
  };

  const applyHighlight = (color: string) => {
    editor.chain().focus().setHighlight({ color }).run();
  };

  const textColors = [
    { name: "Gray 100", hex: "#F2F4F7" },
    { name: "Gray 200", hex: "#E4E7EC" },
    { name: "Gray 300", hex: "#D0D5DD" },
    { name: "Gray 400", hex: "#98A2B3" },
    { name: "Gray 500", hex: "#667085" },
    { name: "Gray 600", hex: "#475467" },
    { name: "Gray 700", hex: "#344054" },
    { name: "Gray 800", hex: "#1D2939" },
    { name: "Gray 900", hex: "#101828" }, // Default
  ];
  const highlightColorList = [
    { name: "Pastel Yellow", hex: "#FEFFA2" }, // Default
    { name: "Pastel Peach", hex: "#FFD687" },
    { name: "Pastel Pink", hex: "#FBADA3" },
    { name: "Pastel Rose", hex: "#FFB9D5" },
    { name: "Pastel Lavender", hex: "#FAA2EC" },
    { name: "Pastel Purple", hex: "#E07DFB" },
    { name: "Pastel Lime", hex: "#D4FF8B" },
    { name: "Pastel Mint", hex: "#A8FCCB" },
    { name: "Pastel Green", hex: "#A6FF8B" },
    { name: "Pastel Blue", hex: "#BEE3FE" },
    { name: "Pastel Aqua", hex: "#90F7FE" },
    { name: "Pastel Sky", hex: "#98C8EC" },

    { name: "Neon Yellow", hex: "#FCFF00" },
    { name: "Neon Orange", hex: "#FFA600" },
    { name: "Neon Red", hex: "#FF6C5A" },
    { name: "Neon Pink", hex: "#FE7BAF" },
    { name: "Neon Magenta", hex: "#FF6AE8" },
    { name: "Neon Lime", hex: "#B1FF2F" },
    { name: "Neon Teal", hex: "#6BFFA9" },
    { name: "Neon Green", hex: "#3BFE00" },
    { name: "Neon Blue", hex: "#9FD6FF" },
    { name: "Neon Cyan", hex: "#00EDFF" },
    { name: "Neon Navy", hex: "#599BCD" },
  ];

  const addImage = () => {
    const url = window.prompt("URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const Options = [
    {
      icon: <Undo className="size-4" />,
      onClick: () => editor.chain().focus().undo().run(),
      title: "Undo",
    },
    {
      icon: <Redo className="size-4" />,
      onClick: () => editor.chain().focus().redo().run(),
      title: "Redo",
    },
    {
      icon: <Heading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
      title: "Heading 1",
    },
    {
      icon: <Heading2 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
      title: "Heading 2",
    },
    {
      icon: <Heading3 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
      title: "Heading 3",
    },
    {
      icon: <Superscript className="size-4" />,
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
      pressed: editor.isActive("superscript"),
      title: "Superscript",
    },
    {
      icon: <Subscript className="size-4" />,
      onClick: () => editor.chain().focus().toggleSubscript().run(),
      pressed: editor.isActive("subscript"),
      title: "Subscript",
    },
    {
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
      title: "Bold",
    },
    {
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
      title: "Italic",
    },
    {
      icon: <Strikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
      title: "Strikethrough",
    },
    {
      icon: <Underline className="size-4" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      pressed: editor.isActive("underline"),
      title: "Underline",
    },
    {
      icon: <AlignLeft className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
      title: "Align Left",
    },
    {
      icon: <AlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
      title: "Align Center",
    },
    {
      icon: <AlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
      title: "Align Right",
    },
    {
      icon: <List className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
      title: "Bullet List",
    },
    {
      icon: <ListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
      title: "Ordered List",
    },
    {
      icon: <Code className="size-4" />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      pressed: editor.isActive("code"),
      title: "Code Block",
    },
    {
      icon: <TextQuote className="size-4" />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      pressed: editor.isActive("blockquote"),
      title: "Blockquote",
    },
    {
      icon: <Highlighter className="size-4" />,
      onClick: () => {}, // Click handled in the Popover
      pressed: editor.isActive("highlight"),
      title: "Highlight",
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Toggle size="sm" className="flex-col items-center">
              <Highlighter className="size-4" />
              <span
                className="w-4  rounded-full border-b-2"
                style={{ borderColor: highlightColor }}
              />
            </Toggle>
          </PopoverTrigger>
          <PopoverContent className="p-2 flex items-center gap-1.5 flex-wrap">
            {highlightColorList.map((color) => (
              <button
                key={color.hex}
                onClick={() => applyHighlight(color.hex)}
                style={{ backgroundColor: color.hex }}
                className="w-5 h-5 rounded-full"
                title={color.name}
              />
            ))}

            <input
              type="color"
              value={highlightColor}
              onChange={(e) => applyHighlight(e.target.value)}
              className="w-6 h-6 rounded-full border border-gray-300"
              title="Custom Color"
              placeholder="?"
            />
            <CircleX
              className="w-5 h-5 cursor-pointer text-gray-500"
              onClick={() => {
                editor.chain().focus().unsetHighlight().run();
                setHighlightColor("#FEFFA2");
              }}
            />
          </PopoverContent>
        </Popover>
      ),
    },
    {
      icon: <Palette className="size-4" />,
      onClick: () => {},
      pressed: editor.isActive("highlight"),
      title: "Highlight",
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Toggle size="sm" className="flex-col items-center">
              <Palette className="size-4" />
              <span
                className="w-4  rounded-full border-b-2"
                style={{ borderColor: customColor }}
              />
            </Toggle>
          </PopoverTrigger>
          <PopoverContent className="p-2 flex items-center gap-1.5 flex-wrap">
            {textColors.map((color) => (
              <button
                key={color.hex}
                onClick={() => {
                  setCustomColor(color.hex);
                  applyColor(color.hex);
                }}
                style={{ backgroundColor: color.hex }}
                className="w-6 h-6 rounded-full border border-gray-300"
                title={color.name}
              />
            ))}
            <input
              type="color"
              value={customColor}
              onChange={(e) => {
                setCustomColor(e.target.value);
                applyColor(e.target.value);
              }}
              className="w-6 h-6 border border-gray-300 rounded-full"
              title="Custom Color"
            />
            <CircleX
              className="w-5 h-5 cursor-pointer text-gray-500"
              onClick={() => {
                setCustomColor("#101828"); // Reset to default
                editor.chain().focus().unsetColor().run();
              }}
            />
          </PopoverContent>
        </Popover>
      ),
    },
    {
      icon: <Link className="size-4" />,
      onClick: () => {
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("Enter URL", previousUrl || "https://");
        if (url === null) return;
        if (url.trim() === "") {
          editor.chain().focus().unsetLink().run();
        } else {
          const text = window
            .prompt("Enter link text (leave empty to use selected text)")
            ?.trim();
          if (text) {
            editor
              .chain()
              .focus()
              .insertContent(`<a href="${url}" target="_blank">${text}</a>`)
              .run();
          } else {
            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url })
              .run();
          }
        }
      },
      pressed: editor.isActive("link"),
      title: "Add Link",
    },
    {
      icon: <ImagePlus className="size-4" />,
      onClick: () => addImage(),
      pressed: editor.isActive("image"),
      title: "Upload Image",
    },
  ];

  return (
    <div
      dir="ltr"
      className="w-full border rounded-md py-1 mb-1 space-x-1 top-10 z-50 px-1"
    >
      {Options.map((option, i) => (
        <TooltipProvider key={i}>
          <Tooltip>
            <TooltipTrigger asChild>
              {option.component ? (
                option.component
              ) : (
                <Toggle
                  pressed={option.pressed}
                  onPressedChange={option.onClick}
                  size="sm"
                >
                  {option.icon}
                </Toggle>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <span>{option.title}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}