import os
from google import genai
try:
    client = genai.Client()
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents='Translate "Hello" to Spanish.'
    )
    print("Success:", response.text)
except Exception as e:
    print("Error:", e)
