import requests
import csv
import json

# Replace with the URL of your published Google Sheets CSV
csv_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQr3Go0aKmj1S6MweNzanwqMPV11moucE6xKDZW4QJmfZtneazqunJd5p5vP5gjx9eo5_SqF0dJaLtO/pub?output=csv"

# Send an HTTP GET request to fetch the CSV data
response = requests.get(csv_url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the CSV data
    csv_data = response.text
    
    # Convert the CSV data to a list of dictionaries (one dictionary per row)
    csv_reader = csv.DictReader(csv_data.splitlines())
    data_list = [row for row in csv_reader]
    
    # Create a dictionary to store participants with keys like "participant_1", "participant_2", etc.
    participant_dict = {}
    for i, participant_data in enumerate(data_list, start=1):
        participant_key = f"participant_{i}"
        participant_dict[participant_key] = participant_data
    
    # Load the existing config.json file
    with open("config.json", "r", encoding="utf-8") as config_file:
        config_data = json.load(config_file)
    
    # Update the participants field in the config data
    config_data["participants"] = participant_dict
    
    # Save the updated data back to the config.json file
    with open("config.json", "w", encoding="utf-8") as config_file:
        json.dump(config_data, config_file, indent=4)
    
    print("CSV data has been added to the participants field in config.json")
else:
    print("Failed to retrieve CSV data")
