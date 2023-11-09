# from flask import Flask, request, jsonify
# from flask_cors import CORS

# import json

# # Load JSON data from the file
# with open('C:\\Users\\user\\Desktop\\Web_D\\reno_app\\ewasteitms.json', 'r') as json_file:
#     data = json.load(json_file)

# #print(data)

# app = Flask(__name__)
# CORS(app)

# # @app.route('/api/chatbot', methods=['POST'])
# # def chatbot():
# #     user_message = request.json.get('message')
# #     # Send the user message to the Python chatbot and get a response
# #     # You'll need to implement this part
# #     chatbot_response = get_chatbot_response(user_message)
# #     return jsonify({'response': chatbot_response})

# # if __name__ == '__main__':
# #     app.run(debug=True)


# def chatbot_response(user_message):
#     # Use the data from the JSON file to provide responses
#     user_message = user_message.lower()
#     if user_message in data:
#         return data[user_message]
#     else:
#         return "I'm sorry, I don't have information about that item."

# # Define the API endpoint for the chatbot
# @app.route('/api/chatbot', methods=['POST'])
# def chatbot():
#     user_message = request.json.get('message')
#     chatbot_reply = chatbot_response(user_message)
#     return jsonify({'response': chatbot_reply})

# if __name__ == '__main__':
#     app.run(debug=True)





# from flask import Flask, request, jsonify
# from flask_cors import CORS

# import json

# # Load JSON data from the file
# with open('C:\\Users\\user\\Desktop\\Web_D\\reno_app\\ewasteitms.json', 'r') as json_file:
#     data = json.load(json_file)

# app = Flask(__name__)
# CORS(app)

# def chatbot_response(user_message):
#     # Use the data from the JSON file to provide responses
#     user_message = user_message.lower()
#     if user_message in data:
#         return data[user_message]
#     else:
#         return "I'm sorry, I don't have information about that item."

# # Define the API endpoint for the chatbot
# @app.route('/api/chatbot', methods=['POST'])
# def chatbot():
#     user_message = request.json.get('message')
#     chatbot_reply = chatbot_response(user_message)
#     return jsonify({'response': chatbot_reply})

# if __name__ == '__main__':
#     app.run(debug=True)




from flask import Flask, request, jsonify
from flask_cors import CORS

import json

# Load JSON data from the file
with open('C:\\Users\\user\\Desktop\\Web_D\\reno_app\\ewasteitms.json', 'r') as json_file:
    data = json.load(json_file)

app = Flask(__name__)
CORS(app)

def get_product_info(product_name):
    product_name = product_name.lower()
    if product_name in data:
        return data[product_name]
    else:
        return "I'm sorry, I don't have information about that product."

# Define the API endpoint for the chatbot
@app.route('http://localhost:3000/api/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message')
    product_info = get_product_info(user_message)

    if isinstance(product_info, dict):
        return jsonify(product_info)
    else:
        return jsonify({'response': product_info})

if __name__ == '__main__':
    app.run(debug=True)