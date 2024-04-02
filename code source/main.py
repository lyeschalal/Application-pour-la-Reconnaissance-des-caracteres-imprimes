from classes.correlation import correlation
from classes.Image import Image
from classes.User_img import User_img
import os
from classes.resultat import resultat
from classes.test import Testimg
from classes.resultat_alphabet import resultat_alphabet
import eel

#pour relier le code avec l'interface:
cwd=os.getcwd()
eel.init(f'{os.path.dirname(os.path.realpath(__file__))}/web')

@eel.expose
def get_img_user():#pour importer l'image d'utulisateur:
    global imgtest1
    imgtest1 = User_img()
    return imgtest1.loaduser()
@eel.expose
def get_num():#pour obtenir le chiffre correspendent a l'image:
    test = correlation()
    result=resultat()
    return result.result(tab,test,imgtest1,tabchar)
@eel.expose
def get_num_mult_chiffre():#pour obtenir le nombre(plusieurs chiffre) correspendent a l'image:
    test = correlation()
    imgtest1 = User_img()
    result=resultat()
    return result.result_seg(tab,test,imgtest1,tabchar)
@eel.expose    
def get_char():#pour obtenir la lettre alphabetique correspendente a l'image:
    test = correlation()
    result=resultat_alphabet()
    return result.result(tab2,test,imgtest1,tabchar)

@eel.expose    
def chargement():#importer tous les data_set qu'on va utiliser dans notre traitement:
    global imgref 
    imgref = Image()
    global tab
    tab=imgref.load()
    global tabchar
    tabchar=imgref.load_tabchar()
    global tab2
    tab2=imgref.load_alphabet()
    return 1


eel.start('/html/chargement.html', mode='chrome',cmdline_args=['--kiosk','--user-data-dir='+cwd+'/App1'])







#partie pour le teste des performances:

#import data


# imgref = Image()
# tab=imgref.load()
# tabchar=imgref.load_tabchar()

# img_user

# imgtest1 = User_img()
# imgtest1.loaduser()

# imgtest1.affiche_img_cut()
# imgtest1.affiche_img_cadre(imgtest1.rech_pixLy(),imgtest1.rech_pixLx(),imgtest1.rech_pixRy(),imgtest1.rech_pixRx())
# imgtest1.affiche_img()

#corr2

# test = correlation()
# result=resultat()
# print(result.result(tab,test,imgtest1,tabchar))

#test

# imgtest1 = User_img()
# test = correlation()
# result=resultat()
# test1=Testimg()
# # print(test1.testfpost(imgtest1,test,result,tab,tabchar))
# print(test1.testimg(imgtest1,test,result,tab,tabchar))
        
