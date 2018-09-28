from flask import Flask, request, redirect, url_for
from threading import Timer
from flask.ext.cors import CORS

from RunningDebates import RunningDebates


app = Flask(__name__)
CORS(app)
runDebates = RunningDebates()

@app.route('/fleet', methods=['GET'])
def get_fleet_for_main_view():
    return "/fleet"

@app.route('/components', methods=['GET'])
def get_components_for_selected_view():
    return "/getComponentsForSelectedView"

@app.route('/components/<string:component>', methods=['GET'])
def get_single_component_for_part_view(component):
    return "/getSingleComponentForPartView"

@app.route('/components/<string:component>/details', methods=['GET'])
def get_single_component_details_for_component_view(component):
    cars = request.args.get('vehicles');
    return "/getSingleComponentDetailsForComponentView"

if __name__ == "__main__":
    app.run(host="0.0.0.0")