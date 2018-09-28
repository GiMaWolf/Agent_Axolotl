from partViewConvert import PartViewConvert
import pandas as pd
import json
import simplejson

class SelectViewConvert():

    def __init__(self):
        partViewConvert = PartViewConvert() 
        averages = partViewConvert.main_method("fuel_pump")
        temp = json.loads(averages)
        # for item in averages:
        sum_fuel_pump = 0
        sum_engine_speed = 0
        sum_fuel_temp = 0
        sum_fuel_pressure = 0
        for item in temp:
            sum_fuel_pump += item["Fuel_Pump_Delivery"]
            sum_engine_speed += item["Engine_Speed"]
            sum_fuel_temp += item["Fuel_Temperature_In_Rail"]
            sum_fuel_pressure += item["Fuel_Pressure"]
            print(item)
        self.result = {}
        self.result["Fuel_Pump_Delivery"] = sum_fuel_pump/len(temp)
        self.result["Engine_Speed"] = sum_engine_speed/len(temp)
        self.result["Fuel_Temperature_In_Rail"] = sum_fuel_temp/len(temp)
        self.result["Fuel_Pressure"] = sum_fuel_pressure/len(temp)
        # print(result)

    def main_method(self):
        return simplejson.dumps(self.result)


select = SelectViewConvert()