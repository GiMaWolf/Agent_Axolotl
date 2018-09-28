from flask import Flask, request, redirect, url_for
from threading import Timer
from flask.ext.cors import CORS

from MainViewConvert import MainViewConvert
from SelectViewConvert import SelectViewConvert
from PartViewConvert import PartViewConvert
from CompareViewConvert import CompareViewConvert

app = Flask(__name__)
CORS(app)

mainView = MainViewConvert()
selectView = SelectViewConvert()
partView = PartViewConvert()
compareView = CompareViewConvert()

@app.route('/fleet', methods=['GET'])
def get_fleet_for_main_view():
    return mainView.main_Method()

@app.route('/components', methods=['GET'])
def get_components_for_selected_view():
    return selectView.main_Method()

@app.route('/components/<string:component>', methods=['GET'])
def get_single_component_for_part_view(component):
    return partView.main_Method(component)

@app.route('/components/<string:component>/details', methods=['GET'])
def get_single_component_details_for_component_view(component):
    cars = [x.strip() for x in request.args.get('vehicles').split(',')]
    return compareView.main_Method(component, cars)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
