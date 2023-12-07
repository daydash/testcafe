print("hi")
import sys
sys.path.append("C:\Users\user\AppData\Roaming\Python\Python3X[-32]\site-packages")
from selenium import webdriver
try:
    print(webdriver)
except Exception as err:
    print("tot",err)