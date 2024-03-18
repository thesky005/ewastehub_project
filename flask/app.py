from flask import Flask, jsonify, render_template_string,request
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from io import BytesIO
import base64
from flask_cors import CORS
import json
from flask_socketio import SocketIO

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
    bars = plt.barh(data['Name/Address'], data['Installed Capacity (MTA)'])

    for bar, value in zip(bars, data['Installed Capacity (MTA)']):
        plt.text(bar.get_width(), bar.get_y() + bar.get_height() / 2, f'{value:.2f} MTA', va='center', ha='left')
    #plt.yticks(rotation=45, ha='right')

    plt.title('Vertical Bar Chart')
    plt.xlabel('Installed Capacity (Kg)')
    plt.ylabel('Name/Address')

    # Save the plot to a BytesIO object
    image_stream = BytesIO()
    plt.savefig(image_stream, format='png',  bbox_inches='tight')
    image_stream.seek(0)   

    # Encode the image as base64
    image_base64 = base64.b64encode(image_stream.read()).decode('utf-8')

    #image_base64 = base64.b64encode(image_stream.getvalue()).decode('utf-8')

    return jsonify({'chartData': image_base64})

with open('ewasteitms.json') as f:
    #ewaste_data = json.load(f)
    ewaste_data = json.load(f).get("ewasteproducts", {})
    print(ewaste_data)

# @app.route('/get_item_details', methods=['POST'])
# def get_item_details():
#     # Get the product name from the request
#    # product_name = request.json.get('productName', None)
#     product_name = request.json.get('productName', None).strip()

#     print(f"Received request for product: {product_name}")

#     item_details = ewaste_data.get(product_name, None)

#     # Check if the product name exists in the data 
#     for item_key, item_details in ewaste_data.items():
#         if item_details.get("productName") == product_name:
#             print(f"Found product: {product_name} in {item_key}")
#             return jsonify(item_details)      
#     else:
#         print(f"Product not found: {product_name}")
#         return jsonify({"error": "Product not found"}), 404


@app.route('/get_item_details', methods=['POST'])
def get_item_details():
    if request.method == 'POST':
        # Get the product name from the request JSON payload
        product_name = request.json.get('productName', '').strip()

        print(f"Received request for product: {product_name}")

        if product_name:
            # Check if the product name exists in the data
            for item_key, item_details in ewaste_data.items():
                if item_details.get("productName") == product_name:
                    print(f"Found product: {product_name} in {item_key}")
                    return jsonify(item_details)
            else:
                print(f"Product not found: {product_name}")
                return jsonify({"error": "Product not found"}), 404
        else:
            return jsonify({"error": "Product name not provided"}), 400
    else:
        return jsonify({"error": "Unsupported method"}), 405
    

import stripe

# app = Flask(__name__)
app.config['SECRET_KEY'] = 'sk_test_51OpDLISGI9eUr3ggti7CeEv2kvEC7qrIeJMmdJDVzJgDiZjOeqfgJatKc7lxkYjXgRbmw7snyjuYnzDwVEf7a3Kr00N1BMRdRB'  # Change this to your actual secret key
stripe.api_key = 'sk_test_51OpDLISGI9eUr3ggti7CeEv2kvEC7qrIeJMmdJDVzJgDiZjOeqfgJatKc7lxkYjXgRbmw7snyjuYnzDwVEf7a3Kr00N1BMRdRB'  # Change this to your actual Stripe secret key

@app.route('/api/payment', methods=['POST'])
def create_payment_session():
    data = request.json
    items = data.get('items')

    # Create a Stripe payment session
    try:
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'product_data': {
                            'name': item['productname'],
                            'description': item['description'],
                            # Add other relevant product data
                        },
                        'unit_amount': int(item['productprice']),  # Stripe uses cents
                    },
                    'quantity': 1,
                } for item in items
            ],
            mode='payment',
            success_url='http://localhost:3000/',
            cancel_url='http://localhost:3000/usercart',
        )
        return jsonify({'sessionId': session.id}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
if __name__ == '__main__':
    app.run(debug=True)