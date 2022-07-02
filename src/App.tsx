import { useCallback, useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<any>(null);

  const handleGo = useCallback(async () => {
    const res = await fetch(url);
    setData(await res.json());
  }, [url]);

  return (
    <div className="">
      <div className="flex px-1 py-2 bg-slate-300 items-center">
        <div className="flex items-center m-1 border bg-white border-gray-400 rounded w-2/6 overflow-hidden">
          <input
            type="text"
            className="p-2 w-full "
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="mr-2">x</div>
        </div>
        <button
          className="px-3 h-10 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold"
          onClick={handleGo}
        >
          Go!
        </button>
      </div>
      <div className="p-2 w-full h-full bg-gray-100">
        <div className="h-80 w-2/4 m-2 flex bg-blue-500">x</div>
        <div className="h-96 flex m-2">
          <Editor
            height="100%"
            width={`50%`}
            language={"json"}
            value={JSON.stringify(data, undefined, 2)}
            theme={"cobalt"}
            defaultValue="// some comment"
            options={{
              minimap: {
                enabled: false,
              },
            }}
            // onChange={handleEditorChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
