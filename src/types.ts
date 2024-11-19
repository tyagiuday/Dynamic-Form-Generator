// src/types.ts
export interface JsonSchema {
    title?: string;
    type: string;
    properties?: {
      [key: string]: JsonSchema;
    };
    required?: string[];
  }