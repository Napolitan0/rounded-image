		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		var imageObj = new Image();

		imageObj.onload = function() {
			if(imageObj.width > canvas.width){
				var imgWidth = imageObj.width;
				var imgHeight = imageObj.height;
				var imgOffset = Math.abs(imgWidth - imgHeight)/2;
				if(imgWidth > imgHeight){
					context.drawImage(imageObj, imgOffset, 0, imgWidth - imgOffset*2, imgHeight, 0, 0, canvas.width, canvas.height);
				}else{
					context.drawImage(imageObj, 0, imgOffset, imgWidth, imgHeight - imgOffset*2, 0, 0, canvas.width, canvas.height);
				}
			}else{
				context.drawImage(imageObj, (canvas.width - imageObj.width)/2, (canvas.width - imageObj.width)/2,imageObj.width,imageObj.width);
			}
		};
   
		imageObj.src = 'images.png';