#SOLID COLOUR(R,G,B)
#RED COLOUR BACKGROUND


import numpy as np
import cv2

img = np.zeros((250,250,3))
img[:] = 0,0,255
cv2.imshow('RED',img)

cv2.waitKey(0)
cv2.destroyAllWindows()