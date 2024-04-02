from classes.correlation import correlation
import numpy
class resultat_alphabet():
    def __init__(self):
        self.tab=[-9]*52
        self.tabmoy=[0]*52
    def affecter_tab(self,indice,coef):#affecter le max de coefficient pour chaque lettre alphabetique a son indice de tableau
        if coef>self.tab[indice]: self.tab[indice]=coef
        self.tabmoy[indice]+=coef
    def maxcoef(self):#retoune l'indice du max du tableau de coefficient:
        return self.tab.index(max(self.tab)) 
    def init_tab(self):#initialiser le tableau de coffiecient:
        self.tab=[-9]*52
        self.tabmoy=[0]*52    
    def resultmax(self,tab,test,imguser): #retourne la lettre alphabetique le plus semblable a l'image selon le max de coefficients:
        i=0
        indice=0
        cpt=0
        
        for image in tab:
            sauv=test.corr2(imguser.get_imgcut(),image)
            self.affecter_tab(i//40,sauv)
            i+=1
        return self.maxcoef()
    def result(self,tab,test,imguser,tabchar):# retourne la lettre alphabetique le plus semblable a l'image selon le max et la moyenne de coefficients:
        coefmax=-1
        rslt_Fiabilite=[0,0]
        Fiabilite=0
        tabmoyV2=[0]*52
        if(numpy.sum(imguser.get_imgcut())==0):
            self.tab=[0]*52
            self.tab[17]=1
            self.tabmoy[17]=1
            rslt_Fiabilite[0]="I"
            rslt_Fiabilite[1]=1 
            rslt_Fiabilite+=self.tab
            rslt_Fiabilite+=self.tabmoy
            return rslt_Fiabilite
        rslt=self.resultmax(tab,test,imguser)
        cpt=0
        for i in self.tabmoy:
             tabmoyV2[cpt] = i/40
             cpt+=1
        coefmax=max(self.tab)
        self.tabmoy=tabmoyV2
        Fiabilite=coefmax
        for coef in self.tab:
            if abs(max(self.tab)-coef) <=0.02 and max(self.tab)!=coef :
                rslt=tabmoyV2.index(max(tabmoyV2))
                Fiabilite=self.tab[rslt]
                break
        var_char=0
        if rslt%2==0: var_char=97
        else: var_char=65
        
        rslt_off=chr(var_char+rslt//2)
        rslt_Fiabilite[0]=rslt_off
        rslt_Fiabilite[1]=Fiabilite 
        rslt_Fiabilite+=self.tab
        rslt_Fiabilite+=tabmoyV2

        return rslt_Fiabilite