# loading the dependencies
import csv
import numpy as np

# load the data
filename = 'output.csv'
raw_data = open(filename, 'rt')
reader = csv.reader(raw_data, delimiter=',')
x = list(reader)
data = np.array(x).astype('int')
print(data.shape)

# split the data to train and test 70/30 split 