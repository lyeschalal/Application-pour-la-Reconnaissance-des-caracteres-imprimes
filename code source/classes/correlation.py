import numpy
import math



class correlation ():
    def __init__(self):
        pass   
    def corr2(self,a,b):
        #calculer le coefficient de correlation selon la formule suivante:
        a = a - numpy.sum(a) / numpy.size(a)
        b = b - numpy.sum(b) / numpy.size(b)
        r = (a*b).sum() / math.sqrt((a*a).sum() * (b*b).sum())
        return r
