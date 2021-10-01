import cv2
import os

dataset = 'main_directory'
name = 'sub_directory'

path = os.path.join(dataset,name)
if not os.path.isdir(path):
    os.mkdir(path)

#for creating the path of the data set

#for formating the image

(width,height) = (130,100)
alg =  "haarcascade_frontalface_default.xml"
haar_cascade = cv2.CascadeClassifier(alg)
cam = cv2.VideoCapture(0)

count = 1
while count < 31:
    print(count)
    _,img = cam.read()
    grayImg = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

    face = haar_cascade.detectMultiScale(grayImg,1.3,4)
    for (x,y,w,h) in face:
        cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)
        faceOnly = grayImg[y:y+h,x:x+w]
        resizeImg = cv2.resize(faceOnly,(width,height))
        cv2.imwrite("%s/%s.jpg" %(path,count),resizeImg)
        count+=1
    cv2.imshow("Resources/FaceDetection",img)
    key = cv2.waitKey(10)
    if key == 27:
        break
print("Image Captured")
cam.release()
cv2.destroyAllWindows()