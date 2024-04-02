from tkinter import Tk
from tkinter.filedialog import askopenfilename
import cv2
from cv2 import INTER_AREA
from cv2 import destroyAllWindows
from cv2 import imwrite
from numpy import asanyarray
from classes.Image import Image
from cv2 import imread, imshow, waitKey



class User_img(Image):
    def __init__(self):
        super().__init__()
        self.tab_img=[]
    def affiche_nombre(self):
        return self._num
        

    def affect_nombre(self, nombre):
        self._num = nombre

    def affiche_img_cadre(self, pixL1, pixL2, pixR1, pixR2):#cadrer le chiffre:
        cv2.rectangle(self._image, (pixL1, pixL2),
                      (pixR1, pixR2), (255, 192, 203), 2)
        imwrite("./web/img/img_user_cadre.png",self._image)              

    def importer_user(self):#importer l'image d'utilisateur:
        root = Tk()
        root.withdraw()
        root.wm_attributes('-topmost', 1)
        path_user = askopenfilename(title = "Please select a file",filetypes=(('tous','.png .jpeg .jpg'),('jpg files', '*.jpg'),('png files', '*.png'),('jpeg files', '*.jpeg')))
        if (path_user == ""): return 0 
        super().importer(path_user)
        self._imgcut=self._image
        imwrite("./web/img/img_user.png",self._image)
        return 1
    
    
    def normaliser(self):#normaliser la ressolution d'image(64x64)px
        self._imgcut = cv2.resize(
            self._imgcut, (64, 64), interpolation=INTER_AREA)


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
    def cutting(self, pixL1, pixL2, pixR1, pixR2):
        self._imgcut = self._imgcut[pixL1:pixL2, pixR1:pixR2]

    def affiche_img_cut(self):
        imshow('output', self._imgcut)
        waitKey(0)
        destroyAllWindows()

#retourne les pixeles pour couper l'image afin d'obtenir le chiffre(tous les methodes de recherche_pix):
    def rech_pixLx(self):
        height = self._matrice.shape[0]
        weight = self._matrice.shape[1]
        for i in range(height):
            for j in range(weight): 
                if self._matrice[i, j] == 0:
                    return i

    def rech_pixLy(self):
        height = self._matrice.shape[0]
        weight = self._matrice.shape[1]
        for j in range(weight):
            for i in range(height):
                if self._matrice[i, j] == 0:
                    return j

    def rech_pixRx(self):
        height = self._matrice.shape[0]
        weight = self._matrice.shape[1]
        for i in reversed(range(height)):
            for j in range(weight):
                if self._matrice[i, j] == 0:
                    return i

    def rech_pixRy(self):
        height = self._matrice.shape[0]
        weight = self._matrice.shape[1]
        for j in reversed(range(weight)):
            for i in (range(height)):
                if self._matrice[i, j] == 0:
                    return j
    def loaduser(self):#importer et traiter l'image d'utilisateur:
        if (self.importer_user()==0): return 0
        self.noir_blanc()
        imwrite("./web/img/img_user_N&b.png",self._imgcut)
        var1=self.rech_pixLx()
        var2=self.rech_pixRx()
        var3=self.rech_pixLy()
        var4=self.rech_pixRy()
        self.cutting(var1,var2,var3,var4)
        imwrite("./web/img/img_user_cut.png",self._imgcut)
        self.affiche_img_cadre(var3,var1,var4,var2)
        
        self.normaliser()
        imwrite("./web/img/img_user_normaliser.png",self._imgcut)
        return 1 
    
    def loaduser_segm(self,img):#importer et traiter l'image d'utilisateur qui contient plusieurs chiffres:
        self.noir_blac_seg(img)
        imwrite("./web/img/img_user_N&b.png",self._imgcut)
        var1=self.rech_pixLx()
        var2=self.rech_pixRx()
        var3=self.rech_pixLy()
        var4=self.rech_pixRy()
        self.cutting(var1,var2,var3,var4)
        imwrite("./web/img/img_user_cut.png",self._imgcut)
        
        self.normaliser()
        imwrite("./web/img/img_user_normaliser.png",self._imgcut)
        return 1
        
    def segmentation(self):#permet de segmenter l'image qui contient plusieurs chiffres:
        if (self.importer_user()==0): return 3
        img = self._imgcut
        seg_done=False
        gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) 
        edged =cv2.Canny(img, 100, 200)
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (2, 2))
        closed = cv2.morphologyEx(edged, cv2.MORPH_CLOSE, kernel) 
        (cnts, _) = cv2.findContours(closed.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE) 
        idx = 0 
        tab_pixl=[]
        tab_indx=[]
        tab_pixlin=[]
        if (len(cnts)>1):
            seg_done=True
            for c in cnts:
                [x,y,w,h]= cv2.boundingRect(c)
                if (w>5 and h>5):
                    tab_pixl.append([x,y,w,h])
            for i in range (len(tab_pixl)):
                [a,b,c,d]=tab_pixl[i]
                tab_pixl[i]=[b,a,c,d]
            tab_pixl.sort()
            cpt=0
            [indx1,a,c,d]=tab_pixl[0]
            indx3=indx1
            for i in range (len(tab_pixl)):
                [indx2,a,c,d]=tab_pixl[i]
                if i<(len(tab_pixl)-1):
                    [indx3,a,c,d]=tab_pixl[i+1]
                if abs(indx1-indx2)<10:
                    cpt+=1
                if (abs(indx1-indx3)>10 and i!=len(tab_pixl)) or i==len(tab_pixl)-1:
                    tab_indx.append(cpt)
                    indx1=indx3
                    cpt=0
            for i in range (len(tab_pixl)):
                [a,b,c,d]=tab_pixl[i]
                tab_pixl[i]=[b,a,c,d]
            cpt=0
            cpt2=0
            for i in range(len(tab_indx)):
                tail=tab_indx[i]
                for j in range(tail):
                    tab_pixlin.append(tab_pixl[j+cpt])
                tab_pixlin.sort()
                cpt+=tail
                for k in range(tail):
                    tab_pixl[cpt2]=tab_pixlin[k]
                    cpt2+=1
                tab_pixlin.clear()
            for i in range(len(tab_pixl)):
                [Firp,Secp,Thrp,Fop]=tab_pixl[i]
                idx+=1
                new_img=img[Secp:Secp+Fop,Firp:Firp+Thrp]
                self.tab_img.append(new_img)
        else:
            seg_done=False
        return seg_done