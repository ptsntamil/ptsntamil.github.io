const FN = "${!@}",
LN = "${&*}",
FNF = "${!@1}",
LNF = "${&*1}";
let list = []; 
let formats = [
  FN + "@${domain}",
  FNF + LN +"@${domain}",
  LN + "@${domain}",
  FN + LN + "@${domain}",
  FN + "."+ LN +"@${domain}",
  FNF + "." + LN + "@${domain}",
  FN + LNF + "@${domain}",
  FN + "."+ LNF + "@${domain}",
  FNF + "."+ LNF + "@${domain}",
  FNF + LNF + "@${domain}",
  FN + "_" + LN + "@${domain}",
  FNF + "_"+ LN +"@${domain}"
];
let containsHeader;
$(document).ready(function() {

    // The event listener for the file upload
    document.getElementById('convertData').addEventListener('click', upload, false);

    // Method that checks that the browser supports the HTML5 File API
    function browserSupportFileUpload() {
        var isCompatible = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
        isCompatible = true;
        }
        return isCompatible;
    }

    // Method that reads and processes the selected file
    function upload(evt) {    
    if (!browserSupportFileUpload()) {
        alert('The File APIs are not fully supported in this browser!');
        } else {
            var data = null;
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(event) {
                var csvData = event.target.result;
                console.log(csvData);
                 data = $.csv.toArrays(csvData);
                if (data && data.length > 0) {
                  console.log('Imported -' + data.length + '- rows successfully!', data);
                  formatEmail(data, $("#containsHeader").is(":checked"));
                } else {
                    alert('No data to import!');
                } 
            };
            reader.onerror = function() {
                alert('Unable to read ' + file.fileName);
            };
        }
    }
});


function formatEmail(data, containsHeader) {
  $.each(data, function(index, values) {
    if((containsHeader && index > 0) || !containsHeader) {
      if(Array.isArray(values)) {
        data[index] = getEmailForObject({
          firstName: values[0],
          lastName: values[1],
          domain: values[2]
        })
      } else {
        data[index] = getEmailForObject(values);
      }  
    }
  });
  exportAsExcel("result.csv", data);
}

function getEmailForObject(values) {
	var format = getTargetEmailFormat(values.domain);
  if(values.firstName) {
    format = format.replace(FN, values.firstName).replace(FNF, values.firstName[0]);
  }
  if(values.lastName) {
    format = format.replace(LN, values.lastName).replace(LNF, values.lastName[0]);  
  }
  values.email = format;
  values.email = values.email + values.domain;
  console.log(values);
}


function getTargetEmailFormat(domain) {
let emailformat = "";
	$.each(list, function(index, email) {
  	if(email.domain === domain) {
    	emailformat = email.format;
    	return false;
    }
  });
  return emailformat;
}

/**
 * Converts array to string 
 * @param fileName
 * @param list
 */
function exportAsExcel(fileName, list) {
	var processRow = function(row) {
		var finalVal = '';
		for (var j = 0; j < row.length; j++) {
			var innerValue = (!row[j] || row[j] == '') ? '' : row[j].toString();
			if (row[j] instanceof Date) {
				innerValue = row[j].toLocaleString();
			}
			var result = innerValue.replace(/\,/g, '\,').replace(/"/g, '""').replace(/\'/g,"''");
			if (result.search(/("|,|\n)/g) >= 0) {
				result = '"' + result + '"';
			}
			if (j > 0) {
				finalVal += ',';
			}
			finalVal += result;
		}
		return finalVal + '\n';
    };
    var csvFile = '\uFEFF';
    for (var i = 0; i < list.length; i++) {
    	csvFile += processRow(list[i]);
    }
    exportData(fileName, 'text/csv;charset=utf-8', csvFile);
}

/**
 * Appends table data to excel sheet and downlods the file
 * @param fileName
 * @param mimeType
 * @param data
 */
function exportData(fileName, mimeType, data) {
    if (fileName.length <= 0 || mimeType.length <= 0 || data.length <=0) {
    	setMessage("error","Invalid parameters passed for export data");
    } else {
    	var blob = new Blob([data], { type:  mimeType });
    	if (navigator.msSaveBlob) { // IE 10+
    		navigator.msSaveBlob(blob, fileName);
    	} else {
    		var link = document.createElement('a');
    		if (link.download !== undefined) { // feature detection
    			// Browsers that support HTML5 download attribute
    			var url = URL.createObjectURL(blob);
    			link.setAttribute('href', url);
    			link.setAttribute('download', fileName);
    			link.style = 'visibility:hidden';
    			document.body.appendChild(link);
    			link.click();
    			document.body.removeChild(link);
    		}
    	}
    }
}



//var email = {"firstName": "Tamil","lastName": "arasan","email":"Tamil.arasan@ideas2it.com","domain":"@ideas2it.com"};
//var emails = [{"firstName": "vishal", lastName: "Ka", email: "vishal_Ka@ericsson.com", domain: "@ericsson.com"}, email];
//getEmailForObject({"firstName": "Mukilan","lastName": "Karthi","domain":"@ideas2it.com"});

function getEmailFormatsForAll(data) {
	$.each(data, function(index, emaildetails) {
  	data[index].format = getEmailFormatByEmail(emaildetails);
  });
  console.log(JSON.stringify(data));
}
//getEmailFormatsForAll(emails);

function getEmailFormatByEmail(email) {
  if(email) {
    if(email.email) {
      var mailXDomain = email.email.split(email.domain)[0];
      console.log("mail with out domain" + mailXDomain);
      var regEx = "";
      if(email.firstName) {
      new RegExp(email.firstName, "i")
       mailXDomain = mailXDomain.replace(new RegExp(email.firstName, "i"), FN);
       }
       console.log("After1 " + mailXDomain)
       if(email.lastName) {
        mailXDomain = mailXDomain.replace(new RegExp(email.lastName, "i"), LN) 
       }
      if(email.firstName) {
      mailXDomain= mailXDomain.replace(new RegExp(email.firstName[0], "i"), FNF)
      }
      if(email.lastName) {
      mailXDomain = mailXDomain.replace(new RegExp(email.lastName[0], "i"), LNF)
      }
      return mailXDomain;
    }
  }
}

//console.log("format======" +getEmailFormatByEmail(email));