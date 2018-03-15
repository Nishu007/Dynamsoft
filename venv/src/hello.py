from flask import Flask, redirect, url_for, request, render_template, Response
import os
from werkzeug.utils import secure_filename
app = Flask(__name__)



@app.route('/upload', methods = ['POST'])
def upload():
   print('Uploading...')
   UPLOAD_FOLDER = 'UploadedImages'
   app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
   if 'RemoteFile' not in request.files:
      print('No file')
      return Response('File not found.. Upload one', status=500)
   file = request.files['RemoteFile']

   if file.filename == '':
      return Response('FileName Not found', status=500)
   else:
      filename = secure_filename(file.filename)
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      file_uploaded = True
      #return None
      return Response('', status=200)


@app.route('/')
def index():
   return render_template('index.html')


if __name__ == '__main__':
   app.run(debug = True)