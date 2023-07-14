import styles from './../../styles/CodeView.module.css';
import dynamic from 'next/dynamic';

const Ace = dynamic(
  async () => {
    const ace = await import('react-ace');
    await import('ace-builds/src-noconflict/mode-javascript');
    await import('ace-builds/src-noconflict/mode-html');
    await import('ace-builds/src-noconflict/mode-css');
    await import('ace-builds/src-noconflict/theme-monokai');
    return ace;
  },
  {
    ssr: false,
  }
);

export const CodeView = ({
  mode,
  title,
  Content,
  handleOnChange,
  handleOnClick,
  buttonText,
  Editor,
}) => {

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitle}>
        {title}
        <button onClick={handleOnClick}>{buttonText}</button>
      </div>
      <Ace
        mode={mode}
        theme='monokai'
        name={title}
        fontSize={14}
        value={Content}
        onChange={handleOnChange}
        width={'100%'}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        tabSize={2}
        setOptions={{
          // enableBasicAutocompletion: false,
          // enableLiveAutocompletion: false,
          // enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};
