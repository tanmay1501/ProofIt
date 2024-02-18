import pathlib
import textwrap

import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

GOOGLE_API_KEY='AIzaSyD_PgJzgN2ojtIYSRgthWP-foxnYaSVGlY'
genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel('gemini-pro')

response = model.generate_content("assume that You are trying to proof household items for 4 different categories of people:, young children, elderly, chronically ill patients, and the physically disabled/handicapped. Give 3 suggestions for each category included in the statement on how to proof the given household item that is detected. question -how do i proof a table?")
print(response.text)

# completion = client.chat.completions.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {"role": "system", "content": "You are trying to proof household items for 4 different categories of people:, young children, elderly, chronically ill patients, and the physically disabled/handicapped. Give 3 suggestions for each category included in the statement on how to proof the given household item that is detected."},
#     {"role": "user", "content": "how do i proof a table for babies?"}
#   ]
# )

# print(completion.choices[0].message)