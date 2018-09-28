import csv
import argparse
import pandas as pd
import os
import simplejson
import math
import numpy as np
from bson import json_util

class CompareViewConvert():

    def __init__(self):
        self.setup_parts()
        self.result = []
        for root, dirs, files in os.walk(os.getcwd(), topdown=False):
            for dir in dirs:
                if dir.startswith("vin="):
                    vin = dir[4:]
                    path = os.path.join(root, dir)
                    for file in os.listdir(path):
                        self.result.append(self.sumData(vin, os.path.join(path, file)))

    def setup_parts(self):
        self.fuel_pump_vars = ['Fuel_Pressure', 'Fuel_Temperature_In_Rail', 'Fuel_Pump_Delivery', 'Engine_Speed']

    def sumData(self, vin, file):
        result = {'vehicle': vin, 'series': []}
        # print(file)
        with open(file) as f:
            df = pd.read_csv(f)
            for var in self.fuel_pump_vars:
                counter = 0
                result_var = {var: []}
                for var_entry in df[var]:
                    if not(math.isnan(var_entry)):
                        element_to_add = {'value': var_entry,  'timestamp':  + df['timestamp'][counter]}
                        result_var[var].append(element_to_add)
                        counter +=1
                result['series'].append(result_var)
        return result


    def main_method(self, component, cars):
        returnArray = []
        for car in cars:
            for vin in self.result:
                if (car == vin['vehicle']):
                    returnArray.append(vin)

        def default(o):
            if isinstance(o, np.int64): return int(o)
            raise TypeError

        return simplejson.dumps(returnArray, default=default)