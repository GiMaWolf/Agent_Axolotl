import csv
import argparse
import pandas as pd
import os
import simplejson

class PartViewConvert():

    def __init__(self):
        self.setup_parts()
        self.result = []
        for root, dirs, files in os.walk(os.getcwd(), topdown=False):
            for dir in dirs:
                if dir.startswith("vin="):
                    # print(dir[4:])
                    # print(os.path.join(root,dir))
                    vin = dir[4:]
                    path = os.path.join(root, dir)
                    for file in os.listdir(path):
                        # print(file)
                        self.result.append(self.getMean(vin,os.path.join(path,file)))
        print(self.result)
    
    def setup_parts(self):
        self.fuel_pump_vars = ['Fuel_Pressure', 'Fuel_Temperature_In_Rail', 'Fuel_Pump_Delivery', 'Engine_Speed']
        
    def getMean(self, vin,file):
        result = {}
        with open(file) as f:
            df = pd.read_csv(f)
            for var in self.fuel_pump_vars:
                if var in list(df):
                    result.update({var:df[var].mean()})

        result.update({"VIN":vin})
        if result["Fuel_Pump_Delivery"] > 25 or result["Engine_Speed"] > 2300 or result["Fuel_Temperature_In_Rail"] > 75 or result["Fuel_Pressure"] > 240:
            result.update({"Critical":1})
        else:
            result.update({"Critical":0})
        return result
    
    def main_method(self, component):
        return simplejson.dumps(self.result)



