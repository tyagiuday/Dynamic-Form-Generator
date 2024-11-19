// src/App.tsx
import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import FormGenerator from './components/FormGenerator';
import { JsonSchema } from './types';

const App: React.FC = () => {
  const [schema, setSchema] = useState<JsonSchema>({
    type: 'object',
    properties: {},
  });

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">JSON Editor</h2>
        <JsonEditor onChange={setSchema} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Generated Form</h2>
        <FormGenerator schema={schema} />
      </div>
    </div>
  );
};

export default App;