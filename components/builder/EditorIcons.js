import {
    icon,
    publishSelect,
    saveBlock,
    trashIconLabel,
    viewComponentsIconLabel,
    eyeIconLabel,
    fullScreenIconLabel,
    codeIconLabel,
    downloadIconLabel,
    imageIconLabel,
    undoIconLabel,
    redoIconLabel,
  } from './IconSvgs';
  
const getIcons = (editor) => {
    editor.Panels.addPanel(icon);
    let trashIcon = editor.Panels.getButton('options', 'canvas-clear');
    trashIcon.attributes.label = trashIconLabel;
  
    let viewComponentIcon = editor.Panels.getButton('options', 'sw-visibility');
    viewComponentIcon.attributes.label = viewComponentsIconLabel;
  
    let eyeIcon = editor.Panels.getButton('options', 'preview');
    eyeIcon.attributes.label = eyeIconLabel;
  
    let fullScreenIcon = editor.Panels.getButton('options', 'fullscreen');
    fullScreenIcon.attributes.label = fullScreenIconLabel;
  
    let codeIcon = editor.Panels.getButton('options', 'export-template');
    codeIcon.attributes.label = codeIconLabel;
  
    let downloadIcon = editor.Panels.getButton(
      'options',
      'gjs-open-import-template'
    );
    downloadIcon.attributes.label = downloadIconLabel;
  
    let imageIcon = editor.Panels.getButton('options', 'gjs-toggle-images');
    imageIcon.attributes.label = imageIconLabel;
  
    let undoIcon = editor.Panels.getButton('options', 'undo');
    undoIcon.attributes.label = undoIconLabel;
  
    let redoIcon = editor.Panels.getButton('options', 'redo');
    redoIcon.attributes.label = redoIconLabel;
  
    return {
      trashIcon,
      viewComponentIcon,
      eyeIcon,
      fullScreenIcon,
      codeIcon,
      downloadIcon,
      imageIcon,
      undoIcon,
      redoIcon
    };
  }
  
  export default getIcons;