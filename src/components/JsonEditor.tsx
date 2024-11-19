// src/components/JsonEditor.tsx
import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import { JsonSchema } from '../types';

interface JsonEditorProps {
  onChange: (schema: JsonSchema) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onChange }) => {
  const [json, setJson] = useState<string>('{"type": "object", "properties": {}}');

  const handleJsonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setJson(value);

    try {
      const parsedJson = JSON.parse(value);
      onChange(parsedJson);
    } catch (error) {
      console.error('Invalid JSON', error);
    }
  };

  return (
    <div className="p-4 border border-gray-300">
      <textarea
        className="w-full h-64 p-2 border border-gray-300"
        value={json}
        onChange={handleJsonChange}
      />
      <ReactJson src={JSON.parse(json)} theme="monokai" />
    </div>
  );
};

export default JsonEditor;