from cv2 import imread, imshow, waitKey
import sys
import numpy
from numpy import asanyarray
import cv2
import os


class Image:
    def __init__(self):
        self._image = 0
        self._num = 0 
        self._matrice = 0
        self._imgcut=0

    def importer(self, path):
        self._image = imread(path)

    def affiche_img(self):
        imshow('output', self._image)
        waitKey(0)
    
    def noir_blanc(self):
        self._imgcut = cv2.cvtColor(self._image, cv2.COLOR_BGR2GRAY)
        thresh, self._imgcut = cv2.threshold(
            self._imgcut, 160, 255, cv2.THRESH_BINARY)
        self._matrice = asanyarray(self._imgcut)
    def noir_blac_seg(self,img):#utiliser pour la segmentation
        self._imgcut = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        thresh, self._imgcut = cv2.threshold(
            self._imgcut, 160, 255, cv2.THRESH_BINARY)
        self._matrice = asanyarray(self._imgcut)
    
    def get_imgcut(self):
        return self._imgcut

    def img_matrice(self):
        self._matrice = asanyarray(self._image)

    def affiche_matrice(self): #juste pour le test
        numpy.set_printoptions(threshold=sys.maxsize)
        print(self._matrice)
    def binariser(self):#binariser la matrice selon le cahier de charge:
        height = self._imgcut.shape[0]
        width = self._imgcut.shape[1]
        for x in range(height):
            for y in range(width):
                if self._imgcut[x, y] != 255:
                    self._imgcut[x, y] = 0
                else:
                    self._imgcut[x, y] = 1 
        self._matrice = asanyarray(self._imgcut)
    def load(self):#chargement de data_set 
        directory="dataset/"
        tab=[]
        for j in range(10):
            directory=directory+str(j)
            for filename in os.listdir(directory):
                f = os.path.join(directory, filename)
                self.importer(f)
                self.noir_blanc()
                tab.append(self.get_imgcut())
            i=0
            directory="dataset/"
        return tab 
    def load_tabchar(self):#chargement de data_set de caracteres specieaux:
        tabchar=[]
        directory="datasetchar"
        for filename in os.listdir(directory):
                f = os.path.join(directory, filename)
                self.importer(f)
                self.noir_blanc()
                tabchar.append(self.get_imgcut())
        return tabchar
    def load_alphabet(self):#chargement de data_set de l'alphabet:
        directory="New_Char_Dataset/"
        tab=[]
        var_char='a'
        for j in range(26):
            directory2=directory+var_char+'/lower/'
            for i in range(2):   
                for filename in os.listdir(directory2):
                    f = os.path.join(directory2, filename)
                    self.importer(f)
                    self.noir_blanc()
                    tab.append(self.get_imgcut())
                directory2=directory+var_char+'/upper/'
            var_char=chr(ord(var_char)+1)
        return tab
