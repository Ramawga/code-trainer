import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <div>
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
