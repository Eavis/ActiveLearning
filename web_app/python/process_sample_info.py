import sys,os
import numpy as np
import pandas as pd
from lifelines import CoxPHFitter
from lifelines.utils import k_fold_cross_validation

if len(sys.argv)<2:
	sys.exit("usage: python process.py xxx.csv")
data = sys.argv[1]

df = pd.read_csv(data,index_col=0)
df = df.dropna(axis=0,how='any')

#standardization for age
age_col = df['age_at_initial_pathologic_diagnosis_Clinical']
df['age_at_initial_pathologic_diagnosis_Clinical'] = (age_col-np.mean(age_col))/np.std(age_col)
#transform the original data to meet the default of linelines
df['Censored'] = -1 * df['Censored'] + 1
#drop low-variance cls
df.drop('race-Is-american indian or alaska native_Clinical', axis=1, inplace=True)
# for column in df:
#
#     print(df[column])

# for i in range(2,df.shape[1]):
# 	df.current = df.iloc[:,[0,1,i]]
# 	cf = CoxPHFitter()
# 	cf.fit(df.current, 'Survival', event_col='Censored')
# 	cf.print_summary()
# import pdb; pdb.set_trace()





cf = CoxPHFitter()
cf.fit(df, 'Survival', event_col='Censored')
cf.print_summary()  # access the results using cf.summary

# scores = k_fold_cross_validation(cf, df, 'Survival', event_col='Censored', k=5)
# print (scores)
# print (np.mean(scores))
# print (np.std(scores))vertical_stack = pd.concat([survey_sub, survey_sub_last10], axis=0)

# cf.print_summary()
