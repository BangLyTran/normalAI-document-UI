import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
const MenuBar = editor => {
  if (!editor) {
    return null;
  }

  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';

  const buttons = [
    { label: 'h1', action: () => editor.chain().focus().toggleHeading({ level: 1 }).run() },
    { label: 'h2', action: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
    { label: 'h3', action: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
    { label: 'paragraph', action: () => editor.chain().focus().setParagraph().run() },
    { label: 'bold', action: () => editor.chain().focus().toggleBold().run() },
    { label: 'italic', action: () => editor.chain().focus().toggleItalic().run() },
    { label: 'strike', action: () => editor.chain().focus().toggleStrike().run() },
    { label: 'highlight', action: () => editor.chain().focus().toggleHighlight().run() },
    { label: 'left', action: () => editor.chain().focus().setTextAlign('left').run() },
    { label: 'center', action: () => editor.chain().focus().setTextAlign('center').run() },
    { label: 'right', action: () => editor.chain().focus().setTextAlign('right').run() },
    { label: 'justify', action: () => editor.chain().focus().setTextAlign('justify').run() },
  ];

  buttons.forEach(buttonConfig => {
    const button = document.createElement('button');
    button.innerText = buttonConfig.label;
    button.onclick = buttonConfig.action;
    toolbar.appendChild(button);
  });

  return toolbar;
};

const editor = new Editor({
  element: document.querySelector('.element'),
  extensions: [StarterKit, TextAlign.configure({
    types: ['heading', 'paragraph']
  }), Highlight],
  content: '<p>Your resume content here...</p>'
});

// Render the MenuBar
document.querySelector('.editor').prepend(MenuBar(editor));
