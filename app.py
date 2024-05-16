from flask import Flask, jsonify

app = Flask(__name__)

quiz_data = [
    {
        "question": "What is the capital of India?",
        "options": ["Kolkata", "Mumbai", "Delhi", "Chennai"],
        "answer": "Delhi"
    },
    {
        "question": "Which city is known as the 'Pink City' of India?",
        "options": ["Jaipur", "Delhi", "Mumbai", "Agra"],
        "answer": "Jaipur"
    },

    {
        "question": "Which river is considered the holiest river in India?",
        "options": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "answer": "Ganga"
    },

    {
        "question": "Who was the first Prime Minister of India?",
        "options": ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
        "answer": "Jawaharlal Nehru"
    },

    {
        "question": "Who holds the record for the highest individual score in Test cricket?",
        "options": ["Sachin Tendulkar", "Brian Lara", "Ricky Ponting", "Virat Kohli"],
        "answer": "Brian Lara"
    },

    {
        "question": "Which country won the ICC Cricket World Cup in 2019?",
        "options": ["India", "Australia", "England", "New Zealand"],
        "answer": "England"
    },

    {
        "question": "Who is known as the 'God of Cricket'?",
        "options": ["Virat Kohli", "Rohit Sharma", "Sachin Tendulkar", "MS Dhoni"],
        "answer": "Sachin Tendulkar"
    },
]

@app.route('/quiz', methods=['GET'])
def get_quiz():
    return jsonify(quiz_data)

if __name__ == '__main__':
    app.run(debug=True)
