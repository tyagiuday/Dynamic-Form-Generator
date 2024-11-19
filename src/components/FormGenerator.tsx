import React, { useEffect, useState } from 'react';
import { JsonSchema } from '../types';

interface FormGeneratorProps {
  schema: JsonSchema;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const [formData, setFormData] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simple validation based on required fields
    if (schema.required) {
      for (const field of schema.required) {
        if (!formData[field]) {
          setError(`Field ${field} is required.`);
          return;
        }
      }
    }
    console.log(formData);
    setSuccess(true);
    setError(null);
  };

  return (
    <div className="p-4 border border-gray-300">
      <form onSubmit={handleSubmit}>
        {schema.properties &&
          Object.entries(schema.properties).map(([key, value]) => (
            <div key={key} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{key}</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Form submitted successfully!</p>}
      </form>
    </div>
  );
};

export default FormGenerator;