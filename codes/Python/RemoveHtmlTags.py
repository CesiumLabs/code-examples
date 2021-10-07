"""
Application: 
- in case you're fetching some dataa & it's returning
  string with html tags, you can just use this function below
  to remove tags & get pure strings!
"""
import re

def RemoveHtml(text : str):
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)
