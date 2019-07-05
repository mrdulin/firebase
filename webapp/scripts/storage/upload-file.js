(function(firebase) {
  const uploadElement = document.getElementById('upload');
  uploadElement.addEventListener('change', handleFiles, false);

  function handleFiles() {
    const fileList = this.files;
    const file = fileList[0];
    const storageRef = firebase.storage().ref();
    const fileImageRef = storageRef.child(`images/${file.name}`);
    const uploadTask = fileImageRef.put(file);
    uploadTask.on('state_changed', stateChangedObserver, errorObserver, completionObserver);

    function stateChangedObserver(snapshot) {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }

    function errorObserver(error) {
      console.log(error);
    }

    function completionObserver() {
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
      });
    }
  }
})(firebase);
