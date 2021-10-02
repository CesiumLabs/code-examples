from PIL import Image
  
#open image in png format
img_png = Image.open('image_name.png')
  
#The image object is used to save the image in jpg format
img_png.save('image_name.jpg')