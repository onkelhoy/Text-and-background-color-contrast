import csv
import numpy as np

filename = 'output.csv'
raw_data = open(filename, 'rt')
reader = csv.reader(raw_data, delimiter=',')
x = list(reader)
data = np.array(x).astype('int')
print(data.shape)