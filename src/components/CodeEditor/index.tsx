import Editor from "@monaco-editor/react";
import "./styles.scss";

interface StarterCode {
  starterCode: string
}

const CodeEditor = ({ starterCode }:StarterCode) => {

  return (
    <div className="CodeEditor">
      <Editor
        height="400px"
        defaultLanguage="javascript"
        value={starterCode}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditor;
