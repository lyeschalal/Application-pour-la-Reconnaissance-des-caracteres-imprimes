import os
class Testimg():
    def __init__(self):
        pass
    def testimg(self,imgtest1,test,result,tab,tabchar):#retourne le taux d'erreur et le faux negatif:
        cpterreur=0
        directory2="test1/"
        cpttest=0
        cpt=0
        cptfn=0
        pourcentage=10
        for filename in os.listdir(directory2):#parcourir les images a tester:
            f=os.path.join(directory2,filename)
            for filenameimg in os.listdir(f):
                cpt+=1
                f1=os.path.join(f,filenameimg)
                imgtest1.importer(f1)
                imgtest1.noir_blanc()
                result.init_tab()
                chiffre = result.result(tab,test,imgtest1,tabchar)[0]
                if (chiffre=="ce n'est pas un chiffre") : 
                    cptfn+=1
                if cpttest !=  chiffre:
                    cpterreur+=1
                    print(cpttest,chiffre)
                    print(result.tab)
            cpttest+=1 
            print(str(pourcentage)+"%")
            pourcentage+=10
        print('faux négatif',100*cptfn/cpt)
        return 100*cpterreur/cpt
    def testfpost(self,imgtest1,test,result,tab,tabchar):#reourne le faux positif:
        directory2="datasetchar/"
        cpt=0
        cptfp=0
        pourcentage=10
        for filename in os.listdir(directory2):#parcourir les images a tester:
            f1 = os.path.join(directory2, filename)
            cpt+=1
            imgtest1.importer(f1)
            imgtest1.noir_blanc()
            result.init_tab()
            chiffre = result.result(tab,test,imgtest1,tabchar)[0]
            if (chiffre!="ce n'est pas un chiffre"):
                cptfp+=1
                print(f1)
            print(str(pourcentage)+"%")
            pourcentage+=10
        return 100*cptfp/cpt
                
                
