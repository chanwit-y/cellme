import { useCallback, useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<any>(null);

  const handleGo = useCallback(async () => {
    const res = await fetch(url);
    setData(await res.json())
  }, [url]);
  

  return (
    <div>
      <div className="flex">
        <input
          type="text"
          className="p-1 m-1 border border-gray-400 rounded w-80"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleGo}>Go!</button>
      </div>
      {/* <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div> */}
      <Editor
        height="85vh"
        width={`100%`}
        language={"json"}
        value={JSON.stringify(data, undefined, 2)}
        theme={"cobalt"}
        defaultValue="// some comment"
        // onChange={handleEditorChange}
      />
    </div>
  );
}

export default App;
