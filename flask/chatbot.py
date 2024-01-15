# import json
# from flask import Flask, request, jsonify

# app = Flask(__name__)

# # Load JSON data
# with open('ewasteitms.json') as f:
#     items_data = json.load(f)

# # Function to find an item by name
# def find_item_by_name(items, name):
#     for item_id, item_info in items.items():
#         if item_info['productName'] == name:
#             return item_info
#     return None

# # API endpoint for item details
# @app.route('/item_details', methods=['POST'])
# def get_item_details():
#     item_name = request.json.get('itemName')
#     item = find_item_by_name(items_data, item_name)
#     if item:
#         return jsonify(item)
#     else:
#         return jsonify({'error': 'Item not found'}), 404

# if __name__ == '__main__':
#     app.run(debug=True)


# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import json

# app = Flask(__name__)
# CORS(app, origins="http://localhost:3000")

# app = Flask(__name__)

# # Load your JSON data
# with open('ewasteitms.json') as f:
#     ewaste_data = json.load(f)

# @app.route('/get_item_details', methods=['POST'])
# def get_item_details():
#     # Get the product name from the request
#     product_name = request.json.get('productName', None)

#     # Check if the product name exists in the data
#     if product_name in ewaste_data:
#         return jsonify(ewaste_data[product_name])
#     else:
#         return jsonify({"error": "Product not found"}), 404

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

# Load your JSON data
with open('ewasteitms.json') as f:
    #ewaste_data = json.load(f)
    ewaste_data = json.load(f).get("ewasteproducts", {})
    print(ewaste_data)

@app.route('/get_item_details', methods=['POST'])
def get_item_details():
    # Get the product name from the request
   # product_name = request.json.get('productName', None)
    product_name = request.json.get('productName', None).strip()

    print(f"Received request for product: {product_name}")

    item_details = ewaste_data.get(product_name, None)

    # Check if the product name exists in the data 
    for item_key, item_details in ewaste_data.items():
        if item_details.get("productName") == product_name:
            print(f"Found product: {product_name} in {item_key}")
            return jsonify(item_details)      
    else:
        print(f"Product not found: {product_name}")
        return jsonify({"error": "Product not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)


# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import json

# app = Flask(__name__)
# CORS(app, origins="http://localhost:3000")

# # Load your JSON data
# with open('ewasteitms.json') as f:
#     ewaste_data = json.load(f).get("ewasteproducts", {})

# @app.route('/get_item_details', methods=['POST'])
# def get_item_details():
#     # Get the product name from the request
#     product_name = request.json.get('productName', None).strip()

#     print(f"Received request for product: {product_name}")

#     item_details = ewaste_data.get(product_name, None)

#     if item_details:
#         return jsonify(item_details)
#     else:
#         return jsonify({"error": "Product not found"}), 404

# if __name__ == '__main__':
#     app.run(debug=True)
