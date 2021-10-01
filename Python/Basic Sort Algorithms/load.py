# You call this function with the path to a file you want to load.
# It loads the file contents, converts each line from a string to
# an integer, and returns them all as a Python list.
def load_numbers(file_name):
  numbers = []
  with open(file_name) as f:
    for line in f:
      numbers.append(int(line))
  return numbers