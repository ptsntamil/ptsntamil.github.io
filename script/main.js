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
let headers = ["firstName", "lastName", "domain", "email"];
let containsHeader;
$(document).ready(function(event) {
  document.getElementById('convertData').addEventListener('click', getEmailFormatList, false);
  document.getElementById('csvFile').addEventListener('change', appendFileName, false);
});

/**
 *
 *
 */
function appendFileName(event) {
  if(this.files[0]) {
    $("#selectedFileName").text(this.files[0].name);
  } else {
    $("#selectedFileName").text("No files selected");
  }
}

/**
 *
 */
function getEmailFormatList() {
  if(list.length == 0) {
    $.ajax({
      url: "/data/emailformats.json",
      type: "GET",
      success: function(result) {
        list = result;
        upload();
      }
    });
  } else {
    upload();
  }
}

/**
 *
 */
function upload(evt) {    
  if(!browserSupportFileUpload()) {
    alert('The File APIs are not fully supported in this browser!');
  } else {
    var data = null;
    var file = document.getElementById('csvFile').files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    let separator = $("input:radio[name ='separatedBy']:checked").val();
    reader.onload = function(event) {
      data = $.csv.toArrays(event.target.result, {
        separator: separator ? separator : "," 
      });
      if (data && data.length > 0) {
        formatEmail(data, $("#containsHeader").is(":checked"));
      } else {
        console.log("Error in importing file");
      } 
    };
    reader.onerror = function() {
      console.log('Unable to read ' + file.fileName);
    };
  }
}

/**
 *
 */
function browserSupportFileUpload() {
  var isCompatible = false;
  if(window.File && window.FileReader && window.FileList && window.Blob) {
   isCompatible = true;
  }
  return isCompatible;
}

/**
 *
 */
function formatEmail(data, containsHeader) {
  $.each(data, function(index, values) {
    if((containsHeader && index > 0) || !containsHeader) {
      if(Array.isArray(values)) {
        data[index] = getEmailForObject({
          firstName: headers.indexOf("firstName") ? values[headers.indexOf("firstName")] : values[0],
          lastName: headers.indexOf("lastName") ? values[headers.indexOf("lastName")] : values[1],
          domain: headers.indexOf("domain") ? values[headers.indexOf("domain")] : values[2]
        });
      } else {
        data[index] = getEmailForObject(values);
      }  
    } else {
      $.each(data[index], function(i, header) {
        headers[i] = formElementId(header);  
      });
    }
  });
  exportAsExcel(($("#fileName").val() || "result") + ".csv", data);
}

/**
 *
 */
function getEmailForObject(values) {
  var format = getTargetEmailFormat(values.domain);
  let firstName, lastName;
  if(values.firstName) {
    firstName = values.firstName.toLowerCase();
    format = format.replace(FN, firstName).replace(FNF, firstName[0]);
  }
  if(values.lastName) {
    lastName = values.lastName.toLowerCase();
    format = format.replace(LN, lastName).replace(LNF, lastName[0]);  
  }
  if(!values.firstName) {

    format = format.replace(FN, "{first}").replace(FNF, "{firstL}");
  }
  if(!values.lastName) {
    format = format.replace(LN, "{last}").replace(LNF, "{lastL}");  
  }
  values.email = format;
  values.email = values.email + values.domain;
  return values;
}

/**
 *
 */
function getTargetEmailFormat(domain) {
let emailformat = "";
  $.each(list, function(index, email) {
    if(email.domain.toLowerCase() === domain.toLowerCase()) {
      emailformat = email.format;
      return false;
    }
  });
  return emailformat;
}

/**
 *
 */
function processRow(row) {
  var finalVal = '';
  for (var j = 0; j < headers.length; j++) {
    let innerValue = row[headers[j]];
    innerValue = (!innerValue || innerValue == '') ? '' : innerValue.toString();
    if (innerValue instanceof Date) {
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
}
    
/**
 * Converts array to string 
 * @param fileName
 * @param list
 */
function exportAsExcel(fileName, list) {
  var csvFile = '\uFEFF';
  if(headers.indexOf("email") == -1) {
    headers.push("email");
  }
  csvFile += headers.join(",") + "\n";
  for (var i = 1; i < list.length; i++) {
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

/**
 *
 *
 */
function getEmailFormatsForAll(data) {
  $.each(data, function(index, emaildetails) {
    data[index].format = getEmailFormatByEmail(emaildetails);
  });
  console.log(JSON.stringify(data));
}

function getEmailFormatByEmail(email) {
  if(email) {
    if(email.email) {
      var mailXDomain = email.email.split(email.domain.toLowerCase())[0];
      if(email.firstName) {
        mailXDomain = mailXDomain.replace(new RegExp(email.firstName, "i"), FN);
      }
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

function formElementId(groupName) {
  var id = "";
  if(groupName)
  groupName = groupName.split(" ");
  if(groupName.length == 1) {
    return groupName[0];
  }
  $.each(groupName, function(index,value) {
    if(index == 0) {
      id = value.toLowerCase();
    } else {
      id += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
    }
  });
  return id;
}