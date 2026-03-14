import Editor from "@monaco-editor/react";
import "./styles.scss";


const CodeEditor = () => {
  return (
    <div className="CodeEditor">
      <Editor
        height="400px"
        defaultLanguage="javascript"
        defaultValue="// escreva seu código aqui"
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditor;
