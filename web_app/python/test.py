#!/usr/bin/python
import sys
import h5py
import json

# get the percentage of positive objects
percent_pos = sys.argv[1]
dict_clinicaldata = {}
dict_clinicaldata['test'] = percent_pos
# Generate data to send to PHP
results = {'test': dict_clinicaldata['test']}
jsonData = json.dumps(results, ensure_ascii = 'False')
print jsonData
