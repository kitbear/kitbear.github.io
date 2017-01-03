var picDatas = [];
var maxHeight = 0,maxWidth = 0;	
var animateSecond = 120;
var interId = 0;
window.onload = function(){
	var preview = document.getElementById("previewDiv");
	var prompt = document.getElementById("promptDiv");
	var pics = document.getElementById("pics");
	pics.onchange = function(){
		if(pics.files.length==0){
			prompt.style.display = "block";
			preview.style.display = "none";
			return;
		}else{
			prompt.style.display = "none";
			preview.style.display = "block";
		}
		clearInterval(interId);
		preview.innerHTML = "";
		picDatas = [];
		for (var i = 0; i < pics.files.length; i++) {
			var realPath = getPath(pics.files[i]);
			var img = new Image();
			img.src = realPath;
			img.lang = i;
			picDatas.push(img);
			img.onload = function(){
				var canDiv = document.createElement("div");
				var canTemp = document.createElement("canvas");
				var canLabel = document.createElement("label");
				canLabel.textContent = "时长120ms";
				canLabel.htmlFor = "second_"+this.lang;
				canLabel.className = "second";
				canLabel.onclick = function(){
					if(this.parentNode.lastChild == this){
						var canSecondInput = document.createElement("input");
						canSecondInput.type = "text";
						canSecondInput.id = this.htmlFor;
						canSecondInput.value = this.textContent.substring(2,this.textContent.length-2);
						var canSecondLabel = this;
						canSecondLabel.textContent = "时长(ms):";
						canSecondInput.onblur = function(){
							canSecondLabel.textContent = "时长"+this.value+"ms";
							this.parentNode.removeChild(this);
						};
						insertAfter(canSecondInput,this);
					}
				};
				canTemp.width = this.width;
				canTemp.height = this.height;
				var cxtTemp = canTemp.getContext("2d");
				cxtTemp.drawImage(this,0,0,this.width,this.height);
				if(this.height>maxHeight){
					maxHeight = this.height;
				}
				if(this.width>maxWidth){
					maxWidth = this.width;
				}
				canDiv.appendChild(canTemp);
				canDiv.appendChild(canLabel);
				preview.appendChild(canDiv);
				// if(this.lang == pics.files.length-1){
				// 	downloadFile("123456.png",context);
				// }
			}
		}
	};
	var convertBtn = document.getElementById("convertBtn");
	convertBtn.onclick = function(){
		if(picDatas.length==0){
			alert("未选中图片");
			return;
		}
		animateSecond = document.getElementById("animateSecond").value;
		previewCan();
	}
};

function clearCanvas(cxt){
	cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height);
}

function getPath(file) {
    var url=null;
    if(window.createObjectURL!=undefined){ // basic  
        url=window.createObjectURL(file);
    }else if(window.URL!=undefined){ // mozilla(firefox)  
        url=window.URL.createObjectURL(file);
    }else if(window.webkitURL!=undefined){ // webkit or chrome  
        url=window.webkitURL.createObjectURL(file);
    }  
    return url;
}

function previewCan(){
	clearInterval(interId);
	var can = document.getElementById("resultCan");
	can.height = maxHeight,can.width = maxWidth;
	var context = can.getContext("2d");
	context.drawImage(picDatas[0],0,0,picDatas[0].width,picDatas[0].height);
	var i = 1;
	interId = setInterval(function(){
		clearCanvas(context);
		i = i % picDatas.length;
		var img = picDatas[i];
		context.drawImage(img,0,0,img.width,img.height);
		i++;
	},animateSecond);
}

function saveAsLocalImage (cxt) {
	var image = cxt.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	window.location.href=image; // it will save locally
}  

// function downloadFile(fileName, content){
//     var aLink = document.createElement('a');
//     var blob = new Blob([content]);
//     var evt = document.createEvent("HTMLEvents");
//     evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
//     aLink.download = fileName;
//     aLink.href = URL.createObjectURL(blob);
//     aLink.dispatchEvent(evt);
// }

function downloadFile(fileName, cxt){
    var link = document.createElement('a');
    var image = cxt.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.href = image;
    link.download = fileName;
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
}

function insertAfter(newElement,targetElement){
	var parentElement = targetElement.parentNode;
	if (parentElement.lastChild == targetElement) {
		parentElement.appendChild(newElement);
	}else{
		parentElement.insertBefore(newElement,targetElement.nextSibling);
	}
}

var animate = function(){
	requestAnimationFrame(animate);
};