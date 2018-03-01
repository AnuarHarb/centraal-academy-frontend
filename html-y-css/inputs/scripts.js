document.querySelector('#text').addEventListener('keypress', function keyupText(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    e.preventDefault();
    readInput(document.querySelector('.form'));
  }
})



function readInput(form) {
  var nombre = form.name1.value;
}

function readInput2(form) {
  console.log(form.gender.value);
}

function readInput3(form) {
  var vehicle1 = form.vehicle1.checked
  var vehicle2 = form.vehicle2.checked
  console.log('bike',vehicle1, 'car',vehicle2);
}

function readInput4(form) {
  console.log(form.bday.value);
}

// File Input
function readInput5() {
  if (this.files && this.files[0]) {
    var obj = new FileReader();
    var image = document.querySelector('.input-background-image');
    var label = document.querySelector('.image-uploader label');
    var progressBar = document.querySelector('progress');
    image.style.width = "0px";
    obj.onloadstart = function(data) {
      image.src = "";
      label.style.display = "none";
      progressBar.value = 100;
      image.style.width = "300px";
      image.style.border = "5px solid black";
    }
    obj.onloadend = function(data) {
      image.src = data.target.result;
      label.style.display = "block";
    }
    obj.readAsDataURL(this.files[0]);
  }
}

// Drag addEventListeners
var imageUploader = document.querySelector('.image-uploader');

;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  imageUploader.addEventListener(eventName, preventDefaults, false);
})

;['dragenter', 'dragover'].forEach(eventName => {
  imageUploader.addEventListener(eventName, highlight, false);
})

;['dragleave', 'drop'].forEach(eventName => {
  imageUploader.addEventListener(eventName, unhighlight, false);
})

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight(e) {
  imageUploader.classList.add('highlight');
}

function unhighlight(e) {
  imageUploader.classList.remove('highlight');
}

// Drop handler
imageUploader.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  ([...files]).forEach(previewFile)
}

function previewFile(file) {
  let reader = new FileReader()
  let image = document.querySelector('.input-background-image');
  let label = document.querySelector('.image-uploader label');
  let gallery = document.querySelector('.image-uploader .gallery');
  let progress = document.querySelector('progress');
  reader.readAsDataURL(file)

  reader.onloadstart = function() {
    label.style.display = "none";
    progress.style.display = "block";
    progress.value = 0;
    randomLoader();
  }
  reader.onprogress = function() {
    label.style.display = "none";
    progress.style.display = "block";
  }
  reader.onloadend = function() {
    progress.style.display = "none";
    let img = document.createElement('img');
    img.src = reader.result;
    img.classList.add('input-background-image');
    gallery.appendChild(img);
    label.style.display = "block";
  }
}

function randomLoader() {
  let progressBar = document.querySelector('progress');
  let progress = 0;

  if (progress < 100) {
      let loadTime = Math.round(Math.random() * (100 - progress));
      progress = progress + loadTime;
      progressBar.value = progress;
  }
}


document
  .querySelector('.image-uploader input[type="button"]')
  .addEventListener('click', function() {
    document.querySelector('#image-input').click();
})
