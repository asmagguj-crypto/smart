from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

def init_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS test (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            message TEXT
        )
    ''')
    cursor.execute("SELECT COUNT(*) FROM test")
    if cursor.fetchone()[0] == 0:
        cursor.execute("INSERT INTO test (message) VALUES ('مرحبا بك, تم الاتصال بنجاح !')")
        conn.commit()
    conn.close()

init_db()

@app.route('/api/data', methods=['GET'])
def get_data():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute("SELECT message FROM test LIMIT 1")
    row = cursor.fetchone()
    conn.close()
    
    return jsonify({"message": row[0] if row else "لا توجد بيانات"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)