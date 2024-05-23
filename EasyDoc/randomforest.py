import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import RandomForestClassifier
from sklearn.metrics import accuracy_score

data = pd.read_csv('')
feature_columns = []
target_column = 'diagnosis'

X = data[feature_columns]
Y = data[target_column]
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

model = RandomForestClassifier(random_state=42)
model.fit(X_train, Y_train)
Y_prediction = model.predict(X_test)

print('Accuracy : ', accuracy_score(Y_test, Y_prediction))

def predict_diagnosis(user_data):
    return model.predict([user_data])