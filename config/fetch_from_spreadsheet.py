import requests
import csv
import json

# Replace with the URL of your published Google Sheets CSV
csv_url = "URL"

# Send an HTTP GET request to fetch the CSV data
response = requests.get(csv_url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the CSV data
    csv_data = response.text
    
    # Convert the CSV data to a list of dictionaries (one dictionary per row)
    csv_reader = csv.DictReader(csv_data.splitlines())
    data_list = [row for row in csv_reader]
    
    # Define the path where you want to save the JSON file
    json_file_path = "output.json"
    
    # Save the data as a JSON file
    with open(json_file_path, "w", encoding="utf-8") as json_file:
        json.dump(data_list, json_file, indent=4)
    
    print(f"CSV data has been converted and saved to {json_file_path}")
else:
    print("Failed to retrieve CSV data")

