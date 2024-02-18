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

response = model.generate_content("give me an image with chair that is baby proof")

# response = model.generate_content("You are proofing household items to make the room in view more accessible and safer to the following groups of people: young children (newborns and toddlers), the elderly (65+), chronically ill patients, and the physically disabled/handicapped (i.e. those who use assistive devices for mobility such as walkers and wheelchairs). Give 3 suggestions for each category included in the statement on how to proof the item(s) that are detected.")
print(response.candidates[0].)
