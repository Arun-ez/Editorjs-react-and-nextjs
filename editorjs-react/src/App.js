import { useState } from 'react'
import Editor from './components/Editor'

const App = () => {

  const [data, setData] = useState('');

  return (
    <div>
      <Editor value={data} onChange={setData} holder="editorjs-container" />
    </div>
  )
}

export default App
