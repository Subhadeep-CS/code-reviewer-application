"use server";

import { OPEN_AI_API_KEY } from "@/lib/constant";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: OPEN_AI_API_KEY,
});

export async function getResultQuery(code: string) {
  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      {
        role: "user",
        content: `Analyze this React UI code:\n\n${code}`,
      },
    ],
  });

  return stream;
}
