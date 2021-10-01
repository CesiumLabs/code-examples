#!/usr/bin/env python
'''
Python package for ranked retrieval algorithms.
This file contains the code for jaccard coefficient.

'''
import numpy as np
import pandas as pd
import os
import string
from nltk.tokenize import sent_tokenize,word_tokenize
from nltk.corpus import stopwords

__author__ = "Aahan Singh Charak"
__copyright__ = "Copyright 2021"
__credits__ = [""]
__license__ = "MIT"
__version__ = "0.0.0"
__maintainer__ = "Aahan Singh Charak"
__status__ = ""

class Jaccard:
    
    def __init__(self,corpusPath):
        '''
        Constructor  function for the jackard class. 
        Inputs:
        corpusPath => path to the corpus (str)
        returns => None.
        '''
        self.corpusPath=corpusPath
    
    def listDocuments(self):
        '''
        Returns a list containing the documents in the corpus.
        Input=>None
        returns=> list.
        '''
        docNames=[]
        
        #go through each file
        for filename in os.listdir(self.corpusPath):
            #check for txt files
            if filename.endswith(".txt"):
                docNames.append(filename[0:filename.index(".txt")])
                
        return docNames
    
    def coeff(self,query):
        '''
        Calculats the jaccard coefficient score for the corpus.
        Returns a list containing coefficient scores for the corpus.
        Input => query (str).
        Returns => tuple contaning document name and the respective jaccard score
        '''
        coefficients=[]
        docNames=[]
        
        query=query.lower()
        #get normalized query
        norm_query=self.__process_words(query)
        
        for filename in os.listdir(self.corpusPath):
            #add document name to list
            if filename.endswith(".txt"):
                docNames.append(filename[0:filename.index(".txt")])
                
                #open file
                with open(self.corpusPath+filename) as fh:
                    
                    #read file text
                    text=fh.read()
                    text=text.lower()
                    norm_text=self.__process_words(text)
                    
                    #find the total number of elements and the total elements in the corpus
                    norm_text_set=set(norm_text)
                    norm_query_set=set(norm_query)
        
                    common=len(norm_text_set.intersection(norm_query_set))
                    total=len(norm_text_set.union(norm_query_set))
                    
                    jaccard_coeff=common/total
                    coefficients.append(jaccard_coeff)
                    
        #return the info tuple
        return (coefficients,docNames)        
            
        
    def __process_words(self,text):
        '''
        Normalizes document text or query.
        Input => document text | query (str)
        returns => normalized text | query (list).
        '''
        tokens=list(map(lambda s:s.lower(),word_tokenize(text)))
        
        tokens=list(set(tokens))
        
        #remove punctuation
        punctuation=list(string.punctuation)
        punctuation.append("''")
        
        tokens=[token for token in tokens if token not in punctuation]
        
        #remove stopwords
        st_words=stopwords.words("english")
        tokens=[token for token in tokens if token not in st_words]
        return tokens
        
