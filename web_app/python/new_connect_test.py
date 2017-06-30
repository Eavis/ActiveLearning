import pandas as pd
import numpy as np
import MySQLdb as mysql
from lifelines import CoxPHFitter
from lifelines.utils import k_fold_cross_validation
db_connection = mysql.connect(host='localhost', user="root", passwd="  ", db="nuclei")
db_cursor = db_connection.cursor()
df = pd.read_sql('SELECT * FROM test_clinical',con=db_connection)
import pdb; pdb.set_trace()

# df = df.dropna(axis=0,how='any')

#standardization for age
#
#standardization for age
age_col = df['age_at_initial']
df['age_at_initial'] = (age_col-np.mean(age_col))/np.std(age_col)
#transform the original data to meet the default of linelines
df['Censored'] = -1 * df['Censored'] + 1
df.drop('race_AmericanIndian_orAlaskanative', axis=1, inplace=True)
df.drop('name', axis=1, inplace=True)
df.drop('id', axis=1, inplace=True)


cf = CoxPHFitter()
cf.fit(df, 'survival_time', event_col='Censored')

cf.print_summary()
