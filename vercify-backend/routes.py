from flask import request, jsonify, render_template
from app import app
from gemini import fact_check
import json

# @app.route("/api/gemini", methods=["GET"])
# def fact_check_route():
#     content = "Python is low level language."
#     try:
#         result = fact_check(content) 
#         return jsonify(result), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/gemini", methods=["POST"])
def fact_check_route():
    try:
        if request.content_type != 'application/json':
            raise ValueError("Content-Type must be 'application/json'")
        
        data = request.get_json()
        
        if not data or "content" not in data:
            raise ValueError("No content provided in the request body")

        content = data.get("content", "")
        
        result = fact_check(content)
        print(f"Fact Check Response: {result}")
        
        return jsonify(result), 200
    
    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    
    except Exception as e:
        print(f"Error in fact_check_route: {str(e)}")
        return jsonify({"error": "An error occurred during the request processing."}), 500

@app.route("/api/verify", methods=["GET"])
def verify():
    return jsonify({"status": "OK", "message": "Backend is running"}), 200