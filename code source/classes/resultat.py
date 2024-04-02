import numpy
from classes.correlation import correlation
class resultat():
    def __init__(self):
        self.tab=[-9]*10
        self.tabmoy=[0]*10
    def affecter_tab(self,indice,coef):#affecter le max de coefficient pour chaque chiffre a son indice de tableau
        if coef>self.tab[indice]: self.tab[indice]=coef
        self.tabmoy[indice]+=coef
    def maxcoef(self):#retoune l'indice du max du tableau de coefficient: 
        return self.tab.index(max(self.tab)) 
    def init_tab(self):#initialiser le tableau de coffiecient:
        self.tab=[-9]*10
        self.tabmoy=[0]*10    
    def resultmax(self,tab,test,imguser):# retourne le chiffre le plus semblable a l'image selon le max de coefficients: 
        i=0
        tabindice=[37,37,40,43,43,43,43,36,42,38]
        indice=0
        cpt=0
        for image in tab:
            sauv=test.corr2(imguser.get_imgcut(),image)
            if i>=cpt+tabindice[indice]:
                cpt+=tabindice[indice]
                indice+=1
            self.affecter_tab(indice,sauv)
            i+=1
        return self.maxcoef()
    def result(self,tab,test,imguser,tabchar):# retourne le chiffre le plus semblable a l'image selon le max et la moyenne de coefficients:
        coefmax=-1
        rslt_Fiabilite=[0,0]
        Fiabilite=0
        tabindice=[37,37,40,43,43,42,41,36,38,38]
        tabmoyV2=[0]*10
        if(numpy.sum(imguser.get_imgcut())==0):#pour traiter l'image noir:
            self.tab=[0]*10
            self.tab[1]=1
            self.tabmoy[1]=1
            rslt_Fiabilite[0]=1
            rslt_Fiabilite[1]=1 
            rslt_Fiabilite+=self.tab
            rslt_Fiabilite+=self.tabmoy
            return rslt_Fiabilite
        rslt=self.resultmax(tab,test,imguser)
        cpt=0
        for i in self.tabmoy:
             tabmoyV2[cpt] = i/tabindice[cpt]
             cpt+=1
        coefmax=max(self.tab)
        Fiabilite=coefmax
        for coef in self.tab:#pour utiliser la moyenne de coefficient au lieu de max de coefficients si la condition est satisfaite:
                if abs(max(self.tab)-coef) <=0.02 and max(self.tab)!=coef :
                    rslt=tabmoyV2.index(max(tabmoyV2))
                    Fiabilite=self.tab[rslt]
                    break
        if (coefmax<0.7):#verifier si l'image entree n'est pas un chiffre:
            if(coefmax<0.16):
                rslt="ce n'est pas un chiffre"
                Fiabilite=0.5
            for image in tabchar:
                coef=test.corr2(imguser.get_imgcut(),image)
                if (coef>coefmax):
                    rslt="ce n'est pas un chiffre"
                    Fiabilite=coef
                    break
            
        rslt_Fiabilite[0]=rslt
        rslt_Fiabilite[1]=Fiabilite 
        rslt_Fiabilite+=self.tab
        rslt_Fiabilite+=tabmoyV2

        return rslt_Fiabilite
    

    def result_seg(self,tab,test,imguser,tabchar):#retourne le nombre le plus semblable a l'image entree aprse la segmentation:
        nombre=""
        fiab=0
        trm=imguser.segmentation()
        if(trm==3):
            return "load fail"
        if(trm==False):
            return "un seul chiffre"
        for i in range(len(imguser.tab_img)):
            imguser.loaduser_segm(imguser.tab_img[i])
            nombre=nombre+str(self.result(tab,test,imguser,tabchar)[0])
            fiab+=self.result(tab,test,imguser,tabchar)[1]
            self.init_tab()
        tab_rslt=self.result(tab,test,imguser,tabchar)
        tab_rslt[0]=nombre
        tab_rslt[1]=fiab/len(imguser.tab_img)
        return tab_rslt
