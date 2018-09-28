from partViewConvert import PartViewConvert
import pandas as pd
import json
import simplejson

class MainViewConvert():

    def __init__(self):
        partViewConvert_pumps = PartViewConvert("pump") 
        averages = json.loads(partViewConvert_pumps.main_method("fuel_pump"))
        partViewConvert_general = PartViewConvert("general")
        information = json.loads(partViewConvert_general.main_method("general"))
        self.result = {}
        criticals = 0
        for item in averages:
            if item["Critical"] == 1:
                criticals +=1
        sum_engine_speed = 0
        sum_vehspeed = 0
        sum_temp = 0
        sum_engine_load = 0
        for item in information:
            sum_engine_speed += item["Engine_Speed"]
            sum_vehspeed += item["Vehicle_Speed"]
            sum_temp += item["Ambiant_Temperature"]
            sum_engine_load += item["MAF_Before_Compressor"]
        self.result["Critical_cars"] =criticals
        self.result["Total_cars"] = len(averages)
        self.result['Ambiant_Temperature'] = sum_temp/len(information)
        self.result['Vehicle_Speed'] = sum_vehspeed/len(information)
        self.result['Engine_Speed'] = sum_engine_speed/len(information)
        self.result['MAF_Before_Compressor'] = sum_engine_load/len(information)
        # print(self.result)

    def main_method(self):
        return simplejson.dumps(self.result)
# test = MainViewConvert()