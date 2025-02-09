from pydantic import BaseModel
import os
from openai import OpenAI
from dotenv import load_dotenv
import json

load_dotenv()

GEM_API_KEY = os.getenv("GEMINI_API_KEY")

client = OpenAI(
    api_key=GEM_API_KEY,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

class FactCheckResponse(BaseModel):
    status: str
    score: float
    verification_details: str

def fact_check(content: str):
    prompt = f"""Must follow: you are not allowed to use any type of special characters like /,* to format the answer.
    You are an expert fact-checker with access to reliable sources and a deep understanding of logical reasoning. Your task is to analyze the following content for factual accuracy and provide a detailed response. Follow these steps:

1. Status: Assign one of the following labels based on your analysis:  
   - Verified: The content is factually accurate and supported by credible evidence.  
   - Misleading: The content contains partial truths, lacks context, or misrepresents facts.  
   - False: The content is factually incorrect and unsupported by evidence.  

2. Confidence Score: Provide a score from 0 to 10 based on the certainty of your analysis:  
   - 0-3: Likely False or unsupported.  
   - 4-6: Partially true but requires clarification or context.  
   - 7-10: Highly likely to be true and well-supported.  

3. Detailed Explanation:  
   - Summarize the key claims in the content.  
   - Provide evidence or reasoning to support your status and score.  
   - If applicable, cite credible sources or explain why the claims are misleading or false.  
   - Highlight any nuances, missing context, or potential biases in the content.  

Content to Verify:  
"{content}"  

Output Format:  
- Status: [Verified/Misleading/False]  
- Confidence Score: [0-10]  
- Explanation: [Detailed reasoning and evidence]  : {content}
    """

    try:
        completion = client.beta.chat.completions.parse(
            model="gemini-1.5-flash",
            messages=[
                {"role": "system", "content": "Analyze the content."},
                {"role": "user", "content": prompt},
            ],
            response_format=FactCheckResponse,
        )

        return completion.choices[0].message.parsed.dict()  

    except Exception as e:
      return {"error": f"Failed to process the request: {str(e)}"}