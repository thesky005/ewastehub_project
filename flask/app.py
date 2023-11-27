from flask import Flask, jsonify, render_template_string
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from io import BytesIO
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

@app.route('/')
#@app.route('/get_chart_data/<state_name>')
def index():    
    return render_template_string('<div id="chart"></div>')

@app.route('/get_chart_data')
@app.route('/get_chart_data/<state_name>')
#def get_chart_data():
def get_chart_data(state_name):
    # Your Python code
    #data = pd.read_csv("C:\Users\user\Desktop\Web_D\ewastehub\src\components\AndhraPradesh.ipynb")

    csv_path = f"{state_name}.csv"

    #data = pd.read_csv("delhi.csv" , encoding='latin1')
    #data = pd.read_csv(csv_path)
    data = pd.read_csv(csv_path, encoding='latin1')

    

    plt.figure(figsize=(4,26))
    plt.barh(data['Name/Address'], data['Installed Capacity (MTA)'])
    #plt.yticks(rotation=45, ha='right')

    plt.title('Vertical Bar Chart')
    plt.xlabel('Installed Capacity (MTA)')
    plt.ylabel('Name/Address')

    # plt.figure(figsize=(15,6))
    # sns.barplot(x='Installed Capacity (MTA)', y='Name/Address', data=data)
    # plt.title('Installed Capacity of E-Waste Recycling Facilities in Maharashtra')
    # plt.xlabel('Installed Capacity (MTA)')
    # plt.ylabel('Name/Address')
    #plt.show()

    # plt.figure(figsize=(10, 6))
    # plt.bar(data['Sno'], data['Installed Capacity (MTA)'])
    # plt.title('Bar Chart')
    # plt.xlabel('Sno')
    # plt.ylabel('Installed Capacity (MTA)')

    # plt.rcParams['font.family'] = 'DejaVu Sans'
    # import warnings

    # warnings.filterwarnings("ignore", category=UserWarning)
    # data['Installed Capacity (MTA)'] = pd.to_numeric(data['Installed Capacity (MTA)'], errors='coerce')
    # plt.figure(figsize=(12,40))
    # sns.barplot(x='Installed Capacity (MTA)', y='Name/Address', data=data)
    # plt.title('Installed Capacity of E-Waste Recycling Facilities in Maharashtra')
    # plt.xlabel('Installed Capacity (MTA)')
    # plt.ylabel('Name/Address')



    # Save the plot to a BytesIO object
    image_stream = BytesIO()
    plt.savefig(image_stream, format='png',  bbox_inches='tight')
    image_stream.seek(0)   

    # Encode the image as base64
    image_base64 = base64.b64encode(image_stream.read()).decode('utf-8')

    #image_base64 = base64.b64encode(image_stream.getvalue()).decode('utf-8')


    return jsonify({'chartData': image_base64})

if __name__ == '__main__':
    app.run(debug=True)




# from flask import Flask, jsonify, render_template_string
# import pandas as pd
# import matplotlib.pyplot as plt
# import seaborn as sns
# from io import BytesIO
# import base64
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, origins="http://localhost:3000")

# @app.route('/get_chart_data/<state_name>')
# def get_chart_data(state_name):
#     try:
#         # Assuming CSV files are named as StateName.csv (e.g., AndhraPradesh.csv)
#         csv_path = f"{state_name}.csv"
        
#         # Your Python code
#         data = pd.read_csv(csv_path)

#         plt.figure(figsize=(10, 6))
#         plt.barh(data['Name/Address'], data['Installed Capacity (MTA)'])
#         plt.title('Vertical Bar Chart')
#         plt.xlabel('Installed Capacity (MTA)')
#         plt.ylabel('Name/Address')

#         # Save the plot to a BytesIO object
#         image_stream = BytesIO()
#         plt.savefig(image_stream, format='png')
#         image_stream.seek(0)

#         # Encode the image as base64
#         image_base64 = base64.b64encode(image_stream.read()).decode('utf-8')

#         return jsonify({'chartData': image_base64})
#     except FileNotFoundError:
#         return jsonify({'error': 'File not found'})

# if __name__ == '__main__':
#     app.run(debug=True)
