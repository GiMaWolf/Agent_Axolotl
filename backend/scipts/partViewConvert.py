import csv
import argparse
import pandas as pd
import os
class partViewConvert():

    def __init__(self, component):
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
                        self.result.append(self.getMean(vin,component,os.path.join(path,file)))
                    # for file in os.walk(os.path.join(root,dir)):
                    #     self.getMean(dir[4:],component,os.path.join(root, file))
        print(self.result)
    
    def setup_parts(self):
        self.fuel_pump_vars = ['Fuel_Pressure', 'Fuel_Temperature_In_Rail', 'Fuel_Pump_Delivery', 'Engine_Speed']
        
    def getMean(self, vin, argumentList,file):
        result = {}
        # print(file)
        with open(file) as f:
            df = pd.read_csv(f)
            for var in self.fuel_pump_vars:
                if var in list(df):
                    result.update({var:df[var].mean()})
        # for var in self.fuel_pump_vars:
        #     if var in list(self.df):
        #         if var !='Vehicle_Number':
        #             result.update({var: self.df[var].mean()})
        result.update({"VIN":vin})
        return result


if __name__ == "__main__":
    aggr = partViewConvert("test")
    

